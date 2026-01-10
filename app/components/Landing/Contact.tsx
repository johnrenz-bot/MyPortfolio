import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { FaRedditAlien, FaXTwitter } from "react-icons/fa6";
import { SiGlassdoor } from "react-icons/si";

export default function Contact() {
  const Tittle = {
    tittle: "CONTACT",
    description:
      "Feel free to reach out for opportunities, collaborations, or any inquiries. I’m always open to connecting and exploring meaningful work.",
  };

  const PERSONAL = {
    Address: "Grand Villas, Loma de Gato, Marilao, Bulacan",
    Phone: "+63 966 798 7702",
    Email: "johnrenzbandianon9@gmail.com",
  };

  const socials = [
    { icon: <FaGithub />, url: "https://github.com/johnrenz-bot", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/john-renz-96a77728b/", label: "LinkedIn" },
    { icon: <SiGlassdoor />, url: "https://www.glassdoor.com/member/profile", label: "GlassDoor" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/wiieidjxhdshehe/", label: "Instagram" },
    { icon: <FaFacebook />, url: "https://www.facebook.com/john.r.bandianon/", label: "Facebook" },
    { icon: <FaXTwitter />, url: "https://x.com/JohnRen94949414/", label: "Twitter X" },
    { icon: <FaRedditAlien />, url: "https://www.reddit.com/user/Aware-Scratch8897/", label: "Reddit" },
  ];

  const shadowClass = "shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_12px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition";

  return (
    <main className="min-h-screen w-full flex justify-center px-4 sm:px-6 lg:px-10 py-24">
      <div className="w-full max-w-6xl flex flex-col gap-16">

        <section className="flex flex-col items-center gap-6 text-center">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            {Tittle.tittle}
          </p>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl">
            {Tittle.description}
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">

          <div className={`rounded-3xl p-8 flex flex-col  gap-8 ${shadowClass}`}>
            <p className="text-xl sm:text-2xl font-bold tracking-wide text-center">
              PERSONAL CONTACT
            </p>

            <div className="flex flex-col gap-6 text-center ">
              <div className="group relative h-[160px] bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--text)]/90 transition rounded-3xl overflow-hidden cursor-default shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_10px_25px_rgba(0,0,0,0.12)] transition">
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6">
                  <p className="text-base sm:text-lg font-medium">ADDRESS</p>
                  <p className="text-lg sm:text-xl font-semibold">{PERSONAL.Address}</p>
                </div>
              </div>

              <div className="group relative h-[120px] bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--text)]/90 transition rounded-3xl overflow-hidden cursor-default shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_10px_25px_rgba(0,0,0,0.12)] transition">
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6">
                  <p className="text-base sm:text-lg font-medium">PHONE NUMBER</p>
                  <p className="text-xl sm:text-2xl font-semibold">{PERSONAL.Phone}</p>
                </div>
              </div>

              <a
                href={`https://mail.google.com/mail/?view=cm&to=${PERSONAL.Email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-[120px] bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--text)]/90 transition rounded-3xl overflow-hidden shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_10px_25px_rgba(0,0,0,0.12)] transition flex flex-col justify-center items-center cursor-pointer hover:-translate-y-1"
              >
                <p className="text-base sm:text-lg font-medium">EMAIL</p>
                <p className="text-lg sm:text-xl font-semibold break-all">{PERSONAL.Email}</p>
              </a>
            </div>
          </div>

          <div className={`rounded-3xl  p-8 flex flex-col gap-8 ${shadowClass}`}>
            <p className="text-xl sm:text-2xl font-bold tracking-wide text-center">
              SOCIAL MEDIA
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 ">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--text)]/90 transition h-[160px] rounded-3xl overflow-hidden flex flex-col items-center justify-center gap-3 shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_10px_25px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition"
                >
                  <span className="text-3xl group-hover:scale-110 transition">{social.icon}</span>
                  <span className="text-sm sm:text-base font-semibold text-center">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}
