import {Box, Container, Grid, Typography} from "@mui/material";
import React from "react";

const ScoutSection = () => {
    return (
        <>
        <Container id="scout" sx={{ paddingTop: "80px",marginTop:"150px", textAlign: "center", backgroundColor: "#EFEAFF", paddingY: 15 }}>
            <Grid container spacing={8} alignItems="center" maxWidth="1200px" spacing={4}>
                <Grid item xs={12} md={4}>
                    <Typography variant="h5" fontWeight="bold">Strategic <br/>Collaboration</Typography>
                    <Typography variant="body2">Empowering teams with tools that enhance productivity and streamline workflows.</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h5" fontWeight="bold">Adaptive <br/> Innovation</Typography>
                    <Typography variant="body2">Leveraging technology to create flexible and scalable project management solutions.</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h5" fontWeight="bold">Seamless <br/> Connectivity</Typography>
                    <Typography variant="body2">Integrating essential tools to ensure smooth and efficient teamwork across platforms.</Typography>
                </Grid>
            </Grid>
        </Container>
        <Container sx={{ paddingTop: "80px", textAlign: "center", paddingY: 5 }}>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Box sx={{ backgroundColor: "#EFEAFF", padding: 5, borderRadius: 2, textAlign: "center" }}>
                        <img
                            src="src/assets/Florida.jpg"
                            alt="Placeholder"
                            style={{ maxWidth: "100%", borderRadius: "10px" }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ textAlign: "left", paddingX: 3 }}>
                    <Typography variant="h4" fontWeight="bold" sx={{ marginBottom: 2 }}>Handoff your work <br/>  smarter now</Typography>
                    <Typography variant="body1" sx={{ marginBottom: 3 }}>
                        Ensure a seamless transition between teams with automated workflows and real-time collaboration, making handoffs effortless and efficient.
                    </Typography>
                    <Box sx={{ marginBottom: 3 }}>
                        <Typography variant="h6" fontWeight="bold">Real-Time Sync</Typography>
                        <Typography variant="body2">Instantly update and share progress with your team, ensuring everyone stays aligned without delays.</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" fontWeight="bold">File Transfer</Typography>
                        <Typography variant="body2">Securely hand over documents, designs, and tasks with version control to maximize accuracy and efficiency.</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>

    </>
    );
};

export default ScoutSection;
