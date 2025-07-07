import { Outlet } from "react-router";
import SideBar from "../components/SideBar";

function AppLayout() {
  return (
    <div className="grid h-dvh grid-cols-[17rem_1fr] bg-amber-500">
      {/* // Use This in the home page make user to make it mobile responsive
                  
                  <div className="h-full bg-gray-50">
                    <div className="flex flex-wrap items-center justify-center gap-15">
                      <div className="w-fit bg-white p-4">
                        <p className="text-lg text-black">Fresh</p>
                        <span className="font-light">12 members</span>
                      </div>
                      <div className="w-fit bg-white p-3">
                        <p className="text-lg text-black">
                          2<sup>nd</sup> Year
                        </p>
                        <span className="font-light">12 members</span>
                      </div>
                      <div className="w-fit bg-white p-3">
                        <p className="text-lg text-black">
                          3<sup>nd</sup> Year
                        </p>
                        <span className="font-light">12 members</span>
                      </div>
                      <div className="w-fit bg-white p-3">
                        <p className="text-lg text-black">
                          4<sup>nd</sup> Year
                        </p>
                        <span className="font-light">12 members</span>
                      </div>
                      <div className="w-fit bg-white p-3">
                        <p className="text-lg text-black">
                          5<sup>nd</sup> Year
                        </p>
                        <span className="font-light">21 members</span>
                      </div>
                    </div>
                  </div>  */}
      <SideBar />
      <main className="overflow-y-scroll bg-blue-50 px-5 pt-4">
        {<Outlet />}
      </main>
    </div>
  );
}

export default AppLayout;
