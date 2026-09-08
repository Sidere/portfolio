"use client";
import { Reveal, SectionHeading } from "./primitives";
import { useT } from "@/i18n/LanguageProvider";

export function Stack() {
    const t = useT().stack;
    return (
        <section id="stack" className="surface-dark relative overflow-hidden py-24 md:py-32">
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
            <div className="relative mx-auto max-w-[88rem] px-6 md:px-10">
                <SectionHeading index={t.index} title={t.title} kicker={t.kicker} />

                <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
                    {t.groups.map((g, i) => (
                        <Reveal key={g.title} delay={i * 70} className="bg-[var(--background)] p-8">
                            <div className="flex items-center justify-between">
                                <span className="label">{g.title}</span>
                                <span className="font-mono text-[10px] text-primary">
                                    {String(g.items.length).padStart(2, "0")}
                                </span>
                            </div>
                            <ul className="mt-5 space-y-2.5">
                                {g.items.map((it) => (
                                    <li
                                        key={it}
                                        className="group flex items-center gap-3 font-display text-lg tracking-tight"
                                    >
                                        <span className="h-px w-4 bg-border transition-all duration-300 group-hover:w-7 group-hover:bg-primary" />
                                        <span className="transition-colors group-hover:text-primary">{it}</span>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    ))}

                    <Reveal delay={350} className="bg-[var(--background)] p-8">
                        <span className="label">{t.mindsetLabel}</span>
                        <h3 className="mt-5 font-display text-xl leading-snug tracking-tight">
                            {t.mindsetTitle} <span className="text-primary">{t.mindsetTitleAccent}</span>
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.mindsetBody}</p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
