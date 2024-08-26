import { Container, Navbar, NavbarBrand } from "reactstrap";
import styles from "./Navbar.module.scss";
import logo from "../../../assets/img/logo.png";

function NavbarFlightEmission() {
  return (
    <>
      <Navbar
        color="primary"
        dark
        className={styles["navbar-custom"]}
        expand="md"
      >
        <Container className={styles["container-custom"]}>
          <NavbarBrand href="/" className={styles["brand-container"]}>
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
          </NavbarBrand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarFlightEmission;
