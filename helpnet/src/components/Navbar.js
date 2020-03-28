import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import logo from "../images/logo.png";
import Home from "../screens/HomeScreen";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="#e4edf2" style={{ height: "8vh" }}>
        <img
          src={logo}
          alt="logo"
          style={{ width: "10vh", position: "absolute" }}
        ></img>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          style={{ marginLeft: "10vh", height: "8vh" }}
        >
          <Tab label="O nás" {...a11yProps(0)} style={{ height: "8vh" }} />
          <Tab label="Dopyt" {...a11yProps(1)} style={{ height: "8vh" }} />
          <Tab label="Ponuka" {...a11yProps(2)} style={{ height: "8vh" }} />
          <Tab label="Transport" {...a11yProps(3)} style={{ height: "8vh" }} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Dopyt
      </TabPanel>
      <TabPanel value={value} index={2}>
        Ponuka
      </TabPanel>
      <TabPanel value={value} index={3}>
        Transport
      </TabPanel>
    </div>
  );
}
