import {
  LayoutDashboard,
  Trophy,
  ShoppingCart,
  Package,
  BarChart3,
  MessageSquare,
  Settings,
  LogOut,
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
          <svg
            width="45"
            height="45"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="56" height="56" rx="8" fill="#5D5FEF" />
            <path
              d="M22.3743 17.6274C21.2422 18.7804 21.2422 20.6463 22.3952 21.7994L24.911 24.3151C27.28 26.6842 27.28 30.5417 24.911 32.9107L20.2988 28.2985C19.1143 27.1139 18.5168 25.5521 18.5168 24.0007C18.5168 22.4493 19.1143 20.8874 20.2988 19.7029L22.3428 17.6588C22.3533 17.6483 22.3638 17.6379 22.3743 17.6274Z"
              fill="#5D5FEF"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M24.3868 23.7899L22.3951 21.7983C21.2421 20.6452 21.2316 18.7898 22.3742 17.6263C23.5063 16.5151 25.3092 16.5361 26.4309 17.6577C26.9969 18.2238 27.2799 18.968 27.2799 19.7018C27.2799 20.4356 26.9969 21.1798 26.4309 21.7459L25.9591 22.2176"
              fill="#5D5FEF"
            />
            <path
              d="M24.3868 23.7899L22.3951 21.7983C21.2421 20.6452 21.2316 18.7898 22.3742 17.6263C23.5063 16.5151 25.3092 16.5361 26.4309 17.6577C26.9969 18.2238 27.2799 18.968 27.2799 19.7018C27.2799 20.4356 26.9969 21.1798 26.4309 21.7459L25.9591 22.2176"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M34.2715 38.2246C35.4036 37.0715 35.4036 35.2056 34.2505 34.0526L31.7348 31.5368C29.3657 29.1678 29.3657 25.3102 31.7348 22.9412L36.347 27.5535C37.5315 28.738 38.129 30.2999 38.129 31.8513C38.129 33.4027 37.5315 34.9645 36.347 36.149L34.3029 38.1931C34.282 38.2141 34.2715 38.2246 34.2715 38.2246Z"
              fill="#5D5FEF"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M32.2479 32.0713L34.2396 34.063C35.3926 35.2161 35.4031 37.0715 34.2606 38.235C33.1285 39.3461 31.3255 39.3252 30.2039 38.2036C29.6378 37.6375 29.3548 36.8933 29.3548 36.1595C29.3548 35.4257 29.6378 34.6815 30.2039 34.1154L30.686 33.6332"
              fill="#5D5FEF"
            />
            <path
              d="M32.2479 32.0713L34.2396 34.063C35.3926 35.2161 35.4031 37.0715 34.2606 38.235C33.1285 39.3461 31.3255 39.3252 30.2039 38.2036C29.6378 37.6375 29.3548 36.8933 29.3548 36.1595C29.3548 35.4257 29.6378 34.6815 30.2039 34.1154L30.686 33.6332"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
            />
          </svg>

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
      <div className="bg-[#5D5FEF] rounded-3xl p-2 xl:p-3 text-white relative overflow-hidden mt-2 text-center">
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
        <div className="absolute bottom-0 -left-6 w-20 h-20 bg-white/10 rounded-full" />

        <div className="flex flex-col items-center ">
          <div className="w-10 h-10 xl:w-12 xl:h-12 bg-white rounded-2xl flex items-center justify-center mb-4">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="16" fill="white" />
              <path
                d="M18.0514 13.6967C16.9193 14.8498 16.9193 16.7157 18.0724 17.8687L20.5881 20.3845C22.9572 22.7535 22.9572 26.6111 20.5881 28.9801L15.9759 24.3678C14.7914 23.1833 14.1939 21.6214 14.1939 20.07C14.1939 18.5186 14.7914 16.9568 15.9759 15.7723L18.02 13.7282C18.0304 13.7177 18.0409 13.7072 18.0514 13.6967Z"
                fill="#5D5FEF"
              />
              <path
                d="M20.0639 19.8593L18.0723 17.8676C16.9192 16.7146 16.9087 14.8592 18.0513 13.6956C19.1834 12.5845 20.9864 12.6055 22.108 13.7271C22.674 14.2931 22.957 15.0374 22.957 15.7711C22.957 16.5049 22.674 17.2492 22.108 17.8152L21.6363 18.2869"
                fill="#5D5FEF"
              />
              <path
                d="M29.9486 34.2939C31.0807 33.1409 31.0807 31.275 29.9277 30.1219L27.4119 27.6062C25.0429 25.2371 25.0429 21.3796 27.4119 19.0106L32.0241 23.6228C33.2086 24.8074 33.8061 26.3692 33.8061 27.9206C33.8061 29.472 33.2086 31.0339 32.0241 32.2184L29.9801 34.2625C29.9591 34.2834 29.9486 34.2939 29.9486 34.2939Z"
                fill="#5D5FEF"
              />
              <path
                d="M27.9251 28.1407L29.9167 30.1323C31.0698 31.2854 31.0803 33.1408 29.9377 34.3043C28.8056 35.4155 27.0026 35.3945 25.881 34.2729C25.3149 33.7068 25.0319 32.9626 25.0319 32.2288C25.0319 31.4951 25.3149 30.7508 25.881 30.1848L26.3632 29.7026"
                fill="#5D5FEF"
              />
            </svg>
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
