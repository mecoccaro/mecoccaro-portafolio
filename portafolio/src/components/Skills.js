import React, {useEffect, useState} from 'react';
import {
    Box,
    Grid,
    CardContent,
    Typography,
    Card,
    LinearProgress,
    Slide,
    withStyles,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
    left_cards: {
        paddingLeft: 90,
        paddingRight: 10,
        marginTop: 10
    },
    right_cards: {
        paddingRight: 90,
        marginTop: 20,
    },
    top_cards: {
        paddingLeft: 90,
        paddingRight: 90,
        marginTop: 20,
    },
    text: {
        color: "white",
        marginTop: 90,
    }
});

const Skills = () => {
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

    const BorderLinearProgress = withStyles((theme) => ({
        root: {
            height: 10,
            borderRadius: 5,
        },
        colorPrimary: {
            backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
        },
        bar: {
            borderRadius: 5,
            backgroundColor: '#1a90ff',
        },
    }))(LinearProgress);

    const cardsBackEnd  = () => {
        return (
            <Box>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} variant="h5" component="h2" gutterBottom>
                            Back-end
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Python
                            <BorderLinearProgress variant="determinate" value={90} />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Django
                            <BorderLinearProgress variant="determinate" value={75} />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Java
                            <BorderLinearProgress variant="determinate" value={72} />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            NodeJS
                            <BorderLinearProgress variant="determinate" value={70} />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            PHP
                            <BorderLinearProgress variant="determinate" value={70} />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            C#
                            <BorderLinearProgress variant="determinate" value={60} />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            .NET
                            <BorderLinearProgress variant="determinate" value={60} />
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        )
    }

    const cardsFrontEnd  = () => {
        return (
            <Box>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} variant="h5" component="h2" gutterBottom>
                            Front-End
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            ReactJS
                            <BorderLinearProgress variant="determinate" value={80} />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            HTML/CSS
                            <BorderLinearProgress variant="determinate" value={70} />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            VueJS
                            <BorderLinearProgress variant="determinate" value={80} />
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        )
    }

    const cardsOthers  = () => {
        return (
            <Box>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} variant="h5" component="h2" gutterBottom>
                            Tools/Utilities
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Docker
                            <BorderLinearProgress variant="determinate" value={90} />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Git
                            <BorderLinearProgress variant="determinate" value={100} />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Agile
                            <BorderLinearProgress variant="determinate" value={80} />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            TensorFlow
                            <BorderLinearProgress variant="determinate" value={60} />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Pentaho
                            <BorderLinearProgress variant="determinate" value={60} />
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        )
    }

    const cardsDBs  = () => {
        return (
            <Box>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} variant="h5" component="h2" gutterBottom>
                            Database
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            SQL
                            <BorderLinearProgress variant="determinate" value={95} />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            NoSQL
                            <BorderLinearProgress variant="determinate" value={80} />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            PL/SQL
                            <BorderLinearProgress variant="determinate" value={75} />
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        )
    }

    const displayMobile = () => {
        return (
            <Grid container alignItems="center" direction="row">
                <Grid item xs={12} className={classes.top_cards}>
                    <Box>
                        { cardsBackEnd() }
                    </Box>
                </Grid>

                <Grid item xs={12} alignSelf="center" className={classes.top_cards}>
                    <Box >
                        { cardsDBs() }
                    </Box>
                </Grid>

                <Grid item xs={12} className={classes.top_cards}>
                    <Box>
                        { cardsFrontEnd() }
                    </Box>
                </Grid>

                <Grid item xs={12} alignSelf="center" className={classes.top_cards}>
                    <Box >
                        { cardsOthers() }
                    </Box>
                </Grid>

            </Grid>
        )
    }

    const displayDesktop = () => {
        return (
            <Slide direction="up" in={checked}>
                <Grid container alignItems="center" direction="row">
                    <Grid item md={6} alignSelf="center" className={classes.left_cards}>
                        <Box>
                            { cardsBackEnd() }
                        </Box>
                    </Grid>
                    <Grid item md={6} alignSelf="center" className={classes.right_cards}>
                        <Box>
                            { cardsDBs() }
                        </Box>
                    </Grid>
                    <Grid item md={6} className={classes.left_cards}>
                        <Box>
                            { cardsFrontEnd() }
                        </Box>
                    </Grid>
                    <Grid item md={6} className={classes.right_cards}>
                        <Box>
                            { cardsOthers() }
                        </Box>
                    </Grid>
                </Grid>
            </Slide>

        )
    }

    return (
        <>
            <Grid>
                <Slide in={checked} direction='up'>
                    <Typography align="center" variant='h2' component='h2' gutterBottom className={classes.text}>
                        Skills
                    </Typography>
                </Slide>
            </Grid>
            {mobileView ? displayMobile() : displayDesktop()}
        </>
    );
}

export default Skills