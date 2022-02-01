import React from "react";
import { Link } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import ButtonArrow from "./ui/ButtonArrow";

import customSoftwareIcon from "../assets/CustomSoftwareIcon.svg";
import mobileAppIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
    specialFont: {
        fontFamily:"Pacifico",
        color: theme.palette.common.orange
      },
      subtitle: {
        marginBottom: "1em"
      },
      icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("md")]: {
          marginLeft: 0
        }
      },
      serviceContainer: {
        marginTop: "10em",
        [theme.breakpoints.down("sm")]: {
          padding: 25
        }
    },
    learnButtonServices: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
          marginBottom: "2em"
        }
    },
}))

export default function Services(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

    return(
        <Grid container direction="column">
            <Grid item style={{marginLeft: matchesSM ? 0 : "5em", marginTop: matchesSM ? "1em" : "2em"}}>
                <Typography variant="h2" gutterBottom align={matchesSM ? "center" : undefined}>
                    Services
                </Typography>
            </Grid>
            <Grid item>
                <Grid 
                    container 
                    direction="row" 
                    justifyContent={matchesSM ? "center" : "flex-end"} 
                    className={classes.serviceContainer}
                    style={{ marginTop: matchesSM ? "1em" : "5em"}}
                >
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em"}}>
                        <Typography variant="h4">
                            IOS/Andriod App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagment
                            </Typography>
                            <Typography variant="subtitle1">
                            Integrate your web experience or create a standalone 
                            app{matchesSM ? null : <br />} with either mobile platform
                        </Typography>
                        <Button 
                            component={Link} 
                            to='/mobileapps' 
                            variant="outlined" 
                            className={classes.learnButtonServices}
                            onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}
                        >
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                        <img width="250em" className={classes.icon} alt="mobile app icon" src={mobileAppIcon} />
                    </Grid>
                </Grid>

                <Grid 
                    container 
                    direction="row" 
                    justifyContent={matchesSM ? "center" : "flex-start"} 
                    className={classes.serviceContainer}
                >
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                            </Typography>
                            <Typography variant="subtitle1">
                            Complete digital solutions, from investigation to{" "} 
                            <span className={classes.specialFont}>celebrate</span>
                        </Typography>
                        <Button 
                            component={Link} 
                            to='/customSoftware' 
                            variant="outlined" 
                            className={classes.learnButtonServices}
                            onClick={() => {props.setValue(1); props.setSelectedIndex(1)}}
                        >
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt="custom software icon" src={customSoftwareIcon} />
                    </Grid>
                </Grid>

                <Grid 
                    container 
                    direction="row" 
                    justifyContent={matchesSM ? "center" : "flex-end"} 
                    className={classes.serviceContainer}
                    style={{marginBottom: "10em"}}
                >
                    <Grid item style={{textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em"}}>
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                            </Typography>
                            <Typography variant="subtitle1">
                            Optimized for Search Engine, built for speed.
                        </Typography>
                        <Button 
                            component={Link} 
                            to='/websites' 
                            variant="outlined" 
                            className={classes.learnButtonServices}
                            onClick={() => {props.setValue(1); props.setSelectedIndex(3)}}
                        >
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                        <img width="250em" className={classes.icon} alt="website icon" src={websiteIcon} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}