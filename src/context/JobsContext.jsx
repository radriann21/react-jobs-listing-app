import PropTypes from "prop-types";
import { createContext, useState } from "react";
import jobs from "./data.json";

export const JobsContext = createContext();

export const JobsContextProvider = ({ children }) => {
  const [jobList, setJobList] = useState(jobs);
  const [requirements, setRequirements] = useState([]);

  const handleRequirements = (evt) => {
    const requirement = evt.currentTarget.textContent;
    setRequirements((prevRequirements) => {
      if (prevRequirements.includes(requirement)) {
        return prevRequirements.filter((req) => req !== requirement);
      } else {
        return [...prevRequirements, requirement];
      }
    });
  };

  const removeRequirement = (evt) => {
    const requirement = evt.currentTarget.previousSibling.textContent;
    setRequirements((prevRequirements) => {
      return prevRequirements.filter((req) => req !== requirement);
    });
  };

  const clearRequirements = () => {
    setRequirements([]);
  };

  const filterJobs = () => {
    if (requirements.length === 0) {
      return jobList;
    }

    return jobList.filter((job) => {
      const jobsRequirements = [...job.languages, ...job.tools];
      return requirements.every((req) => jobsRequirements.includes(req));
    });
  };

  return (
    <JobsContext.Provider
      value={{
        filterJobs,
        handleRequirements,
        requirements,
        clearRequirements,
        removeRequirement,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

JobsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
