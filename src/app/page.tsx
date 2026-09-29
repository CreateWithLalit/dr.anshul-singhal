export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-ink p-8 max-w-4xl mx-auto flex flex-col justify-center">
      <header className="mb-8 border-b border-hairline pb-4">
        <h1 className="font-serif text-3xl sm:text-4xl text-ink font-normal mb-1">
          Dr. Anshul Singhal
        </h1>
        <p className="text-muted text-sm uppercase tracking-wider font-sans">
          Oral &amp; Maxillofacial Surgeon • Noida / Delhi NCR
        </p>
      </header>

      <div className="bg-surface border border-hairline rounded-card p-6 shadow-card space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-accent animate-pulse" />
          <h2 className="font-serif text-xl text-ink">Prototype Environment Active</h2>
        </div>
        <p className="text-muted text-sm leading-relaxed">
          Design tokens, strict typography, demo-mode flags, and password security gate initialized successfully.
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="credential-placeholder">[Degree, university, year]</span>
          <span className="credential-placeholder">[Registration no. to be confirmed]</span>
        </div>
      </div>
    </div>
  );
}
