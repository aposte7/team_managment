import { useState } from "react";
import { GrUser, GrHome, GrCamera } from "react-icons/gr";
import FormFields from "../../components/FormFields";
import { useForm } from "react-hook-form";
import Spinner from "../../components/Spinners";
import { useEditMember } from "./useEditMember";

function EditMember({ closeModal, member = {} }) {
  const [preview, setPreview] = useState(member?.profilePicture ?? null);

  const [activeTab, setActiveTab] = useState("basic");
  const { id: editId, ...editValues } = member;
  const isEditing = Boolean(editId);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: isEditing ? editValues : {} });

  const { isCreating, editMemberMutation } = useEditMember();

  const selectedYear = watch("academicYear");

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

  function onSubmit(data) {
    console.log("editing member", data);

    const image =
      typeof data?.profilePicture === "string"
        ? data?.profilePicture
        : data?.profilePicture[0];

    editMemberMutation(
      { id: editId, ...data, profilePicture: image },

      {
        onSuccess: (data) => {
          reset();
          closeModal();
        },
      },
    );
  }

  const tabs = ["basic", "additional"];

  return (
    <div className="relative w-full overflow-y-auto border-t border-t-gray-200 bg-white">
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

        {isCreating ? (
          <Spinner />
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {activeTab === "basic" && (
              <div className="space-y-6">
                {/* Basic input form */}
                <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-2">
                  <FormFields className="md:col-span-2" label="Name *">
                    <input
                      {...register("name")}
                      id="name"
                      type="text"
                      placeholder="e.g. Abdi Jira"
                      className="mt-1 w-full rounded-md px-3 py-2 outline outline-gray-500 focus:outline-2 focus:outline-blue-500"
                    />
                  </FormFields>

                  <FormFields label="Phone Number">
                    <div id="phone" className="flex items-center">
                      <input
                        {...register("phoneNumber")}
                        id="phoneNumber"
                        type="text"
                        placeholder="eg. 0955485444"
                        className="mt-1 w-full rounded-md px-3 py-2 outline outline-gray-500 focus:outline-2 focus:outline-blue-500"
                      />
                    </div>
                  </FormFields>
                  <FormFields label="Telegram Handler">
                    <input
                      {...register("telegram")}
                      id="telegram"
                      type="text"
                      placeholder="@username"
                      className="mt-1 w-64 max-w-full rounded-md px-3 py-2 outline outline-gray-500 focus:outline-2 focus:outline-blue-500"
                    />
                  </FormFields>

                  <FormFields className="col-span-2" label="Academic Year *">
                    <div id="academicYear" className="grid grid-cols-8 gap-2">
                      {[1, 2, 3, 4, 5].map((year) => (
                        <button
                          key={year}
                          type="button"
                          onClick={() => setValue("academicYear", year)}
                          className={`h-10 rounded-md border font-semibold transition-all duration-200 hover:bg-blue-200 ${
                            selectedYear === year
                              ? "bg-blue-600 text-white"
                              : "border-gray-300 bg-white"
                          }`}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  </FormFields>

                  <div className="col-span-2 grid-cols-1 grid-rows-2 space-x-10">
                    <div className="mb-2 block text-sm font-medium text-gray-700">
                      Gender *
                    </div>
                    <FormFields
                      label="Male"
                      className="inline-flex flex-row items-center gap-3"
                    >
                      <input
                        {...register("gender")}
                        id="male"
                        type="radio"
                        value="male"
                        className=""
                      />
                    </FormFields>
                    <FormFields
                      label="Female"
                      className="inline-flex flex-row items-center gap-3"
                    >
                      <input
                        {...register("gender")}
                        id="female"
                        type="radio"
                        value="female"
                        className=""
                      />
                    </FormFields>
                  </div>

                  <FormFields label="Date of Joining">
                    <input
                      {...register("joinedDate")}
                      id="joinedDate"
                      type="date"
                      className="mt-1 w-64 max-w-full rounded-md px-3 py-2 outline outline-gray-500 focus:outline-2 focus:outline-blue-500"
                    />
                  </FormFields>
                </div>
              </div>
            )}

            {/* Additional  info input */}

            {activeTab === "additional" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormFields label="Previous Church">
                    <input
                      {...register("previousChurch")}
                      id="previousChurch"
                      type="text"
                      placeholder="e.g. Mulu Wongel"
                      className="mt-1 w-64 max-w-full rounded-md px-3 py-2 outline outline-gray-500 focus:outline-2 focus:outline-blue-500"
                    />
                  </FormFields>
                  <FormFields label="Previous Service">
                    <input
                      {...register("previousService")}
                      id="previousService"
                      type="text"
                      placeholder="e.g. Choir"
                      className="mt-1 w-64 max-w-full rounded-md px-3 py-2 outline outline-gray-500 focus:outline-2 focus:outline-blue-500"
                    />
                  </FormFields>
                  <FormFields
                    label="Department"
                    className="space-y-2 md:col-span-2"
                  >
                    <input
                      {...register("department")}
                      id="department"
                      type="text"
                      placeholder="e.g. Software Engineering"
                      className="mt-1 w-full rounded-md px-3 py-2 outline outline-gray-500 focus:outline-2 focus:outline-blue-500"
                    />
                  </FormFields>

                  <FormFields className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Profile Picture
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
                          htmlFor="profilePicture"
                          className="inline-block w-fit cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        >
                          Upload
                        </label>
                        <input
                          {...register("profilePicture")}
                          id="profilePicture"
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className=""
                        />
                      </div>
                    </div>
                  </FormFields>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-4">
              <div>
                {activeTab !== "basic" && (
                  <button
                    type="button"
                    className="rounded-md bg-gray-100 px-4 py-2 hover:bg-gray-200"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(tabs[tabs.indexOf(activeTab) - 1]);
                    }}
                  >
                    Previous
                  </button>
                )}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    closeModal();
                  }}
                  className="rounded-md border border-gray-300 bg-white px-4 py-2 hover:bg-gray-100"
                >
                  Cancel
                </button>
                {activeTab !== "additional" ? (
                  <button
                    type="button"
                    className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(tabs[tabs.indexOf(activeTab) + 1]);
                    }}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={() => console.log("click no click")}
                    type="submit"
                    className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                  >
                    Confirm
                  </button>
                )}
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default EditMember;
