import { Bell, Search, Sun, Moon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6 sticky top-0 z-50">
      {/* Left */}
      <div>
        <h1 className="text-xl font-bold text-slate-900">
          TaskFlow AI
        </h1>
      </div>

      {/* Center */}
      <div className="hidden md:flex items-center w-96">
        <div className="flex items-center w-full rounded-lg border bg-slate-50 px-3 py-2">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search tasks..."
            className="ml-2 w-full bg-transparent outline-none"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <button className="hover:text-blue-600 transition">
          <Sun size={20} />
        </button>

        <button className="relative hover:text-blue-600 transition">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
          AK
        </div>
      </div>
    </header>
  );
};

export default Navbar;