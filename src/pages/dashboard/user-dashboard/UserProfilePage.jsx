import React, { useState } from "react";
import { GoBell } from "react-icons/go";
import { MyProfile } from "../../../components/dashboard/user-dashboard/profile/MyProfile";

import { Security } from "./../../../components/dashboard/user-dashboard/profile/Security";

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState("MyProfile");

  const tabs = [
    { key: "MyProfile", label: "MyProfile", content: <MyProfile /> },
    { key: "Settings", label: "Settings", content: <Security /> },
    { key: "Notifications", label: "Notifications" },
    { key: "Billing", label: "Billing" },
    { key: "Delete Account", label: "Delete Account" },
  ];

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-md font-semibold">Account Settings</h1>
        <div className="flex items-center gap-4">
          <GoBell />
          <img
            className="w-10 h-10 rounded-full"
            src="https://s3-alpha-sig.figma.com/img/2588/b21c/8c64a52772784a3c354fa08294114e35?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GLgh7xoOHGuZQqjSi6~ephVHVq0Nct1SGaSm98okWUsYMibLTnuPuqFErs2BLncQbG0KoGf48EooGt2qsalGufSTcYQQN8vGAS6efDJaJyRJlrVJddcgWjsEi57HZvPzPq9jZl-lUApAnDkTyi8JoIuCzOY-pQNhl30o1LC2iyUwg93UyfsWaeJ6-Lj0dTmHI87c2s17k6emFbB3FFMeMobOiNYpiEduyFtzc3UxUQQfBgoeiTcwHT1FBwpNaasEjkCe4wQbYlFMIhkIzj0Yl8jveBJbup9AIGKh~bk3cYcze4E7y~QXA~91jMDPgqCvY9NHfBfDIQWGINsQMerJ4w__"
            alt="Rounded avatar"
          />
        </div>
      </div>
      <div className="md:flex">
        <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-800 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
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
        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
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
