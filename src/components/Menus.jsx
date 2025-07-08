import { cloneElement, createContext, useContext, useState } from "react";

const MenuContext = createContext();

function Menus({ children }) {
  const [menuId, setMenuId] = useState("");

  const openMenu = setMenuId;
  const closeMenu = () => setMenuId("");

  return (
    <MenuContext.Provider
      value={{
        openMenu,
        closeMenu,
        menuId,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

function Toggle({ id, children }) {
  const { openMenu, menuId, closeMenu } = useContext(MenuContext);

  function onClick() {
    if (id !== menuId) openMenu(id);
    else closeMenu();
  }
  return cloneElement(children, {
    onClick: onClick,
    "aria-expanded": menuId === id,
  });
}

function Button({ Icon, label, onClick, className, noOnClick = false }) {
  const { closeMenu } = useContext(MenuContext);

  function handleClick(e) {
    if (noOnClick) return null;
    e.preventDefault();
    onClick?.();
    closeMenu();
  }

  return (
    <button
      onClick={onClick || handleClick}
      className={`${className} flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-100`}
    >
      {Icon && Icon}
      {label}
    </button>
  );
}
function MenuViews({ id, children, className = "", clickOutside = false }) {
  const { closeMenu, menuId } = useContext(MenuContext);

  if (menuId !== id) return null;

  return (
    <>
      {!clickOutside && (
        <div className="fixed inset-0 z-10" onClick={() => closeMenu()} />
      )}
      <div
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        className={`absolute z-20 mt-0.5 rounded-md border border-gray-200 bg-white py-2 shadow-lg ${className}`}
      >
        {children}
      </div>
    </>
  );
}

export default Menus;

Menus.Toggle = Toggle;
Menus.MenuViews = MenuViews;
Menus.Button = Button;
