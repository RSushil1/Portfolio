import React from "react";
import { Link } from "react-router-dom";

const Heropage = () => {
  return (
      <section className=" relative m-0 dark:bg-gray-900 dark:text-white">
        <svg
          style={{ zIndex: "-1" }}
          id="visual"
          viewBox="0 0 960 540"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 50L26.7 68.3C53.3 86.7 106.7 123.3 160 127.2C213.3 131 266.7 102 320 86.5C373.3 71 426.7 69 480 89C533.3 109 586.7 151 640 155.7C693.3 160.3 746.7 127.7 800 116.2C853.3 104.7 906.7 114.3 933.3 119.2L960 124L960 0L933.3 0C906.7 0 853.3 0 800 0C746.7 0 693.3 0 640 0C586.7 0 533.3 0 480 0C426.7 0 373.3 0 320 0C266.7 0 213.3 0 160 0C106.7 0 53.3 0 26.7 0L0 0Z"
            fill="#0066FF"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></path>
        </svg>
        {/* <svg style={{ zIndex: '-1' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L80,176C160,192,320,224,480,202.7C640,181,800,107,960,85.3C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
        <div
          className=" grid grid-cols-1 gap-12 md:grid-cols-2 absolute inset-x-0 top-0 md:m-32 md:p-8 ms-5"
          style={{ zIndex: "0" }}
        >
          <div className="md:translate-y-1 translate-y-80">
            <h1 className=" font-serif text-4xl text-blue-500 m-2 font-bold dark:text-pink-500">
              Hi there!, I' m <br /> Sushil Singh Rathore
            </h1>
            <p className=" leading-relaxed font-mono font-semibold dark:text-green-600">
              I am a self-learned web developer, have developed multiple web
              apps and Apis using JavaScript, React and Node. Looking for a career
              opportunity in IT to fully utilize my skills, while making a
              significant contribution to the success of the organization.
            </p>
            <div className="mt-5">
            <Link className="btn-primary shadow-lg shadow-blue-500/50 m-5" to="/about">Know more</Link>
            <Link className="btn-primary shadow-lg shadow-blue-500/50 m-5" to="/projects">Project</Link>
          </div>
          </div>
          <div>
            <span style={{ zIndex: '2' }} class="relative flex h-10 w-10 md:-translate-y-0 md:translate-x-20 -translate-y-80 translate-x-10">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-600 opacity-100"></span>
            <span class=" h-10 w-15 relative inline-flex items-center rounded-md bg-green-200 px-2 py-1 text-xs font-bold text-green-700 ring-1 ring-inset ring-green-600/20">Web DEV</span>
            </span>
            <img
              className="p-6 md:p-4 translate-x-6 -translate-y-96 h-60 w-60 md:-translate-y-14 md:h-80 md:w-80 rounded-full"
              src="images/ssr.jpg"
              alt="Sushil Rathore"
            />

          </div>
        </div>
      </section>
   
  );
};

export default Heropage;
