"use client";
import { Reveal, SectionHeading, Tag } from "./primitives";
import { BrowserMockup, PhoneMockup } from "./mockups";
import { useT } from "@/i18n/LanguageProvider";

function CaseBlock({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="border-t border-border pt-5">
            <p className="label">{label}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</p>
        </div>
    );
}

export function Projects() {
    const t = useT().projects;
    const L = t.labels;

    return (
        <section id="projects" className="border-t border-border py-24 md:py-32">
            <div className="mx-auto max-w-[88rem] px-6 md:px-10">
                <SectionHeading index={t.index} title={t.title} kicker={t.kicker} />

                {/* PROJETO 01 */}
                <article className="mt-20 grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
                    <Reveal className="order-2 lg:order-1">
                        <div className="flex items-baseline gap-4">
                            <span className="font-mono text-sm text-primary">01</span>
                            <span className="label">{t.one.kicker}</span>
                        </div>
                        <h3 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">{t.one.title}</h3>
                        <p className="mt-5 text-base leading-relaxed">{t.one.lead}</p>

                        <div className="mt-8 space-y-5">
                            <CaseBlock label={L.context}>{t.one.context}</CaseBlock>
                            <CaseBlock label={L.challenge}>{t.one.challenge}</CaseBlock>
                            <CaseBlock label={L.solution}>{t.one.solution}</CaseBlock>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {t.one.tags.map((tag) => (
                                <Tag key={tag}>{tag}</Tag>
                            ))}
                        </div>

                        <a
                            href="#contact"
                            className="group mt-8 inline-flex items-center gap-3 border border-foreground px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                        >
                            {t.cta}
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </a>
                    </Reveal>

                    <Reveal delay={120} className="order-1 lg:order-2">
                        <div className="surface-dark relative overflow-hidden border border-border p-10">
                            <div className="pointer-events-none absolute inset-0 grid-bg-fine opacity-60" />
                            <div className="relative">
                                <PhoneMockup />
                            </div>
                        </div>

                        <div className="mt-6 border border-border bg-card p-7">
                            <div className="flex items-center gap-3">
                                <span className="h-1.5 w-1.5 bg-primary" />
                                <span className="label">{L.beyond}</span>
                            </div>
                            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{t.one.beyond1}</p>
                            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                                {t.one.beyond2Prefix}{" "}
                                <span className="text-foreground">{t.one.beyond2Strong}</span>
                            </p>
                        </div>
                    </Reveal>
                </article>

                {/* PROJETO 02 */}
                <article className="mt-28 grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
                    <Reveal>
                        <div className="border border-border bg-card p-6 md:p-8">
                            <BrowserMockup />
                        </div>
                    </Reveal>

                    <Reveal delay={120}>
                        <div className="flex items-baseline gap-4">
                            <span className="font-mono text-sm text-primary">02</span>
                            <span className="label">{t.two.kicker}</span>
                        </div>
                        <h3 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">{t.two.title}</h3>
                        <p className="mt-5 text-base leading-relaxed">{t.two.lead}</p>

                        <div className="mt-8 space-y-5">
                            <CaseBlock label={L.context}>{t.two.context}</CaseBlock>
                            <CaseBlock label={L.challenge}>{t.two.challenge}</CaseBlock>
                            <CaseBlock label={L.solution}>{t.two.solution}</CaseBlock>
                            <CaseBlock label={L.learned}>{t.two.learned}</CaseBlock>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {t.two.tags.map((tag) => (
                                <Tag key={tag}>{tag}</Tag>
                            ))}
                        </div>

                        <a
                            href="#contact"
                            className="group mt-8 inline-flex items-center gap-3 border border-foreground px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                        >
                            {t.cta}
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </a>
                    </Reveal>
                </article>
            </div>
        </section>
    );
}
