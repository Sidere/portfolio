"use client";
import { useEffect, useState } from "react";
import { useT } from "@/i18n/LanguageProvider";

export function Nav() {
    const t = useT().nav;
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState<string>("");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(`#${e.target.id}`);
                });
            },
            { rootMargin: "-45% 0px -50% 0px" },
        );
        t.links.forEach((l) => {
            const el = document.querySelector(l.href);
            if (el) io.observe(el);
        });

        return () => {
            window.removeEventListener("scroll", onScroll);
            io.disconnect();
        };
    }, [t]);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled
                ? "border-b border-border bg-background/85 backdrop-blur-md"
                : "surface-dark border-b border-transparent !bg-transparent"
                }`}
        >
            <nav className="mx-auto flex h-16 max-w-[88rem] items-center justify-between px-6 md:px-10">
                <a href="#top" className="group flex items-center gap-2.5">
                    <span className="block h-2.5 w-2.5 bg-primary transition-transform duration-300 group-hover:rotate-45" />
                    <span className="font-display text-sm font-medium tracking-tight">Sidere</span>
                    <span className="hidden font-mono text-[11px] text-muted-foreground sm:block">
                        {t.role}
                    </span>
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    {t.links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="relative font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {active === l.href && (
                                <span className="absolute -left-3 top-1/2 h-1 w-1 -translate-y-1/2 bg-primary" />
                            )}
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="border border-foreground px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    >
                        {t.cta}
                    </a>
                </div>

                <a
                    href="#contact"
                    className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary md:hidden"
                >
                    {t.contact}
                </a>
            </nav>
        </header>
    );
}
