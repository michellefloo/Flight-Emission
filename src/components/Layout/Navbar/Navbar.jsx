import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbar.module.scss";
import logo from "../../../assets/img/logo.png";

function NavbarFlightEmission() {
  return (
    <>
      <Navbar
        bg="primary"
        data-bs-theme="dark"
        className={styles["navbar-custom"]}
      >
        <Container className={styles["container-custom"]}>
          <Navbar.Brand href="/" className={styles["brand-container"]}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "28px", marginRight: "8px" }}
            />
            <div className={styles["text-container"]}>
              <span className={styles["title"]}>
                CARBON <strong>EMISSION</strong>
              </span>
              <span className={styles["subtitle"]}>CALCULATOR</span>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarFlightEmission;
