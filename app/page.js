import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">

      <header className="flex justify-between items-center py-4 px-6 bg-gray-800 shadow-md">
        <h1 className="text-xl font-bold text-white">Jeffrey Jones S</h1>

     <a id="cta" href="/portfolio.png"   target="_blank" className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 text-white font-semibold rounded hover:scale-105 transition-transform duration-200">
          View Work
    </a>
      </header>

      <main className="relative flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 flex-grow rounded-lg overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>

        <div className="md:w-1/2 relative z-10 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
            Design & Development Showcase
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0">
            A clean and professional example of my design work. View the full project by clicking the button below.
          </p>
          <a
            id="cta"
            href="/portfolio.png"
            target="_blank"
            className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 text-white font-semibold rounded hover:scale-105 transition-transform duration-200"
          >
            View Work
          </a>
        </div>

        {/* Image Column */}
        <div className="md:w-1/2 relative z-10 mt-6 md:mt-0">
          <img
            src="/portfolio.png"
            alt="Work"
            className="rounded-lg shadow-xl w-full object-cover"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 text-sm">
        © 2025 Jeffrey Jones S
      </footer>
    </div>
  );
}