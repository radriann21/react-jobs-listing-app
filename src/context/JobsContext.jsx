import { createContext, useState } from "react";
import jobs from "./data.json";

export const JobsContext = createContext();

export const JobsContextProvider = ({ children }) => {
  const [jobList, setJobList] = useState(jobs);

  return (
    <JobsContext.Provider value={{ jobList }}>{children}</JobsContext.Provider>
  );
};
