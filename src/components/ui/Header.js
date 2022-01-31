import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function ElevationScroll(props) {
    const { children } = props;
    
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '1.5em',
        [theme.breakpoints.down("md")]: {
            marginBottom: '1em'
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: '0.5em'
        }
    },
    logo: {
        height: '6em',
        [theme.breakpoints.down("md")]: {
            height: '5.5em'
        },
        [theme.breakpoints.down("xs")]: {
            height: '4.5em'
        }
    },
    logocontainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: 'transparent'
        }
    },
    tabContainer: {
        marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px'
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: '50px',
        marginLeft: '50px',
        marginRight: '25px',
        height: '45px',
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white",
        borderRadius: "0px"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },
    drawerIcon: {
        height: "50px",
        width: "50px"
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawer: {
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange
    },
    itemDrawerSelected: {
        "& .MuiListItemText-root": {
            opacity: 1
        }
    },
    appbar: {
        zIndex: theme.zIndex.modal+1
    }
}))

export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleChange = (evt, newValue) => {
        props.setValue(newValue)
    }

    const handleClick = (evt) => {
        setAnchorEl(evt.currentTarget);
        setOpenMenu(true)
    }

    const handleClose = (evt) => {
        setAnchorEl(null);
        setOpenMenu(false)
    }

    const handleMenuItemClick = (evt, index) => {
        setAnchorEl(null);
        setOpenMenu(false);
        props.setSelectedIndex(index);
    }

    const menuOptions = [
        {name: "Services", link: "services", activeIndex: 1, selectedIndex: 0},
        {name: "Custom Software Development", link: "customsoftware", activeIndex: 1, selectedIndex: 1},
        {name: "Mobile App Development", link: "mobileapps", activeIndex: 1, selectedIndex: 2},
        {name: "Website Development", link: "websites", activeIndex: 1, selectedIndex: 3},
    ]

    const routes = [
        {name: "Home", link: "/", activeIndex: 0},
        {name: "Services", link: "/services", activeIndex: 1, ariaOwns: anchorEl ? "simple-menu" : undefined, ariaHasPopUp: anchorEl ? true : undefined, mouseOver: (evt) => handleClick(evt) },
        {name: "The Revolution", link: "/revolution", activeIndex: 2},
        {name: "About Us", link: "/about", activeIndex: 3},
        {name: "Contact Us", link: "/contact", activeIndex: 4},
    ]

    useEffect(() => {
        [...menuOptions, ...routes].forEach(route => {
            switch(window.location.pathname){
                case `${route.link}`:
                    if(props.value !== route.activeIndex) {
                        props.setValue(route.activeIndex);
                        if(route.setSelectedIndex && route.selectedIndex !== props.selectedIndex) {
                            props.setSelectedIndex(route.setSelectedIndex);
                        }
                    } 
                    break;
                case "/estimate": 
                    props.setValue(5);
                    break;
                default: 
                    break;
            }
        })
    }, [props.value, menuOptions, props.selectedIndex, routes])

    const tabs = (
        <React.Fragment>
            <Tabs value={props.value} onChange={handleChange} indicatorColor="primary" className={classes.tabContainer}>
                {
                    routes.map((route, index) => (
                        <Tab 
                            key={index}
                            className={classes.tab} 
                            label={route.name} 
                            component={Link} 
                            to={route.link}
                            aria-owns={route.ariaOwns}
                            aria-haspopup={route.ariaHasPopUp}
                            onMouseOver={route.mouseOver}
                        />
                    ))
                }
            </Tabs>
            <Button 
                variant="contained" 
                color="secondary" 
                className={classes.button} 
                component={Link}
                to="/estimate"
                onClick={() => props.setValue(5)}
            >
            Free Estimate
            </Button>
            <Menu 
                id="simple-menu" 
                anchorEl={anchorEl} 
                open={openMenu} 
                onClose={handleClose}
                MenuListProps={{onMouseLeave: handleClose}}
                classes={{ paper: classes.menu }}
                elevation={0}
                style={{zIndex: 1302}}
                keepMounted
            >
                {
                    menuOptions.map((option, index) => (
                        <MenuItem 
                            key={index}
                            classes={{ root: classes.menuItem }} 
                            onClick={(evt) => {handleMenuItemClick(evt, index); props.setValue(1); handleClose()}} 
                            component={Link} 
                            to={option.link}
                            selected={index === props.selectedIndex && props.value === 1}
                        >
                            {option.name}
                        </MenuItem>
                    ))
                }
            </Menu>
        </React.Fragment>
    );

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer 
                disableBackdropTransition={!iOS} 
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{paper: classes.drawer}}
            >
                <div className={classes.toolbarMargin}/>
                <List disablePadding>
                    {
                        routes.map((route, index) => (
                            <ListItem key={index} divider button classes={{selected: classes.itemDrawerSelected}} component={Link} to={route.link} onClick={() => {setOpenDrawer(false); props.setValue(route.activeIndex)}} selected={props.value === route.activeIndex}>
                                <ListItemText 
                                    className={classes.drawerItem} 
                                    disableTypography
                                >
                                    {route.name}
                                </ListItemText>
                            </ListItem>
                        ))
                    }
                    <ListItem divider button classes={{root: classes.drawerItemEstimate, selected: classes.itemDrawerSelected}} component={Link} to="/estimate" onClick={() => {setOpenDrawer(false); props.setValue(4)}} selected={props.value === 4} className={classes.drawerItemEstimate}>
                        <ListItemText 
                            className={classes.drawerItem} 
                            disableTypography
                        >
                            Free Estimate
                        </ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" className={classes.appbar}>
                    <Toolbar disableGutters>
                        <Button disableRipple component={Link} to="/" className={classes.logocontainer} onClick={() => props.setValue(0)}>
                            <img alt="company logo" className={classes.logo} src={logo} />
                        </Button>
                        {
                            matches ? drawer : tabs
                        }
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </React.Fragment>
    )
}