import React from "react";
import { Card, Button } from "reactstrap";
import styles from "./MetricPage.module.scss";
import IndonesiaFlag from "../../assets/icons/IndonesiaFlag.png";
import JPFlag from "../../assets/icons/JPFlag.png";
import SGFlag from "../../assets/icons/SGFlag.png";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import { useNavigate } from "react-router-dom";

const MetricPage = ({ data }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/offset");
  };

  const getFlag = (countryCode) => {
    switch (countryCode) {
      case "ID":
        return IndonesiaFlag;
      case "JP":
        return JPFlag;
      case "SG":
        return SGFlag;
      default:
        return null; // You can set a default flag image or handle it differently
    }
  };
  return (
    <div>
      <div className={styles["summary-card-container"]}>
        <div className={styles["summary-card-title"]}>Summary</div>
        <Card className={styles["summary-card"]}>
          <div className={styles["summary-info"]}>
            <div className={styles["origin-info"]}>
              <div>
                <img
                  src={getFlag(data.summary.from.countryCode)}
                  alt={data.summary.from.country}
                  width={28}
                />
              </div>
              <div className={styles["origin-title"]}>
                {data.summary.from.code}
              </div>
            </div>
            <div>
              <ArrowIcon width={61} height={16} color="#285A81" />
            </div>
            <div className={styles["departure-info"]}>
              <div>
                <img
                  src={getFlag(data.summary.to.countryCode)}
                  alt={data.summary.to.country}
                  width={28}
                />
              </div>
              <div className={styles["departure-title"]}>
                {data.summary.to.code}
              </div>
            </div>
          </div>
        </Card>
        <Card className={styles["passenger-card"]}>
          <div className={styles["passenger-info"]}>
            <div className={styles["passenger-title"]}>Passengers</div>
            <div className={styles["passenger-content"]}>
              {data.passengers.total}{" "}
              <strong>Total passengers’ CO2/journey</strong>
            </div>
            <div className={styles["passenger-content"]}>
              {data.passengers.fuelBurn}{" "}
              <strong>Aircraft Fuel Burn/journey</strong>
            </div>
            <div className={styles["passenger-content"]}>
              {data.passengers.co2} KG
            </div>
          </div>
        </Card>
        <Card className={styles["cabin-card"]}>
          <div className={styles["cabin-info"]}>
            <div className={styles["cabin-title"]}>Cabin class</div>
            <div className={styles["cabin-content"]}>
              {data.cabin.class} <strong>Trip</strong>
            </div>
            <div className={styles["cabin-content"]}>{data.cabin.trip}</div>
          </div>
        </Card>
      </div>

      <div className={styles["offset-card-container"]}>
        <div className={styles["offset-card-title"]}>
          Offset your Flight Emissions
        </div>
        <Card className={styles["offset-card"]}>
          <div className={styles["offset-info"]}>
            <div className={styles["offset-content-title"]}>
              <strong className={styles["blue-text"]}>{data.offset.co2}</strong>{" "}
              is equivalent to{" "}
              <strong className={styles["pink-text"]}>
                {data.offset.mangroves}
              </strong>{" "}
              Mangroves for Rp{" "}
              <strong className={styles["green-text"]}>
                {data.offset.cost}
              </strong>
            </div>
            <div className={styles["button-container"]}>
              <Button
                variant="primary"
                className={styles["button-offset"]}
                onClick={handleButtonClick}
              >
                Offset Now
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <div className={styles["flight-stage-card-container"]}>
        <div className={styles["flight-stage-card-title"]}>
          Flight Stage Detail
        </div>
        {data.flightStages.map((stage, index) => (
          <div key={index} className={styles[`flight-stage-${index + 1}`]}>
            <Card className={styles["flight-stage-card"]}>
              <div className={styles["flight-stage-info"]}>
                <div className={styles["origin-info"]}>
                  <div>
                    <img
                      src={getFlag(stage.from.countryCode)}
                      alt={stage.from.code}
                      width={28}
                    />
                  </div>
                  <div className={styles["origin-title"]}>
                    {stage.from.code}
                  </div>
                </div>
                <div>
                  <ArrowIcon width={61} height={16} color="#285A81" />
                </div>
                <div className={styles["departure-info"]}>
                  <div>
                    <img
                      src={getFlag(stage.to.countryCode)}
                      alt={stage.to.code}
                      width={28}
                    />
                  </div>
                  <div className={styles["departure-title"]}>
                    {stage.to.code}
                  </div>
                </div>
              </div>
            </Card>
            <Card className={styles["distance-card"]}>
              <div className={styles["distance-info"]}>
                <div className={styles["distance-title"]}>Distance</div>
                <div className={styles["distance-content"]}>
                  {stage.distance} <strong>Aircraft</strong>
                </div>
                <div className={styles["distance-content"]}>
                  {stage.aircraft} <strong>Aircraft Fuel Burn/leg</strong>
                </div>
                <div className={styles["distance-content"]}>
                  {stage.fuelBurn}
                </div>
              </div>
            </Card>
            <Card className={styles["cabin-card"]}>
              <div className={styles["cabin-info"]}>
                <div className={styles["cabin-title"]}>Cabin class</div>
                <div className={styles["cabin-content"]}>
                  {data.cabin.class} <strong>CO2/pax/leg</strong>
                </div>
                <div className={styles["cabin-content"]}>{stage.co2}</div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricPage;
