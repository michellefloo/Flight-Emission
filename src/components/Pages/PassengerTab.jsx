import { Button } from "reactstrap";
import styles from "./PassengerTab.module.scss";
import PassengerForm from "./content/PassengerForm";

function PassengerTab() {
  return (
    <div>
      <div className={`${styles["active-tab"]}`}>
        <Button className={`${styles["metric-tab-primary"]}`} color={"primary"}>
          Passenger
        </Button>
      </div>
      <PassengerForm />
    </div>
  );
}

export default PassengerTab;
