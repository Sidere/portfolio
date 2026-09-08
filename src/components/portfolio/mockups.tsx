"use client";
import { useT } from "@/i18n/LanguageProvider";

export function PhoneMockup() {
    return (
        <div className="relative mx-auto w-[260px] sm:w-[300px]">
            <div className="rounded-[2rem] border border-border bg-card p-2.5 shadow-[0_30px_70px_-45px_rgba(0,0,0,0.7)]">
                <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-background">
                    {/* status bar */}
                    <div className="flex items-center justify-between px-4 pt-3 font-mono text-[9px] text-muted-foreground">
                        <span>9:41</span>
                        <span className="h-1.5 w-16 rounded-full bg-muted" />
                        <span>100%</span>
                    </div>

                    {/* map area */}
                    <div className="relative mt-3 h-44 grid-bg-fine border-y border-border">
                        <svg viewBox="0 0 300 176" className="absolute inset-0 h-full w-full">
                            <path
                                d="M-10 120 C60 100 90 60 160 70 C220 78 250 40 320 55"
                                fill="none"
                                stroke="currentColor"
                                className="text-foreground/20"
                                strokeWidth="10"
                            />
                            <path
                                d="M-10 120 C60 100 90 60 160 70 C220 78 250 40 320 55"
                                fill="none"
                                stroke="var(--primary)"
                                strokeWidth="2"
                                strokeDasharray="6 6"
                            />
                            <circle cx="160" cy="70" r="5" fill="var(--primary)" />
                            <circle cx="60" cy="112" r="4" className="fill-foreground/40" />
                            <circle cx="248" cy="52" r="4" className="fill-foreground/40" />
                        </svg>
                        <div className="absolute bottom-2 left-2 border border-border bg-card px-2 py-1 font-mono text-[9px]">
                            {useT().mockups.nearby}
                        </div>
                    </div>

                    {/* list */}
                    <div className="divide-y divide-border">
                        {[
                            ["Setor de artesanato", "Corredor B"],
                            ["Frutas e verduras", "Corredor D"],
                            ["Comidas típicas", "Praça central"],
                        ].map(([a, b]) => (
                            <div key={a} className="flex items-center justify-between px-4 py-3">
                                <div>
                                    <p className="text-[11px] leading-tight">{a}</p>
                                    <p className="font-mono text-[9px] text-muted-foreground">{b}</p>
                                </div>
                                <span className="font-mono text-[9px] text-primary">ver</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-around border-t border-border px-4 py-3 font-mono text-[9px] text-muted-foreground">
                        <span className="text-primary">Mapa</span>
                        <span>Buscar</span>
                        <span>Salvos</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function BrowserMockup() {
    return (
        <div className="border border-border bg-card shadow-[0_30px_70px_-50px_rgba(0,0,0,0.7)]">
            <div className="flex items-center gap-3 border-b border-border px-4 py-2.5">
                <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
                    <span className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <div className="flex-1 border border-border px-3 py-1 font-mono text-[10px] text-muted-foreground">
                    nsinformatica.com.br
                </div>
            </div>

            <div className="bg-background">
                <div className="flex items-center justify-between border-b border-border px-6 py-3 font-mono text-[10px] text-muted-foreground">
                    <span className="text-foreground">assistência técnica</span>
                    <div className="hidden gap-4 sm:flex">
                        <span>serviços</span>
                        <span>status</span>
                        <span className="text-primary">contato</span>
                    </div>
                </div>

                <div className="grid gap-6 px-6 py-8 md:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <p className="font-display text-xl leading-tight tracking-tight md:text-2xl">
                            Seu equipamento em boas mãos — e você sabendo de tudo.
                        </p>
                        <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
                            Acompanhe o andamento do seu atendimento sem precisar ligar.
                        </p>
                        <div className="mt-5 flex gap-2">
                            <span className="bg-primary px-3 py-1.5 font-mono text-[10px] text-primary-foreground">
                                consultar ordem
                            </span>
                            <span className="border border-border px-3 py-1.5 font-mono text-[10px]">
                                serviços
                            </span>
                        </div>
                    </div>

                    <div className="border border-border">
                        <div className="border-b border-border px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                            status · api
                        </div>
                        {[
                            ["#4821", "em análise", "40%"],
                            ["#4817", "em reparo", "72%"],
                            ["#4802", "pronto", "100%"],
                        ].map(([id, st, w]) => (
                            <div key={id} className="border-b border-border px-3 py-2.5 last:border-b-0">
                                <div className="flex items-center justify-between font-mono text-[10px]">
                                    <span>{id}</span>
                                    <span className="text-muted-foreground">{st}</span>
                                </div>
                                <div className="mt-2 h-[3px] bg-muted">
                                    <div className="h-full bg-primary" style={{ width: w }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
