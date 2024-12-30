import { actions } from "./actions";

export const JobsReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_REQUIREMENT: {
      const requirement = action.payload;

      if (state.requirements.includes(requirement)) {
        return {
          ...state,
          requirements: state.requirements.filter((req) => req !== requirement),
          jobs: state.jobs.filter((job) => {
            const jobsRequirements = [...job.languages, ...job.tools];
            return jobsRequirements.includes(requirement);
          }),
        };
      } else {
        return {
          ...state,
          requirements: [...state.requirements, requirement],
          jobs: state.jobs.filter((job) => {
            const jobsRequirements = [...job.languages, ...job.tools];
            return state.requirements.every((req) =>
              jobsRequirements.includes(req)
            );
          }),
        };
      }
    }

    case actions.REMOVE_REQUIREMENT: {
      const requirementToRemove = action.payload;
      return {
        ...state,
        requirements: state.requirements.filter(
          (req) => req !== requirementToRemove
        ),
      };
    }

    case actions.CLEAR_REQUIREMENTS:
      return {
        ...state,
        requirements: [],
      };

    default:
      return state;
  }
};
