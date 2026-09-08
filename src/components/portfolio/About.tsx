"use client";
import { Reveal, SectionHeading } from "./primitives";
import { useT } from "@/i18n/LanguageProvider";

export function About() {
    const t = useT().about;
    return (
        <section id="about" className="relative border-t border-border py-24 md:py-32">
            <div className="mx-auto max-w-[88rem] px-6 md:px-10">
                <SectionHeading index={t.index} title={t.title} kicker={t.kicker} />

                <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
                    {t.chapters.map((c, i) => (
                        <Reveal key={c.step} delay={i * 90} className="bg-background p-8">
                            <div className="flex items-center gap-3">
                                <span className="h-1.5 w-1.5 bg-primary" />
                                <span className="label">{c.step}</span>
                            </div>
                            <h3 className="mt-6 font-display text-2xl leading-snug tracking-tight">{c.title}</h3>
                            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={120}>
                    <p className="mt-14 max-w-3xl font-display text-2xl leading-snug tracking-tight md:text-3xl">
                        {t.highlightPrefix} <span className="text-primary">{t.highlightAccent}</span>{" "}
                        {t.highlightSuffix}
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
