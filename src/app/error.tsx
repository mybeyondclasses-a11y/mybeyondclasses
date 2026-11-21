"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 text-center">
      <div className="premium-card premium-card-cyan w-full p-8">
        <h2 className="font-heading text-2xl font-bold text-slate-900">Something went wrong</h2>
        <p className="mt-2 text-sm text-slate-600">{error.message || "An unexpected error occurred."}</p>
        <button
          onClick={reset}
          className="premium-button-primary mt-5"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
