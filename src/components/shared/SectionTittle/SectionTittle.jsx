
const SectionTittle = ({subHeading,heading}) => {
    return (
      <div className="md:w-3/12 mx-auto text-center">
        <p className="mb-2 capitalize text-lg font-semibold text-[#800080]">--- {subHeading} ---</p>
        <h2 className="border-y-4 text-4xl p-2 uppercase border-double rounded-full border-[#800080]">{heading}</h2>
      </div>
    );
};

export default SectionTittle;