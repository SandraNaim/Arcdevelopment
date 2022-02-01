import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import ButtonArrow from "../components/ui/ButtonArrow";
import CallToAction from "../components/ui/CallToAction";

import animationData from "../animations/landinganimation/data";
import customSoftwareIcon from "../assets/CustomSoftwareIcon.svg";
import mobileAppIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";
import repeatingBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";

const useStyles = makeStyles(theme => ({
  animation: {
    maxWidth: "40em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      minWidth: "20em"
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  buttonContainer: {
    marginTop: "1em"
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
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
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em"
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0"
    },
  },
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
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25
    }
  },
  revolutionBackground: {
    backgroundImage: `url(${repeatingBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: "8em 0 8em 0",
      borderRadius: 0,
      width: "100%"
    }
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  },
}))

export default function LandingPage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
      <Grid container direction="column" className={classes.mainContainer}>
        {/* ____Hero Block____ */}
        <Grid item>
          <Grid container direction="row" justifyContent="flex-end" alignItems="center" >
            <Grid item sm className={classes.heroTextContainer}>
              <Typography variant="h2" align="center" gutterBottom>
                Bringing West Coast Technology<br/>to the Midwest
              </Typography>
              <Grid container justifyContent="center" className={classes.buttonContainer}>
                <Grid item>
                  <Button 
                    component={Link} 
                    to='/estimate' 
                    className={classes.estimateButton} 
                    variant="contained"
                    onClick={() => props.setValue(5)}
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button 
                    component={Link} 
                    to='/revolution' 
                    variant="outlined" 
                    className={classes.learnButtonHero} 
                    onClick={() => props.setValue(2)}
                  >
                    <span style={{marginRight: 10}}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm className={classes.animation}>
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>
        </Grid>

        {/* ___Services Block___ */}
        <Grid item>
          <Grid container direction="row" justifyContent={matchesSM ? "center" : "flex-start"} className={classes.serviceContainer}>
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

          <Grid container direction="row" justifyContent={matchesSM ? "center" : "flex-end"} className={classes.serviceContainer}>
            <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
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
              <img className={classes.icon} alt="mobile app icon" src={mobileAppIcon} />
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent={matchesSM ? "center" : "flex-start"} className={classes.serviceContainer}>
            <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
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
            <Grid item>
              <img className={classes.icon} alt="website icon" src={websiteIcon} />
            </Grid>
          </Grid>
        </Grid>

        {/* ___Revolution Block___ */}
        <Grid item>
          <Grid container alignItems="center" justifyContent="center" style={{ height: "100em", marginTop: "12em" }}>
            <Card className={classes.revolutionCard}>
              <CardContent>
                <Grid container direction="column" style={{textAlign: "center"}}>
                  <Grid item>
                    <Typography variant="h3">The Revolution</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">Visionary insights coupled with cutting-edge technology is a recipe for revolution.</Typography>
                    <Button 
                      component={Link} 
                      to='/revolution' 
                      variant="outlined" 
                      className={classes.learnButtonHero}
                      onClick={() => props.setValue(2)}
                    >
                      <span style={{marginRight: 10}}>Learn More</span>
                      <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <div className={classes.revolutionBackground} />
          </Grid>
        </Grid>

        {/* ___Information Block___ */}
        <Grid container direction="row" style={{height: "80em"}} alignItems="center" className={classes.infoBackground}>
          <Grid 
            item 
            container 
            direction={ matchesXS ? "column" : "row" } 
            style={{textAlign: matchesXS ? "center" : "inherit"}}
          >
            <Grid sm item style={{marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em"}}>
              <Grid container direction="column" style={{marginBottom: matchesXS ? "10em" : 0}}>
                <Typography variant="h2" style={{color: "white"}}>About Us</Typography>
                <Typography variant="subtitle2">Let's get personal</Typography>
                <Grid item>
                  <Button 
                    component={Link} 
                    to='/about' 
                    variant="outlined" 
                    className={classes.learnButtonServices} 
                    style={{color: "white", borderColor: "white"}}
                    onClick={() => props.setValue(3)}
                  >
                      <span style={{marginRight: 10}}>Learn More</span>
                      <ButtonArrow width={10} height={10} fill="white"/>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item style={{marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em", textAlign: matchesXS ? "center" : "right"}}>
              <Grid container direction="column">
                <Typography variant="h2" style={{color: "white"}}>Contact Us</Typography>
                <Typography variant="subtitle2">Say hello! :)</Typography>
                <Grid item>
                  <Button 
                    component={Link} 
                    to='/contact' 
                    variant="outlined" 
                    className={classes.learnButtonServices} 
                    style={{color: "white", borderColor: "white"}}
                    onClick={() => props.setValue(4)}
                  >
                      <span style={{marginRight: 10}}>Learn More</span>
                      <ButtonArrow width={10} height={10} fill="white"/>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Call to action Block___ */}
        <Grid item>
          <CallToAction setValue={props.setValue} />
        </Grid>

      </Grid>
    )
}

