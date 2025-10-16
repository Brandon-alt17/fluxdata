import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/Logo.png";
import B from "../assets/B.png";
import D1 from "../assets/D1.png";
import E from "../assets/E.png";
import R1 from "../assets/R1.png";
import T from "../assets/T.png";
import L from "../assets/L.png"; // (si tienes un ícono para Logs Auditoría)
import C from "../assets/C.png";
import C2 from "../assets/C2.png";

export default function AdminLayout() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3000/api/logout", {
        method: "POST",
        credentials: "include",
      });
      localStorage.removeItem("token");
      navigate("/login");
    } catch (err) {
      console.error("Error cerrando sesión", err);
      navigate("/login");
    }
  };

  return (
    <div className="flex bg-gray-100 font-worksans min-h-screen">
      {/* Barra lateral */}
      <aside
        className={`fixed top-0 left-0 flex flex-col bg-[#1f2937] text-white transition-all duration-300
        ${collapsed ? "w-32" : "w-80"} h-screen`}
      >
        {/* Encabezado con logo */}
        <div
          className={`flex items-center p-4 border-b border-gray-700 ${
            collapsed ? "justify-center" : "justify-between"
          }`}
        >
          {!collapsed && (
            <img src={Logo} alt="Logo" className="h-14 w-auto object-contain" />
          )}
          <img
            src={B}
            alt="Colapsar barra"
            className="h-7 w-7 cursor-pointer"
            onClick={() => setCollapsed(!collapsed)}
          />
        </div>

        {/* Navegación */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          <nav className="flex flex-col space-y-3 p-4">
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `flex items-center ${
                  collapsed ? "justify-center" : "gap-6 pl-6 justify-start"
                } px-3 py-3 rounded-md transition ${
                  isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700/60"
                }`
              }
            >
              <img src={D1} alt="Dashboard" className="h-7 w-7" />
              {!collapsed && <span>Dashboard</span>}
            </NavLink>

            <NavLink
              to="/admin/empresas"
              className={({ isActive }) =>
                `flex items-center ${
                  collapsed ? "justify-center" : "gap-6 pl-6 justify-start"
                } px-3 py-3 rounded-md transition ${
                  isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700/60"
                }`
              }
            >
              <img src={E} alt="Empresas" className="h-7 w-7" />
              {!collapsed && <span>Empresas</span>}
            </NavLink>

            <NavLink
              to="/admin/registros"
              className={({ isActive }) =>
                `flex items-center ${
                  collapsed ? "justify-center" : "gap-6 pl-6 justify-start"
                } px-3 py-3 rounded-md transition ${
                  isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700/60"
                }`
              }
            >
              <img src={R1} alt="Registros" className="h-7 w-7" />
              {!collapsed && <span>Registros</span>}
            </NavLink>

            <NavLink
              to="/admin/tokens"
              className={({ isActive }) =>
                `flex items-center ${
                  collapsed ? "justify-center" : "gap-6 pl-6 justify-start"
                } px-3 py-3 rounded-md transition ${
                  isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700/60"
                }`
              }
            >
              <img src={T} alt="Tokens API" className="h-7 w-7" />
              {!collapsed && <span>Tokens API</span>}
            </NavLink>

            <NavLink
              to="/admin/logs"
              className={({ isActive }) =>
                `flex items-center ${
                  collapsed ? "justify-center" : "gap-6 pl-6 justify-start"
                } px-3 py-3 rounded-md transition ${
                  isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700/60"
                }`
              }
            >
              <img src={L} alt="Logs Auditoría" className="h-7 w-7" />
              {!collapsed && <span>Logs Auditoría</span>}
            </NavLink>

            <NavLink
              to="/admin/configuracion"
              className={({ isActive }) =>
                `flex items-center ${
                  collapsed ? "justify-center" : "gap-6 pl-6 justify-start"
                } px-3 py-3 rounded-md transition ${
                  isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700/60"
                }`
              }
            >
              <img src={C} alt="Configuración" className="h-7 w-7" />
              {!collapsed && <span>Configuración Técnica</span>}
            </NavLink>
          </nav>
        </div>

        {/* Botón salir */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className={`flex items-center w-full px-3 py-3 rounded-md hover:bg-gray-700/60 transition ${
              collapsed ? "justify-center" : "gap-5 justify-start"
            }`}
          >
            <img src={C2} alt="Cerrar sesión" className="h-7 w-7" />
            {!collapsed && <span>Cerrar sesión</span>}
          </button>
        </div>
      </aside>

      {/* Contenido principal */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          collapsed ? "ml-32" : "ml-80"
        }`}
      >
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
