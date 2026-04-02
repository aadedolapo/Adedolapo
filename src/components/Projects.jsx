import { useState, useEffect } from "react";

const filters = ["All Projects", "Data Analysis", "Data Visualization", "ML/AI"];

const projects = [
  {
    title: "Car Price Prediction", category: "ML/AI", image: "/assets/imgs/projects/car-price.jpg",
    description: "End-to-end ML pipeline that predicts used car prices with high accuracy using gradient boosting techniques. The model was trained on a large dataset of vehicle listings, incorporating features like mileage, brand, fuel type, and age to generate reliable market valuations.",
    client: "Personal Project", completionTime: "3 months", tools: "Python, XGBoost, Pandas, Scikit-learn, Streamlit",
    tags: ["Python", "XGBoost", "Pandas"], github: "https://github.com/aadedolapo",
  },
  {
    title: "Accident and Emergency Analysis", category: "Data Analysis", image: "/assets/imgs/projects/accident.jpg",
    description: "Statistical analysis of NHS A&E departments examining wait times, patient volumes, and seasonal trends across multiple hospital trusts. Findings were visualised in an interactive dashboard to identify bottlenecks in emergency care delivery.",
    client: "Research Project", completionTime: "2 months", tools: "Python, Seaborn, Matplotlib, Pandas, Power BI",
    tags: ["Python", "Seaborn", "Pandas"], github: "https://github.com/aadedolapo",
  },
  {
    title: "Yoruba Proverb Generator", category: "ML/AI", image: "/assets/imgs/projects/yoruba.jpg",
    description: "A fine-tuned language model capable of generating culturally authentic Yoruba proverbs. The project involved curating a dataset of traditional proverbs, fine-tuning a transformer model, and deploying a simple web interface.",
    client: "Personal Project", completionTime: "4 months", tools: "PyTorch, HuggingFace Transformers, FastAPI, React",
    tags: ["PyTorch", "NLP", "Transformers"], github: "https://github.com/aadedolapo",
  },
  {
    title: "Spotting Facial Expressions", category: "ML/AI", image: "/assets/imgs/projects/facial.jpg",
    description: "Real-time computer vision system that detects and classifies seven distinct facial expressions using a convolutional neural network. Trained on the FER-2013 dataset and optimised for low-latency inference.",
    client: "MSc Dissertation", completionTime: "5 months", tools: "PyTorch, OpenCV, CNN, Flask, JavaScript",
    tags: ["PyTorch", "OpenCV", "CNN"], github: "https://github.com/aadedolapo",
  },
];

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video bg-gradient-to-br from-violet-100 dark:from-violet-900/40 to-gray-100 dark:to-[#111] overflow-hidden rounded-t-3xl">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 dark:opacity-70" onError={(e) => { e.target.style.display = "none"; }} />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#111] via-transparent to-transparent" />
          <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 dark:bg-black/50 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-all">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="absolute bottom-4 left-6">
            <span className="px-3 py-1 rounded-full bg-violet-600 text-white text-xs font-medium">{project.category}</span>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-white/50 text-xs">{tag}</span>
            ))}
          </div>
          <p className="text-gray-500 dark:text-white/60 text-sm leading-relaxed mb-8">{project.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-100 dark:bg-white/5 rounded-2xl overflow-hidden mb-8">
            {[["Client", project.client], ["Completion Time", project.completionTime], ["Tools", project.tools]].map(([label, value]) => (
              <div key={label} className="bg-white dark:bg-[#111] p-5">
                <p className="text-gray-400 dark:text-white/30 text-xs mb-1.5">{label}</p>
                <p className="text-gray-900 dark:text-white text-sm font-medium leading-snug">{value}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-all duration-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
            <button onClick={onClose} className="px-5 py-2.5 rounded-full border border-gray-200 dark:border-white/10 text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white text-sm transition-all duration-200">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);
  const filtered = activeFilter === "All Projects" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="bg-white dark:bg-[#0D0D0D] py-28 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-violet-500 dark:text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Portfolio</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">My Recent Works</h2>
            <p className="text-gray-400 dark:text-white/40 mt-3 max-w-sm text-sm leading-relaxed">I believe that working hard and trying to learn every day will make me improve in satisfying my customers.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 dark:border-white/10 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:border-violet-400 text-sm transition-all duration-200 self-start md:self-auto whitespace-nowrap">
            View All Projects <span className="text-violet-500">↗</span>
          </a>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button key={f} onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all duration-200 ${activeFilter === f ? "bg-violet-600 text-white font-medium" : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/5"}`}>
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((project, i) => (
            <div key={i} onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-hidden bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-violet-400 dark:hover:border-violet-500/30 transition-all duration-300 cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-violet-100 dark:from-violet-900/40 to-gray-100 dark:to-[#111] overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 dark:opacity-80" onError={(e) => { e.target.style.display = "none"; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0D0D0D] via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-full bg-gray-200/80 dark:bg-white/10 text-gray-600 dark:text-white/60 text-xs">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-gray-900 dark:text-white font-semibold text-lg leading-tight">{project.title}</h3>
                    <p className="text-gray-500 dark:text-white/40 text-sm mt-1 leading-relaxed line-clamp-2">{project.description}</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center shrink-0 group-hover:bg-violet-500 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}