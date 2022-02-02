import React from "react";
import { Link } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import CallToAction from "./ui/CallToAction";

import forwardArrow from "../assets/forwardArrow.svg";
import backArrow from "../assets/backArrow.svg";
import analytics from "../assets/analytics.svg";
import ecommerce from "../assets/ecommerce.svg";
import outreach from "../assets/outreach.svg";
import seo from "../assets/seo.svg";

const useStyles = makeStyles(theme =>({
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

export default function Websites(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

    return(
        <Grid container direction="column">

            {/* ___heading block___ */}
            <Grid item container direction="row" justifyContent={matchesMD ? "center" : undefined} className={classes.rowContainer}>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{marginRight: "1em", marginLeft: "-3.5em"}}>
                        <IconButton 
                            component={Link} 
                            to="/mobileapps" 
                            style={{backgroundColor: "transparent"}}
                            onClick={() => props.setSelectedIndex(2)}
                        >
                            <img alt="back arrow" src={backArrow} />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading} align={matchesMD ? "center" : undefined}>
                    <Grid item>
                        <Typography variant="h2" gutterBottom align={matchesMD ? "center" : undefined}>
                            Website Development
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                        Having a website is a necessity in today’s business world. They give you one central, 
                        public location to let people know who you are, what you do, and why you’re the best at it.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                            From simply having your hours posted to having a full fledged online store, making 
                            yourself as accessible as possible to users online drives growth and enables you to reach new customers.
                        </Typography>

                    </Grid>
                </Grid>

                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton 
                            component={Link} 
                            to="/services" 
                            style={{backgroundColor: "transparent"}}
                            onClick={() => props.setSelectedIndex(0)}
                        >
                            <img alt="forward arrow" src={forwardArrow} />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>

            {/* ___analytics___ */}
            <Grid 
                item 
                container 
                direction="row"  
                justifyContent={matchesMD ? "center" : undefined}
                style={{marginBottom: "3em", marginTop: matchesMD ? "3em" : "10em"}}
                className={classes.rowContainer}
            >
                <Grid item>
                    <Typography variant="h4" gutterBottom align={matchesMD ? "center" : undefined} style={{paddingLeft: matchesMD ? 0 : "1.5em"}}>
                        Analytics
                    </Typography>
                </Grid>
                <Grid item container direction="row" alignItems="center">
                    <Grid item>
                        <img alt="analytics" src={analytics} />
                    </Grid>
                    <Grid item sm>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined} style={{width: matchesMD ? "auto" : "26em"}}> 
                            Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and 
                            trends in your business, empowering you to make smarter decisions with measurable effects.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            {/* ecommerce */}
            <Grid 
                item 
                container
                direction="row" 
                align={matchesMD ? "center" : undefined} 
                style={{marginBottom: "3em"}}  
                justifyContent={matchesMD ? "center" : "flex-end"}
                className={classes.rowContainer}
            >
                <Grid item>
                    <Grid item>
                        <Typography variant="h4" gutterBottom align={matchesMD ? "center" : undefined} style={{paddingLeft: matchesMD ? 0 : "1.5em"}}>
                            E-Commerce
                        </Typography>
                    </Grid>
                    <Grid item container direction="row" justifyContent={matchesMD ? "center" : undefined} alignItems="center">
                        <Grid item >
                            <img alt="ecommerce" src={ecommerce} />
                        </Grid>
                        <Grid item style={{width: matchesMD ? "auto" : "26em"}}>
                            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>  
                                It's no secret that people like to shop online.
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>  
                                In 2017 over $2.3 trillion was spent in e-commerce, and it's time for your slice of that pie.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* ___Outreach___ */}
            <Grid 
                item 
                container 
                direction="row"  
                justifyContent={matchesMD ? "center" : undefined}
                style={{marginBottom: "3em", marginTop: "3em"}}
                className={classes.rowContainer}
            >
                <Grid item>
                    <Typography variant="h4" gutterBottom align={matchesMD ? "center" : undefined} style={{paddingLeft: matchesMD ? 0 : "1.5em"}}>
                        Outreach
                    </Typography>
                </Grid>
                <Grid item container direction="row" alignItems="center">
                    <Grid item>
                        <img alt="outreach" src={outreach} />
                    </Grid>
                    <Grid item sm>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined} style={{width: matchesMD ? "auto" : "26em"}}> 
                            Draw people in with a dazzling website. Showing off your products 
                            online is a great way to help customers decide what's right for 
                            them before visiting in person.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            {/* ___search engine___ */}
            <Grid 
                item 
                container
                direction="row" 
                align={matchesMD ? "center" : undefined} 
                style={{marginBottom: "3em"}}  
                justifyContent={matchesMD ? "center" : "flex-end"}
                className={classes.rowContainer}
            >
                <Grid item>
                    <Grid item>
                        <Typography variant="h4" gutterBottom align={matchesMD ? "center" : undefined} style={{paddingLeft: matchesMD ? 0 : "1.5em"}}>
                            Search Engine<br/>Optimization
                        </Typography>
                    </Grid>
                    <Grid item container direction="row" justifyContent={matchesMD ? "center" : undefined} alignItems="center">
                        <Grid item >
                            <img alt="seo" src={seo} />
                        </Grid>
                        <Grid item style={{width: matchesMD ? "auto" : "26em"}}>
                            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>  
                                How often have you ever been to the second page of Google results?
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>  
                                If you're like us, probably never.
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>  
                                Customers don't go there either, so we make sure your website is designed to end up on top.
                            </Typography>
                        </Grid>
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