import React, { useContext, useEffect } from "react";

import { Filters } from "./Filters";

import { HeadingOne, Small, Table, Thead, Tbody, Tr, Th, P } from "ui/library";
import { AdvisoryContext, ModalContext } from "contexts/";

export const Vulnerabilities = () => {
  const { loadingData, setLoadingData, advisoryData, setAdvisoryData } =
    useContext(AdvisoryContext);

  const { setModalData, setShowModal } = useContext(ModalContext);

  // Always load the data once, on component lifecycle ready
  useEffect(() => {
    setLoadingData(true);

    fetch("../data/npm-advisories.json")
      .then((res) => {
        // Data is loaded
        setAdvisoryData(res.data);
        setLoadingData(false);
      })
      .catch((e) => {
        console.error("Error loading data", e);
      });
  }, []);

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
              <Small>{`Showing ${advisoryData.length} item${
                advisoryData.length == 1 ? "" : "s"
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
                {advisoryData.map((data, i) => {
                  <VulnerabilityListing
                    key={i}
                    listingData={data}
                    className="cursor-pointer"
                    onClick={() => {
                      setModalData(data);
                      setShowModal(true);
                    }}
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
