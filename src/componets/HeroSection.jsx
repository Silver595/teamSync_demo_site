import { Container, Grid, Typography, Button, Box } from "@mui/material";
import React from "react";

const HeroSection = () => {
    return (
        <Container id="home" sx={{ marginTop: "80px", maxWidth: "1200px" }}>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2 }}>
                        Collaboration <span style={{ textDecoration: "underline" }}>more</span> smart
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 3 }}>
                        Collaborate seamlessly, track progress effortlessly, and keep your team in sync—all in one place.
                    </Typography>
                    <Button variant="contained" color="primary">Get Started →</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box component="img" src="src/assets/King.png" alt="Hero Illustration" sx={{ width: "100%", maxWidth: "400px", display: "block", margin: "auto" ,marginTop:"12px" }} />
                </Grid>
            </Grid>
        </Container>

    );
};

export default HeroSection;
