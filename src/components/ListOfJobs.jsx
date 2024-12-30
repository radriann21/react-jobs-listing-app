import { useContext } from "react";
import { JobsContext } from "../context/JobsContext";
import { JobCard } from "./JobCard";

export const ListOfJobs = () => {
  const { jobs } = useContext(JobsContext);

  return jobs.map((job) => <JobCard key={job.id} job={job} />);
};
