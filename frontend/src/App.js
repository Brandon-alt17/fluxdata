import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from "react-router-dom";

// Formularios y páginas
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Clientes from "./components/Clientes";
import FacturasNotas from "./components/FacturasNotas";
import Inicio from "./components/Inicio";
import FAQ from "./components/FAQ";

// Formulario obligatorio después del login
import FormularioEmpresa from "./components/FormularioEmpresa";

// Páginas con layout
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./components/Dashboard";
import Documentos from "./components/Documentos";
import Historial from "./components/Historial";
import Reportes from "./components/Reportes";
import Ayuda from "./components/Ayuda";
import ConfiguracionTecnica from "./components/ConfiguracionTecnica";

import DashboardAdmin from "./components/DashboardAdmin";
import EmpresasAdmin from "./components/EmpresasAdmin";
import RegistrosAdmin from "./components/RegistrosAdmin";
import TokensAdmin from "./components/TokensAdmin";
import ConfiguracionTecnicaAdmin from "./components/ConfiguracionTecnicaAdmin";


// Wrapper para pasar usuarioId desde params a FormularioEmpresa
const FormularioEmpresaWrapper = () => {
  const { usuarioId } = useParams();
  return <FormularioEmpresa usuarioId={usuarioId} />;
};

// Wrapper para ConfiguracionTecnica obteniendo usuarioId desde localStorage
const ConfiguracionTecnicaWrapper = () => {
  const usuarioId = localStorage.getItem("usuarioId");
  if (!usuarioId) return <Navigate to="/login" />;
  return <ConfiguracionTecnica usuarioId={usuarioId} />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/empresa/:usuarioId" element={<FormularioEmpresaWrapper />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/facturas-notas" element={<FacturasNotas />} />

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/documentos" element={<Documentos />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="/configuracion" element={<ConfiguracionTecnicaWrapper />} />
        </Route>

        <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        <Route path="/admin/empresas" element={<EmpresasAdmin />} />
        <Route path="/admin/registros" element={<RegistrosAdmin />} />
        <Route path="/admin/tokens" element={<TokensAdmin />} />
        <Route path="/admin/configuracion" element={<ConfiguracionTecnicaAdmin />} />
        </Route>


        <Route path="*" element={<Navigate to="/login" />} /> 
      </Routes>
    </Router>
  );
}

export default App;
