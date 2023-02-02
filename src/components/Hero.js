import React from 'react';
import image1 from "../img/rocketdab.png";
const Hero = () => {
  return (
    <div>
      <section
            className="flex flex-col-reverse justify-center sm:flex-row p-10 items-center gap-8 mb-12 widescreen:section-min-height tallscreen:section-min-height">
            <article className="sm:w-1/2">
                <h2
                    className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
                    We Boldy Go <span class="text-indigo-700 dark:text-indigo-300">Where No Search Engine</span> Has Gone
                    Before...
                </h2>
                <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                    We're building clients for the next century today. From the moon to Mars, Jupiter and beyond...
                </p>
                <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                    Think Jobber.
                </p>
            </article>
            <div className='w-1/2'>
            <img src={image1} alt="1" className="w-full" />
            </div>
        </section>

    </div>
  )
}

export default Hero