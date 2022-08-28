import React, { useEffect, useState } from "react";

import useCentroStore from "../store/useCentroStore";

import { Pie, TimeSeries } from "../components/charts";
import TabPill from "../components/common/TabPill";

import { CHART_TYPES } from "../utils/contants";
import Alert from "../components/common/Alert";

const Home = () => {
  const [activeTab, setActiveTab] = useState(CHART_TYPES.timeSeries);
  const { data, fetchData, hasError } = useCentroStore((state) => state);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (hasError) {
    <Alert />;
  }

  if (!data || data?.length === 0) {
    <Alert type="NoData" />;
  }

  return (
    <div className="w-3/4 mx-auto mt-12">
      <div className="text-sm font-medium text-center  border-b ">
        <ul className="flex flex-wrap -mb-px">
          <TabPill
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabType={CHART_TYPES.timeSeries}
          />
          <TabPill
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabType={CHART_TYPES.pieChart}
          />
        </ul>
      </div>

      <>
        {activeTab === CHART_TYPES.timeSeries && <TimeSeries data={data} />}

        {activeTab === CHART_TYPES.pieChart && <Pie data={data} />}
      </>
    </div>
  );
};

export default Home;
