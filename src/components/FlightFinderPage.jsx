import { Box, Button, Typography, Paper, Stack } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Grid from '@mui/material/Grid2';

const FlightFinderPage = () => {
  return (
    <Box mt={6}>
      <Typography variant="h5" mb={3}>Find cheap flights from Chattogram to anywhere</Typography>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "400px",
          background: "url(/staticmap.png) center/cover",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: "#fff",
            color: "primary.main",
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: "1rem",
            borderRadius: '50px'
          }}
        >
          Explore destinations
        </Button>
      </Box>

      {/* <Box sx={{ padding: "40px 20px" }}>
        <Typography variant="h5" sx={{ textAlign: "center", mb: 4 }}>
          Useful tools to help you find the best deals
        </Typography>

        <Stack direction={{ xs: 'column', md: 'row' }} gap={4}>

          <Paper
            elevation={3}
            sx={{
              padding: "20px",
              textAlign: "center",
              height: "100%",
            }}
          >
            <CalendarTodayIcon
              sx={{
                fontSize: "3rem",
                color: "primary.main",
                mb: 2,
              }}
            />
            <Typography variant="h6">Find the cheapest days to fly</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              The Date grid and Price graph make it easy to see the best flight deals.
            </Typography>
          </Paper>

          <Paper
            elevation={3}
            sx={{
              padding: "20px",
              textAlign: "center",
              height: "100%",
            }}
          >
            <TrendingUpIcon
              sx={{
                fontSize: "3rem",
                color: "primary.main",
                mb: 2,
              }}
            />
            <Typography variant="h6">
              See the whole picture with price insights
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Price history and trend data show you when to book for the best price on your flight.
            </Typography>
          </Paper>

          <Paper
            elevation={3}
            sx={{
              padding: "20px",
              textAlign: "center",
              height: "100%",
            }}
          >
            <NotificationsActiveIcon
              sx={{
                fontSize: "3rem",
                color: "primary.main",
                mb: 2,
              }}
            />
            <Typography variant="h6">Track prices for a trip</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Not ready to book yet? Observe price changes for a route or flight and get notified
              when prices drop.
            </Typography>
          </Paper>

        </Stack>

      </Box> */}
    </Box>
  );
};

export default FlightFinderPage;
