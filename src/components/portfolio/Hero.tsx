"use client";
import { Reveal } from "./primitives";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useT } from "@/i18n/LanguageProvider";

function SystemPanel() {
    const p = useT().hero.panel;
    const pcts = [100, 82, 64, 41];
    return (
        <div className="relative">
            {/* main panel */}
            <div className="border border-border bg-card shadow-[0_24px_60px_-40px_rgba(0,0,0,0.55)]">
                <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        <span className="font-mono text-[11px] text-muted-foreground">{p.file}</span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        {p.live}
                    </span>
                </div>

                <div className="grid grid-cols-2 divide-x divide-border border-b border-border">
                    {p.cells.map((i) => (
                        <div key={i.k} className="px-4 py-3">
                            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                                {i.k}
                            </p>
                            <p className="mt-1 font-display text-lg">{i.v}</p>
                        </div>
                    ))}
                </div>

                {/* pipeline */}
                <div className="space-y-3 px-4 py-5">
                    {p.rows.map((label, i) => (
                        <div key={label} className="flex items-center gap-3">
                            <span className="w-28 shrink-0 font-mono text-[11px] text-muted-foreground">
                                {label}
                            </span>
                            <div className="h-[3px] flex-1 bg-muted">
                                <div
                                    className={i === 0 ? "h-full bg-primary" : "h-full bg-foreground/35"}
                                    style={{ width: `${pcts[i]}%` }}
                                />
                            </div>
                            <span className="w-9 text-right font-mono text-[10px] text-muted-foreground">
                                {pcts[i]}%
                            </span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-3 divide-x divide-border rule-top font-mono text-[11px]">
                    {["REST", "MOBILE", "WEB"].map((t) => (
                        <div key={t} className="px-4 py-3 text-center text-muted-foreground">
                            {t}
                        </div>
                    ))}
                </div>
            </div>

            {/* floating small card */}
            <div className="absolute -bottom-8 -left-6 hidden w-56 border border-border bg-card p-4 shadow-[0_20px_50px_-35px_rgba(0,0,0,0.6)] sm:block">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {p.decisionLabel}
                </p>
                <p className="mt-2 text-sm leading-relaxed">{p.decision}</p>
            </div>

            <div className="absolute -right-4 -top-6 hidden border border-border bg-primary px-3 py-2 font-mono text-[11px] text-primary-foreground lg:block">
                v.2026
            </div>
        </div>
    );
}

export function Hero() {
    const t = useT().hero;
    return (
        <section id="top" className="surface-dark relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--background)]" />

            <div className="relative mx-auto grid max-w-[88rem] items-center gap-16 px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                    <Reveal className="relative z-40">
                        <LanguageSwitcher className="mb-8" />
                    </Reveal>

                    <Reveal>
                        <div className="flex items-center gap-3">
                            <span className="h-px w-10 bg-primary" />
                            <span className="label">{t.eyebrow}</span>
                        </div>
                    </Reveal>

                    <Reveal delay={80}>
                        <h1 className="mt-8 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.03em]">
                            {t.title1}
                            <br />
                            {t.title2}
                            <br />
                            {t.title3prefix}
                            <span className="text-primary">{t.title3accent}</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={160}>
                        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                            {t.lead}
                        </p>
                    </Reveal>

                    <Reveal delay={240}>
                        <div className="mt-10 flex flex-wrap items-center gap-3">
                            <a
                                href="#projects"
                                className="group inline-flex items-center gap-3 bg-primary px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                            >
                                {t.ctaPrimary}
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-3 border border-border px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
                            >
                                {t.ctaSecondary}
                            </a>
                        </div>
                    </Reveal>

                    <Reveal delay={320}>
                        <dl className="mt-16 grid max-w-lg grid-cols-3 gap-px border border-border bg-border">
                            {t.stats.map(([k, v]) => (
                                <div key={k} className="bg-[var(--background)] px-4 py-4">
                                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                                        {k}
                                    </dt>
                                    <dd className="mt-1.5 text-sm leading-snug">{v}</dd>
                                </div>
                            ))}
                        </dl>
                    </Reveal>
                </div>

                <Reveal delay={200} className="lg:pl-6">
                    <SystemPanel />
                </Reveal>
            </div>
        </section>
    );
}
