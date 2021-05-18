import React from "react";

import { Filters } from "./Filters";

import {
  HeadingOne,
  HeadingThree,
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
      <div className="flex-shrink-0 md:flex-auto md:max-w-xs mb-4 md:mb-0 md:ml-3 p-4 md:p-6">
        <Filters />
      </div>

      <div className="flex-1 md:flex-auto">
        <div className="bg-white border border-gray-300 mx-auto p-4 md:p-6 rounded-lg lg:rounded-xl shadow-sm lg:shadow-md">
          <div className="mb-4">
            <HeadingOne>Security advisories</HeadingOne>
            <Small>Showing 15 items</Small>
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
              <Tr>
                <Td>
                  <Small className="block mb-0.5 font-bold">jspdf</Small>
                  <HeadingThree className="mb-1">
                    Cross-site scripting in jspdf
                  </HeadingThree>
                  <Tag theme="success" title="Severity: Low">
                    Low
                  </Tag>
                </Td>
                <Td textAlign="center">
                  <p className="text-gray-600">16th May 2021</p>
                </Td>
                <Td textAlign="center">
                  <Tag theme="info" title="Status: Patched">
                    Patched
                  </Tag>
                </Td>
              </Tr>

              <Tr>
                <Td>
                  <Small className="block mb-0.5 font-bold">postcss</Small>
                  <HeadingThree className="mb-1">
                    Regular Expression Denial of Service
                  </HeadingThree>
                  <Tag theme="warning" title="Severity: High">
                    High
                  </Tag>
                </Td>
                <Td textAlign="center">
                  <p className="text-gray-600">15th May 2021</p>
                </Td>
                <Td textAlign="center">
                  <Tag title="Status: Unpatched">Unpatched</Tag>
                </Td>
              </Tr>

              <Tr>
                <Td>
                  <Small className="block mb-0.5 font-bold">
                    fastify-http-proxy
                  </Small>
                  <HeadingThree className="mb-1">Prefix escape</HeadingThree>
                  <Tag theme="info" title="Severity: Info">
                    Info
                  </Tag>
                </Td>
                <Td textAlign="center">
                  <p className="text-gray-600">15th May 2021</p>
                </Td>
                <Td textAlign="center">
                  <Tag theme="info" title="Status: Patched">
                    Patched
                  </Tag>
                </Td>
              </Tr>

              <Tr>
                <Td>
                  <Small className="block mb-0.5 font-bold">
                    websocket-extensions
                  </Small>
                  <HeadingThree className="mb-1">
                    Regular Expression Denial of Service
                  </HeadingThree>
                  <Tag theme="alert" title="Severity: Moderate">
                    Moderate
                  </Tag>
                </Td>
                <Td textAlign="center">
                  <p className="text-gray-600">14th May 2021</p>
                </Td>
                <Td textAlign="center">
                  <Tag theme="info" title="Status: Patched">
                    Patched
                  </Tag>
                </Td>
              </Tr>

              <Tr>
                <Td>
                  <Small className="block mb-0.5 font-bold">nodemailer</Small>
                  <HeadingThree className="mb-1">
                    Command Injection
                  </HeadingThree>
                  <Tag theme="danger" title="Severity: Critical">
                    Critical
                  </Tag>
                </Td>
                <Td textAlign="center">
                  <p className="text-gray-600">13th May 2021</p>
                </Td>
                <Td textAlign="center">
                  <Tag theme="info" title="Status: Patched">
                    Patched
                  </Tag>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
