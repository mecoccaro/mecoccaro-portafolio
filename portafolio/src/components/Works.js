import React from 'react'
import PropTypes from 'prop-types'
import {
    makeStyles,
    Tab,
    Tabs,
    Typography,
    Box, Grid, Button, Avatar
} from '@material-ui/core'
import {AnimationOnScroll} from 'react-animation-on-scroll'


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 300,
        paddingTop: 20
    },
    text: {
        color: "white"
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    tabGrid: {
        paddingTop: 90
    }
}));


const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const Works = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <AnimationOnScroll animateIn={"animate__zoomIn"} animateOnce={true}>
            <Grid className={classes.tabGrid} align='center'>
                <Typography align="center" variant='h2' component='h2' gutterBottom className={classes.text}>
                    Works & Experience
                </Typography>
                <Grid className={classes.root} md={10}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}
                    >
                        <Tab
                            {...a11yProps(0)}
                            icon={
                                <img
                                    width="40%"
                                    height="auto"
                                    src={process.env.PUBLIC_URL + "/setlifenetwork.png"}
                                />
                            }
                        />
                        <Tab
                            {...a11yProps(1)}
                            icon={
                                <img
                                    width="40%"
                                    height="auto"
                                    src={process.env.PUBLIC_URL + "/bfc.png"}
                                />
                            }
                        />
                        <Tab
                            {...a11yProps(2)}
                            icon={
                                <img
                                    width="40%"
                                    height="auto"
                                    src={process.env.PUBLIC_URL + "/impressjob.jpg"}
                                />
                            }
                        />
                        <Tab
                            {...a11yProps(3)}
                            icon={
                                <img
                                    width="50%"
                                    height="auto"
                                    src={process.env.PUBLIC_URL + "/Logo_UCAB_1.png"}
                                />
                            }
                        />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        Item One
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Typography variant='h5'>
                            Banco Fondo Común - Intern
                        </Typography>
                        Developed a reengineering of the services of payment and recharge of Digitel and Inter
                        <br/>
                        (tv and telephone service providers) of the bank  website.  Creation  of  a  middleware
                        <br/>
                        in  which  they  where  handled  the  REST  request  of  the  services  by  a  payment
                        <br/>
                        provider between the bank and the services provider. Adjusted the front-end of the
                        <br/>
                        website, according to supplier requirements. Modified the data base and the services
                        <br/>
                        of the back-end.
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Typography variant='h5'>
                            Impress Job - Front End Developer
                        </Typography>
                        Developed the user interface to check the profile and status of the actual applications.
                        <br/>
                        This also included  changes to the original views focused on facilitating navigation
                        <br/>
                        based on the feedback received from the pool of active users.
                        <br/>
                        Created  the  field  for  users  to  charge  a  business  summary,  improving  usability
                        <br/>
                        aspects.  These  modifications  result  on  a  traffic increment by publishing partner
                        <br/>
                        companies.
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Four
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        Item Five
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        Item Six
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        Item Seven
                    </TabPanel>
                </Grid>
            </Grid>
        </AnimationOnScroll>
    );
}

export default Works