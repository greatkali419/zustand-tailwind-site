import {create }from 'zustand';
import {devtools, persist} from 'zustand/middleware';

const jobStore = (set, get) => ({
  filter: "",
  jobs: [],
  addJob : (job) => {
    set((state) => ({
      jobs: [job, ...state.jobs],
  }))
  },
  removeJob: (jobId) => {
    set((state) => ({
        jobs: state.jobs.filter((c) => c.id !== jobId)
    }))
},
  setFilter: (filter) =>
  set((state) => ({
    ...state,
    filter,
  }))
})

const useJobStore = create(
  devtools(
      persist(jobStore, {
          name: "jobs",
      })
  )
)

export default useJobStore;
