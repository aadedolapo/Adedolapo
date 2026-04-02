const education = [
  { period: "2022 – 2023", degree: "MSc, Data Science", institution: "Manchester Metropolitan University" },
  { period: "2020 – 2021", degree: "Applied Data Science", institution: "World Quant University" },
  { period: "2016 – 2020", degree: "Actuarial Science", institution: "University of Lagos" },
  { period: "2014 – 2016", degree: "Computer Engineering", institution: "University of Lagos" },
];

const experience = [
  { period: "May 2024 – Present", role: "Research Data Scientist", company: "The Rosalind Franklin Institute, Oxford", current: true },
  { period: "Sep 2023 – Apr 2024", role: "Machine Learning Engineer", company: "Self Development, United Kingdom" },
  { period: "Jun 2023 – Sep 2023", role: "Deep Learning Engineer", company: "Manchester Metropolitan University" },
  { period: "Jul 2023 – Aug 2023", role: "Research Data Scientist – Intern", company: "The Rosalind Franklin Institute, Oxford" },
];

function TimelineItem({ period, title, subtitle, current }) {
  return (
    <div className="relative flex gap-5 pb-8 last:pb-0">
      <div className="flex flex-col items-center">
        <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ring-2 ring-offset-2 ring-offset-white dark:ring-offset-[#111] ${current ? "bg-violet-500 ring-violet-400/40" : "bg-gray-300 dark:bg-white/20 ring-gray-200 dark:ring-white/10"}`} />
        <div className="w-px flex-1 bg-gray-100 dark:bg-white/5 mt-2" />
      </div>
      <div className="flex-1">
        <span className="text-violet-500 dark:text-violet-400 text-xs font-mono">{period}</span>
        <h4 className="text-gray-900 dark:text-white font-semibold mt-1 text-sm leading-snug">{title}</h4>
        <p className="text-gray-400 dark:text-white/40 text-xs mt-0.5">{subtitle}</p>
        {current && (
          <span className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-0.5 rounded-full bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-green-600 dark:text-green-400 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Current
          </span>
        )}
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="bg-gray-50 dark:bg-[#0A0A0A] py-28 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-violet-500 dark:text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Background</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">My Resume</h2>
          <p className="text-gray-400 dark:text-white/40 mt-3 text-sm leading-relaxed max-w-md">I believe that working hard and trying to learn every day will make me improve in satisfying my customers.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Education", icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5", items: education, mapFn: (item, i) => <TimelineItem key={i} period={item.period} title={item.degree} subtitle={item.institution} /> },
            { title: "Experience", icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z", items: experience, mapFn: (item, i) => <TimelineItem key={i} period={item.period} title={item.role} subtitle={item.company} current={item.current} /> },
          ].map(({ title, icon, items, mapFn }) => (
            <div key={title} className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-2xl p-8 shadow-sm dark:shadow-none">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-violet-100 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-violet-500 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
                  </svg>
                </div>
                <h3 className="text-gray-900 dark:text-white font-semibold text-base">{title}</h3>
              </div>
              {items.map(mapFn)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}