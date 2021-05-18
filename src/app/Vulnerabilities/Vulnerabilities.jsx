import React from "react";

import { Filters } from "./Filters";

import {
  HeadingTwo,
  Small,
  Tag,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "ui/library";

export const Vulnerabilities = () => {
  return (
    <div className="md:flex md:flex-row-reverse">
      <div className="flex-shrink-0 md:flex-auto mb-4 md:mb-0 md:ml-3 p-4 md:p-6">
        <Filters />
      </div>

      <div className="flex-1 md:flex-auto">
        <div className="bg-white border border-gray-300 mx-auto p-4 md:p-6 rounded-lg shadow-sm">
          <HeadingTwo>Security advisories</HeadingTwo>
          <Small>Showing 15 items</Small>

          <Table>
            <Thead>
              <Tr>
                <Th textAlign="left">Advisory</Th>
                <Th>Date of advisory</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td>
                  <Small className="block mb-0.5 font-bold">jspdf</Small>
                  <p className="font-bold mb-1 text-gray-700">
                    Cross-site scripting in jspdf
                  </p>
                  <Tag theme="success">Low</Tag>
                </Td>
                <Td textAlign="center">16th May 2021</Td>
                <Td textAlign="center">
                  <Tag theme="info">Patched</Tag>
                </Td>
              </Tr>

              <Tr>
                <Td>
                  <Small className="block mb-0.5 font-bold">postcss</Small>
                  <p className="font-bold mb-1 text-gray-700">
                    Regular Expression Denial of Service
                  </p>
                  <Tag theme="warning">High</Tag>
                </Td>
                <Td textAlign="center">15th May 2021</Td>
                <Td textAlign="center">
                  <Tag>Unpatched</Tag>
                </Td>
              </Tr>

              <Tr>
                <Td>
                  <Small className="block mb-0.5 font-bold">
                    fastify-http-proxy
                  </Small>
                  <p className="font-bold mb-1 text-gray-700">Prefix escape</p>
                  <Tag theme="info">Info</Tag>
                </Td>
                <Td textAlign="center">15th May 2021</Td>
                <Td textAlign="center">
                  <Tag theme="info">Patched</Tag>
                </Td>
              </Tr>

              <Tr>
                <Td>
                  <Small className="block mb-0.5 font-bold">postcss</Small>
                  <p className="font-bold mb-1 text-gray-700">
                    Regular Expression Denial of Service
                  </p>
                  <Tag theme="alert">Moderate</Tag>
                </Td>
                <Td textAlign="center">14th May 2021</Td>
                <Td textAlign="center">
                  <Tag theme="info">Patched</Tag>
                </Td>
              </Tr>

              <Tr>
                <Td>
                  <Small className="block mb-0.5 font-bold">nodemailer</Small>
                  <p className="font-bold mb-1 text-gray-700">
                    Command Injection
                  </p>
                  <Tag theme="danger">Critical</Tag>
                </Td>
                <Td textAlign="center">13th May 2021</Td>
                <Td textAlign="center">
                  <Tag theme="info">Patched</Tag>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
