import { createContext, useReducer, useEffect } from "react";
import { actions } from "./actions";
import { JobsReducer } from "./JobsReducer";
import PropTypes from "prop-types";
import jobs from "./data.json";

const initialState = {
  jobs,
  filteredJobs: [],
  requirements: [],
};

export const JobsContext = createContext(initialState);

export const JobsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(JobsReducer, initialState);

  useEffect(() => {
    dispatch({ type: actions.GET_JOBS, payload: jobs });
  }, []);

  const handleRequirements = (evt) => {
    const requirement = evt.currentTarget.textContent;
    dispatch({ type: actions.ADD_REQUIREMENT, payload: requirement });
  };

  const removeRequirement = (evt) => {
    const requirement = evt.currentTarget.previousSibling.textContent;
    dispatch({ type: actions.REMOVE_REQUIREMENT, payload: requirement });
  };

  const clearRequirements = () => {
    dispatch({ type: actions.CLEAR_REQUIREMENTS });
  };

  return (
    <JobsContext.Provider
      value={{
        jobs: state.filteredJobs,
        requirements: state.requirements,
        handleRequirements,
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
