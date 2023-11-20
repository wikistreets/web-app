import Header from "@/components/MapFeedContainer/Feed/Header";
import Posts from "./Posts";
import SearchContextProvider from "@/context/SearchContext";
import { Data } from "@/types/data";

// TODO: create UserContext
export const Container = ({ data }: Data) => {
  return (
    <SearchContextProvider>
      <section className="relative flex flex-col items-center justify-start h-full container">
        <Header />
        <Posts data={data} />
      </section>
    </SearchContextProvider>
  );
};