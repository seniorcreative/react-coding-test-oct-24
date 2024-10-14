import AdvisoryContextProvider  from "contexts/advisoryContext";
import ModalContextProvider  from "contexts/modalContext";
import "./App.css";

import { Vulnerabilities } from "./app/Vulnerabilities/Vulnerabilities";

function App() {
  return (
    <AdvisoryContextProvider>
      <ModalContextProvider>
        <div className="bg-gray-200 h-full">
          <div
            data-testid="VulnerabilitiesContainer"
            className="container mx-auto p-4 lg:p-6 xl:p-8"
          >
            <Vulnerabilities />
          </div>
        </div>
      </ModalContextProvider>
    </AdvisoryContextProvider>
  );
}

export default App;
