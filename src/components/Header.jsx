import { Badge } from "./Badge";

export const Header = () => {
  return (
    <section className="md:w-[50%] p-6 flex justify-between items-center bg-white rounded-lg shadow-lg">
      <div className="w-full flex items-center space-x-4">
        <Badge />
      </div>

      <div>
        <button className="font-regular text-neutral-dark-grayish-cyan underline transition-colors duration-300 hover:text-primary-desaturated-dark-cyan">
          Clear
        </button>
      </div>
    </section>
  );
};
