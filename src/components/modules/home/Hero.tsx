const HeroSection = () => {
  return (
    <div className='h-screen bg-cover bg-no-repeat bg-center bg-black/50 bg-blend-darken bg-[url("/hero.png")]'>
      <div className=" w-11/12 mx-auto flex flex-col justify-center h-full">
        <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold">
          Next Generation Energy with <br />
          <span className="relative top-5 bottom-5 text-red-500 bg-primary p-2 rounded-md">
            PowerSync
          </span>
        </h1>
        <p className="mt-16 text-justify text-white  text-xl sm:w-11/12 md:w-2/3 lg:w-3/5">
          Never be caught off guard by power outages. Stay updated on
          load-shedding schedules, report electricity issues, and keep your
          daily life running smoothly with PowerSync.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
