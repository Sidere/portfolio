"use client";
import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
    children,
    className,
    delay = 0,
    as: Tag = "div",
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
    as?: "div" | "section" | "li" | "article";
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        setVisible(true);
                        io.disconnect();
                    }
                });
            },
            { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const Comp: ElementType = Tag;
    return (
        <Comp
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={ref as any}
            data-visible={visible}
            style={{ transitionDelay: `${delay}ms` }}
            className={cn("reveal", className)}
        >
            {children}
        </Comp>
    );
}

export function SectionHeading({
    index,
    title,
    kicker,
}: {
    index: string;
    title: string;
    kicker?: string;
}) {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
                <span className="label">{index}</span>
                <h2 className="mt-3 font-display text-4xl font-medium tracking-tight md:text-5xl">
                    {title}
                </h2>
            </div>
            {kicker ? (
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{kicker}</p>
            ) : null}
        </div>
    );
}

export function Tag({ children }: { children: ReactNode }) {
    return (
        <span className="border border-border px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted-foreground transition-colors hover:border-primary hover:text-primary">
            {children}
        </span>
    );
}