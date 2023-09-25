"use client";

import { Button } from "@/components/ui/button";

const LearnMoreButton = () => {
  const handleViewMore = () => {
    console.log("View More clicked!");
  };

  return (
    <Button
      onClick={handleViewMore}
      className="w-fit text-white 
        md:px-6 lg:px-8 xl:px-8 2xl:px-10  
        md:py-4 lg:py-6 xl:py-6 2xl:py-8
        xl:text-lg 2xl:text-xl"
    >
      View more
    </Button>
  );
};

export default LearnMoreButton;
