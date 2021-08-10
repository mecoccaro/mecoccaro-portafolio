import {
    Grid,
    makeStyles,
    Typography
} from '@material-ui/core';
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const useStyles = makeStyles((theme) => ({
    text: {
        color: "white"
    },
    about: {
        paddingTop: 90
    }
}));

const About = () => {
    const classes = useStyles();

    return (
        <AnimationOnScroll animateIn="animate__backInLeft" initiallyVisible={false} animateOnce={true}>
            <Grid className={classes.about}>
                <Typography align="center" variant='h2' component='h2' gutterBottom className={classes.text}>
                    About Me
                </Typography>
                <Typography className={classes.text} align="center" variant='subtitle1'>
                    Hi! I'm a student  of  10th  semester  in  Software  Engineering,  with  high  interest  in  back-end  development,
                    <br/>
                    database  management  and  cloud computing. Advanced knowledge in different programming languages, mainly in Python,
                    <br/>
                    experience working with agile methodologies and the ability for the development of creative solutions.
                </Typography>
            </Grid>
        </AnimationOnScroll>
    )

}

export default About