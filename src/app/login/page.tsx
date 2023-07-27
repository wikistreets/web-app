import Image from "next/image";
import SplitImg from "../../../public/media/login-signup-img.png";
import LogInForm from "@/components/Forms/LogIn-SignUp/LogInForm";
import Header from "@/components/Header/Header";

type Props = {};

const LogIn = (props: Props) => {
  return (
    <>
      <div className="sm:hidden">
        <Header />
      </div>
      <main
        className="flex flex-col h-screen justify-center items-start
        px-4 sm:px-0
        max-w-sm mx-auto
        sm:grid sm:grid-cols-3 sm:max-w-none
        lg:grid-cols-7"
      >
        <section className="sm:col-span-2 lg:col-span-4 w-full max-w-sm mx-auto h-full justify-center flex flex-col relative">
          <LogInForm />
        </section>

        <figure className="hidden sm:block sm:col-span-1 lg:col-span-3 h-full">
          <Image src={SplitImg} alt={""} className="h-full" />
        </figure>
      </main>
    </>
  );
};

export default LogIn;
