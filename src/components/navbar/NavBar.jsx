import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TopicsDrawer from '../topics/TopicsDrawer';
import LoginForm from './LoginForm';
import { Link, navigate } from '@reach/router';
import { ButtonBase, MenuItem, Menu, Typography, IconButton, Toolbar, AppBar } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        padding: theme.spacing(1),
        marginLeft: theme.spacing(4),
        marginRight: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginRight: theme.spacing(3),
            width: 'auto',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    link: {
        textDecoration: "none",
        color: "white",
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        }
    },
}));

export default function NavBar({ loginUser, loggedInUser, logoutUser }) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    function handleProfileMenuOpen(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleMenuClose() {
        setAnchorEl(null);
    }

    function handleLogout() {
        logoutUser()
        handleMenuClose()
        navigate('/')
    }

    function goToProfile() {
        handleMenuClose()
        navigate(`/profile/${loggedInUser}`)
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            className={classes.menu}
        >
            {loggedInUser && <MenuItem onClick={goToProfile}>Profile</MenuItem>}
            {!loggedInUser && <MenuItem onSubmit={handleMenuClose}>
                <LoginForm loginUser={loginUser} />
            </MenuItem>}
            {loggedInUser && <MenuItem onClick={handleLogout}>
                Logout
            </MenuItem>}
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <TopicsDrawer
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Open drawer"
                    />
                    <ButtonBase aria-label="Go to home page">
                        <Link to={'/'} className={classes.link} >
                            <Typography className={classes.title} variant="h6" noWrap>
                                NC News
                            </Typography>
                        </Link>
                    </ButtonBase>
                    <div className={classes.grow} />
                    <div>
                        {loggedInUser &&
                            <Typography className={classes.search}>Welcome {loggedInUser}!
                        </Typography>}
                    </div>
                    <div >
                        <IconButton
                            edge="end"
                            aria-label="Account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </div>
    );
}