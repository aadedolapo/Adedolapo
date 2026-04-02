import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Python", percent: 85, icon: "/assets/imgs/skills/skills-1/python.png", color: "from-blue-500 to-blue-600" },
  { name: "PostgreSQL", percent: 76, icon: "/assets/imgs/skills/skills-1/postgre.png", color: "from-sky-500 to-sky-600" },
  { name: "PyTorch", percent: 80, icon: "/assets/imgs/skills/skills-1/pytorch3.png", color: "from-orange-500 to-orange-600" },
  { name: "Scikit-Learn", percent: 85, icon: "/assets/imgs/skills/skills-1/scikit5.png", color: "from-amber-500 to-amber-600" },
  { name: "Power BI", percent: 76, icon: "/assets/imgs/skills/skills-1/power-bi.png", color: "from-yellow-500 to-yellow-600" },
  { name: "Git", percent: 80, icon: "/assets/imgs/skills/skills-1/git.png", color: "from-red-500 to-red-600" },
  { name: "SQL", percent: 80, icon: "/assets/imgs/skills/skills-1/sql-server.png", color: "from-violet-500 to-violet-600" },
  { name: "Linux", percent: 71, icon: "/assets/imgs/skills/skills-1/linux.png", color: "from-slate-400 to-slate-500" },
  { name: "AWS", percent: 57, icon: "/assets/imgs/skills/skills-1/aws.png", color: "from-amber-400 to-amber-500" },
];

function SkillCard({ skill, animate }) {
  return (
    <div className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-2xl p-5 hover:border-violet-400 dark:hover:border-violet-500/30 hover:shadow-md dark:hover:shadow-none transition-all duration-300 shadow-sm dark:shadow-none">
      <div className="w-10 h-10 mb-4 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center overflow-hidden">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-6 h-6 object-contain"
          onError={(e) => { e.target.parentElement.innerHTML = `<span class="text-gray-400 dark:text-white/40 text-xs font-mono">${skill.name.slice(0, 2)}</span>`; }}
        />
      </div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-gray-900 dark:text-white text-sm font-medium">{skill.name}</span>
        <span className="text-violet-500 dark:text-violet-400 text-sm font-mono">{skill.percent}%</span>
      </div>
      <div className="h-1 w-full bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
          style={{ width: animate ? `${skill.percent}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setAnimate(true); }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="bg-gray-50 dark:bg-[#0D0D0D] py-28 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-500 dark:text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">My Skills</h2>
          <p className="text-gray-400 dark:text-white/40 mt-4 text-sm leading-relaxed max-w-md mx-auto">
            I thrive on turning complex problems into simple, beautiful solutions that enhance user satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {skills.map((skill, i) => <SkillCard key={i} skill={skill} animate={animate} />)}
        </div>
      </div>
    </section>
  );
}