import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const isTabActive = activeTab !== null;

  return (
    <div
      className={`flex flex-col w-full min-h-screen transition-colors duration-300 ${
        isTabActive ? "bg-white text-orange-600" : "bg-orange-600 text-white"
      }`}
    >
      {/* Header row with TAP logo + Tabs */}
      <div className="grid grid-cols-4 w-full">
        {/* TAP logo placeholder */}
        <div
          className={`flex items-center justify-center py-6 text-7xl font-bold tracking-wide shadow-md ${
            isTabActive ? "bg-orange-600 text-white" : ""
          }`}
        >
          TAP
        </div>

        {/* Tabs evenly spaced */}
        {tabs.map((tab, index) => {
          const isActive = activeTab === index;
          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-full py-6 text-3xl font-semibold lowercase shadow-md transition duration-300 ${
                isActive
                  ? "bg-white text-orange-600"
                  : "bg-orange-600 text-white hover:bg-orange-500"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <div className="flex-grow p-8">
        <div className="bg-orange-600 text-white p-6 rounded shadow text-xl">
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
};

export default Tabs;