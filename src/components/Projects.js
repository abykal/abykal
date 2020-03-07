import React from "react";

const Projects = () => {
  return (
    <div className="">
      <h2 className="sticky top-0 z-40 pt-6 text-sm font-bold tracking-widest uppercase md:sr-only text-white">
        Projects
      </h2>
      <div className="flex flex-wrap -my-4 md:-m-4 group pt-32 pb-40 md:py-0">
        {[1, 2, 3, 4].map(() => (
          <article
            className="flex-none w-full my-1 md:m-1 md:w-240 md:min-h-240 lg:w-320 lg:min-h-320 bg-gray-900"
            // style="transform: translateY(-25.4px);"
          >
            <div className="flex flex-col justify-between w-full h-full p-3 min-h-inherit bg-dusk md:group-hover:opacity-50 md:hover:scale-11/10x md:hover:opacity-important transition">
              <header>
                <h4 className="text-xs font-bold tracking-widest uppercase font-text text-white">
                  Vue.js Amsterdam
                </h4>
                <div className="flex flex-col mt-2">
                  <p>
                    <span>
                      <span>Amsterdam</span>—<span>The Netherlands</span>
                    </span>
                  </p>
                  <time className="inline-block">February 21, 2020</time>
                </div>
              </header>
              <div className="flex flex-col mt-6">
                <h3 className="text-2xl font-semibold leading-tight text-white font-head">
                  Test-Driven Development with Vue.js
                </h3>
                <footer className="mt-4">
                  <ul className="flex -mx-2">
                    <li className="mx-2">
                      <a
                        href="https://noti.st/sarahdayan/q0xtRN/test-driven-development-with-vue-js"
                        target="_blank"
                        rel="noopener"
                        className="flex items-center mt-px text-white"
                      >
                        <span>Slides</span>
                      </a>
                    </li>
                  </ul>
                </footer>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
