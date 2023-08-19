import { Link, useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import { useDispatch } from "react-redux";
import { userLogout } from "../../redux/actions/authAction";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  return (
    <>
      <nav className={styles.navBar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>
              VtechElite
            </Link>
          </li>
        </ul>
        <ul className={styles.navList}>
          {user ? (
            <>
              <li className={styles.navItem}>
                <Link to="/home" className={styles.navLink}>
                  Home
                </Link>
              </li>
              <li
                className={styles.navItem}
                onClick={() => {
                  dispatch(userLogout());
                  navigate("/login");
                }}
              >
                LogOut
              </li>
            </>
          ) : (
            <li className={styles.navItem}>
              <Link to="/login" className={styles.navLink}>
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Header;
