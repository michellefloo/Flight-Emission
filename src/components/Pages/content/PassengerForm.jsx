import Button from "react-bootstrap/Button";
import { Form, Row, Col } from "react-bootstrap";
import styles from "./PassengerForm.module.scss";
import { useNavigate } from "react-router-dom";
import {
  ORIGIN_AIRPORTS,
  DESTINATION_AIRPORTS,
  CABIN_CLASSES,
} from "../constant/constants";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import HelpIcon from "../../../assets/icons/HelpIcon";
import TooltipWithIcons from "../../Widget/TooltipWithIcons/TooltipWithIcons";
import AddIcon from "../../../assets/icons/AddIcon";
import TrashIcon from "../../../assets/icons/TrashIcon";

function PassengerForm() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    origin: Yup.string().required("Origin Airport is required"),
    destination: Yup.string().required("Destination Airport is required"),
    passengers: Yup.number()
      .required("Number of Passengers is required")
      .min(1, "At least 1 passenger is required"),
    cabinClass: Yup.string().required("Cabin Class is required"),
  });

  const handleButtonClick = () => {
    navigate("/calculate");
  };

  const [activeButton, setActiveButton] = useState("one-way");

  const toggleButton = (button) => {
    if (activeButton !== button) setActiveButton(button);
  };

  return (
    <Formik
      initialValues={{
        origin: "",
        destination: "",
        passengers: "",
        cabinClass: "",
        trip: "one-way",
      }}
      validationSchema={validationSchema}
      onSubmit={handleButtonClick}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="origin">
            <div className={styles["origin-airport-label-container"]}>
              <Form.Label>Origin Airport</Form.Label>
              <TooltipWithIcons
                icon={<HelpIcon width={20} height={25} color="#285A81" />}
                tooltipText="Select your starting airport for the flight"
              />
            </div>
            <Form.Select
              name="origin"
              value={values.origin}
              onChange={handleChange}
              isInvalid={touched.origin && !!errors.origin}
            >
              {ORIGIN_AIRPORTS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.origin}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4" controlId="destination">
            <div className={styles["dest-airport-label-container"]}>
              <Form.Label>Destination Airport</Form.Label>
              <TooltipWithIcons
                icon={<HelpIcon width={20} height={25} color="#285A81" />}
                tooltipText="Select your destination airport where you will land"
              />
            </div>
            <Form.Select
              name="destination"
              value={values.destination}
              onChange={handleChange}
              isInvalid={touched.destination && !!errors.destination}
              className="mb-2"
            >
              {DESTINATION_AIRPORTS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.destination}
            </Form.Control.Feedback>

            <div className={styles["button-group"]}>
              <Button
                variant="primary"
                className={styles["button-add-destination"]}
              >
                <div className={styles["add-destination-label-icon"]}>
                  Add Destination
                  <AddIcon width={16} height={25} color="#285A81" />
                </div>
              </Button>
              <Button
                variant="danger"
                className={styles["button-delete-location"]}
              >
                <div className={styles["delete-location-label-icon"]}>
                  Delete All Locations
                  <TrashIcon width={16} height={25} color="#812828" />
                </div>
              </Button>
            </div>
          </Form.Group>

          <Row className="mb-4">
            <Col md={4}>
              <Form.Group className="mb-3" controlId="passengers">
                <Form.Label className={styles["number-of-passenger-label"]}>
                  Numbers of Passenger
                </Form.Label>
                <Form.Control
                  type="number"
                  name="passengers"
                  placeholder="1"
                  value={values.passengers}
                  onChange={handleChange}
                  isInvalid={touched.passengers && !!errors.passengers}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.passengers}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-3" controlId="cabinClass">
                <Form.Label className={styles["cabin-class-label"]}>
                  Cabin Class
                </Form.Label>
                <Form.Select
                  name="cabinClass"
                  value={values.cabinClass}
                  onChange={handleChange}
                  isInvalid={touched.cabinClass && !!errors.cabinClass}
                >
                  {CABIN_CLASSES.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.cabinClass}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-3" controlId="trip">
                <Form.Label className={styles["trip-label"]}>Trip</Form.Label>
                <div className={styles["trip-button"]}>
                  <Button
                    variant="primary"
                    className={
                      activeButton === "one-way"
                        ? `${styles["button-one-way"]}`
                        : `${styles["button-round-trip"]}`
                    }
                    active={values.trip === "one-way"}
                    onClick={() => toggleButton("one-way")}
                  >
                    One Way
                  </Button>
                  <Button
                    variant="primary"
                    className={
                      activeButton === "one-way"
                        ? `${styles["button-round-trip"]}`
                        : `${styles["button-one-way"]}`
                    }
                    active={values.trip === "round-trip"}
                    onClick={() => toggleButton("round-trip")}
                  >
                    Round Trip
                  </Button>
                </div>
              </Form.Group>
            </Col>
          </Row>

          <Button
            variant="primary"
            className={styles["button-calculate"]}
            type="submit"
          >
            Calculate
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default PassengerForm;
