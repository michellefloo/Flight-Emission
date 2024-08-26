import React, { useState } from "react";
import styles from "./CalculateTab.module.scss";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import MetricPage from "./MetricPage";
import StandardPage from "./StandardPage";
import BackIcon from "../../assets/icons/BackIcon";
import { metricDummyData, standardDummyData } from "./constant/DataDummy";

function CalculateTab() {
  const [activeTab, setActiveTab] = useState("metric");

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className={styles["button-container"]}>
        <Button
          variant="secondary"
          className={styles["button-back"]}
          onClick={handleButtonClick}
        >
          <div className={styles["back-label-icon"]}>
            <BackIcon width={16} height={25} color="#1e1e1e" />
            Back
          </div>
        </Button>
      </div>
      <div className={`${styles["active-tab"]}`}>
        <Button
          className={
            activeTab === "metric"
              ? `${styles["metric-tab-primary"]}`
              : `${styles["metric-tab-secondary"]}`
          }
          color={activeTab === "metric" ? "primary" : "secondary"}
          onClick={() => toggleTab("metric")}
        >
          Metric (Kg/Km)
        </Button>

        <Button
          className={
            activeTab === "standard"
              ? `${styles["standard-tab-primary"]}`
              : `${styles["standard-tab-secondary"]}`
          }
          color={activeTab === "standard" ? "primary" : "secondary"}
          onClick={() => toggleTab("standard")}
        >
          Standard (Lbs/MI)
        </Button>
      </div>
      {activeTab === "metric" && <MetricPage data={metricDummyData} />}
      {activeTab === "standard" && <StandardPage data={standardDummyData} />}
    </>
  );
}

export default CalculateTab;
