import React, { useState, createContext } from "react";

import StorageController from "../storage/storageController"; 

export const AdvisoryContext = createContext({
  searchQuery: "",
  setSearchQuery: () => {},
  loadingData: false,
  setLoadingData: () => {},
  advisoryData: [],
  setAdvisoryData: () => {},
});

const data = require("../data/npm-advisories.json");

const persistAppPrefix = "persist:advisory:";

export default function AdvisoryContextProvider({ children }) {

  const storageControllerInstance = new StorageController(); // TODO: convert to return singleton

  const [searchQuery] = useState(
    storageControllerInstance.loadPersistItem(persistAppPrefix + "searchQuery") || ""
  );
  const setSearchQuery = (value) => {
    storageControllerInstance.savePersistItem(persistAppPrefix + "searchQuery");
  };

  const [orderByFilter] = useState(
    storageControllerInstance.loadPersistItem(persistAppPrefix + "orderByFilter") || ""
  );
  const [severityFilter] = useState(
    storageControllerInstance.loadPersistItem(persistAppPrefix + "severityFilter") || ""
  );
  const [patchedFilter] = useState(
    storageControllerInstance.loadPersistItem(persistAppPrefix + "patchedFilter") || ""
  );

  const setOrderByFilter = (value) => {
    storageControllerInstance.savePersistItem(persistAppPrefix + "orderByFilter", value);
  };
  const setSeverityFilter = (value) => {
    storageControllerInstance.savePersistItem(
      persistAppPrefix + "severityFilter",
      value
    );
  };
  const setPatchedFilter = (value) => {
    storageControllerInstance.savePersistItem(persistAppPrefix + "patchedFilter", value);
  };

  const [loadingData, setLoadingData] = useState(false);

  const setAdvisoryData = (data) => {
    console.log("got data to save", data[1])
    storageControllerInstance.savePersistItem(persistAppPrefix + "advisoryData", data);
  };

  // Filtering method

  const advisoryData = () => {
    let advisoryData = data;
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
