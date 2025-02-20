import { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
    {
        question: "What is TeamSync, and how does it help teams?",
        answer:
            "TeamSync is a project management tool that helps teams collaborate efficiently by managing tasks, deadlines, communication, and file sharing—all in one place.",
    },
    {
        question: "Is TeamSync available for free, or do I need a subscription?",
        answer:
            "TeamSync offers both free and premium subscription plans based on team requirements.",
    },
    {
        question: "How secure is my data on TeamSync?",
        answer:
            "We use industry-standard encryption and security measures to ensure your data is safe and private.",
    },
    {
        question: "Can I integrate TeamSync with other tools like Slack or Google Drive?",
        answer:
            "Yes, TeamSync integrates with popular tools like Slack, Google Drive, and Trello.",
    },
    {
        question:
            "Can I use TeamSync for personal task management, or is it only for teams?",
        answer:
            "You can use TeamSync for both personal and team task management. It is designed to be flexible.",
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Container id="blog" maxWidth="md" sx={{ py: 8 }}>
            <Typography variant="h4" align="center" fontWeight="bold" sx={{ mb: 4 }}>
                Frequently Ask Questions
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {faqs.map((faq, index) => (
                    <Box
                        key={index}
                        sx={{
                            background: "#fff",
                            borderRadius: "12px",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                            padding: "15px 20px",
                            cursor: "pointer",
                        }}
                        onClick={() => toggleFaq(index)}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                fontWeight: "bold",
                                fontSize: "16px",
                            }}
                        >
                            {faq.question}
                            <ExpandMoreIcon
                                sx={{
                                    transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                                    transition: "transform 0.3s ease",
                                }}
                            />
                        </Box>
                        {openIndex === index && (
                            <Typography
                                sx={{
                                    marginTop: "10px",
                                    fontSize: "14px",
                                    color: "#555",
                                    transition: "all 0.3s ease-in-out",
                                }}
                            >
                                {faq.answer}
                            </Typography>
                        )}
                    </Box>
                ))}
            </Box>
        </Container>
    );
}
