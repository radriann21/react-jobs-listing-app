import { useContext } from "react";
import { JobsContext } from "../context/JobsContext";
import { JobCard } from "./JobCard";

export const ListOfJobs = () => {
  const { filterJobs } = useContext(JobsContext);
  const jobs = filterJobs();

  return jobs.map((job) => <JobCard key={job.id} job={job} />);
};
