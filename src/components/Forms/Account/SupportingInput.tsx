import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

export const SupportingInput: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row justify-start items-center gap-2">
        <Checkbox className="border-gray-200" />
        <label
          htmlFor="rememberMe"
          className="text-xs text-secondary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Remember me
        </label>
      </div>
      <Link href="/" className="text-indigo-600 text-xs">
        Forgot password?
      </Link>
    </div>
  );
};