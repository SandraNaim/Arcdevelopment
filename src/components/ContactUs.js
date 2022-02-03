import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, makeStyles, useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import ButtonArrow from "./ui/ButtonArrow";

import background from "../assets/background.jpg";
import mobileBackground from "../assets/mobileBackground.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        paddingBottom: "10em",
        paddingTop: "20em",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`,
            paddingTop: 0,
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("md")]: {
          marginBottom: "2em"
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: "1.5rem",
        marginRight: "5em",
        marginLeft: "2em",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("md")]: {
            marginLeft: 0,
            marginRight: 0,
        }
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: "3em",
        borderRadius: 5
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: "1rem",
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")]: {
            height: 40,
            width: 170,
        }
    }
}))

export default function ContactUs(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const [emailHelper, setEmailHelper] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneHelper, setPhoneHelper] = useState('');

    const [message, setMessage] = useState('');

    const [open, setOpen] = useState(false);

    const onChange = event => {
        let valid;

        switch(event.target.id) {
            case 'email':
                setEmail(event.target.value)
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)

                if(!valid) {
                    setEmailHelper("Invalid email")
                } else {
                    setEmailHelper("")
                }

                break;
            case 'phone':
                setPhone(event.target.value)
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)

                if(!valid) {
                    setPhoneHelper("Invalid phone number")
                } else {
                    setPhoneHelper("")
                }

                break;
            default:
                break;
        }
    }

    return(
        <Grid container direction={matchesMD ? "column" : "row"}>
            {/* ___heading___ */}
            <Grid lg={4} xl={3} item container justifyContent="center" style={{marginLeft: "auto", marginRight: "auto"}} style={{marginBottom: matchesMD ? "2em" : 0, marginTop: matchesMD ? "2em" : 0}}>
                <Grid item>
                    <Grid item>
                        <Typography variant="h2" align={matchesMD ? "center" : undefined} style={{lineHeight: 1}}>
                            Contact Us
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: theme.palette.common.blue}}>
                            We're waiting
                        </Typography>
                    </Grid>
                    <Grid item container direction="row" style={{marginTop: "0.5em"}}>
                        <Grid item>
                            <img alt="phone icon" src={phoneIcon} style={{marginRight: "0.5em"}} />
                        </Grid>
                        <Grid>
                            <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize: "1rem"}}>
                                <a href="tel:5555555555" style={{textDecoration: "none", color: "inherit"}}>(555) 555-5555</a>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction="row">
                        <Grid item>
                            <img alt="email icon" src={emailIcon} style={{marginRight: "0.5em", verticalAlign: "bottom"}} />
                        </Grid>
                        <Grid>
                            <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize: "1rem"}}>
                                <a href="mailto:zachary@gmail.com" style={{textDecoration: "none", color: "inherit"}}>zachary@gmail.com </a>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" style={{maxWidth: "20em", marginTop: "2em"}}>
                        <Grid item>
                            <TextField 
                                id="name" 
                                label="Name" 
                                variant="standard" 
                                fullWidth
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </Grid>
                        <Grid item>
                            <TextField 
                                id="email" 
                                label="Email" 
                                type="email" 
                                error={emailHelper.length !== 0}
                                helperText={emailHelper}
                                variant="standard" 
                                fullWidth
                                value={email}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField 
                                id="phone" 
                                label="Phone" 
                                error={phoneHelper.length !== 0}
                                helperText={phoneHelper}
                                variant="standard" 
                                fullWidth
                                value={phone}
                                onChange={onChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid item style={{maxWidth: "20em"}}>
                        <TextField
                            id="message"
                            value={message}
                            className={classes.message}
                            InputProps={{disableUnderline: true}}
                            fullWidth
                            multiline
                            minRows={10}
                            onChange={(event) => setMessage(event.target.value)}
                        />
                    </Grid>
                    <Grid item container justifyContent="center"  style={{marginTop: "2em"}}>
                        <Button 
                            variant="contained" 
                            className={classes.sendButton}
                            disabled={
                                name.length === 0 ||
                                emailHelper.length !== 0 ||
                                phoneHelper.length !== 0 ||
                                email.length === 0 ||
                                phone.length === 0 ||
                                message.length === 0
                            } 
                            onClick={() => setOpen(true)}
                        >
                            Send message
                            <img alt="paper airplane" src={airplane} style={{ marginLeft: "1em" }} />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            {/* ___dialog___ */}
            <Dialog 
                open={open} 
                onClose={() => setOpen(false)}
                style={{zIndex:9999}}
                fullScreen={matchesXS}
                PaperProps={{
                    style: {
                        paddingTop: matchesXS ? "0.5em" : "2em",
                        paddingBottom: matchesXS ? "0.5em" : "2em",
                        paddingLeft: matchesXS ? 0 : matchesSM ? "5em" : matchesMD ? "10em" : "5em",
                        paddingRight: matchesXS ? 0 : matchesSM ? "5em" : matchesMD ? "10em" : "5em",
                    }
                }}
            >
                <DialogContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4" align="center" gutterBottom>
                                Confirm Message
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Grid item container direction="column" style={{maxWidth: "20em", marginTop: "0.5em"}}>
                                <Grid item>
                                    <TextField 
                                        id="name" 
                                        label="Name" 
                                        variant="standard" 
                                        fullWidth
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField 
                                        id="email" 
                                        label="Email" 
                                        type="email" 
                                        error={emailHelper.length !== 0}
                                        helperText={emailHelper}
                                        variant="standard" 
                                        fullWidth
                                        value={email}
                                        onChange={onChange}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField 
                                        id="phone" 
                                        label="Phone" 
                                        error={phoneHelper.length !== 0}
                                        helperText={phoneHelper}
                                        variant="standard" 
                                        fullWidth
                                        value={phone}
                                        onChange={onChange}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item style={{maxWidth: matchesXS ? "100%" : "20em"}}>
                                <TextField
                                    id="message"
                                    value={message}
                                    className={classes.message}
                                    InputProps={{disableUnderline: true}}
                                    fullWidth
                                    multiline
                                    minRows={10}
                                    onChange={(event) => setMessage(event.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container direction={matchesSM ? "column" : "row"} alignItems="center" style={{marginTop: "0.5em"}}>
                        <Grid item>
                            <Button color="primary" style={{fontWeight: 300}} onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button 
                                variant="contained" 
                                className={classes.sendButton}
                                onClick={() => {console.log("message confirmed"); setOpen(false)}}
                                disabled={
                                    name.length === 0 ||
                                    emailHelper.length !== 0 ||
                                    phoneHelper.length !== 0 ||
                                    email.length === 0 ||
                                    phone.length === 0 ||
                                    message.length === 0
                                } 
                            >
                                Send message
                                <img alt="paper airplane" src={airplane} style={{ marginLeft: "1em" }} />
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>

            {/* ___call to action___ */}
            <Grid 
                lg={8} 
                xl={9} 
                item 
                container 
                className={classes.background} 
                direction={matchesMD ? "column" : "row"} 
                justifyContent={matchesMD ? "center" : undefined}
            >
                <Grid item style={{marginLeft: matchesMD ? 0 : "3em", textAlign: matchesMD ? "center" : "inherit"}}>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h2" align={matchesMD ? "center" : undefined}>Simple Software.<br/>Revolutionary Results.</Typography>
                            <Typography variant="subtitle2" style={{fontSize: "1.5rem"}} align={matchesMD ? "center" : undefined}>Take advantge of the 21st Century.</Typography>
                            <Grid container item justifyContent={matchesMD ? "center" : undefined}>
                                <Button 
                                    component={Link} 
                                    to='/revolution' 
                                    variant="outlined" 
                                    className={classes.learnButton}
                                    onClick={() => props.setValue(2)}
                                >
                                    <span style={{marginRight: 10}}>Learn More</span>
                                    <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container={matchesMD} align={matchesMD ? "center" : undefined} justifyContent={matchesMD ? "center" : undefined}>
                    <Button 
                        component={Link} 
                        to='/estimate' 
                        variant="contained" 
                        className={classes.estimateButton}
                        onClick={() => props.setValue(5)}
                    >
                        Free Estimate
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}