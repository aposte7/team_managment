import CreateMembers from "../features/members/CreateMembers";
import { BiPlus } from "react-icons/bi";
import Modal from "./Modal";
import Menus from "./Menus";

function TableOperation() {
  return (
    <Modal>
      <Menus>
        <header className="grid grid-cols-[auto_auto_1fr_auto_auto] items-end gap-5">
          {/* settings => filter and search button */}
          <input
            type="search"
            placeholder="Search..."
            className="w-64 min-w-50 rounded-md bg-gray-100/50 px-4 py-2 outline outline-stone-300"
          />

          <div className="flex items-center gap-2 rounded-md px-2 py-1 outline outline-slate-300">
            <div className="h-fit rounded bg-gray-200 px-3 py-1 text-black">
              All
            </div>
            <div className="h-fit rounded bg-blue-500 px-3 py-1 text-white">
              Current Members
            </div>
          </div>
          <div className="relative col-start-4">
            <Menus.Toggle id="member-filter">
              <button className="flex h-fit w-28 items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-gray-800 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                <span>Filter</span>
              </button>
            </Menus.Toggle>

            <Menus.MenuViews
              clickOutside={true}
              className="right-0 w-full"
              id="member-filter"
            >
              <Menus.Toggle id="filter-by-year">
                <Menus.Button noOnClick={true} label="Year" />
              </Menus.Toggle>

              <Menus.Button label="Department" />
              <Menus.Button label="Batch" />
            </Menus.MenuViews>

            <Menus.MenuViews
              className="top-[67px] right-30 w-44 space-y-1"
              id="filter-by-year"
            >
              <div className="px-1">
                <input
                  placeholder="search"
                  className="mb-1 w-full rounded bg-white px-2 py-1 outline-1 outline-gray-300"
                  type="text"
                />
                <div className="flex gap-2 text-xs text-black transition-all duration-300">
                  <div className="rounded bg-gray-200 px-2 py-1 hover:bg-blue-200">
                    Applied
                  </div>
                  <div className="rounded bg-gray-200 px-2 py-1 transition-all duration-300 hover:bg-blue-200">
                    Engineering
                  </div>
                </div>
              </div>

              <div className="h-[88px] overflow-y-scroll">
                <Menus.Button label="Software Engine.." />
                <Menus.Button label="Mining Engineering.." />
                <Menus.Button label="Civil Engineering" />
              </div>
            </Menus.MenuViews>
            {/* <div
              className="absolute top-[67px] right-30 mt-2 w-40 origin-top-right space-y-1 rounded-md bg-white py-1 text-sm text-gray-600 shadow-lg ring-1 ring-black/15 focus:outline-hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="px-1">
                <input
                  placeholder="search"
                  className="mb-1 w-full rounded bg-white px-2 py-1 outline-1 outline-gray-300"
                  type="text"
                />
                <div className="flex gap-2 text-xs text-black transition-all duration-300">
                  <div className="rounded bg-gray-200 px-2 py-1 hover:bg-blue-200">
                    Applied
                  </div>
                  <div className="rounded bg-gray-200 px-2 py-1 transition-all duration-300 hover:bg-blue-200">
                    Engineering
                  </div>
                </div>
              </div>

              <div className="h-[88px] overflow-y-scroll">
                <div className="px-3 py-1.5 hover:bg-gray-100">
                  Software Engine..
                </div>
                <div className="px-3 py-1.5 hover:bg-gray-100">Mining</div>
                <div className="px-3 py-1.5 hover:bg-gray-100">
                  Civil Engineering
                </div>
              </div>
            </div> */}
          </div>

          <Modal.Open name="member-form">
            <button className="col-start-5 flex h-fit w-fit cursor-pointer items-center gap-2 rounded-md bg-black px-3 py-1.5 text-white">
              <span>Add</span> <BiPlus size={22} />
            </button>
          </Modal.Open>
          <Modal.View title="add new members" name="member-form">
            <CreateMembers />
          </Modal.View>
        </header>
      </Menus>
    </Modal>
  );
}

export default TableOperation;
