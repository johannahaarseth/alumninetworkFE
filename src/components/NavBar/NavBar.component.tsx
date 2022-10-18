import styles from "./NavBar.module.css";
import ProfilePic from "../ProfilePic/ProfilePic.component";
import Logo from "../Logo/Logo.component";
import SearchBar from "../SearchBar/SearchBar.component";
import { useState } from "react";
import NavBarProfileOnClickCard from "../NavBarProfileOnClickCard/NavBarProfileOnClickCard.component";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";

const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
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
        {isOpen && <NavBarProfileOnClickCard setIsOpen={setIsOpen} />}

        <div className={styles.hamburger}>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 1, ml: "50px" }}
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              className={styles.menu}
            >
              <MenuItem
                onClick={handleCloseUserMenu}
                className={styles.popover}
              >
                <Grid container spacing={12}>
                  <Grid container item xs={2} mx={4}>
                    <Button onClick={() => navigate("/group")}>
                      <Typography textAlign="center">Groups</Typography>
                    </Button>
                    <Button onClick={() => navigate("/topic")}>
                      <Typography textAlign="center">Topics</Typography>
                    </Button>
                    <Button onClick={() => navigate("/event")}>
                      <Typography textAlign="center">Events</Typography>
                    </Button>
                  </Grid>
                </Grid>
              </MenuItem>
              <MenuItem
                onClick={handleCloseUserMenu}
                className={styles.popover}
              >
                <Grid container>
                  <Grid container item xs={2} mx={4}>
                    <Button onClick={() => navigate("/profile")}>
                      <Typography textAlign="center">Profile</Typography>
                    </Button>
                  </Grid>
                </Grid>
              </MenuItem>
            </Menu>
          </Box>
        </div>
      </div>
    </>
  );
};

export default NavBar;
