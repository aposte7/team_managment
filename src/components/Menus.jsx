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
  const { openMenu, menuId } = useContext(MenuContext);

  return cloneElement(children, {
    onClick: () => openMenu(id),
    "aria-expanded": menuId === id,
  });
}

function Button({ Icon, label, onClick, className }) {
  const { closeMenu } = useContext(MenuContext);

  function handleClick() {
    onClick?.();
    closeMenu();
  }

  return (
    <button
      onClick={handleClick}
      className={`${className} flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100`}
    >
      {Icon}
      {label}
    </button>
  );
}
function MenuViews({ id, children }) {
  const { closeMenu, menuId } = useContext(MenuContext);

  if (menuId !== id) return null;

  return (
    <>
      <div className="fixed inset-0 z-10" onClick={() => closeMenu()} />
      <div className="absolute right-0 z-20 mt-2 w-48 rounded-md border border-gray-200 bg-white py-2 shadow-lg">
        {children}
      </div>
    </>
  );
}

export default Menus;

Menus.Toggle = Toggle;
Menus.MenuViews = MenuViews;
Menus.Button = Button;

//  <div className="fixed inset-0 z-10" onClick={() => setShowMenu(false)} />
//       <div className="absolute right-0 z-20 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg">
//         <div className="py-1">
//           <button className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50">
//             <FiEdit size={17} />
//             Edit
//           </button>
//           <button className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 transition-colors hover:bg-gray-50">
//             <RiDeleteBin6Line size={17} />
//             Delete
//           </button>
//         </div>
//       </div>
