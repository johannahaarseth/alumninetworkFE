import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from "@mui/material/Avatar";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid'; 

const NavBar = () => {
    const settings = ['Profile', 'Logout'];
    const logoalumni = require("../../assets/Pictures/LogoAlumni.png");
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "#FFFFFF",
        color: "#000000",
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.75),
        },
        marginLeft:0 ,
        width: '100%',
            
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        color: "#000000",
        justifyContent: 'center',
    }));


    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        fontFamily: 'Inter',
        fontSize: 20,
        top: "60%",
        color: "#000000",
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            
        },
    }));
    return (
      
        <AppBar position="static" style={{ background: '#82C0CC' }}>
            <Toolbar >

                <Grid container sx={{ display: "flex", justifyContent: "space-between", height: "80%", }}>

                <Grid item  xs={12} md={2}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, width: 180}}
                        >
                            <Box
                                component="img"
                                src={logoalumni}
                                sx={{ width: "100%" }}
                                >
                            </Box>
                    </IconButton>
                </Grid>

                    <Grid item xs={8} md={6}>
                        <Search sx={{ top:"22%",marginRight:"10%" }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                            
                        <StyledInputBase
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{ color: "#000000"}}
                        />
                    </Search>
                </Grid>


                <Grid item xs={2} md={2}>
                    <Box>
                        <IconButton
                                onClick={handleOpenUserMenu}
                                size="large"
                        >
                            <Avatar sx={{ width: 60, height: 60, } }/>
                        </IconButton>

                        <Menu
                            sx={{ mt: '68px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}

                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                        </Menu>


                    </Box>
                </Grid>
                </Grid>
                    </Toolbar>
           

            </AppBar>
        
    )
};

export default NavBar;
