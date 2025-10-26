import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight text-neutral-900">
              Hello, World
              <span className="text-red-500">.</span>
            </h1>
            <p className="mt-4 text-neutral-700 text-lg">
              A quick, minimalistic single-page app with an interactive, modern hero.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#hello"
                className="inline-flex items-center rounded-full bg-neutral-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-neutral-800 transition-colors"
              >
                See the message
              </a>
              <a
                href="#get-started"
                className="inline-flex items-center rounded-full border border-neutral-300 bg-white text-neutral-900 px-5 py-2.5 text-sm font-medium hover:bg-neutral-50 transition-colors"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
