const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 justify-center items-center">
        <h1 className="text-4xl font-bold leading-none tracking-tighter sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl tracking-widest font-bold">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="max-w-2xl mx-auto text-lg mt-6 leading-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quaerat
        recusandae, non saepe officia suscipit rerum qui soluta animi aperiam!
      </p>
    </>
  );
};

export default About;
