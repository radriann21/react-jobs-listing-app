import { createContext, useReducer } from "react";
import { actions } from "./actions";
import { JobsReducer } from "./JobsReducer";
import PropTypes from "prop-types";
import jobs from "./data.json";

const initialState = {
  jobs,
  requirements: [],
};

export const JobsContext = createContext(initialState);

export const JobsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(JobsReducer, initialState);

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
        jobs: state.jobs,
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
