import {
    Grid,
    makeStyles,
    Slide,
    Typography
} from '@material-ui/core';
import React, {useEffect} from "react";


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

    const [loaded, setLoaded] = React.useState(false);

    useEffect(() => {
        handleChange()
    }, [])

    const handleChange = () => {
        setLoaded((prev) => !prev);
    };

    return (
        <Slide direction='up' in={loaded}>
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
        </Slide>
    )

}

export default About