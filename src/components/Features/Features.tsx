import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section
      className="w-full flex flex-col justify-center items-center
      gap-8 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16
      px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16
      py-8 sm:py-10"
    >
      <h2 className="text-center font-dm-sans tracking-wide md:text-2xl lg:text-3xl xl:text-4xl">
        Map Just As You&apos;d Imagine
      </h2>
      <FeatureCard />
    </section>
  );
};

export default Features;
