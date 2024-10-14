import React, { useState } from "react";

import StorageController from "../storage/storageController";

export const AdvisoryContext = createContext({
  searchQuery: "",
  setSearchQuery: () => {},
  loadingData: false,
  setLoadingData: () => {}
});

export default function LanguageContextProvider({ children }) {

  // TODO: Build out ability to load / save from localStorage

  const [searchQuery, setSearchQuery] = useState("");
  const [loadingData, setLoadingData] = useState(false);


  return (
    <AdvisoryContext.Provider value={{ searchQuery, setSearchQuery, loadingData, setLoadingData }}>
      {children}
    </AdvisoryContext.Provider>
  );
}
