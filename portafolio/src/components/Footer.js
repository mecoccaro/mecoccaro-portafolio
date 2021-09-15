import {
    Toolbar,
    Typography,
    makeStyles,
    Grid, Button, Box, CardActionArea,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Twitter, LinkedIn, GitHub, Email } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#1d2430",
        marginTop: 90,
        textAlign: "center",
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "center",
    },
    text: {
        color: "white",
    },
    icons: {
        color: "white",
        fontSize: 40,
        margin: 20,
    }
}));

export default function Navbar() {
    const {header, text, icons} = useStyles();

    const mecoccarologo = (
        <Grid className={text}>
            © Miguel E. Coccaro M. - 2021
        </Grid>
    );

    return (
        <Grid className={header}>
            <Button href='https://github.com/mecoccaro' target="_blank"
                    rel="noopener noreferrer">
                <GitHub className={icons} />
            </Button>
            <Button href='https://twitter.com/MEcoccaro' target="_blank"
                    rel="noopener noreferrer">
                <Twitter className={icons} />
            </Button>
            <Button href='https://linkedin.com/in/miguel-coccaro-montserrat-383a511a3' target="_blank"
                    rel="noopener noreferrer">
                <LinkedIn className={icons} />
            </Button>
            <Button href='mailto:miguele.coccaro@gmail.com' target="_blank"
                    rel="noopener noreferrer">
                <Email className={icons} />
            </Button>
            {mecoccarologo}
            <Typography variant={"caption"} className={text}>
                Caracas, Venezuela
            </Typography>
        </Grid>
    );
}