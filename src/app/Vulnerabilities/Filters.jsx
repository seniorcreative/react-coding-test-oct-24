import React from "react";

import {
  Button,
  CheckLabel,
  Fieldset,
  HeadingTwo,
  Label,
  Radio,
} from "ui/library";

export const Filters = () => {
  return (
    <>
      <HeadingTwo>Filters</HeadingTwo>

      <Fieldset>
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

      <Fieldset>
        <Label>Order by</Label>

        <CheckLabel>
          <Radio name="order-by" value="newest" />
          Newest first
        </CheckLabel>

        <CheckLabel>
          <Radio name="order-by" value="oldest" />
          Oldest first
        </CheckLabel>
      </Fieldset>

      <Fieldset>
        <Label>Severity</Label>

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
          Info
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
          Low
        </CheckLabel>

        <CheckLabel>
          <input
            type="checkbox"
            class="form-checkbox mr-2 rounded text-blue-500"
          />
          Critical
        </CheckLabel>
      </Fieldset>

      <Fieldset>
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
