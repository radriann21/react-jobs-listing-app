import PropTypes from "prop-types";

export const JobCard = ({ job }) => {
  const { languages, tools } = job;
  const requirements = [...languages, ...tools];

  return (
    <article className="relative w-full p-4 md:p-8 space-y-4 md:space-y-0 flex flex-col md:flex-row sm:items-center justify-between bg-white shadow-md rounded-lg">
      <div className="flex items-center space-x-4">
        <img
          className="w-[60px] absolute -top-12 sm:relative rounded-full"
          src={job.logo}
          alt={job.company}
        />
        <div className="space-y-2">
          <div className="space-x-2">
            <span className="font-custom text-primary-desaturated-dark-cyan">
              {job.company}
            </span>
            {job.new ? (
              <span className="text-[12px] bg-primary-desaturated-dark-cyan p-2 rounded-full font-custom text-white uppercase">
                New!
              </span>
            ) : null}
            {job.featured ? (
              <span className="text-[12px] bg-neutral-very-dark-grayish-cyan p-2 rounded-full font-custom text-white uppercase">
                Featured
              </span>
            ) : null}
          </div>
          <h2 className="text-xl font-custom text-neutral-very-dark-grayish-cyan">
            {job.position}
          </h2>
          <div className="space-x-2 text-neutral-dark-grayish-cyan font-regular">
            <span>{job.postedAt}</span>
            <span>·</span>
            <span>{job.contract}</span>
            <span>·</span>
            <span>{job.location}</span>
          </div>
        </div>
      </div>

      <span className="flex items-center md:hidden">
        <span className="h-px flex-1 bg-neutral-dark-grayish-cyan"></span>
      </span>

      <div className="flex items-center space-x-4">
        {requirements.map((requirement) => (
          <span
            key={requirement}
            className="bg-neutral-light-grayish-cyan px-2 py-1 rounded-md font-custom text-sm text-primary-desaturated-dark-cyan cursor-pointer transition-colors duration-300 hover:bg-primary-desaturated-dark-cyan hover:text-white"
          >
            {requirement}
          </span>
        ))}
      </div>
    </article>
  );
};

{
  /* JobCard Props */
}
JobCard.propTypes = {
  job: PropTypes.object.isRequired,
};
