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
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Divider,
  IconButton,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpen(true);
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setIsOpen(false);
    setAnchorElUser(null);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Logo onLogoClick={() => navigate("/dashboard")} />
        </div>
        <SearchBar placeholderText={"Search"} />
        <div className={styles.profile} onClick={() => setIsOpen(true)}>
          <ProfilePic />
        </div>
        {isOpen && <NavBarProfileOnClickCard setIsOpen={setIsOpen} />}

        <div className={styles.hamburger}>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open menu">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 1, ml: "50px" }}
              >
                {isOpen ? (
                  <CloseIcon fontSize="large" />
                ) : (
                  <MenuIcon fontSize="large" />
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px", alignItems: "center" }}
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
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={"15%"}
              >
                <MenuItem
                  onClick={handleCloseUserMenu}
                  className={styles.popover}
                >
                  <Stack spacing={{ xs: 2, sm: 2 }}>
                    <Button onClick={() => navigate("/group")}>
                      <Typography textAlign="center">Groups</Typography>
                    </Button>
                    <Button onClick={() => navigate("/topic")}>
                      <Typography textAlign="center">Topics</Typography>
                    </Button>
                    <Button onClick={() => navigate("/event")}>
                      <Typography textAlign="center">Events</Typography>
                    </Button>
                  </Stack>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseUserMenu}
                  className={styles.popover}
                >
                  <Stack spacing={{ xs: 8, sm: 8 }}>
                    <Button onClick={() => navigate("/profile")}>
                      <Typography textAlign="center">Profile</Typography>
                    </Button>
                    {isAuthenticated && (
                      <Button
                        onClick={() =>
                          logout({ returnTo: window.location.origin + "/" })
                        }
                      >
                        <p>Logout</p>
                      </Button>
                    )}
                  </Stack>
                </MenuItem>
              </Stack>
            </Menu>
          </Box>
        </div>
      </div>
    </>
  );
};

export default NavBar;
