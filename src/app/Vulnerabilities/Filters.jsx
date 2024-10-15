import React, { useContext } from "react";
import { AdvisoryContext } from "contexts/advisoryContext";

import {
  Button,
  CheckLabel,
  Fieldset,
  HeadingTwo,
  Label,
  Radio,
} from "ui/library";

export const Filters = () => {
  const orderOptions = ["Newest", "Oldest"];
  const severityOptions = ["High", "Info", "Moderate", "Low", "Critical"];
  const patchedOptions = ["Patched", "Unpatched"];

  const {
    setSearchQuery,
    setOrderByFilter,
    orderByFilter,
    severityFilter,
    setSeverityFilter,
    patchedFilter,
    setPatchedFilter,
  } = useContext(AdvisoryContext);

  return (
    <>
      <HeadingTwo>Filters</HeadingTwo>

      <Fieldset>
        <Label for="search">Search</Label>

        <div className="flex items-center mb-2">
          <input
            className="block border-1 border-gray-300 form-input mr-2 placeholder-gray-400 px-3 py-2 rounded-lg w-full"
            type="text"
            id="search"
            placeholder="eg. postcss"
            onChange={(e) => setSearchQuery(e.currentTarget.value)}
          />
          <Button>&rarr;</Button>
        </div>
      </Fieldset>

      <Fieldset>
        <Label>Order by {orderByFilter}</Label>
        {orderOptions.map((orderValue) => (
          <CheckLabel key={orderValue}>
            <Radio
              name="order-by"
              value={orderValue}
              checked={orderValue === orderByFilter}
              onChange={(e) => {
                console.log("changing sort", e.currentTarget.checked, e.currentTarget.value);
                setOrderByFilter([
                  e.currentTarget.value,
                  e.currentTarget.checked,
                ]);
              }}
            />
            {`${orderValue} first`}
          </CheckLabel>
        ))}
      </Fieldset>

      <Fieldset>
        <Label>Severity</Label>
        {severityOptions.map((severityValue) => (
          <CheckLabel key={severityValue}>
            <input
              type="checkbox"
              value={severityValue}
              checked={severityFilter.indexOf(severityValue) !== -1}
              className={`form-checkbox mr-2 rounded ${
                severityFilter === severityValue
                  ? "text-blue-900 underline"
                  : "text-blue-500"
              }`}
              onChange={(e) => {
                setSeverityFilter([
                  e.currentTarget.value,
                  e.currentTarget.checked,
                ]);
              }}
            />
            {severityValue}
          </CheckLabel>
        ))}
      </Fieldset>

      <Fieldset>
        <Label>Status</Label>
        {patchedOptions.map((patchedValue) => (
          <CheckLabel key={patchedValue}>
            <input
              type="checkbox"
              className={`form-checkbox mr-2 rounded ${
                patchedFilter === patchedValue
                  ? "text-blue-900 underline"
                  : "text-blue-500"
              }`}
              onChange={(e) =>
                setPatchedFilter([
                  e.currentTarget.value,
                  e.currentTarget.checked,
                ])
              }
            />
            {patchedValue}
          </CheckLabel>
        ))}
      </Fieldset>
    </>
  );
};
