import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { scroller } from 'react-scroll';

const headersData = [
    {
        label: "About me",
    },
    {
        label: "Skills",
    },
    {
        label: "Works",
    },
    {
        label: "Projects",
    },
];

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#1d2430",
        paddingRight: "79px",
        paddingLeft: "118px",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
    titleButton: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    drawerContainer: {
        padding: "20px 30px",
    },
}));

export default function Navbar() {
    const {header, logo, menuButton, toolbar, drawerContainer, titleButton} = useStyles();

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
                <Button className={titleButton} onClick={event => onClick('Intro')}>
                    {mecoccarologo}
                </Button>
                <div>{getMenuButtons()}</div>
            </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({...prevState, drawerOpen: true}));
        const handleDrawerClose = () =>
            setState((prevState) => ({...prevState, drawerOpen: false}));

        return (
            <Toolbar>
                <IconButton
                    {...{
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={drawerContainer} onClick={handleDrawerClose}>{getDrawerChoices()}</div>
                </Drawer>

                <div>
                    <Button className={titleButton} onClick={event => onClick('Intro')}>
                    {mecoccarologo}
                    </Button>
                </div>
            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return headersData.map(({label, href}) => {
            return (
                <Link
                    onClick={event => onClick(label)}
                    {...{
                        to: href,
                        color: "inherit",
                        style: {textDecoration: "none"},
                        key: label,
                    }}
                >
                    <MenuItem>{label}</MenuItem>
                </Link>
            );
        });
    };

    const mecoccarologo = (
        <Typography variant="h6" component="h1" className={logo}>
            Miguel E. Coccaro M.
        </Typography>
    );

    const scrollType = {
        duration: 500,
        delay: 50,
        smooth: true,
        offset: -50,
    };

    const onClick = (tabName) => {
        scroller.scrollTo((tabName).toString(), scrollType)
    }

    const getMenuButtons = () => {
        return headersData.map(({label, href}) => {
            return (
                <Button
                    onClick={event => onClick(label)}
                    {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        className: menuButton,
                    }}
                >
                    {label}
                </Button>
            );
        });
    };

    return (
        <header>
            <AppBar className={header}>
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
}