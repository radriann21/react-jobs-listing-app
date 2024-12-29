import { ListOfJobs } from "./ListOfJobs";

export const JobsContainer = () => {
  return (
    <ul className="w-full md:w-[50%] flex flex-col items-center space-y-16 md:space-y-4 mt-24 md:mt-24">
      <ListOfJobs />
    </ul>
  );
};
