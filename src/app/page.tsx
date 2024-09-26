import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 justify-center items-center">
        <Image
          className="dark:invert items-center"
          src="/ico_shuffle_722.png"
          alt="Next.js logo"
          width={256}
          height={256}
          priority
        />
        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center justify-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-4 text-center">
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="/Jinhyun_Hwang_Resume.pdf"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li className="mb-4 text-center">
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="/Jinhyun_Hwang_Resume.pdf"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li className="mb-4 text-center">
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="/Jinhyun_Hwang_Resume.pdf"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li className="mb-4 text-center">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="/Jinhyun_Hwang_Resume.pdf"
              rel="noopener noreferrer"
            >
              Resume
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
