import React from "react";

const Projects = () => {
  return (
    <div className="">
      <h2 className="sticky top-0 z-40 pt-6 text-sm font-bold tracking-widest uppercase lg:sr-only text-white">
        Projects
      </h2>
      <div className="flex flex-wrap -my-4 lg:-m-4 group pt-8 pb-9 lg:py-0" >
        {[1, 2, 3, 4].map((index) => (
          <article
            className="flex-none w-full my-1 lg:m-1 lg:w-240 lg:min-h-240 lg:w-320 lg:min-h-320 text-red-500 bg-indigo-500 odd:bg-red-200 odd:-translate-y-12"
            // style="transform: translateY(-25.4px);"
          >
            <div className="flex flex-col justify-between w-full h-full p-3 min-h-inherit bg-blue-500 lg:group-hover:opacity-50 lg:hover:scale-11/10x lg:hover:opacity-important transition">
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
                 At Index of {index}
                </h3>
                <footer className="mt-4">
                  <ul className="flex -mx-2">
                    <li className="mx-2">
                      <a
                        href="https://noti.st/sarahdayan/q0xtRN/test-driven-development-with-vue-js"
                        target="_blank"
                        rel="noopener noreferrer"
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
