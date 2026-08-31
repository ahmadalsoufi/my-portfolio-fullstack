import AboutPreview from "./AboutPreview";

const AboutPage = () => {
  return (
    <>
      <section className="max-w-5xl mx-auto">
        <AboutPreview detailed={true} />
      </section>
    </>
  );
};

export default AboutPage;
