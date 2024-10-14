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
  const [searchQuery] = useState(
    StorageController.getPersistItem(persistAppPrefix + "searchQuery") || ""
  );
  const setSearchQuery = (value) => {
    StorageController.setPersistItem(persistAppPrefix + "searchQuery");
  };

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
    StorageController.setPersistItem(
      persistAppPrefix + "severityFilter",
      value
    );
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
    let advisoryData = StorageController.getPersistItem(
      persistAppPrefix + "advisoryData"
    );
    // Apply filters for search query on module_name and advisory title
    filteredData = advisoryData.filter(
      (e) =>
        String(e.module_name)
          .toLowerCase()
          .contains(searchQuery.toLowerCase()) ||
        String(e.title.toLowerCase()).contains(searchQuery.toLowerCase())
    );
    // Apply filters for severity
    filteredData = filteredData.filter(
      (e) => e.severity.toLowerCase() === severityFilter
    );
    filteredData = filteredData.filter((e) =>
      patchedFilter ? e.cves.length > 0 : e.cves.length == 0
    );
    // Apply Sorting
    switch (orderByFilter.toLowerCase()) {
      case "newest":
        filteredData.reduce((a, b) => {
          return new Date(a.created).getTime() < new Date(b.created).getTime();
        });
        break;
      case "oldest":
      default:
        filteredData.reduce((a, b) => {
          return new Date(a.created).getTime() > new Date(b.created).getTime();
        });
        break;
    }
  };

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
