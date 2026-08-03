const fs = require('fs');

const modalCode = `function ProjectModal({ project, onClose }: { project: Item; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-neutral-900/80 backdrop-blur-md animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl flex flex-col items-center m-auto animate-fadeIn delay-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute -top-10 right-0 sm:right-0 text-white hover:text-gray-300 transition-colors p-2 font-bold"
        >
          Close ✕
        </button>
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/50 flex items-center justify-center w-full max-h-[70vh]">
          <Image
            src={project.image}
            alt={project.title}
            width={1400}
            height={900}
            className="object-contain w-full h-full max-h-[70vh]"
            priority
          />
        </div>

        <div className="mt-6 flex flex-col items-center text-center space-y-5 max-w-4xl w-full px-6 py-6 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 text-white shadow-xl">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {project.title}
            </h2>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              {project.description}
            </p>
          </div>

          {(project.techStack || project.uiTools) && (
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {(project.techStack || project.uiTools)?.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 bg-white/20 rounded-full text-white text-xs font-semibold tracking-wide border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 w-full">
            {project.href && project.href.startsWith("http") && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black text-sm font-bold hover:scale-105 transition-transform"
              >
                Visit Project
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3 rounded-full border border-white/40 text-white text-sm font-bold hover:bg-white/20 transition-colors"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
`;

let content = fs.readFileSync('app/components/Landing/project.tsx', 'utf8');
const startIdx = content.indexOf('function ProjectModal({ project, onClose }: { project: Item; onClose: () => void }) {');
const endIdx = content.indexOf('function CategoryView({ category, onBack }: { category: Category; onBack: () => void }) {');

if (startIdx !== -1 && endIdx !== -1) {
  content = content.substring(0, startIdx) + modalCode + '\n' + content.substring(endIdx);
  fs.writeFileSync('app/components/Landing/project.tsx', content);
  console.log('ProjectModal updated successfully.');
} else {
  console.log('Failed to find ProjectModal in project.tsx');
}
