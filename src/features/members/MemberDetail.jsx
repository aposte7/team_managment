import {
  FiPhone,
  FiSend,
  FiMapPin,
  FiUsers,
  FiTrendingUp,
  FiCalendar,
} from "react-icons/fi";
import { useMember } from "./useMember";
import Spinner from "../../components/Spinners";
import { useNavigate } from "react-router";
import { HiArrowLeft } from "react-icons/hi2";

import CommentsLayout from "../comments/CommentsLayout";

const MemberDetail = () => {
  const { member, isLoading } = useMember();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  let placeHolderName = "";
  if (member.name) {
    const nameParts = member.name.trim().split(/\s+/);
    placeHolderName = nameParts
      .map((part) => part[0]?.toUpperCase())
      .slice(0, 2)
      .join("");
  }

  return (
    <div className="relative mx-auto h-full overflow-clip bg-white p-6 pb-4">
      {/* COMMENT TOGGLE CHECKBOX */}
      <input type="checkbox" id="toggle-comment" className="peer hidden" />

      {/* Trigger Label */}
      {/* Show Comment Button (when closed) */}
      <label
        htmlFor="toggle-comment"
        className="absolute top-[97%] left-1/2 z-10 w-full -translate-x-1/2 cursor-pointer rounded-xl bg-gray-200 px-6 py-6 text-sm text-white opacity-100 shadow-md transition-all duration-300 ease-in-out peer-checked:pointer-events-none peer-checked:invisible peer-checked:opacity-0"
      ></label>

      {/* Profile Section */}
      <div className="relative h-full overflow-clip">
        <div className="mb-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex cursor-pointer items-center gap-3 pb-6 text-gray-900 hover:text-gray-500"
          >
            <HiArrowLeft size={25} strokeWidth={0.3} />
          </button>

          <div className="rounded-t-xl bg-gradient-to-r from-cyan-600 to-purple-600 p-8 text-white shadow-lg">
            <div className="flex items-center space-x-6">
              <div className="flex h-44 w-44 items-center justify-center overflow-hidden rounded-full bg-yellow-400 text-3xl font-bold text-white shadow-md">
                {member.profilePicture ? (
                  <img
                    src={member.profilePicture}
                    className="h-full w-full object-cover"
                    alt={`${member.name}'s profile`}
                  />
                ) : (
                  <p className="text-5xl">{placeHolderName}</p>
                )}
              </div>
              <div>
                <h1 className="text-2xl font-bold">{member.name}</h1>
                <p className="text-sm text-white/90">{member.department}</p>
                <div className="mt-2 flex gap-2 text-sm">
                  <span className="rounded-full bg-white/20 px-3 py-1">
                    {`${member.academicYear} year`}
                  </span>
                  <span className="rounded-full bg-white/20 px-3 py-1">
                    Active Member
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-b-xl bg-white p-6 shadow-lg">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-800">
              <FiUsers className="text-blue-600" />
              Contact Information
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InfoCard
                icon={<FiPhone size={20} />}
                label="Phone Number"
                value={member.phoneNumber}
              />
              <InfoCard
                icon={<FiSend size={20} />}
                label="Telegram"
                value={member.telegram}
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            <DetailCard
              icon={<FiMapPin size={23} className="text-white" />}
              title="Previous Church"
              value={member.previousChurch}
              color="from-green-400 to-green-600"
            />
            <DetailCard
              icon={<FiUsers size={23} className="text-white" />}
              title="Previous Service"
              value={member.previousService}
              color="from-blue-400 to-blue-600"
            />
            <DetailCard
              icon={<FiTrendingUp size={23} className="text-white" />}
              title="Participation Level"
              value="Medium"
              color="from-orange-400 to-red-500"
            />
            <DetailCard
              icon={<FiCalendar size={23} className="text-white" />}
              title="Home Town"
              value={member.homeTown}
              color="from-pink-400 to-purple-500"
            />
          </div>
        </div>
      </div>

      <CommentsLayout />
    </div>
  );
};

const InfoCard = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 rounded-md border border-gray-200 p-4 shadow-sm">
    <div className="rounded-full bg-blue-200 p-2 text-blue-500">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);

const DetailCard = ({ icon, title, value, color }) => (
  <div className="flex h-full flex-col justify-between rounded-lg bg-white shadow-md transition-transform hover:scale-[1.02]">
    <div className={`${color} rounded-t-lg bg-gradient-to-r`}>
      <div className="flex items-center rounded-md p-4">{icon}</div>
    </div>
    <div className="p-4">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-base font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

export default MemberDetail;
