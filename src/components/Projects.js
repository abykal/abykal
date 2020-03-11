import React from "react";

const Projects = () => {
  return (
    <div className="md:pt-6 md:-mt-7">
      <h2 className="top-0 z-40 pt-6 my-6 text-sm font-bold tracking-widest uppercase text-white">
        Projects
      </h2>
      <div className="flex flex-wrap -my-4 md:-m-4 group pt-8 pb-9 md:py-0" >
        {[1, 2, 3, 4].map((index) => (
          <article
            className="flex-none w-full my-1 md:m-1 md:w-240 md:min-h-240 lg:w-320 lg:min-h-320 bg-dusk opacity-50 odd:-translate-y-12"
             style="transform: translateY(-25.4px);"
            key="index"
          >
            <div className="flex flex-col justify-between w-full h-full p-3 min-h-inherit md:group-hover:opacity-50 md:hover:scale-11/10x md:hover:opacity-important transition">
              <header>
                <h4 className="text-xs font-bold tracking-widest uppercase font-text text-white">
                  React.Hooks Dubai
                </h4>
                <div className="flex flex-col mt-2">
                  <p>
                    <span>
                      <span>Dubai</span>—<span>UAE</span>
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
                        href="#"
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
