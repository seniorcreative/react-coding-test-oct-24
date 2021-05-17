import React from "react";

import { HeadingOne, Small, Table, Tr } from "ui/library";

export const Vulnerabilities = () => {
  return (
    <div className="mx-auto bg-white rounded-lg shadow-sm p-8">
      <HeadingOne>Vulnerabilities</HeadingOne>
      <Small>Showing 15 items</Small>

      <Table>
        <thead>
          <Tr>
            <th className="px-2 py-4 text-left">#</th>
            <th className="px-2 py-4">2</th>
            <th className="px-2 py-4">3</th>
          </Tr>
        </thead>

        <tbody>
          <Tr>
            <td className="px-2 py-4">1</td>
            <td className="px-2 py-4 text-center">2</td>
            <td className="px-2 py-4 text-center">3</td>
          </Tr>
          <Tr>
            <td className="px-2 py-4">1</td>
            <td className="px-2 py-4 text-center">2</td>
            <td className="px-2 py-4 text-center">3</td>
          </Tr>
        </tbody>
      </Table>
    </div>
  );
};
