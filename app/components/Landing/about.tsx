export default function About() {
  const About = {
    About1: "John Renz B.",
    About2:
      "I’m John Renz Bandianon, an intermediate full-stack student developer with a strong focus on creating modern, responsive, and user-centered web interfaces. I’m currently strengthening my foundations through real-world projects, including my Capstone and various solo builds that enhance my problem-solving, design thinking, and overall development workflow.",
    About3:
      "While frontend development is where I’m most skilled and passionate, I’m also steadily exploring backend concepts at my own pace—learning gradually, improving consistently, and staying open to growth as I move toward opportunities that let me contribute and evolve as a developer.",
  };

  const Academic = [
    {
      College: "STI College San Jose Del Monte",
      year: "2022 - Present",
      Course: "Bachelor of Science in Information Technology",
    },
    {
      SeniorHighSchool: "Prenza National Senior High School",
      year: "2020 - 2022",
      Course: "Vocational / Technical",
    },
  ];

  const EXPERIENCE = [
    {
      Capstone: "Capstone Project",
      WorkPlace: "STI San Jose Del Monte Bulacan • Final Year Project",
      year: "2024 – 2025",
    },
    {
      First: "First Code Experience",
      year: "2022",
      text: "Wrote my first line of code",
    },
  ];

  const shadowClass =
    "shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_12px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition";

  return (
    <main className="min-h-screen w-full flex flex-col gap-12 px-4 sm:px-6 lg:px-10 py-16">
      
      <section className="w-full flex justify-center ">
        <div
          className={`w-full max-w-6xl rounded-3xl p-8 flex flex-col gap-6 ${shadowClass} `}
        >
          <p className="text-xl sm:text-2xl font-semibold tracking-wide text-center">
            {About.About1}
          </p>

          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-center px-0 sm:px-6 lg:px-10">
            {About.About2}
          </p>

          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-center px-0 sm:px-6 lg:px-10">
            {About.About3}
          </p>
        </div>
      </section>

      <section className="w-full flex justify-center">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-6">
            <p className="text-xl sm:text-2xl font-bold tracking-wide text-center ">
              ACADEMY
            </p>
            <div className="flex flex-col gap-4">
              {Academic.map((item, index) => (
                <div
                  key={index}
                  className={`group relative rounded-3xl p-6 flex flex-col gap-2 bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--text)]/90 transition ${shadowClass}`}
                >
                  <p className="text-base sm:text-lg font-semibold text-center">
                    {item.College || item.SeniorHighSchool}
                  </p>
                  <p className="text-sm sm:text-base text-center">{item.Course}</p>
                  <p className="text-sm text-gray-500 text-center">{item.year}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-xl sm:text-2xl font-bold tracking-wide text-center">
              EXPERIENCE
            </p>
            <div className="flex flex-col gap-4">
              {EXPERIENCE.map((exp, index) => (
                <div
                  key={index}
                  className={`group relative rounded-3xl p-6 flex flex-col gap-2 bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--text)]/90 transition ${shadowClass}`}
                >
                  <p className="text-base sm:text-lg font-semibold text-center">
                    {exp.Capstone || exp.First}
                  </p>
                  {exp.WorkPlace && (
                    <p className="text-sm sm:text-base text-center">{exp.WorkPlace}</p>
                  )}
                  {exp.text && (
                    <p className="text-sm sm:text-base text-center">{exp.text}</p>
                  )}
                  <p className="text-sm text-gray-500 text-center">{exp.year}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
