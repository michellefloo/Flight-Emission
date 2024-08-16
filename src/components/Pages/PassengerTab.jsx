import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styles from "./PassengerTab.module.scss";
import PassengerForm from "./content/PassengerForm";

function Content() {
  return (
    <Tabs
      defaultActiveKey="passenger"
      id="justify-tab-example"
      className={styles["tab-container"]}
      justify
    >
      <Tab eventKey="passenger" title="Passenger">
        <PassengerForm />
      </Tab>
    </Tabs>
  );
}

export default Content;
