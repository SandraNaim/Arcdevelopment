import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";

import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";

import CallToAction from "./ui/CallToAction";

import forwardArrow from "../assets/forwardArrow.svg";
import backArrow from "../assets/backArrow.svg";
import integrationAnimation from "../animations/integrationAnimation/data.json";
import extendAccess from "../assets/extendAccess.svg";
import swissKnife from "../assets/swissKnife.svg";
import increaseEngagement from "../assets/increaseEngagement.svg";

const useStyles = makeStyles(theme => ({
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em",
        }
    },
    heading: {
        maxWidth: "40em"
    },
    arrowContainer: {
        marginTop: "0.5em"
    },
}))

export default function MobileApps(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: integrationAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return(
        <Grid container direction="column">

            {/* ___heading block___ */}
            <Grid item container direction="row" justifyContent={matchesMD ? "center" : undefined} className={classes.rowContainer}>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{marginRight: "1em", marginLeft: "-3.5em"}}>
                        <IconButton 
                            component={Link} 
                            to="/customsoftware" 
                            style={{backgroundColor: "transparent"}}
                            onClick={() => props.setSelectedIndex(1)}
                        >
                            <img alt="back arrow" src={backArrow} />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading} align={matchesMD ? "center" : undefined}>
                    <Grid item>
                        <Typography variant="h2" gutterBottom align={matchesMD ? "center" : undefined}>
                            iOS/Android App Development
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                            Mobile apps allow you to take your tools on the go
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                            Whether you want an app for your customers, employees, or yourself, we can build 
                            cross-platform native solutions for any part of your business process. This opens 
                            you up to a whole new world of possibilities by taking advantage of phone 
                            features like the camera, GPS, push notifications, and more.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                            Convenience. Connection.
                        </Typography>

                    </Grid>
                </Grid>

                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton 
                            component={Link} 
                            to="/websites" 
                            style={{backgroundColor: "transparent"}}
                            onClick={() => props.setSelectedIndex(3)}
                        >
                            <img alt="forward arrow" src={forwardArrow} />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>

            {/* ___integration and platform support___ */}
            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{marginTop: "15em", marginBottom: "10em"}}>
                <Grid md item container className={classes.itemContainer}>
                    <Grid item>
                        <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                            Integration
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                            Our technology enables an innate interconnection between web and mobile applications, 
                            putting everything you need right in one convenient place.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                            This allows you to extend your reach, reinvent interactions, and develop 
                            a stronger relationship with your users than ever before.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Lottie options={defaultOptions} />
                </Grid>
                <Grid md item container className={classes.itemContainer}>
                    <Grid item>
                        <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                            Simultaneous Platform Support
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph>
                            Our cutting-edge development process allows us to create apps for 
                            iPhone, Android, and tablets — all at the same time.
                        </Typography>
                        <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph>
                            This significantly reduces costs and creates a more unified brand experience 
                            across all devices.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            {/* ___extend icons___ */}
            <Grid item container direction="row" justifyContent="center" style={{marginBottom: "20em"}}  className={classes.rowContainer} >
                <Grid 
                    container 
                    item 
                    direction="column" 
                    md 
                    alignItems="center" 
                    style={{maxWidth: "40em"}}
                >
                    <Grid item>
                        <Typography variant="h4">Extend Functionality</Typography>
                    </Grid>
                    <Grid item>
                        <img alt="swiss knife" src={swissKnife} />
                    </Grid>
                </Grid>
                <Grid 
                    container 
                    item 
                    direction="column" 
                    md 
                    alignItems="center" 
                    style={{maxWidth: "40em", marginTop: matchesMD ? "10em" : 0, marginBottom: matchesMD ? "10em" : 0}}
                >
                    <Grid item>
                        <Typography variant="h4">Extend Access</Typography>
                    </Grid>
                    <Grid item>
                        <img alt="extend access" src={extendAccess} style={{maxWidth: matchesSM ? "100%" : "28em"}} />
                    </Grid>
                </Grid>
                <Grid 
                    container 
                    item 
                    direction="column" 
                    md 
                    alignItems="center" 
                    style={{maxWidth: "40em"}}
                >
                    <Grid item>
                        <Typography variant="h4">Increase Engagement</Typography>
                    </Grid>
                    <Grid item>
                        <img alt="increase engagement" src={increaseEngagement} />
                    </Grid>
                </Grid>
            </Grid>

            {/* ___call to action___ */}
            <Grid item>
                <CallToAction setValue={props.setValue} />
            </Grid>

        </Grid>
    )
}