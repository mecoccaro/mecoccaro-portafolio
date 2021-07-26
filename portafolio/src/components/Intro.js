import {
    Box,
    Grid,
    Slide,
    Typography,
} from '@material-ui/core';
import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    intro: {
        paddingTop: 150,
    },
    text: {
        color: "white"
    }
}));

const Intro = (props) => {
    const classes = useStyles();

    const [checked, setChecked] = React.useState(false);

    useEffect(() => {
        handleChange()
    }, [])

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <Grid container className={classes.intro}>
            <Grid item xs md={6}>
                <Box>
                    Foto
                </Box>
            </Grid>
            <Grid item xs md={6}>
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
    )


}

export default Intro