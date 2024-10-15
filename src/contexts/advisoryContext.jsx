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

const persistAppPrefix = "persist:advisory:";

export default function AdvisoryContextProvider({ children }) {
  const storageControllerInstance = new StorageController(); // TODO: convert to return singleton

  const [searchQuery] = useState(
    storageControllerInstance.loadPersistItem(
      persistAppPrefix + "searchQuery"
    ) || ""
  );
  const setSearchQuery = (value) => {
    storageControllerInstance.savePersistItem(persistAppPrefix + "searchQuery");
  };

  const [orderByFilter, overrideOrderByFilter] = useState(
    storageControllerInstance.loadPersistItem(
      persistAppPrefix + "orderByFilter"
    ) || []
  );
  const [severityFilter, overrideSeverityFilter] = useState(
    storageControllerInstance.loadPersistItem(
      persistAppPrefix + "severityFilter"
    ) || []
  );
  const [patchedFilter, overridePatchedFilter] = useState(
    storageControllerInstance.loadPersistItem(
      persistAppPrefix + "patchedFilter"
    ) || []
  );

  const setOrderByFilter = ([value, checked]) => {
    console.log("value", value, "checked", checked);
    storageControllerInstance.savePersistItem(
      persistAppPrefix + "orderByFilter",
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
          persistAppPrefix + "severityFilter"
        )
      ) || [];
    if (checked) {
      currentPersistItem.push(name);
    } else {
      currentPersistItem.splice(currentPersistItem.indexOf(name), 1);
    }
    storageControllerInstance.savePersistItem(
      persistAppPrefix + "severityFilter",
      JSON.stringify(currentPersistItem)
    );
    overrideSeverityFilter(JSON.stringify(currentPersistItem));
  };

  const setPatchedFilter = (value) => {
    storageControllerInstance.savePersistItem(
      persistAppPrefix + "patchedFilter",
      value
    );
  };

  const [loadingData, setLoadingData] = useState(false);

  const [advisoryData, setAdvisoryData] = useState([]);

  const [filteredAdvisoryData, setFilteredAdvisoryData] = useState([]);

  useEffect(() => {
    // const filteredAdvisoryData = () => {
    if (!advisoryData.length) {
      return;
    }
    let filteredData = advisoryData;

    // console.log("local data", advisoryData);

    // let advisoryData = data;
    // Apply filters for search query on module_name and advisory title
    // console.log("searchQuery", searchQuery);

    // filteredData = advisoryData;

    // filteredData = searchQuery ? advisoryData.filter(
    //   ([module_name, title]) =>
    //     String(module_name.toLowerCase())
    //       .includes(searchQuery.toLowerCase()) ||
    //     String(title.toLowerCase()).includes(searchQuery.toLowerCase())
    // ) : advisoryData;
    
    if (JSON.parse(severityFilter).length > 0) {
      filteredData = filteredData.filter(
        (e) => JSON.parse(severityFilter).map((s) => s.toLowerCase()).includes(e.severity.toLowerCase())
      );
    }
    
    // filteredData = filteredData.filter((e) =>
    //   patchedFilter ? e.cves.length > 0 : e.cves.length === 0
    // );
    // Apply Sorting
    console.log("String(orderByFilter).toLowerCase()", String(orderByFilter).toLowerCase());
    switch (String(orderByFilter).toLowerCase()) {
      case "newest":
        filteredData.sort(function(a, b){ 
          return new Date(b.created) - new Date(a.created);
        });
        break;
      case "oldest":
      default:
        filteredData.sort(function(a, b) {
          return new Date(a.created) - new Date(b.created);
        });
        break;
    }
    console.log("edited filter data", filteredData);
    setFilteredAdvisoryData(filteredData);
    // };
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
