import { HiEllipsisVertical } from "react-icons/hi2";
import Menus from "../../components/Menus";
import Modal from "../../components/Modal";
import PopupConfirm from "../../components/PopupConfirm";
import { Link } from "react-router";
import { useDeleteMember } from "./useDeleteMember";
import EditMember from "./EditMember";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const MembersRow = ({ member, rowNumber }) => {
  const { isDeleting, deleteMember } = useDeleteMember();

  const getInitials = (name) => {
    if (!name) return "";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0]?.toUpperCase() || "";
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  return (
    <Modal>
      <Menus>
        <tr className="divide-y divide-slate-100 transition-colors hover:bg-gray-50">
          <td className="px-6 py-3 text-center whitespace-nowrap">
            <div className="text-sm font-medium text-gray-900">{rowNumber}</div>
          </td>

          <td className="px-6 py-3 whitespace-nowrap">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600">
              {member.profilePicture ? (
                <img
                  src={member.profilePicture}
                  alt={`${member.name}'s profile`}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <span className="text-sm font-medium text-white">
                  {getInitials(member.name)}
                </span>
              )}
            </div>
          </td>

          <td className="px-6 py-3 whitespace-nowrap">
            <Link
              to={`${member.id}`}
              className="text-sm font-medium text-gray-900"
            >
              {member.name}
            </Link>
          </td>

          <td className="px-6 py-3 whitespace-nowrap">
            <div className="text-sm text-gray-600">{member.department}</div>
          </td>

          <td className="px-6 py-3 text-center whitespace-nowrap">
            <div className="text-sm text-gray-600">{member.academicYear}</div>
          </td>

          <td className="px-6 py-3 whitespace-nowrap">
            <div className="text-sm text-gray-600">{member.phoneNumber}</div>
          </td>

          <td className="px-6 py-3 text-center whitespace-nowrap">
            <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
              3.5 GPA
            </span>
          </td>

          <td className="px-6 py-3 text-center whitespace-nowrap">
            <div className="relative">
              <Menus.Toggle id={member.id}>
                <button className="rounded-md p-2 transition-colors hover:bg-gray-100">
                  <HiEllipsisVertical className="h-4 w-4 text-gray-500" />
                </button>
              </Menus.Toggle>
              <Menus.MenuViews id={member.id}>
                <Modal.Open name="edit-member">
                  <Menus.Button label="Edit" Icon={<FiEdit size={17} />} />
                </Modal.Open>
                <Modal.Open name="delete-member">
                  <Menus.Button
                    label="Delete"
                    Icon={<RiDeleteBin6Line size={17} />}
                    className="text-orange-600"
                  />
                </Modal.Open>
              </Menus.MenuViews>

              <Modal.View title="Edit Member" name="edit-member">
                <EditMember member={member} />
              </Modal.View>
              <Modal.View title="Delete Member" name="delete-member">
                <PopupConfirm />
              </Modal.View>
            </div>
          </td>
        </tr>
      </Menus>
    </Modal>
  );
};

export default MembersRow;
