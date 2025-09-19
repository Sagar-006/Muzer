import { Tilt } from "@/components/motion-primitives/tilt";

export function TiltDemo() {
  return (
    <Tilt rotationFactor={8} isRevese>
      <div
        style={{
          borderRadius: "12px",
        }}
        className="flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
      >
        <img
          src="/img.jpeg"
          alt="Ghost in the shell - Kôkaku kidôtai"
          className="h-48 w-full object-cover"
        />
        <div className="p-2">
          <h1 className="font-mono leading-snug text-zinc-950 dark:text-zinc-50">
            Ghost in the Shell
          </h1>
          <p className="text-zinc-700 dark:text-zinc-400">Kôkaku kidôtai</p>
        </div>
      </div>
    </Tilt>
  );
}
