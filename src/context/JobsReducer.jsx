import { actions } from "./actions";

export const JobsReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_REQUIREMENT: {
      const requirement = action.payload;
      const newRequirements = state.requirements.includes(requirement)
        ? state.requirements.filter((req) => req !== requirement)
        : [...state.requirements, requirement];

      return {
        ...state,
        requirements: newRequirements,
        filteredJobs: state.jobs.filter((job) => {
          const jobsRequirements = [...job.languages, ...job.tools];
          return newRequirements.every((req) => jobsRequirements.includes(req));
        }),
      };
    }

    case actions.REMOVE_REQUIREMENT: {
      const requirementToRemove = action.payload;
      const newRequirements = state.requirements.filter(
        (req) => req !== requirementToRemove
      );

      return {
        ...state,
        requirements: newRequirements,
        filteredJobs:
          newRequirements.length === 0
            ? state.jobs
            : state.jobs.filter((job) => {
                const jobsRequirements = [...job.languages, ...job.tools];
                return newRequirements.every((req) =>
                  jobsRequirements.includes(req)
                );
              }),
      };
    }

    case actions.CLEAR_REQUIREMENTS:
      return {
        ...state,
        requirements: [],
        filteredJobs: state.jobs,
      };

    case actions.GET_JOBS: {
      return {
        ...state,
        jobs: action.payload,
        filteredJobs: action.payload,
      };
    }

    default:
      return state;
  }
};
