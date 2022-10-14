import styles from "./NavBar.module.css";
import ProfilePic from "../ProfilePic/ProfilePic.component";
import Logo from "../Logo/Logo.component";
import SearchBar from "../SearchBar/SearchBar.component";
import { useState } from "react";
import NavBarProfileOnClickCard from "../NavBarProfileOnClickCard/NavBarProfileOnClickCard.component";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          {isAuthenticated && (
            <div className={styles.logo}>
              {isAuthenticated && (
                <Logo onLogoClick={() => navigate("/dashboard")} />
              )}
            </div>
          )}
        </div>
        <SearchBar placeholderText={"Search"} />
        <div className={styles.profile} onClick={() => setIsOpen(true)}>
          <ProfilePic />
        </div>
      </div>
      {isOpen && <NavBarProfileOnClickCard setIsOpen={setIsOpen} />}
    </>
  );
};

export default NavBar;
