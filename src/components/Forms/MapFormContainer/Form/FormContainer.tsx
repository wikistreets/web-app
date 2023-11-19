import { MapForm } from "./Form";
import Selector from "@/components/MapFeedContainer/Feed/Selector";

const FormContainer = () => {
  return (
    <>
      <div className="flex flex-col h-full">
        <Selector />
        <MapForm />
      </div>
    </>
  );
};

export default FormContainer;
