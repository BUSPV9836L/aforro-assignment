import {
  LayoutDashboard,
  Trophy,
  ShoppingCart,
  Package,
  BarChart3,
  MessageSquare,
  Settings,
  LogOut,
  Bell,
  ChevronDown,
  Menu,
  Search,
  TrendingUp,
  TrendingDown,
  Users,
  Globe,
  Target,
  ShoppingBag,
  DollarSign,
  MapPin,
  Star,
} from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Trophy, label: "Leaderboard" },
    { icon: ShoppingCart, label: "Order" },
    { icon: Package, label: "Products" },
    { icon: BarChart3, label: "Sales Report" },
    { icon: MessageSquare, label: "Messages" },
    { icon: Settings, label: "Settings" },
    { icon: LogOut, label: "Sign Out" },
  ];

  return (
    <aside className="hidden lg:flex w-65 xl:w-70 bg-white border-r border-gray-100 flex-col justify-between px-4 xl:px-6 py-6 xl:py-8 shrink-0">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 xl:w-11 xl:h-11 rounded-xl bg-[#5D5FEF] flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-base xl:text-lg">D</span>
          </div>

          <h1 className="text-2xl xl:text-2xl font-bold text-[#151D48]">
            Dabang
          </h1>
        </div>

        {/* Menu */}
        <div>
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 text-sm xl:text-[15px] ${
                  item.active
                    ? "bg-[#5D5FEF] text-white shadow-md"
                    : "text-[#737791] hover:bg-[#F5F6FA]"
                }`}
              >
                <Icon className="w-4 h-4 xl:w-5 xl:h-5 shrink-0" />

                <span className="font-md truncate">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Upgrade Card */}
      <div className="bg-[#5D5FEF] rounded-3xl p-2 xl:p-3 text-white relative overflow-hidden mt-2">
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
        <div className="absolute bottom-0 -left-6 w-20 h-20 bg-white/10 rounded-full" />

        <div className="relative z-10">
          <div className="w-10 h-10 xl:w-12 xl:h-12 bg-white rounded-2xl flex items-center justify-center mb-4">
            <span className="text-[#5D5FEF] text-xl xl:text-2xl">⚡</span>
          </div>

          <h2 className="text-lg xl:text-xl font-semibold mb-2">Dabang Pro</h2>

          <p className="text-xs xl:text-sm text-white/80 mb-5 leading-relaxed">
            Get access to all features & analytics
          </p>

          <button className="bg-white text-[#5D5FEF] font-semibold text-sm xl:text-base px-5 py-2.5 xl:py-3 rounded-xl w-full hover:bg-gray-100 transition">
            Get Pro
          </button>
        </div>
      </div>
    </aside>
  );
}
