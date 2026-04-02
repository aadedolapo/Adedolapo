import { useState } from "react";

const services = [
  { number: "01", title: "Data Analysis", description: "Specializes in extracting actionable insights using advanced statistical techniques and computational methods. My expertise includes data wrangling, exploratory data analysis, and interpreting results to inform strategic decisions." },
  { number: "02", title: "Data Visualization", description: "I excel in creating intuitive and informative visual data representations that enhance understanding and decision-making. Utilizing tools like Matplotlib, Seaborn, and Power BI." },
  { number: "03", title: "Machine Learning", description: "I build predictive models that improve efficiency, accuracy, and innovation across various domains. My experience spans from supervised and unsupervised learning to advanced deep and transfer learning techniques." },
  { number: "04", title: "Artificial Intelligence", description: "My work in Artificial Intelligence focuses on creating intelligent systems that emulate human capabilities and enhance automation in applications ranging from natural language processing to computer vision." },
];

export default function Services() {
  const [active, setActive] = useState(2);

  return (
    <section id="services" className="bg-gray-50 dark:bg-[#0A0A0A] py-28 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-violet-500 dark:text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">What I Do</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">What do I offer?</h2>
        </div>

        <div className="flex flex-col divide-y divide-gray-200 dark:divide-white/5">
          {services.map((service, i) => {
            const isOpen = active === i;
            return (
              <div
                key={i}
                onClick={() => setActive(isOpen ? -1 : i)}
                className={`cursor-pointer py-7 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-6 flex-1">
                    <span className="text-gray-300 dark:text-white/20 text-sm font-mono w-6 shrink-0">{service.number}</span>
                    <h3 className={`text-xl lg:text-2xl font-semibold transition-colors duration-200 ${isOpen ? "text-violet-600 dark:text-violet-300" : "text-gray-900 dark:text-white"}`}>
                      {service.title}
                    </h3>
                  </div>
                  <div className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-violet-500 border-violet-500 rotate-45" : "border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-white/5"}`}>
                    <svg className="w-3.5 h-3.5 text-white dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 mt-5" : "max-h-0"}`}>
                  <p className="text-gray-500 dark:text-white/50 leading-relaxed max-w-2xl ml-12">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}