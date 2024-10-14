import React, { useContext, useEffect } from "react";

import { Filters } from "./Filters";

import { HeadingOne, Small, Table, Thead, Tbody, Tr, Th, P } from "ui/library";
import { AdvisoryContext } from "contexts/advisoryContext";
import { ModalContext } from "contexts/modalContext";
import { VulnerabilityModal } from "./VulnerabilityModal";

export const Vulnerabilities = () => {
  const { loadingData, advisoryData } = useContext(AdvisoryContext);
  const { setModalData, setShowModal } = useContext(ModalContext);

  // For if this gets hooked up to an async process e.g a fetch API...
  if (loadingData) {
    return (
      <div className="md:flex" data-testid="loading-message">
        <p>Loading data...</p>
      </div>
    );
  }

  if (advisoryData && advisoryData.length) {
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
        {/* Show this modal by activating context for it's content and visibility toggle */}
        <VulnerabilityModal></VulnerabilityModal>
      </>
    );
  } else {
    return (
      <div className="md:flex">
        <p>There are no advisories to show. {advisoryData.length}</p>
      </div>
    );
  }
};
