"use client";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LANGUAGES, type Lang } from "@/i18n/translations";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
    const { lang, setLang, t } = useLanguage();
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0]!;

    useEffect(() => {
        if (!open) return;
        const onDown = (e: MouseEvent) => {
            if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
        };
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("mousedown", onDown);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("mousedown", onDown);
            document.removeEventListener("keydown", onKey);
        };
    }, [open]);

    const choose = (code: Lang) => {
        setLang(code);
        setOpen(false);
    };

    return (
        <div ref={rootRef} className={`relative ${className}`}>
            <button
                type="button"
                aria-label={t.switcher.aria}
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center gap-2 border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
                <span className="h-1.5 w-1.5 bg-primary" />
                {current.short}
                <span
                    aria-hidden
                    className={`text-[9px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                >
                    ▾
                </span>
            </button>

            <ul
                role="listbox"
                aria-label={t.switcher.aria}
                className={`absolute left-0 top-[calc(100%+6px)] z-50 w-56 border border-border bg-card shadow-[0_20px_50px_-35px_rgba(0,0,0,0.6)] transition-all duration-200 ${open
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0"
                    }`}
            >
                {LANGUAGES.map((l) => {
                    const active = l.code === lang;
                    return (
                        <li key={l.code}>
                            <button
                                type="button"
                                role="option"
                                aria-selected={active}
                                tabIndex={open ? 0 : -1}
                                onClick={() => choose(l.code)}
                                className={`flex w-full items-center gap-2.5 px-3 py-2.5 text-left font-mono text-[11px] uppercase tracking-[0.16em] transition-colors hover:bg-[var(--muted)] hover:text-primary focus-visible:bg-[var(--muted)] focus-visible:outline-none ${active ? "text-foreground" : "text-muted-foreground"
                                    }`}
                            >
                                <span
                                    aria-hidden
                                    className={`h-1.5 w-1.5 ${active ? "bg-primary" : "bg-transparent"}`}
                                />
                                <span>{l.short}</span>
                                <span className="ml-auto text-[10px] normal-case tracking-normal opacity-70">
                                    {l.label}
                                </span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
