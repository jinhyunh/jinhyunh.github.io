import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#f0e9ca] grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-6 row-start-2 justify-center items-center">
        <Image
          className="items-center"
          src="/ico_shuffle_722.png"
          alt="Next.js logo"
          width={256}
          height={256}
          priority
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-black">
            Jinhyun Hwang
          </h1>
          <p className="text-center text-sm sm:text-base text-gray-600">
            Hi, I&apos;m a data engineer and software developer with a knack for building efficient, data-driven solutions. When I&apos;m not working, I enjoy diving 
            into personal projects, exploring new technologies, and pursuing my other hobbies. I&apos;m currently looking for new opportunities to grow and contribute 
            to a team. Feel free to reach out!
          </p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 justify-items-center justify-center sm:text-left text-black font-[family-name:var(--font-geist-mono)]">
          <li className="mb-4 text-center">
            <a
              className="rounded-2xl border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-[#a48758] hover:text-[#2b8854] hover:font-bold hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="/Jinhyun_Hwang_Resume.pdf"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li className="mb-4 text-center">
            <a
              className="rounded-2xl border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-[#a48758] hover:text-[#c2a771] hover:font-bold hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="/work"
              rel="noopener noreferrer"
            >
              My Work
            </a>
          </li>
          <li className="mb-4 text-center">
            <a
              className="rounded-2xl border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-[#a48758] hover:text-[#135b20] hover:font-bold hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="/Jinhyun_Hwang_Resume.pdf"
              rel="noopener noreferrer"
            >
              My Projects
            </a>
          </li>
          <li className="mb-4 text-center">
            <a
              className="rounded-2xl border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-[#a48758] hover:text-[#f0e9ca] hover:font-bold hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="/Jinhyun_Hwang_Resume.pdf"
              rel="noopener noreferrer"
            >
              My Hobbies
            </a>
          </li>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/jinhyunh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github-mark.png"
            alt="File icon"
            width={32}
            height={32}
          />
        </a>
        <a
          className="flex items-center gap-2 hover:underline-offset-4"
          href="https://www.linkedin.com/in/jinhyun-hwang/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin-mark.png"
            alt="Window icon"
            width={32}
            height={16}
          />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:jinhyunh0808@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/gmail-logo.png"
            alt="Globe icon"
            width={32}
            height={32}
          />
        </a>
      </footer>
    </div>
  );
}
