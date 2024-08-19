import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import styles from "./OffsetForm.module.scss";
// import { useNavigate } from "react-router-dom";

function OffsetForm() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Numbers of Passenger</Form.Label>
        <Form.Control placeholder="1" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Cabin Class</Form.Label>
        <Form.Select>
          <option>Select your Cabin Class</option>
          <option value="1">Economy</option>
          <option value="2">Excecutive</option>
          <option value="3">Premium</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Trip</Form.Label>
        <Form.Select>
          <option>Select your Cabin Class</option>
          <option value="1">One Way</option>
          <option value="2">Round Trip</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" className={styles["button-add-cart"]}>
        Add to Cart
      </Button>
    </Form>
  );
}

export default OffsetForm;
