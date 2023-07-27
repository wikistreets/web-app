import { Button } from "../../ui/button";

type LogInBtnProps = {
  type: string;
};

const FormBtn = (props: LogInBtnProps) => {
  return (
    <Button type="submit" className="text-white w-full">
      {props.type}
    </Button>
  );
};

export default FormBtn;
