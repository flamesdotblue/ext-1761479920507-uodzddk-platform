export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">© {new Date().getFullYear()} HelloMinimal. All rights reserved.</p>
        <div className="text-sm text-neutral-600">
          Built with React, Vite, Tailwind — and a clean, interactive hero.
        </div>
      </div>
    </footer>
  );
}
