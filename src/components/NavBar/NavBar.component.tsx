import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth0();

  const logoalumni = require("../../assets/Pictures/LogoAlumni.png");

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#FFFFFF",
    color: "#000000",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.75),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    fontFamily: "Inter",
    fontSize: 20,

    color: "#000000",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "74ch",
    },
  }));
  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{ background: "#82C0CC", width: "100%" }}
        >
          <Toolbar>
            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Grid container item xs={12} md={1}>
                <IconButton size="large" sx={{ width: 180 }}>
                  <Box
                    component="img"
                    src={logoalumni}
                    sx={{ width: "100%" }}
                  ></Box>
                </IconButton>
              </Grid>

              <Grid item xs={8} md={6}>
                <Search sx={{ top: "16%" }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>

                  <StyledInputBase
                    placeholder="Search"
                    inputProps={{ "aria-label": "search" }}
                    sx={{ color: "#000000" }}
                  />
                </Search>
              </Grid>

              <Grid container item xs={2} md={1}>
                <IconButton onClick={handleOpenUserMenu}>
                  <Avatar sx={{ width: 60, height: 60 }} />
                </IconButton>

                <Menu
                  sx={{ mt: "68px" }}
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
                >
                  <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                  {isAuthenticated && (
                    <MenuItem
                      onClick={() =>
                        logout({ returnTo: window.location.origin + "/" })
                      }
                    >
                      Log Out
                    </MenuItem>
                  )}
                </Menu>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
