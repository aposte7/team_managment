import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import CreateMembers from "../features/members/CreateMembers";
import Modal from "./Modal";
import PopupConfirm from "./PopupConfirm";

function Menus({ setShowMenu }) {
  return (
    <Modal>
      <div className="fixed inset-0 z-10" onClick={() => setShowMenu(false)} />
      <div className="absolute right-0 z-20 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg">
        <div className="py-1">
          <Modal.Open name="edit-member">
            <button className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50">
              <FiEdit size={17} />
              Edit
            </button>
          </Modal.Open>
          <Modal.View title="Edit Member" name="edit-member">
            <CreateMembers />
          </Modal.View>

          <Modal.Open name="delete-member">
            <button className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 transition-colors hover:bg-gray-50">
              <RiDeleteBin6Line size={17} />
              Delete
            </button>
          </Modal.Open>
          <Modal.View title="Delete User" name="delete-member">
            <PopupConfirm />
          </Modal.View>
        </div>
      </div>
    </Modal>
  );
}

export default Menus;
