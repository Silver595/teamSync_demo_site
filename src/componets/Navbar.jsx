import { AppBar, Toolbar, Typography, Button, Container, Grid, Box, Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setMobileOpen(false);
    };

    const drawer = (
        <Box sx={{ width: 250, padding: 2 }} role="presentation" onClick={handleDrawerToggle}>
            <IconButton onClick={handleDrawerToggle} sx={{ alignSelf: "flex-end" }}>
                <CloseIcon />
            </IconButton>
            <List>
                {["Home", "Scout", "Blog", "Features"].map((text) => (
                    <ListItem button key={text} onClick={() => scrollToSection(text.toLowerCase())}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position="fixed" color="transparent" elevation={0} sx={{ backgroundColor: "white", paddingY: 1, borderBottom: "1px solid #ccc" }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", margin: "auto", width: "100%", flexWrap: "wrap" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", cursor: "pointer" }} onClick={() => scrollToSection("home")}>TeamSync</Typography>
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                        <Button color="inherit" onClick={() => scrollToSection("home")}>Home</Button>
                        <Button color="inherit" onClick={() => scrollToSection("scout")}>Scout</Button>
                        <Button color="inherit" onClick={() => scrollToSection("blog")}>Blog</Button>
                        <Button color="inherit" onClick={() => scrollToSection("features")}>Features</Button>
                    </Box>
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
                        <Button variant="outlined">Log in</Button>
                        <Button variant="contained" color="primary">Get Started</Button>
                    </Box>
                    <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ display: { md: "none" } }}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
                {drawer}
            </Drawer>
        </>
    );
};

export default Navbar;
