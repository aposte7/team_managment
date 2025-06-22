import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { GrClose } from "react-icons/gr";

const FormContext = createContext();

function Model({ children }) {
  const [modelName, setModelName] = useState("");

  const openModal = setModelName;
  const closeModal = () => setModelName("");

  return (
    <FormContext.Provider value={{ openModal, closeModal, modelName }}>
      {children}
    </FormContext.Provider>
  );
}
function Open({ name, children }) {
  const { openModal } = useContext(FormContext);

  return cloneElement(children, { onClick: () => openModal(name) });
}

function View({ name, children }) {
  const { closeModal, modelName } = useContext(FormContext);

  if (modelName != name) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 h-dvh w-full bg-gray-200/45 backdrop-blur-[4px]">
      <div className="absolute top-1/2 left-1/2 -translate-1/2 bg-white p-4">
        <div className="text-right">
          <button
            onClick={() => closeModal()}
            className="cursor-pointer rounded-md bg-white p-1.5 hover:bg-gray-100"
          >
            <GrClose size={18} />
          </button>
        </div>

        {cloneElement(children, closeModal)}
        {/* Add new form */}
      </div>
    </div>,
    document.body,
  );
}

export default Model;

Model.Open = Open;
Model.View = View;
