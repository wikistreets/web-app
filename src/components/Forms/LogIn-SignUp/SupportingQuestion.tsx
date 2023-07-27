import Link from "next/link";

type SupportingQuestionProps = {
  ask: string;
  answer: string;
};

const SupportingQuestion = (props: SupportingQuestionProps) => {
  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <h6 className="text-xs font-medium text-secondary">{props.ask}</h6>
      <h6 className="text-xs font-medium">
        {props.answer === "Sign up for free" ? (
          <Link href="/sign-up">{props.answer}</Link>
        ) : (
          <Link href="/login">{props.answer}</Link>
        )}
      </h6>
    </div>
  );
};

export default SupportingQuestion;
