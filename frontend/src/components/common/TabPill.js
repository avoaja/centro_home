import React from "react";

const TabPill = ({ activeTab, setActiveTab, tabType }) => {
  return (
    <li className="mr-2">
      <p
        className={`${
          activeTab === tabType ? "border-myPurple" : " "
        } text-myPurple border-b-2 cursor-pointer inline-block p-4  rounded-t-lg `}
        onClick={() => setActiveTab(tabType)}
        data-cy={tabType.replaceAll(' ', '')}
      >
        {tabType}
      </p>
    </li>
  );
};

export default TabPill;
