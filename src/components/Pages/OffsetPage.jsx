import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import styles from "./OffsetPage.module.scss";
import { Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import productThumb from "../../assets/img/mangrove-thumb.png";
import productVarian from "../../assets/img/mangrove-varian.png";
import OffsetForm from "./content/OffsetForm";
import ReportIcon from "../../assets/icons/ReportIcon";

function OffsetPage() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/calculate");
  const handleNext = () => navigate("/");
  return (
    <Card className={styles["card-container"]}>
      <Row>
        <Col md={6}>
          <h6 className={styles["breadcrumb"]}>
            Home &gt; Calculation &gt;&nbsp;
            <span id={styles["current-page"]}>Carbon Offset</span>
          </h6>
        </Col>
        <Col md={6}>
          <div className={styles["button-container"]}>
            <Button
              variant="secondary"
              className={styles["button-back"]}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              variant="primary"
              className={styles["button-next"]}
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
        </Col>
      </Row>
      <div className={styles["content"]}>
        <Card>
          <CardHeader className={styles["card-header"]}>
            <div className={styles["report-info"]}>
              <ReportIcon width={24} color="#fff" />
              Planting 50 Mangrove trees can help you absorb up to 1,650 kg of
              CO2e from the atmosphere.
            </div>
          </CardHeader>
          <CardBody className={styles["card-body"]}>
            Aviation is a significant source of carbon dioxide (CO2) emissions,
            contributing substantially to climate change. Every time an aircraft
            flies, jet fuel is burned, resulting in greenhouse gas emissions
            that pollute the atmosphere. The carbon emissions from flights are
            calculated based on factors such as the flight distance, type of
            aircraft, number of passengers, and fuel consumption.
          </CardBody>
        </Card>
        <Row className={styles["product"]}>
          <Col md={6}>
            <div className={`${styles["product-img"]} text-center`}>
              <img
                src={productThumb}
                alt="product"
                className={styles["product-thumb"]}
              />
              <h2 className={styles["product-title"]}>50 Mangrove Tress</h2>
              <p className={styles["product-desc"]}>
                Absorbs up to 1,650 kg CO2e
              </p>
            </div>
            <Row>
              <Col md={12} className="m-0 p-0">
                <img
                  src={productVarian}
                  alt="product-varian"
                  className={styles["product-varian"]}
                />
                <img
                  src={productVarian}
                  alt="product-varian"
                  className={styles["product-varian"]}
                />
                <img
                  src={productVarian}
                  alt="product-varian"
                  className={styles["product-varian"]}
                />
                <img
                  src={productVarian}
                  alt="product-varian"
                  className={styles["product-varian"]}
                />
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <h2 className={styles["product-qty"]}>2,259 Mangroves Tree</h2>
            <h3 className={styles["product-price"]}>Rp 45,175,000 </h3>
            <OffsetForm />
          </Col>
        </Row>
      </div>
    </Card>
  );
}

export default OffsetPage;
