const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "30+", label: "Projects Completed" },
  { value: "1+", label: "Research Papers" },
  { value: "3+", label: "Awards Received" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-white dark:bg-[#0A0A0A] flex flex-col justify-center overflow-hidden transition-colors duration-300"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="hidden dark:block absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-violet-300/20 dark:bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-violet-200/20 dark:bg-violet-400/5 blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 text-sm text-gray-500 dark:text-white/60">
              <span className="text-base">👋</span>
              Hi there, I'm Dolapo
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight">
              Delivering
              <br />
              <span className="text-violet-500 dark:text-violet-400">Impactful</span>
              <br />
              ML Solutions
            </h1>

            <p className="text-gray-500 dark:text-white/50 text-base leading-relaxed max-w-md">
              Certified Data Scientist with Distinction MSc in Data Science and strong
              machine learning engineering capabilities. Experienced in developing
              end-to-end ML solutions using Python, PyTorch, and Scikit-learn.
              Outside work, you'll find me playing video games.
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="https://github.com/aadedolapo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/20"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Github Repo
              </a>
              <a
                href="mailto:Kingsleyadebo@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white/70 hover:border-gray-400 dark:hover:border-white/20 text-sm font-medium transition-all duration-200"
              >
                Contact me <span className="text-violet-500">→</span>
              </a>
            </div>
          </div>

          {/* Right — Photo */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full border border-violet-300/40 dark:border-violet-500/20" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-full border border-violet-200/40 dark:border-violet-500/10" />
            </div>
            <div className="relative w-64 h-80 lg:w-72 lg:h-96 rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 bg-gradient-to-b from-violet-50 dark:from-violet-900/30 to-white dark:to-[#0A0A0A]">
              <img
                src="/assets/imgs/hero/hero-1/debo2.png"
                alt="Dolapo"
                className="w-full h-full object-cover object-top"
                onError={(e) => { e.target.style.display = "none"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0A0A0A] via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-8 left-0 lg:-left-4 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-md dark:shadow-none">
              <div className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-violet-500 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.659 1.591L19.5 14.5" />
                </svg>
              </div>
              <div>
                <p className="text-gray-900 dark:text-white text-xs font-medium">ML Engineer</p>
                <p className="text-gray-400 dark:text-white/40 text-xs">Oxford · Active</p>
              </div>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse ml-1" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">{stat.value}</span>
              <span className="text-gray-400 dark:text-white/40 text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}