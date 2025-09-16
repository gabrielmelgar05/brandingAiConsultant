export default function Glow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute left-1/2 top-[-120px] h-[480px] w-[880px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background:"radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,.25), rgba(255,255,255,.08) 60%, transparent 65%)" }}
      />
      <div className="absolute left-[10%] top-[20%] h-[220px] w-[220px] rounded-full opacity-20 blur-3xl animate-float"
           style={{ background:"radial-gradient(closest-side, rgba(255,199,0,.35), transparent)" }}/>
      <div className="absolute right-[6%] top-[35%] h-[260px] w-[260px] rounded-full opacity-20 blur-3xl animate-float"
           style={{ background:"radial-gradient(closest-side, rgba(255,199,0,.28), transparent)" }}/>
    </div>
  );
}
