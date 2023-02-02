import React from "react";
import useJobStore from "../app/jobStore";

const Main = () => {
  const { jobs, removeJob } = useJobStore(
    (state)=> ({
      jobs: state.jobs,
      removeJob: state.removeJob,
    })
  )
  const filter = useJobStore((state) => state.filter);

  return (
    <article id="jobs" className="scroll-mt-24">
      <header className="flex justify-center my-4">
        <h1 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          LIST OF JOBS
        </h1>
      </header>
      <hr className="mx-auto bg-black dark:bg-white w-1/2"/>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5 my-10 px-5">
        {jobs
        .filter(({ jobposition: jobPosition }) =>
          jobPosition.toLowerCase().includes(filter.toLowerCase())
      )
        .map((job, i) => {
          return (
            <React.Fragment>
              <li key={job} className="flex flex-col-reverse rounded-xl dark:bg-black dark:text-white  border-2 dark: border-teal-500 shadow-lg p-6">
                <span className="flex flex-col gap-2">
                  <h2 className=" block text-xl shadow-lg ">
                  Type: {job.jobtype}
                  </h2>
                  <h2 className="text-teal-700  block text-xl shadow-lg dark:border-dashed border-none border border-teal-200 ">
                  Position: {job.jobposition}
                  </h2>
                  <h2 className=" block text-xl shadow-lg ">
                  Qualifications:  {job.jobqualification}
                  </h2>
                  <h2 className=" block text-xl shadow-lg ">
                  Salary: {job.jobsalary}
                  </h2>
                </span>
                <span className="my-4 flex flex-row-reverse">
                  <button
                  onClick={()=> {
                    removeJob(job.id)
                  }}
                  className="flex items-center justify-center bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 rounded-2xl border border-solid border-slate-900 dark:border-none ">
                    delete
                  </button>
                </span>
              </li>
            </React.Fragment>
          )
        }) }

      </ul>

      
    </article>
  )
}

export default Main