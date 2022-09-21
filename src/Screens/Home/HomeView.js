
import * as React from "react";
import { Container, 
    Tab, 
    TabPanel, 
    Tabs, 
    Typography, 
    Box,
    Grid, 
    styled, 
    Paper } from "@mui/material";
import PropTypes from 'prop-types';
import Youtube from "../../Components/InnerComponent/Youtube";
import Twitch from "../../Components/InnerComponent/Twitch";
import Instagram from "../../Components/InnerComponent/Instagram";
import TikTok from "../../Components/InnerComponent/TikTok";
import Parcerias from "../../Components/InnerComponent/Parcerias";
import Profile from "../../Components/InnerComponent/Profile"
import { MuiThemes } from "../../Utils/Commom/MuiThemes";

export default function HomeView({ handleChange, value, a11yProps }) {

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sm={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    
    return (
        <>
        <Container  sx={{
            width: '70%',
            maxWidth: '400px',
            marginTop: '5rem',
            padding: '2rem 2rem',
            backgroundColor: '#DDDDF8',
            borderRadius: 5           
        }} >
                <Profile/>
            <Box sx={{ width: '100%', 
                     }}>
                <Box sx={{ borderBottom: 1, 
                        borderColor: '#B3B3F0',
                        alignItems: 'center',
                        marginBottom: '0.5rem',
                        
                         }}>
                        <Tabs value={value} onChange={handleChange} 
                            variant="scrollable"
                            scrollButtons
                            allowScrollButtonsMobile
                            aria-label="scrollable force tabs example">
                        <Tab label="Youtube" {...a11yProps(0)} />
                        <Tab label="Twitch" {...a11yProps(1)} />
                        <Tab label="TikTok" {...a11yProps(2)} />
                        <Tab label="Instagram" {...a11yProps(3)} />
                        <Tab label="Parcerias" {...a11yProps(4)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Youtube />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Twitch />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <TikTok />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Instagram />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Parcerias />
                </TabPanel>
            </Box>
            </Container>
        </>
    );
}
