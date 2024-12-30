import PropTypes from "prop-types";
import { useContext } from "react";
import { JobsContext } from "../context/JobsContext";

export const Badge = ({ requirement }) => {
  const { removeRequirement } = useContext(JobsContext);

  return (
    <span className="flex font-custom p-2 rounded-lg bg-neutral-light-grayish-cyan-2">
      <p className=" text-primary-desaturated-dark-cyan">{requirement}</p>
      <div
        onClick={removeRequirement}
        className="bg-primary-desaturated-dark-cyan text-white h-full w-full cursor-pointer transition-colors duration-300 hover:bg-neutral-very-dark-grayish-cyan hover:text-neutral-light-grayish-cyan"
      >
        X
      </div>
    </span>
  );
};

Badge.propTypes = {
  requirement: PropTypes.string.isRequired,
};
