import React, { useState } from "react";
import { Card } from "reactstrap";
import styles from "./CalculateTab.module.scss";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate

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
          Back
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
          Metric
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
          Standard
        </Button>
      </div>
      {activeTab === "metric" && (
        <div>
          <div className={styles["card-title"]}>Summary</div>
          <div className={styles["card-container"]}>
            <Card className={styles["destination-card"]}>CGK -{">"} HND</Card>
            <Card className={styles["passenger-card"]}>
              <div className={styles["passenger-info"]}>
                <div className={styles["passenger-title"]}>Passengers</div>
                <div className={styles["passenger-content"]}>
                  1 Total passengers’ CO2/journey
                </div>
                <div className={styles["passenger-content"]}>
                  428 KG Aircraft Fuel Burn/journey
                </div>
                <div className={styles["passenger-content"]}>45,175 KG</div>
              </div>
            </Card>
            <Card className={styles["cabin-card"]}>
              <div className={styles["cabin-info"]}>
                <div className={styles["cabin-title"]}>Cabin class</div>
                <div className={styles["cabin-content"]}>Economy trip</div>
                <div className={styles["cabin-content"]}>One way</div>
              </div>
            </Card>
          </div>
        </div>
      )}
      {activeTab === "standard" && <div>Tab content for Standard</div>}
    </>
  );
}

export default CalculateTab;
