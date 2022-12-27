import { createContext, ReactNode, useContext, useState } from 'react';

type HomeContextData = {
  isScrollingToAboutUs: boolean;
  scrollToAboutUs: () => void;
  isScrollingToContact: boolean;
  scrollToContact: () => void;
  finishScroll: () => void;
};

export const HomeContext = createContext({} as HomeContextData);

type HomeContextProviderProps = {
  children: ReactNode;
};

export function HomeContextProvider({ children }: HomeContextProviderProps) {
  const [isScrollingToAboutUs, setIsScrollingToAboutUs] = useState(false);
  const [isScrollingToContact, setIsScrollingToContact] = useState(false);

  function scrollToAboutUs() {
    setIsScrollingToAboutUs(true);
  }

  function scrollToContact() {
    setIsScrollingToContact(true);
  }

  function finishScroll() {
    setIsScrollingToAboutUs(false);
    setIsScrollingToContact(false);
  }

  return (
    <HomeContext.Provider
      value={{
        isScrollingToAboutUs,
        scrollToAboutUs,
        isScrollingToContact,
        scrollToContact,
        finishScroll,
      }}>
      {children}
    </HomeContext.Provider>
  );
}

export const useHome = () => {
  return useContext(HomeContext);
};
