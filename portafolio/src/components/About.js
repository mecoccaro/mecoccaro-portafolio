import {
    Grid,
    makeStyles,
    Typography
} from '@material-ui/core';
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const useStyles = makeStyles((theme) => ({
    text: {
        color: "white",
    },
    textAbout: {
        color: "white",
        textAlign: "justify",
        textAlignLast: "center",
        padding: 10
    },
    about: {
        paddingTop: 90
    }
}));

const About = () => {
    const classes = useStyles();

    return (
        <AnimationOnScroll animateIn='animate__backInLeft' initiallyVisible={false} animateOnce={true}>
            <Grid className={classes.about}>
                <Typography align="center" variant='h2' component='h2' gutterBottom className={classes.text}>
                    About Me
                </Typography>
                <Typography className={classes.textAbout} variant='subtitle1'>
                    Hi! I'm a Software Engineer with a strong focus on back-end development, database management
                    <br/>
                    and cloud computing. I have extensive experience using modern web development technologies,
                    <br/>
                    advanced knowledge of various programming languages, and a proven track record of managing and
                    <br/>
                    leading small teams of developers. Skilled in agile methodologies and dedicated to delivering
                    <br/>
                    efficient and innovative solutions.
                </Typography>
            </Grid>
        </AnimationOnScroll>
    )

}

export default About