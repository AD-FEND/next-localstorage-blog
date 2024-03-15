
/*Things i would like to change on this page.
The main text
background color
the text below move them elsewhere for a better look
changing the color of text to a new theme.
Add a boxing image as the main background picture.
Chanhe the headings and the text within the heading section.*/

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#510000]">
      <nav className="nav__link">
        <ul>
          <li><a href="/sign-up">Sign up</a></li>
          <li><a href="/community-blog">community blog</a></li>
        </ul>
      </nav>
      <Image
              src="/boxingring.jpg"
              alt="Boxing ring"
              className="boxing ring"
              width={100}
              height={24}
              priority
              />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          My Boxing Blog.&nbsp;
          <code className="text-red-500">By AD</code>
         
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <h1>ADBOXER</h1>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      <h1 className="text-black">AD's Boxing Blog</h1> 
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a href="https://en.wikipedia.org/wiki/Floyd_Mayweather_Jr."
          target="_blank"
          rel="noopener noreferrer">
        
        
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Floyd Mayweather "TMT"{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Floyd is 12X world champion in 5 weight classes with the record of 49 wins and 0 losses.
          </p>
        </a>

        <a href="https://www.dazn.com/en-GB/news/boxing/canelo-alvarez-record-career-fight-results-stats-titles-highlights/1rez8nem41h2j1tkbntf76qzsq"
           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
           target="_blank"
           rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Saul Canelo Alvarez{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            The Mexican fighter is a world champion in 4 weight classes and has a record of 59-2-2
          </p>
        </a>

        <a
          href="https://en.wikipedia.org/wiki/Devin_Haney"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Devin "The Dream" Haney{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Devin currently holds 3 championship titles and has a record of 31 wins including 15 knockouts and 0 losses.
          </p>
        </a>

        <a
          href="https://en.wikipedia.org/wiki/Amir_Khan_(boxer)"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Amir "King" Khan{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Amir is a British former professional boxer who competed from 2005 to 2022. He held many world titles throughout his career and has a record of 40 wins, 21 by KO and 6 losses.
          </p>
        </a>
      </div>
    </main>
  );
}
