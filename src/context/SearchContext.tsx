import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type SearchContextType = {
  searchIsClicked: boolean;
  //   setSearchIsClicked: Dispatch<SetStateAction<boolean>>;
  handleSearch(searchIsClicked: boolean): void;
};

export const SearchContext = createContext<SearchContextType>({
  searchIsClicked: false,
  //   setSearchIsClicked: () => {},
  handleSearch() {},
});

type ProviderProps = {
  children: ReactNode;
  initial?: boolean;
};

export const SearchContextProvider: React.FC<ProviderProps> = ({
  children,
  initial = false,
}) => {
  const [searchIsClicked, setSearchIsClicked] = useState(initial);

  const handleSearch = (prev: boolean) => {
    setSearchIsClicked((prev) => !prev);
    // const el = document.getElementsByClassName("mapInFeed")[0];
    // const topPos = el.getBoundingClientRect().top;
    // console.log("topPos", topPos);
    // window.scrollTo(0, topPos);
  };

  return (
    <SearchContext.Provider value={{ searchIsClicked, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
