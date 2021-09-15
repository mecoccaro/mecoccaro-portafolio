import React from 'react'
import PropTypes from 'prop-types'
import {
    makeStyles,
    Tab,
    Tabs,
    Typography,
    Box, Grid, Link
} from '@material-ui/core'
import {AnimationOnScroll} from 'react-animation-on-scroll'


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 'auto',
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
    },
    link: {
        color: "#084780"
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
                                    alt='Setlife Network'
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
                                    alt='Banco Fondo Común'
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
                                    alt='Impress Job'
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
                                    alt='Universidad Católica Andrés Bello'
                                />
                            }
                        />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <Typography variant='h5'>
                            <Link href='https://www.setlife.network/' className={classes.link}> SetLife Network's </Link> - Software Engineer
                        </Typography>
                        <Typography variant='subtitle2'>
                            Remote / May 2021 - Present
                        </Typography>
                        Development of the Trinary web portal, which serves as a budgeting tool for tracking
                        <br/>
                        workflows and cashflows across different projects and contributors.
                        <br/>
                        Making integrations with payment gateways such as Stripe and backend development of different
                        <br/>
                        functionalities of the portal as well as different visual adjustments in the frontend, offering
                        <br/>
                        different solutions to improve the quality of the product.
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Typography variant='h5'>
                            <Link href='https://www.bfc.com.ve/' className={classes.link}>Banco Fondo Común</Link> - Intern
                        </Typography>
                        <Typography variant='subtitle2'>
                            Caracas, VE / Sep 2020 - Nov 2020
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
                        <Typography variant='subtitle2'>
                            Caracas, VE / Mar 2016 - Sep 2016
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
                        <Typography variant='h5'>
                            <Link href='https://www.ucab.edu.ve/' className={classes.link}>Universidad Católica Andrés Bello</Link> - Software Engineering
                        </Typography>
                        <Typography variant='subtitle2'>
                            Caracas, VE / Student / Oct 2015 - Feb 2021
                        </Typography>
                        The Software Engineer from the Andrés Bello Catholic University is an entrepreneurial
                        <br/>
                        professional with comprehensive training that provides effective solutions to problems
                        <br/>
                        related to the design, production and implementation of application software and telematic
                        <br/>
                        systems; manages and maintains operating systems and computer equipment; plans, directs and
                        <br/>
                        controls IT projects, relying on decision-making tools.
                    </TabPanel>
                </Grid>
            </Grid>
        </AnimationOnScroll>
    );
}

export default Works