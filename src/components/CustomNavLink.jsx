import { NavLink } from "react-router";

function CustomNavLink({ to, className = "", children }) {
  return (
    <NavLink
      to={`${to}`}
      className={`${className} flex items-center gap-4 rounded-md px-6 py-3`}
    >
      {children}
    </NavLink>
  );
}

export default CustomNavLink;
