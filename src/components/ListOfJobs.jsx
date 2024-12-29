import { useContext } from "react";
import { JobsContext } from "../context/JobsContext";
import { JobCard } from "./JobCard";

export const ListOfJobs = () => {
  const { jobList } = useContext(JobsContext);

  return jobList.map((job) => <JobCard key={job.id} job={job} />);
};
