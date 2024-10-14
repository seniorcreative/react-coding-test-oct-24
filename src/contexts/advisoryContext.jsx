import React, { useState } from "react";

import StorageController from "../storage/storageController";

export const AdvisoryContext = createContext({
  searchQuery: "",
  setSearchQuery: () => {},
  loadingData: false,
  setLoadingData: () => {},
  advisoryData: [],
  setAdvisoryData: () => {},
});

const persistAppPrefix = "persist:advisory:";

export default function LanguageContextProvider({ children }) {
  // TODO: Build out ability to load / save from localStorage

  const [searchQuery] = useState(StorageController.getPersistItem(persistAppPrefix + "searchQuery") || "");
  const setSearchQuery = (value) => {
    StorageController.setPersistItem(persistAppPrefix + "searchQuery");

    // Also here
  }

  const [orderByFilter] = useState(
    StorageController.getPersistItem(persistAppPrefix + "orderByFilter") || ""
  );
  const [severityFilter] = useState(
    StorageController.getPersistItem(persistAppPrefix + "severityFilter") || ""
  );
  const [patchedFilter] = useState(
    StorageController.getPersistItem(persistAppPrefix + "patchedFilter") || ""
  );

  const setOrderByFilter = (value) => {
    StorageController.setPersistItem(persistAppPrefix + "orderByFilter", value);
  };
  const setSeverityFilter = (value) => {
    StorageController.setPersistItem(persistAppPrefix + "severityFilter", value);
  };
  const setPatchedFilter = (value) => {
    StorageController.setPersistItem(persistAppPrefix + "patchedFilter", value);
  };

  const [loadingData, setLoadingData] = useState(false);

  const setAdvisoryData = (data) => {
    StorageController.setPersistItem(persistAppPrefix + "advisoryData", data);
  };

  // Filtering method

  const advisoryData = () => {
    let advisoryData = StorageController.getPersistItem(persistAppPrefix + "advisoryData")
    // Apply filters for severity
    filteredData = advisoryData.filter((e) => e.severity.toLowerCase() === severityFilter);
    filteredData = advisoryData.filter((e) => patchedFilter ? e.cves.length > 0 : e.cves.length == 0);
    
    // Apply Sorting
  }

  return (
    <AdvisoryContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        orderByFilter,
        setOrderByFilter,
        severityFilter,
        setSeverityFilter,
        patchedFilter,
        setPatchedFilter,
        loadingData,
        setLoadingData,
        advisoryData,
        setAdvisoryData,
      }}
    >
      {children}
    </AdvisoryContext.Provider>
  );
}
