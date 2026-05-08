import {
  Upload,
  ChartNoAxesCombined,
  DollarSign,
  ShoppingBag,
  Users,
  Handbag,
  Target,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

const salesCards = [
  {
    icon: <ChartNoAxesCombined className="w-5 h-5 text-white" />,
    amount: "$1k",
    title: "Total Sales",
    description: "+8% from yesterday",
    bg: "#FDE2E5",
    iconBg: "#FF5C77",
  },
  {
    icon: <DollarSign className="w-5 h-5 text-white" />,
    amount: "300",
    title: "Total Order",
    description: "+5% from yesterday",
    bg: "#FFF1D6",
    iconBg: "#FF9B75",
  },
  {
    icon: <ShoppingBag className="w-5 h-5 text-white" />,
    amount: "5",
    title: "Product Sold",
    description: "+1.2% from yesterday",
    bg: "#DDF8E8",
    iconBg: "#38D36B",
  },
  {
    icon: <Users className="w-5 h-5 text-white" />,
    amount: "8",
    title: "New Customers",
    description: "0.5% from yesterday",
    bg: "#F1E2FF",
    iconBg: "#B57BFF",
  },
];

const visitorData = [
  { name: "Jan", loyal: 260, new: 220, unique: 300 },
  { name: "Feb", loyal: 350, new: 310, unique: 360 },
  { name: "Mar", loyal: 240, new: 200, unique: 340 },
  { name: "Apr", loyal: 180, new: 140, unique: 250 },
  { name: "May", loyal: 310, new: 290, unique: 210 },
  { name: "Jun", loyal: 360, new: 380, unique: 280 },
  { name: "Jul", loyal: 340, new: 350, unique: 320 },
  { name: "Aug", loyal: 260, new: 280, unique: 260 },
  { name: "Sep", loyal: 140, new: 130, unique: 190 },
];

const revenueData = [
  { day: "Mon", online: 12000, offline: 10000 },
  { day: "Tue", online: 18000, offline: 12000 },
  { day: "Wed", online: 4000, offline: 22000 },
  { day: "Thu", online: 16000, offline: 5000 },
  { day: "Fri", online: 11000, offline: 10500 },
  { day: "Sat", online: 17000, offline: 13000 },
  { day: "Sun", online: 21000, offline: 12000 },
];

const satisfactionData = [
  { name: "Jan", last: 2200, thisMonth: 3900 },
  { name: "Feb", last: 2500, thisMonth: 3500 },
  { name: "Mar", last: 3200, thisMonth: 3700 },
  { name: "Apr", last: 1800, thisMonth: 3000 },
  { name: "May", last: 1800, thisMonth: 3800 },
  { name: "Jun", last: 2200, thisMonth: 2500 },
  { name: "Jul", last: 2100, thisMonth: 4800 },
];

const targetData = [
  { month: "Jan", reality: 8, target: 10 },
  { month: "Feb", reality: 7, target: 9 },
  { month: "Mar", reality: 10, target: 12 },
  { month: "Apr", reality: 9, target: 10 },
  { month: "May", reality: 10, target: 12 },
  { month: "Jun", reality: 11, target: 13 },
];

const volumeData = [
  { name: "1", volume: 10, services: 7 },
  { name: "2", volume: 12, services: 8 },
  { name: "3", volume: 10, services: 6 },
  { name: "4", volume: 9, services: 5 },
  { name: "5", volume: 7, services: 4 },
  { name: "6", volume: 8, services: 6 },
];

const products = [
  {
    id: "01",
    name: "Home Decor Range",
    progress: "45%",
    width: "45%",
    color: "#3B82F6",
    bg: "#DBEAFE",
  },
  {
    id: "02",
    name: "Disney Princess Pink Bag 18'",
    progress: "29%",
    width: "29%",
    color: "#34D399",
    bg: "#D1FAE5",
  },
  {
    id: "03",
    name: "Bathroom Essentials",
    progress: "18%",
    width: "18%",
    color: "#8B5CF6",
    bg: "#E9D5FF",
  },
  {
    id: "04",
    name: "Apple Smartwatches",
    progress: "25%",
    width: "25%",
    color: "#FB923C",
    bg: "#FED7AA",
  },
];

const AxisTick = ({ x, y, payload, fill = "#A3AED0" }) => (
  <text
    x={x}
    y={y + 12}
    textAnchor="middle"
    fill={fill}
    fontSize={11}
    fontFamily="Inter, sans-serif"
  >
    {payload.value}
  </text>
);

const YTick = ({ x, y, payload }) => (
  <text
    x={x - 8}
    y={y + 4}
    textAnchor="end"
    fill="#A3AED0"
    fontSize={11}
    fontFamily="Inter, sans-serif"
  >
    {payload.value}
  </text>
);

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F5F6FA] p-3 sm:p-4 xl:p-6">
      <div className="mx-auto max-w-430 grid grid-cols-1 xl:grid-cols-12 gap-4 xl:gap-4">
        <div className="xl:col-span-7 bg-white rounded-[22px] border border-[#E6EAF2] shadow-[0_1px_2px_rgba(16,24,40,0.04)] p-4 xl:p-4">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-[20px]  font-bold tracking-[-0.02em] text-[#101828]">
                Today's Sales
              </h1>
              <p className="text-[12px] leading-4 text-[#98A2B3] mt-0.5">
                Sales Summary
              </p>
            </div>
            <button className="h-8 px-3 rounded-[10px] border border-[#D0D5DD] text-[#667085] text-[12px] font-semibold flex items-center gap-2 bg-white">
              <Upload className="w-3.5 h-3.5" />
              Export
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
            {salesCards.map((card, index) => (
              <div
                key={index}
                className="rounded-xl px-4 pt-4 pb-3 min-h-27.5"
                style={{ backgroundColor: card.bg }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-5 p-2"
                  style={{ backgroundColor: card.iconBg }}
                >
                  {card.icon}
                </div>
                <h2 className="text-[24px] leading-7 font-bold tracking-[-0.02em] text-[#101828]">
                  {card.amount}
                </h2>
                <p className="mt-1 text-[13px] leading-4.5 font-medium text-[#344054]">
                  {card.title}
                </p>
                <p className="mt-1 text-[11px] leading-4 font-medium text-[#4079ED]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="xl:col-span-5 bg-white rounded-[22px] border border-[#E6EAF2] shadow-[0_1px_2px_rgba(16,24,40,0.04)] p-4 xl:p-4">
          <h2 className="text-[20px] leading-6 font-bold tracking-[-0.02em] text-[#101828] mb-4">
            Visitor Insights
          </h2>
          <div className="h-59.5">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={visitorData}
                margin={{ top: 8, right: 8, left: -18, bottom: 0 }}
              >
                <XAxis
                  dataKey="name"
                  tick={<AxisTick />}
                  tickLine={false}
                  axisLine={{ stroke: "#D0D5DD" }}
                />
                <YAxis
                  tick={<YTick />}
                  tickLine={false}
                  axisLine={{ stroke: "#D0D5DD" }}
                  domain={[0, 380]}
                  ticks={[0, 95, 190, 285, 380]}
                />
                <Tooltip cursor={false} />
                <Line
                  type="monotone"
                  dataKey="loyal"
                  stroke="#A700FF"
                  strokeWidth={2.5}
                  dot={{ r: 3, fill: "#A700FF", strokeWidth: 0 }}
                  activeDot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="new"
                  stroke="#FF4D6D"
                  strokeWidth={2.5}
                  dot={{ r: 3, fill: "#FF4D6D", strokeWidth: 0 }}
                  activeDot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="unique"
                  stroke="#33C759"
                  strokeWidth={2.5}
                  dot={{ r: 3, fill: "#33C759", strokeWidth: 0 }}
                  activeDot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-3 text-[11px] text-[#667085]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#A700FF]" />
              Loyal Customers
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF4D6D]" />
              New Customers
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#33C759]" />
              Unique Customers
            </div>
          </div>
        </div>

        <div className="xl:col-span-5 bg-white rounded-[22px] border border-[#E6EAF2] shadow-[0_1px_2px_rgba(16,24,40,0.04)] p-4 xl:p-4">
          <h2 className="text-[20px] leading-6 font-bold tracking-[-0.02em] text-[#101828] mb-4">
            Total Revenue
          </h2>
          <div className="h-56.5">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={revenueData}
                barGap={12}
                margin={{ top: 10, right: 6, left: -10, bottom: 0 }}
              >
                <CartesianGrid vertical={false} stroke="#EEF2F7" />
                <XAxis
                  dataKey="day"
                  tick={<AxisTick />}
                  tickLine={false}
                  axisLine={{ stroke: "#D0D5DD" }}
                />
                <YAxis
                  tick={<YTick />}
                  tickLine={false}
                  axisLine={{ stroke: "#D0D5DD" }}
                  domain={[0, 22000]}
                  ticks={[0, 5500, 11000, 16500, 22000]}
                />
                <Tooltip cursor={false} />
                <Bar
                  dataKey="online"
                  fill="#1D9BF0"
                  radius={[8, 8, 0, 0]}
                  barSize={8}
                />
                <Bar
                  dataKey="offline"
                  fill="#18D6A5"
                  radius={[8, 8, 0, 0]}
                  barSize={8}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-3 text-[11px] text-[#667085]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#2486be]" />
              Online Sales
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#51c120]" />
              Offline Sales
            </div>
          </div>
        </div>

        <div className="xl:col-span-4 bg-white rounded-[22px] border border-[#E6EAF2] shadow-[0_1px_2px_rgba(16,24,40,0.04)] p-4 xl:p-4">
          <h2 className="text-[20px] font-bold text-[#151D48] mb-6">
            Customer Satisfaction
          </h2>

          <div className="h-55">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={satisfactionData}>
                <XAxis hide />
                <YAxis hide />
                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="last"
                  stroke="#0095FF"
                  strokeWidth={3}
                  dot={false}
                />

                <Line
                  type="monotone"
                  dataKey="thisMonth"
                  stroke="#00E096"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-center gap-2">
            <div>
              <p className="text-gray-600 text-sm">Last Month</p>
              <h3 className="font-bold text-[#151D48] text-xl">$3,004</h3>
            </div>
            <div className="block w-px h-5 bg-gray-300 mx-4" />
            <div>
              <p className="text-gray-600 text-sm">This Month</p>
              <h3 className="font-bold text-[#151D48] text-xl">$4,504</h3>
            </div>
          </div>
        </div>

        <div className="xl:col-span-3 bg-white rounded-[22px] border border-[#E6EAF2] shadow-[0_1px_2px_rgba(16,24,40,0.04)] p-4 xl:p-4">
          <h2 className="text-[20px] leading-6 font-bold tracking-[-0.02em] text-[#101828] mb-4">
            Target vs Reality
          </h2>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={targetData}
                barGap={10}
                margin={{ top: 10, right: 2, left: -10, bottom: 0 }}
              >
                <XAxis
                  dataKey="month"
                  tick={<AxisTick />}
                  tickLine={false}
                  axisLine={{ stroke: "#D0D5DD" }}
                />
                <YAxis hide domain={[0, 14]} />
                <Tooltip cursor={false} />
                <Bar
                  dataKey="reality"
                  fill="#18D6A5"
                  radius={[999, 999, 0, 0]}
                  barSize={7}
                />
                <Bar
                  dataKey="target"
                  fill="#FFCF00"
                  radius={[999, 999, 0, 0]}
                  barSize={7}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 space-y-2.5">
            <div className="bg-[#F9FAFB] rounded-xl px-3 py-3 flex items-center justify-between">
              <div className="flex justify-between w-full">
                <div className="flex items-center gap-2">
                  <div className="flex bg-green-100 rounded-md p-2">
                    <Handbag className="w-3.5 h-3.5 text-[#18D6A5]" />
                  </div>
                  <p className="text-sm font-semibold text-[#101828]">
                    Reality Sales
                  </p>
                </div>

                <h4 className="text-[13px] leading-4 font-bold text-[#101828] mt-1">
                  8,823
                </h4>
              </div>
            </div>
            <div className="bg-[#F9FAFB] rounded-xl px-3 flex items-center justify-between">
              <div className="flex justify-between w-full">
                <div className="flex item-center gap-2">
                  <div className="flex bg-yellow-100 rounded-md p-2">
                    <Target className="w-3.5 h-3.5 text-[#cbb92d]" />
                  </div>
                  <p className="text-sm font-semibold text-[#101828]">
                    Target Sales
                  </p>
                </div>

                <h4 className="text-[13px] leading-4 font-bold text-[#101828] mt-1">
                  12,122
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-5 bg-white rounded-[22px] border border-[#E6EAF2] shadow-[0_1px_2px_rgba(16,24,40,0.04)] p-4 xl:p-4">
          <h2 className="text-[20px] leading-6 font-bold tracking-[-0.02em] text-[#101828] mb-4">
            Top Products
          </h2>
          <div className="space-y-5 pt-1">
            {products.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 items-center gap-4"
              >
                <p className="col-span-1 text-[12px] font-semibold text-[#98A2B3]">
                  {item.id}
                </p>
                <div className="col-span-4">
                  <h4 className="text-[11px] leading-4 text-[#101828] font-medium truncate">
                    {item.name}
                  </h4>
                </div>
                <div className="col-span-6">
                  <div className="w-full h-1.5 bg-[#F2F4F7] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: item.width, backgroundColor: item.color }}
                    />
                  </div>
                </div>
                <div className="col-span-1 flex justify-end">
                  <span
                    className="px-2 py-1 rounded-full text-[10px] font-bold"
                    style={{ backgroundColor: item.bg, color: item.color }}
                  >
                    {item.progress}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="xl:col-span-4 bg-white rounded-[22px] border border-[#E6EAF2] shadow-[0_1px_2px_rgba(16,24,40,0.04)] p-4 xl:p-4 overflow-hidden">
          <h2 className="text-[20px] leading-6 font-bold tracking-[-0.02em] text-[#101828] mb-4">
            Sales Mapping by Country
          </h2>
          <div className="relative h-51 bg-white">
            <svg viewBox="0 0 520 220" className="w-full h-full">
              <polygon
                points="68,154 110,124 125,174"
                fill="#F3B53D"
                opacity="0.9"
              />
              <polygon
                points="104,84 145,60 160,110"
                fill="#F08AB8"
                opacity="0.9"
              />
              <polygon
                points="210,104 252,82 267,128"
                fill="#A98AF8"
                opacity="0.9"
              />
              <polygon
                points="295,84 338,66 354,112"
                fill="#6DA0F5"
                opacity="0.9"
              />
              <polygon
                points="386,112 430,98 447,142"
                fill="#54D3B4"
                opacity="0.9"
              />
              <polygon
                points="252,154 292,142 308,184"
                fill="#53C8E8"
                opacity="0.9"
              />
              <polygon
                points="145,146 183,128 196,170"
                fill="#F59C96"
                opacity="0.9"
              />
              <polygon
                points="76,34 116,18 132,56"
                fill="#F4D05B"
                opacity="0.9"
              />
            </svg>
          </div>
        </div>

        <div className="xl:col-span-3 bg-white rounded-[22px] border border-[#E6EAF2] shadow-[0_1px_2px_rgba(16,24,40,0.04)] p-4 xl:p-4">
          <h2 className="text-[20px] leading-6 font-bold tracking-[-0.02em] text-[#101828] mb-4">
            Volume vs Service Level
          </h2>
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={volumeData}
                barGap={10}
                margin={{ top: 10, right: 2, left: -10, bottom: 0 }}
              >
                <XAxis hide />
                <YAxis hide />
                <Tooltip cursor={false} />
                <Bar
                  dataKey="volume"
                  fill="#1D9BF0"
                  radius={[8, 8, 0, 0]}
                  barSize={9}
                />
                <Bar
                  dataKey="services"
                  fill="#18D6A5"
                  radius={[8, 8, 0, 0]}
                  barSize={9}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-8 mt-2 text-center">
            <div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#1D9BF0] mx-auto mb-1.5" />
              <p className="text-[11px] text-[#98A2B3]">Volume</p>
              <h4 className="text-[12px] font-bold text-[#101828]">1,135</h4>
            </div>
            <div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#18D6A5] mx-auto mb-1.5" />
              <p className="text-[11px] text-[#98A2B3]">Services</p>
              <h4 className="text-[12px] font-bold text-[#101828]">635</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
