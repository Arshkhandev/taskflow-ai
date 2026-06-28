import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Boards",
    icon: FolderKanban,
  },
  {
    title: "Tasks",
    icon: CheckSquare,
  },
  {
    title: "Profile",
    icon: User,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen border-r bg-white flex flex-col">

      <div className="h-16 flex items-center justify-center border-b">
        <h2 className="text-2xl font-bold text-blue-600">
          TaskFlow
        </h2>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="flex items-center gap-3 w-full rounded-lg px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition"
            >
              <Icon size={20} />
              {item.title}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t">
        <button className="flex items-center gap-3 w-full rounded-lg px-4 py-3 text-red-500 hover:bg-red-50 transition">
          <LogOut size={20} />
          Logout
        </button>
      </div>

    </aside>
  );
};

export default Sidebar;