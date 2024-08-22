import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import styles from "./OffsetForm.module.scss";
import { CABIN_CLASSES, TRIP } from "../constant/constants";

function OffsetForm() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label className={styles["number-of-passenger-label"]}>
          Numbers of Passenger
        </Form.Label>
        <Form.Control placeholder="1" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className={styles["cabin-class-label"]}>
          Cabin Class
        </Form.Label>
        <Form.Select>
          {CABIN_CLASSES.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className={styles["trip-label"]}>Trip</Form.Label>
        <Form.Select>
          {TRIP.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button variant="primary" className={styles["button-add-cart"]}>
        Add to Cart
      </Button>
    </Form>
  );
}

export default OffsetForm;
