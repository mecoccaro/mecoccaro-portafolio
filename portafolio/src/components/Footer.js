import {
    Toolbar,
    Typography,
    makeStyles,
    Grid,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#1d2430",
        paddingRight: "79px",
        paddingLeft: "118px",
        marginTop: 90,
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "center",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center"
    },
    text: {
        color: "white",
    },
    footerMobile: {
        padding: 20
    }
}));

export default function Navbar() {
    const {header, toolbar, text, footerMobile} = useStyles();

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
            <Toolbar className={toolbar}>
                {mecoccarologo}
            </Toolbar>
        );
    };

    const displayMobile = () => {

        return (
            <Grid className={footerMobile}>
                <div>{mecoccarologo}</div>
            </Grid>
        );
    };

    const mecoccarologo = (
        <Typography className={text}>
            © Miguel E. Coccaro M. 2021
        </Typography>
    );

    return (
        <header>
            <Grid className={header}>
                {mobileView ? displayMobile() : displayDesktop()}
            </Grid>
        </header>
    );
}