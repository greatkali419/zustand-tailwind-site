import useJobStore from "../app/jobStore";
import {useState} from 'react';

const AddJobs = () => {
  const addJob = useJobStore((state) => state.addJob)
  
  const [jobType, setJobType] = useState('')
  const [jobPosition, setJobPosition] = useState('')
  const [jobQualification, setJobQualification] = useState('')
  const [jobSalary, setJobSalary] = useState('')

  const handleAdd = ()=> {
    if(!jobType || !jobPosition || !jobQualification || !jobSalary ) return alert("All field are required");
    addJob({
      id: Math.ceil(Math.random() * 1000),
      jobtype: jobType,
      jobposition: jobPosition,
      jobqualification: jobQualification,
      jobsalary: jobSalary

  })
  setJobType("")
  setJobPosition("")
  setJobQualification("")
  setJobSalary("")
  }
  return (
    <article id="addjobs" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height" >
              <header className="flex justify-center my-5">
                <h1 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                  LIST A JOB
                </h1>
              </header>
              <form className="flex flex-col gap-5 w-full my-4 px-5">
            <div className="flex flex-col  justify-center gap-2 w-full sm:flex-row ">
                <label htmlFor="job type"
                className="text-xl dark:text-white sm:hidden"> Type of Job:</label>
                <input
                className=" border  border-black dark:bg-white w-full sm:w-3/4 p-4"
                type="text"
                placeholder="job type"
                value={jobType}
                  onChange={(e) => {
                      setJobType(e.target.value)
                  }} />
                </div>
            <div className="flex flex-col justify-center gap-2 w-full sm:flex-row ">
                <label htmlFor="job position"
                className="text-xl dark:text-white sm:hidden"
                > Position: </label>
                <input
                className=" w-full sm:w-3/4 border border-black dark:bg-white p-4"
                type="text"
                placeholder="job position"
                value={jobPosition}
                  onChange={(e) => {
                      setJobPosition(e.target.value)
                  }} />
            </div>
            <div className="flex flex-col justify-center gap-2 w-full sm:flex-row ">
                <label htmlFor="qualifications"
                className="text-xl dark:text-white sm:hidden"
                > Qualifications: </label>
                <input
                className=" border  w-full sm:w-3/4 border-black dark:bg-white p-4"
                placeholder="job qualification"
                type="text"
                value={jobQualification}
                  onChange={(e) => {
                      setJobQualification(e.target.value)
                  }}  />
            </div>  
            <div className="flex flex-col justify-center gap-2 w-full sm:flex-row ">
                <label htmlFor="salary"
                className="text-xl dark:text-white sm:hidden"
                > Salary:</label>
                <input
                className=" border border-black  w-full sm:w-3/4 dark:bg-white p-4"
                placeholder="job salary"
                type="text"
                value={jobSalary}
                  onChange={(e) => {
                      setJobSalary(e.target.value)
                  }}  />
          </div>
          <div className="flex justify-center my-4">
              <button 
              onClick={()=> {
                handleAdd()
              }}
              className=" flex items-center justify-center bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 rounded-xl border border-solid border-slate-900 dark:border-none h-10 w-1/4">
                Create
              </button>
          </div>
            

              </form>
    </article>

  )
}

export default AddJobs