import { Badge } from "./Badge";
import { useContext } from "react";
import { JobsContext } from "../context/JobsContext";

export const Header = () => {
  const { requirements, clearRequirements } = useContext(JobsContext);

  if (requirements.length === 0) {
    return null;
  } else {
    return (
      <section className="z-10 sm:mt-24 md:w-[50%] p-6 flex justify-between items-center bg-white rounded-lg shadow-lg">
        <div className="w-full flex items-center space-x-4">
          {requirements.map((requirement) => (
            <Badge key={requirement} requirement={requirement} />
          ))}
        </div>

        <div>
          <button
            onClick={clearRequirements}
            className="font-regular text-neutral-dark-grayish-cyan underline transition-colors duration-300 hover:text-primary-desaturated-dark-cyan"
          >
            Clear
          </button>
        </div>
      </section>
    );
  }
};
