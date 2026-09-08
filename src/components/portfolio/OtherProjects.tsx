"use client";
import { Reveal, SectionHeading } from "./primitives";
import { useT } from "@/i18n/LanguageProvider";

export function OtherProjects() {
    const t = useT().other;
    return (
        <section className="border-t border-border py-24 md:py-32">
            <div className="mx-auto max-w-[88rem] px-6 md:px-10">
                <SectionHeading index={t.index} title={t.title} kicker={t.kicker} />

                <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
                    {t.slots.map((s, i) => (
                        <Reveal key={s.n} delay={i * 90} className="group bg-background p-10">
                            <div className="flex items-baseline justify-between">
                                <span className="font-mono text-sm text-primary">{s.n}</span>
                                <span className="label">{t.status}</span>
                            </div>
                            <h3 className="mt-6 font-display text-3xl tracking-tight">{s.title}</h3>
                            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                            <div className="mt-8 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                                {t.keys.map((k, idx) => (
                                    <span key={k} className="flex items-center gap-2">
                                        {idx > 0 && <span className="text-primary">/</span>}
                                        {k}
                                    </span>
                                ))}
                            </div>
                            <a
                                href="#contact"
                                className="group mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary"
                            >
                                {t.cta}
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
