import {
    AppWindowMac,
    ArrowLeftRight,
    BanknoteArrowUp,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  ChevronFirst,
  ChevronLast,
  CircleDollarSign,
  Cog,
  Coins,
  FileChartLine,
  HandCoins,
  Handshake,
  House,
  Landmark,
  PiggyBank,
  Scroll,
  UserCog,
  UserMinus,
  Users,
  UserSearch,
  UserStar,
} from "lucide-react";
import React, { useState } from "react";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside
      className={`h-full w-3xs ${
        expanded ? "w-60" : "w-20"
      } transition-all duration-300`}
    >
      <nav className="h-full flex flex-col bg-white border-r shadow-md">
        {/* header starts */}
        <div className="p-4 pt-8 pb-2 flex justify-between items-center">
          <span className=" flex flex-row items-center gap-x-4 hover:bg-chart-3 hover:border-chart-2 hover:border-l-2 ">
            <BriefcaseBusiness className="text-primary" />
            {expanded && (
              <span className="text-chart-1 font-bold">
                Switch Organisation
              </span>
            )}
          </span>
          <button
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-chart-3 text-primary flex items-center"
            onClick={() => setExpanded((curr) => !curr)}
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        {/* remain side bar */}
        <div className="p-4 pt-2 flex flex-col items-start">
          <span
            className={`flex flex-row items-center gap-x-2 hover:bg-chart-3 hover:border-chart-2 hover:border-l-4 ${
              expanded ? "w-52" : "w-full"
            }`}
          >
            <House className="text-primary" />
            {expanded && (
              <span className="text-chart-1 font-light">Dashboard</span>
            )}
          </span>
          {/* constomers */}
          <div className=" pt-6">
            <span className=" flex items-center">
              {expanded && (
                <span className="text-chart-1 font-bold">CUSTOMERS</span>
              )}
            </span>
            <ul
              className={` pt-2 font-light text-chart-1 gap-2 flex flex-col ${
                expanded ? "w-52" : "w-full"
              }`}
            >
              <li className="flex flex-row items-center gap-x-2 hover:bg-chart-3 hover:border-chart-2 hover:border-l-4">
                <Users />
                {expanded && <span>Users</span>}
              </li>
              <li className="flex flex-row items-center gap-x-2 hover:bg-chart-3 hover:border-chart-2 hover:border-l-4">
                <UserStar />
                {expanded && <span>Guarantors</span>}
              </li>
              <li className="flex flex-row items-center gap-x-2 hover:bg-chart-3 hover:border-chart-2 hover:border-l-4">
                <Landmark />
                {expanded && <span>Loans</span>}
              </li>
              <li className="flex flex-row items-center gap-x-2 hover:bg-chart-3 hover:border-chart-2 hover:border-l-4">
                <Handshake />
                {expanded && <span>Decision Models</span>}
              </li>
              <li className="flex flex-row items-center gap-x-2 hover:bg-chart-3 hover:border-chart-2 hover:border-l-4">
                <PiggyBank />
                {expanded && <span>Savings</span>}
              </li>
              <li className="flex flex-row items-center gap-x-2 hover:bg-chart-3 hover:border-chart-2 hover:border-l-4">
                <HandCoins />
                {expanded && <span>Loan Requests</span>}
              </li>
              <li className="flex flex-row items-center gap-x-2 hover:bg-chart-3 hover:border-chart-2 hover:border-l-4">
                <UserSearch />
                {expanded && <span>Whitelist</span>}
              </li>
              <li className="flex flex-row items-center gap-x-2 hover:bg-chart-3 hover:border-chart-2 hover:border-l-4">
                <UserMinus />
                {expanded && <span>Karma</span>}
              </li>
            </ul>
          </div>
          {/* Businesses */}
        <div className=" pt-6">
            <span className=" flex items-center">
              {expanded && (
                <span className="text-chart-1 font-bold">BUSINESSES</span>
              )}
            </span>
            <ul
              className={` pt-2 font-light text-chart-1 gap-2 flex flex-col ${
                expanded ? "w-52" : "w-full"
              }`}
            >
              <li className="flex flex-row items-center gap-x-2 hover:bg-chart-3 hover:border-chart-2 hover:border-l-4">
                <BriefcaseBusiness />
                {expanded && <span>Organisation</span>}
              </li>
              <li className="flex flex-row items-center gap-x-2 hover:bg-chart-3 hover:border-chart-2 hover:border-l-4">
                <Landmark  />
                {expanded && <span>Loan Products</span>}
              </li>
              <li className="flex flex-row items-center gap-x-2 hover:bg-chart-3 hover:border-chart-2 hover:border-l-4">
                <BanknoteArrowUp />
                {expanded && <span>Savings Products</span>}
              </li>
              <li className="flex flex-row items-center gap-x-2 hover:bg-chart-3 hover:border-chart-2 hover:border-l-4">
                <Coins />
                {expanded && <span>Fees and Charges</span>}
              </li>
              <li className="flex flex-row items-center gap-x-2 hover:bg-chart-3 hover:border-chart-2 hover:border-l-4">
                <ArrowLeftRight />
                {expanded && <span>Transactions</span>}
              </li>
              <li className="flex flex-row items-center gap-x-2 hover:bg-chart-3 hover:border-chart-2 hover:border-l-4">
                <Cog />
                {expanded && <span>Services</span>}
              </li>
              <li className="flex flex-row items-center gap-x-2 hover:bg-chart-3 hover:border-chart-2 hover:border-l-4">
                <UserCog />
                {expanded && <span>Service Account</span>}
              </li>
              <li className="flex flex-row items-center gap-x-2 hover:bg-chart-3 hover:border-chart-2 hover:border-l-4">
                <Scroll />
                {expanded && <span>Settlements</span>}
              </li>
              <li className="flex flex-row items-center gap-x-2 hover:bg-chart-3 hover:border-chart-2 hover:border-l-4">
                <ChartNoAxesCombined />
                {expanded && <span>Report</span>}
              </li>
            </ul>
          </div>
          {/* settings */}
        <div className=" pt-6">
            <span className=" flex items-center">
              {expanded && (
                <span className="text-chart-1 font-bold">SETTINGS</span>
              )}
            </span>
            <ul
              className={` pt-2 font-light text-chart-1 gap-2 flex flex-col ${
                expanded ? "w-52" : "w-full"
              }`}
            >
              <li className="flex flex-row items-center gap-x-2 hover:bg-chart-3 hover:border-chart-2 hover:border-l-4">
                <AppWindowMac />
                {expanded && <span>Preferences</span>}
              </li>
              <li className="flex flex-row items-center gap-x-2 hover:bg-chart-3 hover:border-chart-2 hover:border-l-4">
                <CircleDollarSign />
                {expanded && <span>Fees and Pricings</span>}
              </li>
              <li className="flex flex-row items-center gap-x-2 hover:bg-chart-3 hover:border-chart-2 hover:border-l-4">
                <FileChartLine />
                {expanded && <span>Audits Logs</span>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
