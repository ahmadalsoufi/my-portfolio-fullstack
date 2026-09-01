const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className="text-center text-slate-700 dark:bg-slate-700 dark:text-slate-50">
        {children}
      </section>
    </>
  );
};

export default HomeLayout;
