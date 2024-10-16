import React, { useContext, useEffect } from "react";

import { Filters } from "./Filters";

import { HeadingOne, Small, Table, Thead, Tbody, Tr, Th, Td } from "ui/library";
import { AdvisoryContext } from "contexts/advisoryContext";
import { ModalContext } from "contexts/modalContext";
import { VulnerabilityModal } from "./VulnerabilityModal";
import { VulnerabilityListing } from "./VulnerabilityListing";

export const Vulnerabilities = () => {
  const { loadingData, advisoryData, setAdvisoryData, filteredAdvisoryData } =
    useContext(AdvisoryContext);
  const { setModalData, setShowModal } = useContext(ModalContext);

  useEffect(() => {
    fetch("../data/npm-advisories.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAdvisoryData(data);
      });
  }, [setAdvisoryData]);

  // For if this gets hooked up to an async process e.g a fetch API...
  // Considered using a faux spinner / delay here.
  if (loadingData) {
    return (
      <div className="md:flex" data-testid="loading-message">
        <p>Loading data...</p>
      </div>
    );
  }

  return (
    <>
      <div className="md:flex md:flex-row-reverse">
        <div className="flex-shrink-0 md:flex-auto md:max-w-xs mb-4 md:mb-0 md:ml-3 p-4 md:p-6">
          <Filters />
        </div>
        <div className="flex-1 md:flex-auto">
          <div className="bg-white border border-gray-300 mx-auto p-4 md:p-6 rounded-lg lg:rounded-xl shadow-sm lg:shadow-md">
            <div className="mb-4">
              <HeadingOne>Security advisories</HeadingOne>
              <Small>{`Showing ${filteredAdvisoryData.length} item${
                filteredAdvisoryData.length === 1 ? "" : "s"
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
                {filteredAdvisoryData ? (
                  filteredAdvisoryData.map((data, i) => (
                    <VulnerabilityListing
                      key={i}
                      listingData={data}
                      className="cursor-pointer"
                      num={i}
                      onClick={() => {
                        setModalData(data);
                        setShowModal(true);
                      }}
                    ></VulnerabilityListing>
                  ))
                ) : (
                  <Tr>
                    <Td colspan="3">
                      <p>There are no advisories to show.</p>
                    </Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          </div>
        </div>
      </div>
      {/* Show this modal by activating context for it's content and visibility toggle */}
      <VulnerabilityModal></VulnerabilityModal>
    </>
  );
};
