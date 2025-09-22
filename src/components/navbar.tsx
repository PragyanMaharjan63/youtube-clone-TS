import { Bell, Menu, Mic, Plus, Search, UserRound } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between bg-black">
        <div className="flex">
          <Menu className="mx-5 my-4" />
          <div className="my-[18px]">
            <img src="/logo.svg" alt="logo" />
          </div>
        </div>
        {/* search bar */}
        <div className="flex items-center gap-3">
          <div className="flex relative ring-1 rounded-full items-center h-10 overflow-hidden">
            <Search className="absolute right-0 size-15 bg-neutral-800 p-5 cursor-pointer" />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              className="mx-4 outline-none md:w-[30vw]"
            />
          </div>
          <Mic className="p-2 size-9 bg-neutral-800 rounded-full" />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex bg-neutral-800 rounded-full p-1.5">
            <Plus />
            <p className="px-2">Create</p>
          </div>
          <Bell />
          <UserRound className="p-2 size-9 bg-purple-700 rounded-full" />
        </div>
      </div>
    </>
  );
}
