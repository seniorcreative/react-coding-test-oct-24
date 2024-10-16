import React, { useState, createContext, useEffect } from "react";
import StorageController from "../storage/storageController";

export const AdvisoryContext = createContext({
  searchQuery: "",
  setSearchQuery: () => {},
  loadingData: false,
  setLoadingData: () => {},
  advisoryData: [],
  setAdvisoryData: () => {},
});

// TODO: Move to config
const PERSIST_PREFIX = "persist:advisory:";
const SEARCH_MIN_LENGTH = 3;

export default function AdvisoryContextProvider({ children }) {
  const storageControllerInstance = new StorageController(); // TODO: convert to return singleton

  const [searchQuery, overrideSearchQuery] = useState(
    storageControllerInstance.loadPersistItem(PERSIST_PREFIX + "searchQuery") ||
      ""
  );
  const setSearchQuery = (value) => {
    storageControllerInstance.savePersistItem(
      PERSIST_PREFIX + "searchQuery",
      value
    );
    overrideSearchQuery(value);
  };

  const [orderByFilter, overrideOrderByFilter] = useState(
    storageControllerInstance.loadPersistItem(
      PERSIST_PREFIX + "orderByFilter"
    ) || []
  );
  const [severityFilter, overrideSeverityFilter] = useState(
    storageControllerInstance.loadPersistItem(
      PERSIST_PREFIX + "severityFilter"
    ) || []
  );
  const [patchedFilter, overridePatchedFilter] = useState(
    storageControllerInstance.loadPersistItem(
      PERSIST_PREFIX + "patchedFilter"
    ) || []
  );

  const setOrderByFilter = ([value, checked]) => {
    console.log("value", value, "checked", checked);
    storageControllerInstance.savePersistItem(
      PERSIST_PREFIX + "orderByFilter",
      value
    );
    overrideOrderByFilter(value);
  };

  // This will toggle presence of multiple strings in an array.
  // Suggest converting it to a util function.
  const setSeverityFilter = ([name, checked]) => {
    let currentPersistItem =
      JSON.parse(
        storageControllerInstance.loadPersistItem(
          PERSIST_PREFIX + "severityFilter"
        )
      ) || [];
    if (checked) {
      currentPersistItem.push(name);
    } else {
      currentPersistItem.splice(currentPersistItem.indexOf(name), 1);
    }
    storageControllerInstance.savePersistItem(
      PERSIST_PREFIX + "severityFilter",
      JSON.stringify(currentPersistItem)
    );
    overrideSeverityFilter(JSON.stringify(currentPersistItem));
  };

  const setPatchedFilter = (value) => {
    storageControllerInstance.savePersistItem(
      PERSIST_PREFIX + "patchedFilter",
      value
    );
  };

  const [loadingData, setLoadingData] = useState(false);

  const [advisoryData, setAdvisoryData] = useState([]);

  const [filteredAdvisoryData, setFilteredAdvisoryData] = useState([]);

  // TODO: Break out methods in this userEffect - complexity is too high
  useEffect(() => {
    if (!advisoryData.length) {
      return;
    }
    let filteredData = advisoryData;

    // Apply filters for search query on module_name and advisory title
    console.log("searchQuery", searchQuery);

    if (searchQuery.length >= SEARCH_MIN_LENGTH) {
      filteredData = filteredData.filter((e) => e.title.toLowerCase().includes(searchQuery.toLowerCase()) || e.module_name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    if (JSON.parse(severityFilter).length > 0) {
      filteredData = filteredData.filter((e) =>
        JSON.parse(severityFilter)
          .map((s) => s.toLowerCase())
          .includes(e.severity.toLowerCase())
      );
    }

    if (patchedFilter) {
      filteredData = filteredData.filter((e) =>
        patchedFilter ? e.cves.length > 0 : e.cves.length === 0
      );
    }

    // Apply Sorting
    switch (String(orderByFilter).toLowerCase()) {
      case "newest":
        filteredData.sort(function (a, b) {
          return new Date(b.created) - new Date(a.created);
        });
        break;
      case "oldest":
      default:
        filteredData.sort(function (a, b) {
          return new Date(a.created) - new Date(b.created);
        });
        break;
    }
    console.log("edited filter data", filteredData);

    setFilteredAdvisoryData(filteredData);
  }, [severityFilter, searchQuery, advisoryData, orderByFilter, patchedFilter]);

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
        filteredAdvisoryData,
      }}
    >
      {children}
    </AdvisoryContext.Provider>
  );
}
