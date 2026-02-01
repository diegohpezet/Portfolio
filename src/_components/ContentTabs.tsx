"use client"
import React from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Experience from "./Experience";
import Projects from "./Projects";
import ContactForm from "./Contact";
import IconCarousel from "./IconCarousel";


export default function ContentTabs() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 5 }}>
        <TabList onChange={handleChange} aria-label="Content tabs" >
          <Tab label="Work & Skills" value="1" defaultChecked />
          <Tab label="Projects" value="2" />
          <Tab label="Contact Me!" value="3" />
        </TabList>
      </Box>
      <TabPanel value="1" sx={{ px: 0 }}>
        <Experience />
        <IconCarousel/>
      </TabPanel>
      <TabPanel value="2">
        <Projects />
      </TabPanel>
      <TabPanel value="3">
        <ContactForm />
      </TabPanel>
    </TabContext>
  );
}