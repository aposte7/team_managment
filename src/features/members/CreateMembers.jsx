import { useState } from "react";
import { GrClose, GrUser, GrHome, GrCalendar, GrCamera } from "react-icons/gr";

function CreateMembers({ closeModal }) {
  const [preview, setPreview] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [activeTab, setActiveTab] = useState("basic");

  function handleImageUpload(event) {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }

  const tabs = ["basic", "additional"];

  return (
    <div className="relative w-full overflow-y-auto rounded-lg bg-white">
      <div className="px-6 py-6">
        <div className="mb-5 flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {tab === "basic" && <GrUser />}{" "}
              {tab === "additional" && <GrHome />}
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Info
            </button>
          ))}
        </div>

        <form className="space-y-5">
          {activeTab === "basic" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="e.g. John"
                    className="mt-1 w-full rounded-md px-3 py-2 outline outline-gray-500 focus:outline-2 focus:outline-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="fatherName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Father Name *
                  </label>
                  <input
                    id="fatherName"
                    type="text"
                    placeholder="e.g. Doe"
                    className="mt-1 w-full rounded-md px-3 py-2 outline outline-gray-500 focus:outline-2 focus:outline-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number *
                  </label>
                  <div className="flex items-center">
                    <span className="mt-1 inline-flex items-center rounded-l-md border bg-gray-100 px-3 py-[8px] text-gray-500">
                      +251
                    </span>
                    <input
                      id="phone"
                      type="text"
                      placeholder="955485444"
                      className="mt-1 w-full rounded-r-md px-3 py-2 outline outline-gray-500 focus:outline-2 focus:outline-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="telegramHandler"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Telegram Handle
                  </label>
                  <input
                    id="telegramHandler"
                    type="text"
                    placeholder="@username"
                    className="mt-1 w-full rounded-md px-3 py-2 outline outline-gray-500 focus:outline-2 focus:outline-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Academic Year *
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {[1, 2, 3, 4, 5].map((year) => (
                      <button
                        key={year}
                        type="button"
                        onClick={() => setSelectedYear(year)}
                        className={`h-10 rounded-md border font-semibold transition-all duration-200 ${
                          selectedYear === year
                            ? "bg-blue-600 text-white"
                            : "border-gray-300 bg-white"
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label
                    htmlFor="department"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Department *
                  </label>
                  <input
                    id="department"
                    type="text"
                    placeholder="e.g. Software Engineering"
                    className="mt-1 w-full rounded-md px-3 py-2 outline outline-gray-500 focus:outline-2 focus:outline-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="date"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700"
                  >
                    <GrCalendar /> Date of Joining
                  </label>
                  <input
                    id="date"
                    type="date"
                    className="mt-1 w-full rounded-md px-3 py-2 outline outline-gray-500 focus:outline-2 focus:outline-blue-500"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "additional" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="prevChurch"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Previous Church
                  </label>
                  <input
                    id="prevChurch"
                    type="text"
                    placeholder="e.g. Mulu Wongel"
                    className="mt-1 w-full rounded-md px-3 py-2 outline outline-gray-500 focus:outline-2 focus:outline-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="prevService"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Previous Service
                  </label>
                  <input
                    id="prevService"
                    type="text"
                    placeholder="e.g. Choir"
                    className="mt-1 w-full rounded-md px-3 py-2 outline outline-gray-500 focus:outline-2 focus:outline-blue-500"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label
                    htmlFor="department"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Department *
                  </label>
                  <input
                    id="department"
                    type="text"
                    placeholder="e.g. Software Engineering"
                    className="mt-1 w-full rounded-md px-3 py-2 outline outline-gray-500 focus:outline-2 focus:outline-blue-500"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Profile Photo
                  </label>
                  <div className="flex flex-col gap-4">
                    <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-gray-200 bg-gray-100">
                      {preview ? (
                        <img
                          src={preview}
                          alt="Preview"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <GrCamera className="text-gray-400" size={30} />
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-5 py-4">
                      <label
                        htmlFor="photoInput"
                        className="inline-block w-fit cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                      >
                        Upload
                      </label>
                      <input
                        id="photoInput"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-4">
            <div>
              {activeTab !== "basic" && (
                <button
                  type="button"
                  className="rounded-md bg-gray-100 px-4 py-2 hover:bg-gray-200"
                  onClick={() =>
                    setActiveTab(tabs[tabs.indexOf(activeTab) - 1])
                  }
                >
                  Previous
                </button>
              )}
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={closeModal}
                className="rounded-md border border-gray-300 bg-white px-4 py-2 hover:bg-gray-100"
              >
                Cancel
              </button>
              {activeTab !== "additional" ? (
                <button
                  type="button"
                  className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                  onClick={() =>
                    setActiveTab(tabs[tabs.indexOf(activeTab) + 1])
                  }
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Create Member
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateMembers;
