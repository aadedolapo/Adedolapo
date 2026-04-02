const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Skills", href: "#skills" },
];

const contactDetails = [
  { label: "Phone", value: "+1-234-567-8901", href: "tel:+12345678901" },
  { label: "Email", value: "Kingsleyadebo@gmail.com", href: "mailto:Kingsleyadebo@gmail.com" },
  { label: "GitHub", value: "github.com/aadedolapo", href: "https://github.com/aadedolapo" },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#080808] border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
      {/* CTA band */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-br from-violet-50 dark:from-violet-900/40 to-gray-50 dark:to-[#111] border border-violet-200 dark:border-violet-500/10 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-2">Let's work together</h3>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-sm">I'm always excited to take on new projects and collaborate with innovative minds.</p>
          </div>
          <a href="mailto:Kingsleyadebo@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/20 whitespace-nowrap shrink-0">
            Get in touch <span>↗</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-10">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-gray-100 dark:border-white/5">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-full bg-violet-500 flex items-center justify-center text-xs font-bold text-white">A</span>
              <span className="text-gray-900 dark:text-white font-semibold tracking-tight text-sm">adedolapo<span className="text-violet-500">.</span></span>
            </a>
            <p className="text-gray-400 dark:text-white/30 text-sm leading-relaxed max-w-xs">Certified Data Scientist building impactful ML solutions and intelligent systems.</p>
          </div>

          <div>
            <h4 className="text-gray-400 dark:text-white/60 text-xs font-medium tracking-widest uppercase mb-5">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 dark:text-white/40 text-sm hover:text-gray-900 dark:hover:text-white transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-400 dark:text-white/60 text-xs font-medium tracking-widest uppercase mb-5">Contact</h4>
            <ul className="flex flex-col gap-4">
              {contactDetails.map((item) => (
                <li key={item.label}>
                  <p className="text-gray-300 dark:text-white/30 text-xs mb-0.5">{item.label}</p>
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                    className="text-gray-500 dark:text-white/60 text-sm hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200">
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-300 dark:text-white/20">
          <span>© 2026 All Rights Reserved by Adedolapo Adebo</span>
          <span>Built with React + Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}