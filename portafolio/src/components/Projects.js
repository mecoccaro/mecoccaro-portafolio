import React, {useEffect, useState} from 'react';
import {
    Box,
    Grid,
    CardContent,
    Typography,
    Card,
    makeStyles, CardMedia, CardActionArea
} from '@material-ui/core';
import { AnimationOnScroll } from 'react-animation-on-scroll'

const useStyles = makeStyles({
    text: {
        color: "white",
        marginTop: 90,
    },
    root: {
        maxWidth: 345,
        marginLeft: 50,
        marginTop: 15,
        height: 350
    },
    media: {
        height: 140,
    },
});

const Projects = () => {
    const classes = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const [checked, setChecked] =useState(false)

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    const {mobileView, drawerOpen} = state;

    useEffect(() => {
        setTimeout(function () {
            handleChange()
        }, 3000)

        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({...prevState, mobileView: true}))
                : setState((prevState) => ({...prevState, mobileView: false}));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };

    }, []);

    const cardsProjectsA  = () => {
        return (
            <Box>
                <Card className={classes.root} variant="outlined">
                    <CardActionArea href='https://github.com/mecoccaro/mecoccaro-portafolio' target="_blank"
                                    rel="noopener noreferrer">
                        <CardMedia
                            className={classes.media}
                            image={process.env.PUBLIC_URL + "/GitHub-Logo.png"}
                            title="Github Logo"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Portfolio
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This is the code of this portfolio! I made it with ReactJS using material-ui library
                                for the components.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        )
    }

    const cardsProjectsB  = () => {
        return (
            <Box>
                <Card className={classes.root} variant="outlined">
                    <CardActionArea href='https://github.com/mecoccaro/ucabpoints' target="_blank"
                                    rel="noopener noreferrer">
                        <CardMedia
                            className={classes.media}
                            image={process.env.PUBLIC_URL + "/GitHub-Logo.png"}
                            title="Github Logo"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Ucabpoints
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Developed a Program for customer loyalty to the platform  using points acquired using the Stripe payment processor that included
                                the platform's administration module, account and user blocking, service commission administration and
                                sent automated emails.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        )
    }

    const cardsProjectsC  = () => {
        return (
            <Box>
                <Card className={classes.root} variant="outlined">
                    <CardActionArea href='https://github.com/mecoccaro/Gansa/tree/develop' target="_blank"
                                    rel="noopener noreferrer">
                        <CardMedia
                            className={classes.media}
                            image={process.env.PUBLIC_URL + "/GitHub-Logo.png"}
                            title="Github Logo"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Gansa - Football pools
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This is an ongoing project for football pools, where you can join differents pools with your own predictions
                                and you can monitor the results. It also has a side for the administrator of the pools, where you can enter
                                results and manipulate users.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        )
    }

    const displayMobile = () => {
        return (
            <Grid container alignItems="center" direction="row">
                <Grid item xs={12} className={classes.top_cards}>
                    <Box>
                        { cardsProjectsA() }
                    </Box>
                </Grid>

                <Grid item xs={12} alignSelf="center" className={classes.top_cards}>
                    <Box >
                        { cardsProjectsB() }
                    </Box>
                </Grid>

                <Grid item xs={12} className={classes.top_cards}>
                    <Box>
                        { cardsProjectsC() }
                    </Box>
                </Grid>
            </Grid>
        )
    }

    const displayDesktop = () => {
        return (
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                <Grid container alignItems="center" direction="row">
                    <Grid item md={4} alignSelf="center" className={classes.left_cards}>
                        <Box>
                            { cardsProjectsA() }
                        </Box>
                    </Grid>
                    <Grid item md={4} alignSelf="center" className={classes.right_cards}>
                        <Box>
                            { cardsProjectsB() }
                        </Box>
                    </Grid>
                    <Grid item md={4} className={classes.left_cards}>
                        <Box>
                            { cardsProjectsC() }
                        </Box>
                    </Grid>
                </Grid>
            </AnimationOnScroll>

        )
    }

    return (
        <>
            <Grid>
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                    <Typography align="center" variant='h2' component='h2' gutterBottom className={classes.text}>
                        Projects
                    </Typography>
                </AnimationOnScroll>
            </Grid>
            {mobileView ? displayMobile() : displayDesktop()}
        </>
    );
}

export default Projects