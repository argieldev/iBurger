import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Pages/Login";
import Dashboard from "./components/Pages/Dashboard";
import Landing from "./components/Pages/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <div>
            {/* Nav here */}

            <main>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
