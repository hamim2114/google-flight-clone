import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { CalendarMonth, NotificationAddOutlined, Timeline } from "@mui/icons-material";

const contentData = [
  {
    icon: <CalendarMonth fontSize="large" color="primary" />,
    title: "Find the cheapest days to fly",
    description:
      "The Date grid and Price graph make it easy to see the best flight deals.",
    image: "/dates_benefits_light.svg",
    headline: "Insightful tools help you choose your trip dates",
    details:
      "If your travel plans are flexible, use the form above to start searching for a specific trip. Then, play around with the Date grid and Price graph options on the Search page to find the cheapest days to get to your destination – and back again for round trips.",
  },
  {
    icon: <Timeline fontSize="large" color="primary" />,
    title: "See the whole picture with price insights",
    description:
      "Price history and trend data show you when to book to get the best price on your flight.",
    image: "/price_insights_benefits_light.svg",
    headline: "Get smart insights about flight prices",
    details:
      "Real-time insights can tell you if a fare is lower or higher than usual, and if the fare you’re seeing is a good price. So, you don’t have to worry about paying too much for a flight or missing out on the cheapest time to book. On some routes, you might also see historical data that helps you better understand how flight prices vary over time.",
  },
  {
    icon: <NotificationAddOutlined fontSize="large" color="primary" />,
    title: "Track prices for a trip",
    description:
      "Not ready to book yet? Observe price changes for a route or flight and get notified when prices drop.",
    image: "/tracking_prices_benefits_light.svg",
    headline: "Monitor flight prices and make sure you never miss a price change",
    details:
      "Effortlessly track prices for specific travel dates or for any dates, if your plans are flexible, to uncover the best deals. You can easily set up tracking for multiple routes while searching for flights and opt-in to receive email updates when the price changes. Once that's done, you can come back to your Tracked Flights page to monitor prices whenever you like, or relax knowing you’ll never miss a flight deal.",
  },
];

const InteractiveSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isMobile = useMediaQuery('(min-width:900px)');

  return (
    <Box>
      <Typography variant="h5" mt={6} mb={2}>
        Useful tools to help you find the best deals
      </Typography>

      {!isMobile ? (
        // Mobile Layout: Render as Accordion
        <Box>
          {contentData.map((item, index) => (
            <Accordion
              key={index}
              expanded={selectedIndex === index}
              onChange={() => setSelectedIndex(p => p === index ? '' : index)}
              sx={{
                mb: 2,
                border: "1px solid #d2e3fc",
                backgroundColor: "#F3F7FE",
                borderRadius: 2,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item.icon}
                <Box ml={2}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      mb: 0.5,
                      color: "#202124",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#20214E" }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Divider />
                <Typography sx={{ mb: 2, mt: 2, fontSize: "18px" }}>
                  {item.headline}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {item.details}
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <img
                    style={{ width: "100%", maxWidth: "460px" }}
                    src={item.image}
                    alt=""
                  />
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      ) : (
        // Desktop Layout: Render as Grid
        <Grid container spacing={4}>
          {/* Left Section */}
          <Grid item xs={12} md={4}>
            {contentData.map((item, index) => (
              <Box
                key={index}
                onClick={() => setSelectedIndex(index)}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  border: "1px solid #d2e3fc",
                  minHeight: "150px",
                  p: "24px",
                  borderRadius: 3,
                  backgroundColor: '#F3F7FE',
                  position: "relative",
                  mb: 2,
                  cursor: "pointer",
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    display: selectedIndex === index ? "block" : "none",
                    right: -16,
                    top: "45%",
                    rotate: "135deg",
                    width: "30px",
                    height: "30px",
                    bgcolor: "#F3F7FE",
                    borderTop: "1px solid #d2e3fc",
                    borderLeft: "1px solid #d2e3fc",
                  },
                }}
              >
                {item.icon}
                <Box ml={2}>
                  <Typography
                    sx={{ fontWeight: 600, mb: 0.5, color: "#202124" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "20214E" }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={8}>
            <Box sx={{ p: 3, backgroundColor: "#fff" }}>
              <Typography sx={{ mb: 2, fontSize: "24px" }}>
                {contentData[selectedIndex].headline}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {contentData[selectedIndex].details}
              </Typography>
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <img
                  style={{ width: "100%", maxWidth: "460px" }}
                  src={contentData[selectedIndex].image}
                  alt=""
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default InteractiveSection;
