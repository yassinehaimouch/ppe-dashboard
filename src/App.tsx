import {Route, Routes } from "react-router-dom";
import { Violations } from "@/pages/violations";
import { QueryClient, QueryClientProvider } from "react-query";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";
import Header from "./components/Header";
import { Dashboard } from "./pages/dashboard";
import { Contractors } from "./pages/contractors";
import { Ppes } from "./pages/ppes";
import { Workers } from "./pages/workers";

const queryClient = new QueryClient();
function App() {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <div className="flex bg-[#F2F2F2]">
      <QueryClientProvider client={queryClient}>
        <Sidebar isOpened={isOpened} setIsOpened={setIsOpened} />
        <div className="w-full">
          <Header isOpened={isOpened} setIsOpened={setIsOpened} />
            <Routes>
              <Route path="/" element={<h1>Hello</h1>} />
              <Route path="violations" element={<Violations />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="contractors" element={<Contractors />} />
              <Route path="ppes" element={<Ppes />} />
              <Route path="workers" element={<Workers />} />
            </Routes>
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default App;
