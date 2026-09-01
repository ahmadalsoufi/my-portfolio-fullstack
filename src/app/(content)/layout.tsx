import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className="mx-auto max-w-5xl">{children}</section>
    </>
  );
};

export default layout;
