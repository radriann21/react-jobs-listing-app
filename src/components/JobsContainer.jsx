import { ListOfJobs } from "./ListOfJobs";

export const JobsContainer = () => {
  return (
    <ul className="w-full md:w-[60%] flex flex-col space-y-16 md:space-y-4 mt-24 md:mt-10">
      <ListOfJobs />
    </ul>
  );
};
