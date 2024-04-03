import { useState } from "react";
import { MyProfile } from "../../../components/dashboard/user-dashboard/profile/MyProfile";

import TopHeader from "../../../components/dashboard/user-dashboard/TopHeader";
import { Security } from "./../../../components/dashboard/user-dashboard/profile/Security";

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState("MyProfile");

  const tabs = [
    { key: "MyProfile", label: "MyProfile", content: <MyProfile /> },
    { key: "Settings", label: "Settings", content: <Security /> },
    { key: "Notifications", label: "Notifications" },
    { key: "Billing", label: "Billing" },
  ];

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div>
      <TopHeader tabName={"Account Settings"} />
      <div className="md:flex">
        <ul className="flex-column space-y space-y-2 text-sm font-medium text-gray-800 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          {tabs.map((tab) => (
            <li key={tab.key}>
              <a
                href="#"
                className={`inline-flex items-center px-2 py-3 rounded-lg ${
                  activeTab === tab.key
                    ? "text-blue-500 bg-blue-100"
                    : "hover:text-gray-900"
                }`}
                onClick={() => handleTabClick(tab.key)}
                aria-disabled={tab.disabled ? "true" : "false"}
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-5/6">
          {tabs.map((tab) => (
            <div
              key={tab.key}
              style={{ display: activeTab === tab.key ? "block" : "none" }}
            >
              <div className="mb-2">{tab.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
