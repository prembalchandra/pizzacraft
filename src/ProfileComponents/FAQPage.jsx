import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "I want to track my order",
    answer:
      "You can track your order by visiting the 'My Orders' section in your profile. You’ll find real-time updates on order status and delivery details.",
  },
  {
    question: "I want to manage my order",
    answer:
      "To manage your order, log into your account and go to 'My Orders'. From there, you can edit delivery info or cancel your order if it hasn't been shipped yet.",
  },
  {
    question: "I did not receive Instant Cashback",
    answer: (
      <>
        <Typography variant="body2" sx={{ mb: 1 }}>
          I'm sorry to hear that you did not receive an instant cashback. To help you with this issue, I need more information:
        </Typography>
        <ol style={{ paddingLeft: "20px", margin: 0 }}>
          <li>What type of purchase did you make?</li>
          <li>From which website or store did you make the purchase?</li>
          <li>Did you receive any confirmation or receipt for your purchase?</li>
          <li>Did you check the terms and conditions of the cashback offer before making the purchase?</li>
          <li>Have you contacted the website or store's customer support regarding the issue?</li>
        </ol>
      </>
    ),
  },
  {
    question: "I am unable to pay using wallet",
    answer:
      "If you're facing wallet payment issues, please check if your wallet has enough balance or verify if the payment gateway is available.",
  },
  {
    question: "I want help with returns & refunds",
    answer:
      "To initiate a return or refund, please visit the 'My Orders' section and click on 'Request Return'. You’ll receive confirmation after the request is processed.",
  },
];

const FAQPage = () => {
  return (
    <Box sx={{  backgroundColor: "#fafafa" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700,  mb: 5 }}
        >
          Frequently Asked Questions
        </Typography>

        <Grid container spacing={5} >
          <Grid item xs={12} md={12}>
            {faqData.map((faq, index) => (
              <Accordion key={index} sx={{ mb: 2, boxShadow: 1 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {typeof faq.answer === "string" ? (
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      {faq.answer}
                    </Typography>
                  ) : (
                    faq.answer
                  )}
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>

    </Box>
  );
};

export default FAQPage;
