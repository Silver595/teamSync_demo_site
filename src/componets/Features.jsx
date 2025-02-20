import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const Features = () => {
    return (
        <Container sx={{ marginTop: 10, maxWidth: "1200px" }}>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={4}>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>New🔥 Features for you</Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>Task Management</Typography>
                            <Typography variant="body2">Create, assign, and track tasks with deadlines.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>Project Organization</Typography>
                            <Typography variant="body2">Manage multiple projects with structured workflows.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>Team Communication</Typography>
                            <Typography variant="body2">Comment, discuss, and collaborate within projects.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Features;
