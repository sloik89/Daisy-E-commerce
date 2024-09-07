const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h3 className="text-3xl capitalize font-bold text-center mt-[4rem]">
      {title}
      <div className="divider"></div>
    </h3>
  );
};

export default SectionTitle;
