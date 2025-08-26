import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const links = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/facturas", label: "Facturas" },
    { to: "/reportes", label: "Reportes" },
    { to: "/configuracion", label: "Configuración" },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Facta</h2>
      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`p-2 rounded-lg transition ${
              location.pathname === link.to
                ? "bg-blue-600"
                : "hover:bg-gray-700"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
