import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className="mx-auto flex max-w-5xl justify-center">
        {children}
      </section>
    </>
  );
};

export default layout;
