import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import styles from "./OffsetForm.module.scss";
import { CABIN_CLASSES, TRIP } from "../constant/constants";

function OffsetForm() {
  return (
    <Form>
      <FormGroup className="mb-3">
        <Label className={styles["number-of-passenger-label"]}>
          Numbers of Passenger
        </Label>
        <Input type="number" placeholder="1" />
      </FormGroup>
      <FormGroup className="mb-3">
        <Label className={styles["cabin-class-label"]}>Cabin Class</Label>
        <Input type="select">
          {CABIN_CLASSES.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup className="mb-3">
        <Label className={styles["trip-label"]}>Trip</Label>
        <Input type="select">
          {TRIP.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Input>
      </FormGroup>
      <Button color="primary" className={styles["button-add-cart"]}>
        Add to Cart
      </Button>
    </Form>
  );
}

export default OffsetForm;
