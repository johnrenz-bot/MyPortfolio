const fs = require('fs');

const replacementHero = `<motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-12">
            <div className="space-y-8 lg:w-2/3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-4"
              >
                <p className="text-slate-900 font-bold tracking-widest uppercase text-sm">
                  ✨ Welcome to my portfolio
                </p>
                {HERO_DATA.openToWork && (
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider rounded-full border border-emerald-200 flex items-center gap-2 animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Open to Work
                  </span>
                )}
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-tight"
              >
                Creative Developer & Designer
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-2xl md:text-3xl font-bold text-slate-800"
              >
                {HERO_DATA.title} — {HERO_DATA.subtitle}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex gap-4 pt-4"
              >
                {HERO_DATA.resume && (
                  <a href={HERO_DATA.resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                    📄 View Resume
                  </a>
                )}
                <a href="#projects" className="flex items-center gap-2 px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-all">
                  View Projects
                </a>
              </motion.div>
            </div>
            
            {HERO_DATA.image && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="lg:w-1/3 flex justify-center lg:justify-end w-full"
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white shadow-2xl overflow-hidden group">
                  <Image 
                    src={HERO_DATA.image} 
                    alt="Profile Image" 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10"></div>
                </div>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8 pt-12 border-t border-gray-200"
          >
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                {HERO_DATA.bio}
              </p>
            </div>
            <div className="space-y-4 text-sm font-medium text-gray-700">`;

let content = fs.readFileSync('app/components/Landing/about.tsx', 'utf8');
const startIdx = content.indexOf('<motion.section\n          initial={{ opacity: 0, y: 30 }}\n          animate={{ opacity: 1, y: 0 }}\n          transition={{ duration: 0.8 }}\n          className="space-y-8"');
const endIdx = content.indexOf('<div className="space-y-4 text-sm font-medium text-gray-700">') + '<div className="space-y-4 text-sm font-medium text-gray-700">'.length;

if (startIdx !== -1 && endIdx !== -1) {
  content = content.substring(0, startIdx) + replacementHero + content.substring(endIdx);
  fs.writeFileSync('app/components/Landing/about.tsx', content);
  console.log('Hero section updated successfully.');
} else {
  console.log('Failed to find Hero section boundaries.');
}
