import {
    AppBar,
    Box, Drawer,
    Grid, IconButton,
    Slide, Toolbar,
    Typography,
} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    intro: {
        paddingTop: 150,
    },
    text: {
        color: "white",
        textAlign: "justify"
    },
    photo: {
        padding: 50,
        paddingTop: 0
    }
}));

const Intro = (props) => {
    const classes = useStyles();

    const [checked, setChecked] = React.useState(false);

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const {mobileView, drawerOpen} = state;

    useEffect(() => {
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

    const displayDesktop = () => {
        return (
            <Grid container className={classes.intro}>
                <Grid item md={6}>
                    <Box className={classes.photo}>
                        <img
                            width="80%"
                            height="auto"
                            src={process.env.PUBLIC_URL + "/CIRCULO.png"}
                            alt='Miguel Coccaro'
                        />
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Slide direction='left' in={checked}>
                        <Box>
                            <Typography variant='h2' component='h2' gutterBottom className={classes.text}>
                                Software Developer
                            </Typography>
                            <Typography variant='subtitle1' gutterBottom className={classes.text}>
                                I'm a student of Software Engineering, with interest in back-end development,
                                <br/>
                                data base management and cloud computing. Currently working on my thesis of
                                <br/>
                                a system based on Business Intelligence and a centralized repository.
                            </Typography>
                        </Box>
                    </Slide>
                </Grid>
            </Grid>
        );
    };

    const displayMobile = () => {

        return (
            <Grid container className={classes.intro}>
                <Grid item xs={12}>
                    <Box className={classes.photo}>
                        <img
                            width="100%"
                            src={process.env.PUBLIC_URL + "/CIRCULO.png"}
                            alt='Miguel Coccaro'
                        />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Slide direction='left' in={checked}>
                        <Box padding={5}>
                            <Typography variant='h2' component='h2' gutterBottom className={classes.text}>
                                Software Developer
                            </Typography>
                            <Typography variant='subtitle1' gutterBottom className={classes.text}>
                                I'm a student of Software Engineering, with interest
                                in back-end development data base management
                                and cloud computing. Currently working on my thesis
                                of a system based on Business Intelligence and a centralized repository.
                            </Typography>
                        </Box>
                    </Slide>
                </Grid>
            </Grid>
        );
    };

    useEffect(() => {
        handleChange()
    }, [])

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <>
            {mobileView ? displayMobile() : displayDesktop()}
        </>
    );


}

export default Intro