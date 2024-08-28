import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Row,
  Col,
} from "reactstrap";
import styles from "./PassengerForm.module.scss";
import { useNavigate } from "react-router-dom";
import {
  ORIGIN_AIRPORTS,
  DESTINATION_AIRPORTS,
  CABIN_CLASSES,
  AIRCRAFT_TYPE,
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
    aircraftType: Yup.string().required("Aircraft Type is required"),
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
        aircraftType: "",
        trip: "one-way",
      }}
      validationSchema={validationSchema}
      onSubmit={handleButtonClick}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <FormGroup className="mb-4">
            <div className={styles["origin-airport-label-container"]}>
              <Label for="origin">Origin Airport</Label>
              <TooltipWithIcons
                icon={<HelpIcon width={20} height={25} color="#285A81" />}
                tooltipText="Select your starting airport for the flight"
              />
            </div>
            <Input
              type="select"
              name="origin"
              id="origin"
              value={values.origin}
              onChange={handleChange}
              invalid={touched.origin && !!errors.origin}
            >
              {ORIGIN_AIRPORTS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Input>
            {touched.origin && errors.origin && (
              <FormFeedback>{errors.origin}</FormFeedback>
            )}
          </FormGroup>

          <FormGroup className="mb-4">
            <div className={styles["dest-airport-label-container"]}>
              <Label for="destination">Destination Airport</Label>
              <TooltipWithIcons
                icon={<HelpIcon width={20} height={25} color="#285A81" />}
                tooltipText="Select your destination airport where you will land"
              />
            </div>
            <Input
              type="select"
              name="destination"
              id="destination"
              value={values.destination}
              onChange={handleChange}
              invalid={touched.destination && !!errors.destination}
              className="mb-2"
            >
              {DESTINATION_AIRPORTS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Input>
            {touched.destination && errors.destination && (
              <FormFeedback>{errors.destination}</FormFeedback>
            )}

            <div className={styles["button-group"]}>
              <Button
                color="primary"
                className={styles["button-add-destination"]}
              >
                <div className={styles["add-destination-label-icon"]}>
                  Add Destination
                  <AddIcon width={16} height={25} color="#285A81" />
                </div>
              </Button>
              <Button
                color="danger"
                className={styles["button-delete-location"]}
              >
                <div className={styles["delete-location-label-icon"]}>
                  Delete All Locations
                  <TrashIcon width={16} height={25} color="#812828" />
                </div>
              </Button>
            </div>
          </FormGroup>

          <Row className="mb-4">
            <Col md={3} className={styles["col-half"]}>
              <FormGroup className="mb-3">
                <Label
                  for="passengers"
                  className={styles["number-of-passenger-label"]}
                >
                  Numbers of Passenger
                </Label>
                <Input
                  type="number"
                  name="passengers"
                  id="passengers"
                  placeholder="1"
                  value={values.passengers}
                  onChange={handleChange}
                  invalid={touched.passengers && !!errors.passengers}
                />
                {touched.passengers && errors.passengers && (
                  <FormFeedback>{errors.passengers}</FormFeedback>
                )}
              </FormGroup>
            </Col>

            <Col md={3} className={styles["col-half"]}>
              <FormGroup className="mb-3">
                <Label for="cabinClass" className={styles["cabin-class-label"]}>
                  Cabin Class
                </Label>
                <Input
                  type="select"
                  name="cabinClass"
                  id="cabinClass"
                  value={values.cabinClass}
                  onChange={handleChange}
                  invalid={touched.cabinClass && !!errors.cabinClass}
                >
                  {CABIN_CLASSES.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Input>
                {touched.cabinClass && errors.cabinClass && (
                  <FormFeedback>{errors.cabinClass}</FormFeedback>
                )}
              </FormGroup>
            </Col>

            <Col md={3} className={styles["col-full"]}>
              <FormGroup className="mb-3">
                <Label
                  for="aircraftType"
                  className={styles["aircraft-type-label"]}
                >
                  Aircraft Type
                </Label>
                <Input
                  type="select"
                  name="aircraftType"
                  id="aircraftType"
                  value={values.aircraftType}
                  onChange={handleChange}
                  invalid={touched.aircraftType && !!errors.aircraftType}
                >
                  {AIRCRAFT_TYPE.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Input>
                {touched.aircraftType && errors.aircraftType && (
                  <FormFeedback>{errors.aircraftType}</FormFeedback>
                )}
              </FormGroup>
            </Col>

            <Col md={3} className={styles["col-full"]}>
              <FormGroup className="mb-3">
                <Label className={styles["trip-label"]}>Trip</Label>
                <div className={styles["trip-button"]}>
                  <Button
                    color="primary"
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
                    color="primary"
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
              </FormGroup>
            </Col>
          </Row>

          <Button
            color="primary"
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
