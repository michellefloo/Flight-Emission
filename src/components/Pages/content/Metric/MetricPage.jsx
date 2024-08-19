import React from "react";
import { Card } from "reactstrap";
import styles from "./MetricPage.module.scss";
import IndonesiaFlag from "../../../../assets/icons/IndonesiaFlag.png";
import JPFlag from "../../../../assets/icons/JPFlag.png";
import SGFlag from "../../../../assets/icons/SGFlag.png";
import ArrowIcon from "../../../../assets/icons/ArrowIcon";
import { Button } from "react-bootstrap";

const MetricPage = () => {
  return (
    <div>
      <div className={styles["summary-card-container"]}>
        <div className={styles["summary-card-title"]}>Summary</div>
        <Card className={styles["summary-card"]}>
          <div className={styles["summary-info"]}>
            <div className={styles["cgk-info"]}>
              <div>
                <img src={IndonesiaFlag} alt="IndonesiaFlag" width={28} />
              </div>
              <div className={styles["cgk-title"]}>CGK</div>
            </div>
            <div>
              <ArrowIcon width={61} height={16} color="#285A81" />
            </div>
            <div className={styles["hnd-info"]}>
              <div>
                <img src={JPFlag} alt="JapanFlag" width={28} />
              </div>
              <div className={styles["hnd-title"]}>HND</div>
            </div>
          </div>
        </Card>
        <Card className={styles["passenger-card"]}>
          <div className={styles["passenger-info"]}>
            <div className={styles["passenger-title"]}>Passengers</div>
            <div className={styles["passenger-content"]}>
              1 <strong>Total passengers’ CO2/journey</strong>
            </div>
            <div className={styles["passenger-content"]}>
              428 KG <strong>Aircraft Fuel Burn/journey</strong>
            </div>
            <div className={styles["passenger-content"]}>45,175 KG</div>
          </div>
        </Card>
        <Card className={styles["cabin-card"]}>
          <div className={styles["cabin-info"]}>
            <div className={styles["cabin-title"]}>Cabin class</div>
            <div className={styles["cabin-content"]}>
              Economy <strong>Trip</strong>
            </div>
            <div className={styles["cabin-content"]}>One way</div>
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
              <strong className={styles["blue-text"]}>45,175 KG</strong> is
              equivalent to{" "}
              <strong className={styles["pink-text"]}>2,259</strong> Mangroves
              for Rp{" "}
              <strong className={styles["green-text"]}>45,175,000</strong>
            </div>
            <div className={styles["button-container"]}>
              <Button variant="primary" className={styles["button-offset"]}>
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
        <div className={styles["flight-stage-cgk-to-sin"]}>
          <Card className={styles["flight-stage-card"]}>
            <div className={styles["flight-stage-info"]}>
              <div className={styles["cgk-info"]}>
                <div>
                  <img src={IndonesiaFlag} alt="IndonesiaFlag" width={28} />
                </div>
                <div className={styles["cgk-title"]}>CGK</div>
              </div>
              <div>
                <ArrowIcon width={61} height={16} color="#285A81" />
              </div>
              <div className={styles["sg-info"]}>
                <div>
                  <img src={SGFlag} alt="SINFlag" width={28} />
                </div>
                <div className={styles["sg-title"]}>SIN</div>
              </div>
            </div>
          </Card>
          <Card className={styles["distance-card"]}>
            <div className={styles["distance-info"]}>
              <div className={styles["distance-title"]}>Distance</div>
              <div className={styles["distance-content"]}>
                880 KM <strong>Aircraft</strong>
              </div>
              <div className={styles["distance-content"]}>
                320, 32A, 32N, 333, 339, 359, 738, 773, 77W{" "}
                <strong>Aircraft Fuel Burn/leg</strong>
              </div>
              <div className={styles["distance-content"]}>6,387 KG</div>
            </div>
          </Card>
          <Card className={styles["cabin-card"]}>
            <div className={styles["cabin-info"]}>
              <div className={styles["cabin-title"]}>Cabin class</div>
              <div className={styles["cabin-content"]}>
                Economy Passenger <strong>CO2/pax/leg</strong>
              </div>
              <div className={styles["cabin-content"]}>82 KG</div>
            </div>
          </Card>
        </div>

        <div className={styles["flight-stage-sin-to-hnd"]}>
          <Card className={styles["flight-stage-card"]}>
            <div className={styles["flight-stage-info"]}>
              <div className={styles["sg-info"]}>
                <div>
                  <img src={SGFlag} alt="SGFlag" width={28} />
                </div>
                <div className={styles["sg-title"]}>SIN</div>
              </div>
              <div>
                <ArrowIcon width={61} height={16} color="#285A81" />
              </div>
              <div className={styles["hnd-info"]}>
                <div>
                  <img src={JPFlag} alt="JPFlag" width={28} />
                </div>
                <div className={styles["hnd-title"]}>HND</div>
              </div>
            </div>
          </Card>
          <Card className={styles["distance-card"]}>
            <div className={styles["distance-info"]}>
              <div className={styles["distance-title"]}>Distance</div>
              <div className={styles["distance-content"]}>
                5,296 KM <strong>Aircraft</strong>
              </div>
              <div className={styles["distance-content"]}>
                359, 767, 773, 77W, 788, 789{" "}
                <strong>Aircraft Fuel Burn/leg</strong>
              </div>
              <div className={styles["distance-content"]}>38,788 KG</div>
            </div>
          </Card>
          <Card className={styles["cabin-card"]}>
            <div className={styles["cabin-info"]}>
              <div className={styles["cabin-title"]}>Cabin class</div>
              <div className={styles["cabin-content"]}>
                Economy Passenger <strong>CO2/pax/leg</strong>
              </div>
              <div className={styles["cabin-content"]}>346 KG</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MetricPage;
