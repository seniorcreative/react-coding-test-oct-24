import React, { useEffect } from "react";

import { Filters } from "./Filters";

import { HeadingOne, Small, Table, Thead, Tbody, Tr, Th, P } from "ui/library";
import { AdvisoryContext } from "contexts/advisoryContext";

export const Vulnerabilities = () => {
  const { loadingData, setLoadingData, advisoryData, setAdvisoryData } =
    useContext(AdvisoryContext);

  useEffect(() => {
    setLoadingData(true);

    fetch("../data/npm-advisories.json")
      .then((res) => {
        // Data is loaded
        setLoadedData(res.data);
        setAdvisoryData(false);
      })
      .catch((e) => {
        console.error("Error loading data", e);
      });
  });

  if (loadingData) {
    return (
      <div className="md:flex">
        <P>Loading data...</P>
      </div>
    );
  }

  if (advisoryData && advisoryData.length) {
    return (
      <div className="md:flex md:flex-row-reverse">
        <div className="flex-shrink-0 md:flex-auto md:max-w-xs mb-4 md:mb-0 md:ml-3 p-4 md:p-6">
          <Filters />
        </div>
        <div className="flex-1 md:flex-auto">
          <div className="bg-white border border-gray-300 mx-auto p-4 md:p-6 rounded-lg lg:rounded-xl shadow-sm lg:shadow-md">
            <div className="mb-4">
              <HeadingOne>Security advisories</HeadingOne>
              <Small>{`Showing ${npmAdvisories.length} item${
                npmAdvisories.length == 1 ? "" : "s"
              }`}</Small>
            </div>
            <Table>
              <Thead>
                <Tr>
                  <Th textAlign="left">Advisory</Th>
                  <Th>Date of advisory</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>

              <Tbody>
                {npmAdvisories.map((data, i) => {
                  <VulnerabilityListing
                    key={i}
                    listingData={data}
                  ></VulnerabilityListing>;
                })}
              </Tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="md:flex">
        <P>There are no advisories to show.</P>
      </div>
    );
  }
};
