import { Container, Box, Typography, Link } from "@mui/material";

export default function Footer() {
    return (
        <Box  component="footer" sx={{ py: 6, backgroundColor: "#fff" }}>
            <Container
                maxWidth="lg"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 4,
                }}
            >

                <Box id="features" sx={{ display: "flex", flexDirection: "column", gap: 1 }}>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <img
                            src="src/assets/speed.jpg"
                            alt="TeamSync Logo"
                            width={40}
                            height={40}
                            style={{ objectFit: "contain" }}
                        />
                        <Typography variant="h6" fontWeight="bold">
                            TeamSync
                        </Typography>
                    </Box>
                    <Box>
                        <img
                            src="src/assets/speed.jpg"
                            alt="TeamSync"
                            width={550}
                            style={{ objectFit: "contain" }}
                        />
                    </Box>

                    <Typography variant="body2" color="textSecondary">
                        Got questions? Reach us at{" "}
                        <Link href="mailto:hey@email.com" underline="hover">
                            hey@email.com
                        </Link>
                    </Typography>
                </Box>


                <Box sx={{ display: "flex", gap: 4 }}>

                    <Box>
                        <Typography variant="h6" fontWeight="bold">
                            MENU
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                            <Link href="/" color="inherit" underline="hover">
                                Home
                            </Link>
                            <Link href="/about" color="inherit" underline="hover">
                                About
                            </Link>
                            <Link href="/contact" color="inherit" underline="hover">
                                Contact us
                            </Link>
                            <Link href="/faq" color="inherit" underline="hover">
                                FAQ
                            </Link>
                        </Box>
                    </Box>


                    <Box>
                        <Typography variant="h6" fontWeight="bold">
                            Legal
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                            <Link href="/terms" color="inherit" underline="hover">
                                Terms of Use
                            </Link>
                            <Link href="/privacy" color="inherit" underline="hover">
                                Privacy Policy
                            </Link>
                            <Link href="/legal-notice" color="inherit" underline="hover">
                                Legal Notice
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
