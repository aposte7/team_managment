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

const MemberDetail = () => {
  const { member, isLoading } = useMember();

  if (isLoading) return <Spinner />;

  return (
    <div className="mx-auto p-6">
      {/* Header */}

      <div className="rounded-t-xl bg-gradient-to-r from-cyan-600 to-purple-600 p-8 text-white shadow-lg">
        <div className="flex items-center space-x-6">
          <div className="flex h-44 w-44 items-center justify-center overflow-hidden rounded-full bg-yellow-400 text-3xl font-bold text-white shadow-md">
            <img
              src={member.profilePicture}
              className="h-full w-full object-cover"
              alt={`${member.name}'s profile picture`}
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Olman Gemechu</h1>
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

      {/* Contact Info */}
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

      {/* Detail Cards */}
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
          title="Academic Year"
          value={member.academicYear}
          color="from-pink-400 to-purple-500"
        />
      </div>

      {/* Footer Note */}
      <p className="mt-6 text-center text-sm text-gray-500">
        Member since joining the church community • Last updated today
      </p>
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
