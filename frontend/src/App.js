import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Facturas from "./pages/Facturas";
import Reportes from "./pages/Reportes";
import Configuracion from "./pages/Configuracion";

const isAuthenticated = true;
function App() {
  return (
    <Router>
      <div className="flex">
        {isAuthenticated && <Sidebar />}

        <div className="flex-1 p-6">
          <Routes>
            {isAuthenticated ? (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/facturas" element={<Facturas />} />
                <Route path="/reportes" element={<Reportes />} />
                <Route path="/configuracion" element={<Configuracion />} />
                <Route path="*" element={<Navigate to="/dashboard" />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login" />} />
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
