export default function HelloMessage() {
  return (
    <section id="hello" className="scroll-mt-24 py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">
          The simplest Hello World
        </h2>
        <p className="mt-4 text-neutral-700">
          Hello World. That’s it. No clutter, no distractions — just a clean starting point to
          build on. Feel free to tweak the copy, colors, or layout to make it yours.
        </p>
        <div id="get-started" className="mt-10 inline-flex rounded-xl border border-neutral-200 p-6 text-left bg-white shadow-sm">
          <div>
            <p className="text-sm uppercase tracking-widest text-neutral-500">Quickstart</p>
            <ol className="mt-3 list-decimal list-inside text-neutral-800 space-y-1 text-sm">
              <li>Edit the text in this section.</li>
              <li>Adjust the hero heading and buttons.</li>
              <li>Deploy — you’re done.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
