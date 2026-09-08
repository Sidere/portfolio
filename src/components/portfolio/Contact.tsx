"use client";
import { Reveal } from "./primitives";
import { useT } from "@/i18n/LanguageProvider";

const channelMeta = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/poliana-sidere/" },
    { label: "GitHub", href: "https://github.com/Sidere" },
    { label: "WhatsApp", href: "https://wa.me/5581998470017" },
    { label: "Email", href: "mailto:sideresid@gmail.com" },
];

export function Contact() {
    const t = useT().contact;
    return (
        <section id="contact" className="border-t border-border py-24 md:py-32">
            <div className="mx-auto max-w-[88rem] px-6 md:px-10">
                <Reveal>
                    <span className="label">{t.index}</span>
                    <h2 className="mt-6 max-w-4xl font-display text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[1] tracking-[-0.03em]">
                        {t.title1}
                        <br />
                        {t.title2prefix}
                        <span className="text-primary">{t.title2accent}</span>
                        {t.title2suffix}
                    </h2>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{t.lead}</p>
                </Reveal>

                <Reveal delay={120}>
                    <div className="mt-10 flex flex-wrap items-center gap-3">
                        <a
                            href="mailto:sideresid@gmail.com"
                            className="group inline-flex items-center gap-4 bg-primary px-8 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                        >
                            {t.ctaPrimary}
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </a>
                        <a
                            href="https://wa.me/5581998470017"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-3 border border-border px-8 py-4 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
                        >
                            {t.ctaSecondary}
                        </a>
                    </div>
                </Reveal>

                <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                    {channelMeta.map((c, i) => (
                        <Reveal key={c.label} delay={i * 70} className="bg-background">
                            <a
                                href={c.href}
                                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                                rel="noreferrer"
                                className="group flex h-full flex-col justify-between p-7 transition-colors hover:bg-card"
                            >
                                <span className="label">{c.label}</span>
                                <span className="mt-8 flex items-center justify-between font-display text-lg tracking-tight">
                                    {t.channels[i]}
                                    <span className="text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-1">
                                        ↗
                                    </span>
                                </span>
                            </a>
                        </Reveal>
                    ))}
                </div>

                <footer className="mt-20 flex flex-col gap-4 border-t border-border pt-8 font-mono text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                    <span>
                        © {new Date().getFullYear()} Poliana Sidere. {t.rights}
                    </span>
                    <span>{t.role}</span>
                </footer>
            </div>
        </section>
    );
}
