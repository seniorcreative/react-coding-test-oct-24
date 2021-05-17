import "./App.css";

import { Vulnerabilities } from "./app/Vulnerabilities/Vulnerabilities";

function App() {
  return (
    <div className="bg-gray-200 h-screen">
      <div className="container mx-auto p-4">
        <Vulnerabilities />
      </div>
    </div>
  );
}

export default App;
