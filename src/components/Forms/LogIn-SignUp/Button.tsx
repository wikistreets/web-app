import { Button } from "@/components/ui/button";

type Props = {
  type: string;
};

const FormBtn = (props: Props) => {
  return (
    <Button type="submit" className="text-white w-full">
      {props.type}
    </Button>
  );
};

export default FormBtn;
