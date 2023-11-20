import Link from "next/link";

type Props = {
  ask: string;
  answer: string;
};

export const SupportingQuestion: React.FC<Props> = ({ ask, answer }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <h6 className="text-xs font-medium text-secondary">{ask}</h6>
      <h6 className="text-xs font-medium">
        {answer === "Sign up for free" ? (
          <Link href="/sign-up">{answer}</Link>
        ) : (
          <Link href="/login">{answer}</Link>
        )}
      </h6>
    </div>
  );
};