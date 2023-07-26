import LogInForm from "@/components/Forms/LogIn-SignUp/LogInForm";

type Props = {};

const LogIn = (props: Props) => {
  return (
    <section
      className="flex flex-col h-full justify-center gap-8
      px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16"
    >
      <h1 className="font-dm-sans tracking-wide">Welcome back!</h1>
      <LogInForm />
    </section>
  );
};

export default LogIn;
