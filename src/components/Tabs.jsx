import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const DEFAULT_TAB_INDEX = 0;
  const [activeTab, setActiveTab] = useState(DEFAULT_TAB_INDEX);

  // If tabs is empty or undefined, show fallback
  if (!tabs || tabs.length === 0) {
    return <div>No tabs available</div>;
  }

  return (
    <div
      className={`flex flex-col w-full min-h-screen transition-colors duration-300 ${
        tabs[activeTab] ? "bg-white text-orange-600" : "bg-orange-600 text-white"
      }`}
    >
      {/* Header row with TAP logo + Tabs */}
      <div className="grid grid-cols-4 w-full">
        {/* TAP logo image */}
        <div
          className={`flex items-center justify-center py-6 ${
            tabs[activeTab] ? "bg-orange-600" : ""
          }`}
        >
          <img
            src="/tap-logo.png"
            alt="Teacher Accelerator Program logo"
            className="h-20 object-contain"
          />
        </div>

        {/* Tabs evenly spaced */}
        {tabs.map((tab, index) => {
          const isActive = activeTab === index;
          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-full py-6 text-3xl font-semibold lowercase transition duration-300 ${
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
        <div>{tabs[activeTab]?.content || <div>No content available</div>}</div>
      </div>
    </div>
  );
};

export default Tabs;