import React from "react";

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <section className="flex justify-center">{children}</section>
      </div>
    </>
  );
};

export default ContactLayout;
