import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  dark = false,
  className,
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("reveal flex max-w-2xl flex-col gap-3", className)}>
      <span className={cn("text-xs font-semibold uppercase tracking-[0.12em]", dark ? "text-violet-300" : "text-primary")}>
        {eyebrow}
      </span>
      <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-[2.75rem]">{title}</h2>
    </div>
  );
}
