"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { dictionaries, type Dictionary, type Lang } from "./translations";

const STORAGE_KEY = "language";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dictionary };

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>(() => {
        if (typeof window !== "undefined") {
            const saved = window.localStorage.getItem(STORAGE_KEY);
            if (saved === "en" || saved === "pt-BR") return saved as Lang;
        }
        return "en";
    });
    useEffect(() => {
        document.documentElement.lang = lang;
        const d = dictionaries[lang];
        document.title = d.meta.title;
        document
            .querySelector('meta[name="description"]')
            ?.setAttribute("content", d.meta.description);
    }, [lang]);

    const setLang = useCallback((l: Lang) => {
        setLangState(l);
        try {
            window.localStorage.setItem(STORAGE_KEY, l);
        } catch {
        }
    }, []);

    return (
        <LanguageContext.Provider
            value={{ lang, setLang, t: dictionaries[lang] as unknown as Dictionary }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
    return ctx;
}

export function useT() {
    return useLanguage().t;
}