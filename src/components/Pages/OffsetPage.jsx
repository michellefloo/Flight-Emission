import React from "react";
import { Card, CardBody, CardHeader, Button, Row, Col } from "reactstrap";
import styles from "./OffsetPage.module.scss";
import { useNavigate } from "react-router-dom";
import productThumb from "../../assets/img/mangrove-thumb.png";
import OffsetForm from "./content/OffsetForm";
import ReportIcon from "../../assets/icons/ReportIcon";
import { offsetPageDummyData } from "./constant/DataDummy";

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
              {offsetPageDummyData.reportInfo}
            </div>
          </CardHeader>
          <CardBody className={styles["card-body"]}>
            {offsetPageDummyData.description}
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
              <h2 className={styles["product-title"]}>
                {offsetPageDummyData.product.mangroveesQuantity} Mangroves Trees
              </h2>
              <p className={styles["product-desc"]}>
                Absorbs up to {offsetPageDummyData.product.co2}
              </p>
            </div>
            <Row>
              <Col md={12} className="m-0 p-0">
                {offsetPageDummyData.product.images.map((image, index) => (
                  <img
                    key={index}
                    src={require(`../../${image.link}`)} 
                    alt={image.desc || "Product Varian"}
                    className={styles["product-varian"]}
                  />
                ))}
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <h2 className={styles["product-qty"]}>
              {offsetPageDummyData.product.quantity} Mangroves Tree
            </h2>
            <h3 className={styles["product-price"]}>
              Rp {offsetPageDummyData.product.price}{" "}
            </h3>
            <OffsetForm />
          </Col>
        </Row>
      </div>
    </Card>
  );
}

export default OffsetPage;
