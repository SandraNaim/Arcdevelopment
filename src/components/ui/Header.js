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
        marginBottom: '2em'
    },
    logo: {
        height: '6em'
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
    }
}))

export default function Header(props) {
    const classes = useStyles();

    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleChange = (evt, value) => {
        setValue(value)
    }

    const handleClick = (evt) => {
        setAnchorEl(evt.currentTarget);
        setOpen(true)
    }

    const handleClose = (evt) => {
        setAnchorEl(null);
        setOpen(false)
    }

    const handleMenuItemClick = (evt, index) => {
        setAnchorEl(null);
        setOpen(false);
        setSelectedIndex(index);
    }

    const menuOptions = [
        {name: "Services", link: "services"},
        {name: "Custom Software Development", link: "customsoftware"},
        {name: "Mobile App Development", link: "mobileapps"},
        {name: "Website Development", link: "websites"},
    ]

    useEffect(() => {
        if(window.location.pathname === "/" && value !== 0){
            setValue(0)
        } else if(window.location.pathname === "/services" && value !== 1){
            setValue(1)
        } else if(window.location.pathname === "/revolution" && value !== 2){
            setValue(2)
        } else if(window.location.pathname === "/about" && value !== 3){
            setValue(3)
        } else if(window.location.pathname === "/contact" && value !== 4){
            setValue(4)
        } else if(window.location.pathname === "/estimate" && value !== 5){
            setValue(5)
        }

        switch(window.location.pathname){
            case "/":
                if(value !== 0) {
                    setValue(0)
                } 
            break;
            case "/services":
                if(value !== 1) {
                    setValue(1);
                    setSelectedIndex(0);
                } 
            break;
            case "/customsoftware":
                if(value !== 1) {
                    setValue(1);
                    setSelectedIndex(1);
                }
            case "/mobileapps":
                if(value !== 1) {
                    setValue(1);
                    setSelectedIndex(2);
                } 
            break;
            case "/websites":
                if(value !== 1) {
                    setValue(1);
                    setSelectedIndex(3);
                }
            break;
            case "/revolution":
                if(value !== 2) {
                    setValue(2)
                }
                 
            break;
            case "/about":
                if(value !== 3) {
                    setValue(3)
                } 
            break;
            case "/contact":
                if(value !== 4) {
                    setValue(4)
                } 
            break;
            case "/estimate":
                if(value !== 5) {
                    setValue(5)
                } 
            break;
            default: 
                break;
        }

    }, [value])

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Button disableRipple component={Link} to="/" className={classes.logocontainer} onClick={() => setValue(0)}>
                            <img alt="company logo" className={classes.logo} src={logo} />
                        </Button>
                        <Tabs value={value} onChange={handleChange} indicatorColor="primary" className={classes.tabContainer}>
                            <Tab className={classes.tab} label="Home" component={Link} to="/"/>
                            <Tab 
                                aria-owns={anchorEl ? "simple-menu" : undefined}
                                aria-haspopup={anchorEl ? true : undefined}
                                onMouseOver={(evt) => handleClick(evt)}
                                className={classes.tab} 
                                label="Services"
                            />
                            <Tab className={classes.tab} label="The Revolution" component={Link} to="/revolution" />
                            <Tab className={classes.tab} label="About Us" component={Link} to="/about" />
                            <Tab className={classes.tab} label="Contact Us" component={Link} to="/contact" />
                        </Tabs>
                        <Button variant="contained" color="secondary" className={classes.button}>
                        Free Estimate
                        </Button>
                        <Menu 
                            id="simple-menu" 
                            anchorEl={anchorEl} 
                            open={open} 
                            onClose={handleClose}
                            MenuListProps={{onMouseLeave: handleClose}}
                            classes={{ paper: classes.menu }}
                            elevation={0}
                        >
                            {
                                menuOptions.map((option, index) => (
                                    <MenuItem 
                                        key={index}
                                        classes={{ root: classes.menuItem }} 
                                        onClick={(evt) => {handleMenuItemClick(evt, index); setValue(1); handleClose()}} 
                                        component={Link} 
                                        to={option.link}
                                        selected={index === selectedIndex && value === 1}
                                    >
                                        {option.name}
                                    </MenuItem>
                                ))
                            }
                        </Menu>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </React.Fragment>
    )
}