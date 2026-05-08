import { Bell, ChevronDown, Menu, Search } from "lucide-react";
export default function Navbar({ page_name }) {
  return (
    <nav className="bg-white px-4 sm:px-6 lg:px-8 xl:px-10 py-4 xl:py-5 border-b border-gray-100">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 xl:gap-5">
        {/* Left */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl xl:text-2xl font-bold text-[#151D48]">
              {page_name}
            </h1>
          </div>

          {/* Mobile Menu */}
          <button className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition">
            <Menu className="w-6 h-6 text-[#151D48]" />
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-70 lg:w-[320px] xl:w-95">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5D5FEF] w-4 h-4 xl:w-5 xl:h-5" />

          <input
            type="text"
            placeholder="Search here..."
            className="w-full bg-[#F5F6FA] rounded-2xl pl-11 pr-4 py-3 xl:py-4 outline-none text-sm text-[#151D48] placeholder:text-[#737791]"
          />
        </div>
        {/* Right */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 xl:gap-4">
          {/* Language */}
          <div className="hidden md:flex items-center gap-2 px-2">
            <img
              src="https://flagcdn.com/w40/us.png"
              alt="flag"
              className="w-5 h-5 rounded-full object-cover"
            />

            <span className="text-sm font-medium text-[#151D48]">Eng (US)</span>

            <ChevronDown className="w-4 h-4 text-[#737791]" />
          </div>

          {/* Notification */}
          <button className="relative shrink-0">
            <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-2xl bg-[#FFF3E8] flex items-center justify-center">
              <Bell className="w-4 h-4 xl:w-5 xl:h-5 text-[#FF9F43]" />
            </div>

            <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-red-500" />
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3 shrink-0">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="profile"
              className="w-10 h-10 xl:w-12 xl:h-12 rounded-2xl object-cover"
            />

            <div className="hidden sm:block">
              <div className="flex items-center gap-1">
                <h2 className="text-sm font-semibold text-[#151D48]">Musfiq</h2>

                <ChevronDown className="w-4 h-4 text-[#737791]" />
              </div>

              <p className="text-xs text-[#737791]">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
