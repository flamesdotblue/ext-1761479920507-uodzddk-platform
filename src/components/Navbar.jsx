import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-white/60 border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-neutral-900">
          <Rocket className="h-5 w-5 text-red-500" />
          <span className="tracking-tight">HelloMinimal</span>
        </a>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#hello" className="text-neutral-700 hover:text-neutral-900">Hello</a>
          <a
            href="#get-started"
            className="inline-flex items-center rounded-full bg-neutral-900 text-white px-3 py-1.5 text-sm font-medium hover:bg-neutral-800 transition-colors"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
