import React from "react";
import { Link } from "react-router-dom";

import { Hidden, makeStyles, useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import CallToAction from "./ui/CallToAction";

import history from "../assets/history.svg";
import founder from "../assets/founder.jpg";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";

const useStyles = makeStyles((theme) => ({
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em",
        }
    },
    aboutusText: {
        fontSize: "1.5rem",
        maxWidth: "50em",
        fontStyle: "italic",
        fontWeight: 300,
        lineHeight: 1.4,
    }
}))

export default function AboutUs(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

    return(
        <Grid container direction="column">
            {/* ___heading___ */}
            <Grid item style={{marginLeft: matchesSM ? 0 : "5em", marginTop: matchesSM ? "1em" : "2em"}}>
                <Typography variant="h2" gutterBottom align={matchesSM ? "center" : undefined}>
                    About Us
                </Typography>
            </Grid>
            <Grid item align="center" justifyContent="center" style={{marginTop: matchesSM ? "1em" : "3em"}}>
                <Typography variant="h4" paragraph className={classes.rowContainer,classes.aboutusText}>
                    Whether it be person to person, business to consumer, 
                    or an individual to their interests, technology is meant to 
                    bring us closer to what we care about in the best way possible. 
                    Arc Development will use that principle to provide fast, modern, inexpensive, 
                    and aesthetic software to the Midwest and beyond.
                </Typography>
            </Grid>

            {/* ___history___ */}
            <Grid item container direction="row" alignItems="center" style={{marginTop: "10em"}} className={classes.rowContainer}>
                <Grid item md align={matchesMD ? "center" : undefined}>
                    <Typography variant="h4" className={classes.subTitle}>
                    History
                    </Typography>
                    <Typography variant="subtitle1" paragraph style={{fontWeight: 700, fontStyle: "italic"}}>
                        We're the new kid on the block
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Founded in 2019, we're ready to get our hands on the world's business problems.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        It all started with one question: Why aren't all businesses using available technology? 
                        There are many different answers to that question: economic barriers, social barriers,
                        educational barriers, and sometimes institutional barriers.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        We aim to be a powerful force in overcoming these obstacles. Recent developments in 
                        software engineering and computing power, compounded by the proliferation of smart phones, 
                        has opened up infinite worlds of possibility. Things that have always been done by hand can 
                        now be done digitally and automatically, and completely new methods of interaction are created 
                        daily. Taking full advantage of these advancements is the name of the game.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        All this change can be a lot to keep up with, and that's where we come in.
                    </Typography>
                </Grid>
                <Grid item md align="end">
                    <img alt="history icon" src={history} />
                </Grid>
            </Grid>

            {/* ___team___ */}
            <Grid item container direction="column" alignItems="center" style={{marginTop: "10em"}} className={classes.rowContainer}>
                <Grid item md align="center">
                    <Typography variant="h4" className={classes.subTitle}>
                        Team
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Zachary Reece, Founder
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        I started coding when I was 9 years old.
                    </Typography>
                </Grid>
                <Grid item md align="center">
                    <Avatar alt="founder profile" src={founder} style={{width: "25em", height: "25em"}}/>
                </Grid>
            </Grid>

            {/* ___under team___ */}
            <Grid item container direction={matchesMD ? "column" : "row"} alignItems="center" style={{marginBottom: "10em"}} className={classes.rowContainer}>
                <Hidden lgUp>
                    <Grid item md align="center" style={{marginTop: "5em"}}>
                        <Typography variant="body1" paragraph>
                            I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on 
                            learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Now I'm ready to apply everything I've learned, and to help others with the intuition I have developed.
                        </Typography>
                    </Grid>
                </Hidden>
                <Grid item md style={{marginTop: "5em"}}>
                    <img alt="yearbook icon" src={yearbook} />
                </Grid>
                <Hidden mdDown>
                    <Grid item md align="center" style={{marginTop: "5em"}}>
                        <Typography variant="body1" paragraph>
                            I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on 
                            learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Now I'm ready to apply everything I've learned, and to help others with the intuition I have developed.
                        </Typography>
                    </Grid>
                </Hidden>
                <Grid item md style={{marginTop: "5em"}}>
                    <img alt="puppy icon" src={puppy} />
                </Grid>
            </Grid>

            {/* ___call to action___ */}
            <Grid item>
                <CallToAction setValue={props.setValue} />
            </Grid>

        </Grid>
    )
}