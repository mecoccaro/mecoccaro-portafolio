import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    useScrollTrigger,
    Slide
} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    navbar: {
        backgroundColor: '#1d2430',
    },
}));


function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const Navbar = (props) => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.navbar}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Miguel E. Coccaro M.
                </Typography>
                <Button color="inherit">About Me</Button>
                <Button color="inherit">Skills</Button>
                <Button color="inherit">Works</Button>
                <Button color="inherit">Projects</Button>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar