import React from "react";

import { Button, CheckLabel, Fieldset, HeadingTwo, Label } from "ui/library";

export const Filters = () => {
  return (
    <>
      <HeadingTwo>Filters</HeadingTwo>

      <Fieldset className="mt-2 mb-6">
        <Label for="search">Search</Label>

        <div class="flex items-center mb-2">
          <input
            className="block border-1 border-gray-300 form-input mr-2 placeholder-gray-400 px-3 py-2 rounded-lg w-full"
            type="text"
            id="search"
            placeholder="eg. postcss"
          />
          <Button>&rarr;</Button>
        </div>
      </Fieldset>

      <Fieldset className="mt-2 mb-6">
        <Label>Order by</Label>

        <CheckLabel>
          <input
            type="radio"
            name="order-by"
            class="form-radio mr-2 rounded-full text-blue-500"
          />
          Newest first
        </CheckLabel>

        <CheckLabel>
          <input
            type="radio"
            name="order-by"
            class="form-radio mr-2 rounded-full text-blue-500"
          />
          Oldest first
        </CheckLabel>
      </Fieldset>

      <Fieldset className="mt-2 mb-6">
        <Label>Severity</Label>

        <CheckLabel>
          <input
            type="checkbox"
            class="form-checkbox mr-2 rounded text-blue-500"
          />
          Info
        </CheckLabel>

        <CheckLabel>
          <input
            type="checkbox"
            class="form-checkbox mr-2 rounded text-blue-500"
          />
          Low
        </CheckLabel>

        <CheckLabel>
          <input
            type="checkbox"
            class="form-checkbox mr-2 rounded text-blue-500"
          />
          Moderate
        </CheckLabel>

        <CheckLabel>
          <input
            type="checkbox"
            class="form-checkbox mr-2 rounded text-blue-500"
          />
          High
        </CheckLabel>

        <CheckLabel>
          <input
            type="checkbox"
            class="form-checkbox mr-2 rounded text-blue-500"
          />
          Critical
        </CheckLabel>
      </Fieldset>

      <Fieldset className="mt-2 mb-6">
        <Label>Status</Label>

        <CheckLabel>
          <input
            type="checkbox"
            class="form-checkbox mr-2 rounded text-blue-500"
          />
          Patched
        </CheckLabel>

        <CheckLabel>
          <input
            type="checkbox"
            class="form-checkbox mr-2 rounded text-blue-500"
          />
          Unpatched
        </CheckLabel>
      </Fieldset>
    </>
  );
};
