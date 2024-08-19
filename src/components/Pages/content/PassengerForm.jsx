import Button from "react-bootstrap/Button";
import { Form, Row, Col } from "react-bootstrap";
import styles from "./PassengerForm.module.scss";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function PassengerForm() {
  const navigate = useNavigate(); // Create a navigate function

  const handleButtonClick = () => {
    navigate("/calculate"); // Navigate to /calculate on button click
  };
  return (
    <Form>
      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
        <Form.Label>Origin Airport</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Select your Origin Airport</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Destination Airport</Form.Label>
        <Form.Select className="mb-2">
          <option>Select your Dest. Airport</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <div className={styles["button-group"]}>
          <Button
            variant="primary"
            className={styles["button-add-destination"]}
          >
            Add Destination
          </Button>
          <Button variant="danger" className={styles["button-delete-location"]}>
            Delete All Locations
          </Button>
        </div>
      </Form.Group>
      <Row className="mb-4">
        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Label>Numbers of Passenger</Form.Label>
            <Form.Control placeholder="1" />
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Label>Cabin Class</Form.Label>
            <Form.Select>
              <option>Select your Cabin Class</option>
              <option value="1">Economy</option>
              <option value="2">Excecutive</option>
              <option value="3">Premium</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Label>Trip</Form.Label>
            <div className={styles["trip-button"]}>
              <Button variant="primary" className={styles["button-one-way"]}>
                One Way
              </Button>
              <Button variant="primary" className={styles["button-round-trip"]}>
                Round Trip
              </Button>
            </div>
          </Form.Group>
        </Col>
      </Row>
      <Button
        variant="primary"
        className={styles["button-calculate"]}
        onClick={handleButtonClick}
      >
        Calculate
      </Button>
    </Form>
  );
}

export default PassengerForm;
