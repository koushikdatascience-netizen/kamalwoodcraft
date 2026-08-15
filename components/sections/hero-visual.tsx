import { BarChart3, Bot, Cloud, Code2, ShieldCheck, Workflow } from "lucide-react";

const labels = [
  ["Artificial Intelligence", Bot],
  ["Web and Mobile Development", Code2],
  ["Business Automation", Workflow],
  ["Cloud Solutions", Cloud],
  ["Data Analytics", BarChart3],
  ["Secure Software", ShieldCheck]
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto hidden min-h-[440px] w-full max-w-2xl items-center justify-center lg:flex">
      <div className="chip-visual float-slow">
        <div className="absolute inset-0 grid place-items-center">
          <svg viewBox="0 0 48 48" className="h-24 w-24 -rotate-45" aria-label="Temporary Kamal Technologies K mark">
            <path d="M8 6h10v36H8z" fill="#1677ff" />
            <path d="M20 24 39 6h-12L12 24l15 18h13z" fill="#fff" />
            <path d="m24 24 16 18H28L14 24 28 6h12z" fill="#79b3ff" opacity=".65" />
          </svg>
        </div>
      </div>
      {labels.map(([label, Icon], index) => {
        const left = index < 3;
        return (
          <div key={label as string} className={`absolute ${left ? "left-0" : "right-0"} ${index % 3 === 0 ? "top-14" : index % 3 === 1 ? "top-48" : "bottom-16"} flex items-center gap-3 text-white`}>
            {left ? <IconBox Icon={Icon as typeof Bot} label={label as string} /> : null}
            <span className="connector w-24" />
            {!left ? <IconBox Icon={Icon as typeof Bot} label={label as string} /> : null}
          </div>
        );
      })}
    </div>
  );
}

function IconBox({ Icon, label }: { Icon: typeof Bot; label: string }) {
  return (
    <div className="flex w-44 items-center gap-3">
      <span className="grid size-12 place-items-center rounded-lg border border-blue-300/30 bg-white/5 text-blue-300">
        <Icon className="size-6" />
      </span>
      <span className="text-sm font-bold leading-5">{label}</span>
    </div>
  );
}
