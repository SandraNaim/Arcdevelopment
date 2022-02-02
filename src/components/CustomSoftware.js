import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";

import CallToAction from "./ui/CallToAction";

import forwardArrow from "../assets/forwardArrow.svg";
import backArrow from "../assets/backArrow.svg";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import root from "../assets/root.svg";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data";


const useStyles = makeStyles((theme) => ({
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
    itemContainer: {
        width: "40em",
        [theme.breakpoints.down("sm")]: {
            width: "auto"
        }
    }
}))

export default function CustomSoftware(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

    const documentsOptions = {
        loop: true,
        autoplay: true, 
        animationData: documentsAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const scaleOptions = {
        loop: true,
        autoplay: true, 
        animationData: scaleAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const automationOptions = {
        loop: true,
        autoplay: true, 
        animationData: automationAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const uxOptions = {
        loop: true,
        autoplay: true, 
        animationData: uxAnimation,
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
                            to="/services" 
                            style={{backgroundColor: "transparent"}}
                            onClick={() => props.setSelectedIndex(0)}
                        >
                            <img alt="back arrow" src={backArrow} />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading} align={matchesMD ? "center" : undefined}>
                    <Grid item>
                        <Typography variant="h2" gutterBottom align={matchesMD ? "center" : undefined}>
                            Custom Software Development
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                            Whether we’re replacing old software or inventing new solutions, 
                            Arc Development is here to help your business tackle technology.<br />
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                            Using regular commercial software leaves you with a lot of stuff you don’t need, 
                            without some of the stuff you do need, and ultimately controls the way you work. 
                            Without using any software at all you risk falling behind competitors and missing 
                            out on huge savings from increased efficiency.<br />
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                            Our custom solutions are designed from the ground up with your needs, wants, 
                            and goals at the core. This collaborative process produces finely tuned software 
                            that is much more effective at improving your workflow and reducing costs 
                            than generalized options.<br/>
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                            We create exactly what you what, exactly how you want it.
                        </Typography>

                    </Grid>
                </Grid>

                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton 
                            component={Link} 
                            to="/mobileapps" 
                            style={{backgroundColor: "transparent"}}
                            onClick={() => props.setSelectedIndex(2)}
                        >
                            <img alt="forward arrow" src={forwardArrow} />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            
            {/* ___middle icons___ */}
            <Grid item container direction="row" justifyContent="center" style={{marginTop: "15em", marginBottom: "20em"}}  className={classes.rowContainer} >
                <Grid 
                    container 
                    item 
                    direction="column" 
                    md 
                    alignItems="center" 
                    style={{maxWidth: "40em"}}
                >
                    <Grid item>
                        <Typography variant="h4">Save Energy</Typography>
                    </Grid>
                    <Grid item>
                        <img alt="lightbulb" src={lightbulb} />
                    </Grid>
                </Grid>
                <Grid 
                    container 
                    item 
                    direction="column" 
                    md 
                    alignItems="center" 
                    style={{maxWidth: "40em", marginTop: matchesSM ? "10em" : 0, marginBottom: matchesSM ? "10em" : 0}}
                >
                    <Grid item>
                        <Typography variant="h4">Save Time</Typography>
                    </Grid>
                    <Grid item>
                        <img alt="stopwatch" src={stopwatch} />
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
                        <Typography variant="h4">Save Money</Typography>
                    </Grid>
                    <Grid item>
                        <img alt="cash" src={cash} />
                    </Grid>
                </Grid>
            </Grid>

            {/* ___document and scale block___ */}
            <Grid item container direction={matchesMD ? "column" : "row"} alignItems={matchesMD ? "center" : undefined} justifyContent="space-between"  className={classes.rowContainer}>
                <Grid md item container className={classes.itemContainer} style={{marginBottom: matchesMD ? "15em" : 0}} direction={matchesSM ? "column" : "row"}>
                    <Grid md item container direction="column">
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                                Digital Documents & Data
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                                Reduce Errors. Reduce Waste. Reduce Costs
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                                Billions are spent annually on the purchasing, 
                                printing, and distribution of paper. On top of the 
                                massive environmental impact this has, it causes harm 
                                to your bottom line as well.
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                                By utilizing digital forms and documents you can 
                                remove these obsolete expenses, accelerate your 
                                communication, and help the Earth.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={documentsOptions} style={{maxWidth: 275, maxHeight: 275, minHeight: 250}} />
                    </Grid>
                </Grid>
                <Grid md item container className={classes.itemContainer} direction={matchesSM ? "column" : "row"}>
                    <Grid item md>
                        <Lottie options={scaleOptions} style={{maxWidth: 280, maxHeight: 260}} />
                    </Grid>
                    <Grid md item container direction="column">
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : "right"}>Scale</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph>
                                Whether you’re a large brand, just getting 
                                started, or taking off right now, our application 
                                architecture ensures pain-free growth and reliability.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* ___root block___ */}
            <Grid item container direction="column" justifyContent="center" alignItems="center" style={{marginTop: "20em", marginBottom: "20em"}}  className={classes.rowContainer}>
                <Grid item>
                    <img 
                        alt="root tree" 
                        src={root} 
                        height={matchesSM ? "300em" : "450em"} 
                        width={matchesSM ? "300em" : "450em"} 
                    />
                </Grid>
                <Grid item className={classes.itemContainer}>
                    <Typography variant="h4" gutterBottom align="center">Root-Cause Analysis</Typography>
                    <Typography variant="body1" paragraph align="center">
                        Many problems are merely symptoms of larger, underlying issues.
                    </Typography>
                    <Typography variant="body1" paragraph align="center">
                        We can help you thoroughly examine all areas of your business to 
                        develop a holistic plan for the most effective implementation of technology.
                    </Typography>
                </Grid>
            </Grid>

            {/* ___automation and user experience___ */}
            <Grid 
                item 
                container 
                direction={matchesMD ? "column" : "row"} 
                alignItems={matchesMD ? "center" : undefined} 
                justifyContent="space-between" 
                style={{marginBottom: "10em"}}
                className={classes.rowContainer}
            >
                <Grid md item container className={classes.itemContainer} style={{marginBottom: matchesMD ? "15em" : 0}} direction={matchesSM ? "column" : "row"}>
                    <Grid md item container direction="column">
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : undefined}>Automation</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                                Why waste time when you don’t have to?
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                                We can help you identify processes with time 
                                or event based actions which can now easily be automated.
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                                Increasing efficiency increases profits, leaving you more
                                time to focus on your business, not busywork.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={automationOptions} style={{maxWidth: 280, maxHeight: 290}} />
                    </Grid>
                </Grid>
                <Grid md item container className={classes.itemContainer} direction={matchesSM ? "column" : "row"}>
                    <Grid item md>
                        <Lottie options={uxOptions} style={{maxWidth: 155, maxHeight: 310}} />
                    </Grid>
                    <Grid md item container direction="column">
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : "right"}>User Experience Design</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph>
                                A good design that isn’t usable isn’t a good design.
                            </Typography>
                            <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph>
                                So why are so many pieces of software complicated, confusing, 
                                and frustrating?
                            </Typography>
                            <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph>
                                By prioritizing users and the real ways they interact with technology 
                                we’re able to develop unique, 
                                personable experiences that solve problems rather than create new ones.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* ___call to action block___ */}
            <Grid item>
                <CallToAction setValue={props.setValue} />
            </Grid>

        </Grid>
    )
}