"use client";
import { Reveal, SectionHeading } from "./primitives";
import { useT } from "@/i18n/LanguageProvider";

export function Process() {
    const t = useT().process;
    return (
        <section id="process" className="surface-dark relative overflow-hidden py-24 md:py-32">
            <div className="pointer-events-none absolute inset-0 grid-bg-fine opacity-60" />
            <div className="relative mx-auto max-w-[88rem] px-6 md:px-10">
                <SectionHeading index={t.index} title={t.title} kicker={t.kicker} />

                <ol className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
                    {t.steps.map((s, i) => (
                        <Reveal
                            as="li"
                            key={s.n}
                            delay={i * 70}
                            className="group relative bg-[var(--background)] p-8 transition-colors duration-300 hover:bg-card"
                        >
                            <span className="absolute left-0 top-0 h-full w-px bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="flex items-baseline justify-between">
                                <span className="font-mono text-sm text-primary">{s.n}</span>
                                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                                    {t.stepLabel}
                                </span>
                            </div>
                            <h3 className="mt-6 font-display text-2xl tracking-tight">{s.t}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                        </Reveal>
                    ))}
                </ol>
            </div>
        </section>
    );
}
