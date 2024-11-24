import React, { useState } from 'react';
import {
  Box,
  Button,
  MenuItem,
  Select,
  IconButton,
  Menu,
  Typography,
  Stack,
} from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import SearchIcon from '@mui/icons-material/Search';
import { Add, ArrowDropDown, PersonOutline, Remove } from '@mui/icons-material';
import DestinationFrom from './DestinationFrom';
import DestinationTo from './DestinationTo';


const TravelSearch = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [passengerCount, setPassengerCount] = useState({
    adults: 1,
    children: 0,
    infantsSeat: 0,
    infantsLap: 0,
  });

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleIncrement = (type) => {
    setPassengerCount((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const handleDecrement = (type) => {
    setPassengerCount((prev) => ({
      ...prev,
      [type]: prev[type] > 0 ? prev[type] - 1 : 0,
    }));
  };

  const totalPassengers =
    passengerCount.adults +
    passengerCount.children +
    passengerCount.infantsSeat +
    passengerCount.infantsLap;
  return (
    <Stack
      sx={{
        p: 2,
        mx: 'auto',
        my: 4,
        background: 'white',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Stack direction='row' alignItems='center' gap={3} mb={2}>
        <Select disableUnderline defaultValue="round_trip" variant='standard'>
          <MenuItem value="round_trip">Round trip</MenuItem>
          <MenuItem value="one_way">One way</MenuItem>
          <MenuItem value="multi_city">Multi-city</MenuItem>
        </Select>

        <Box>
          <Button
            sx={{ color: 'inherit' }}
            onClick={handleClick}
            startIcon={<PersonOutline />}
            endIcon={<ArrowDropDown />}
          >
            {totalPassengers}
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            <Box sx={{ p: 2, width: 250 }}>
              {[
                { label: 'Adults', subLabel: '', type: 'adults' },
                { label: 'Children', subLabel: 'Aged 2-11', type: 'children' },
                { label: 'Infants', subLabel: 'In seat', type: 'infantsSeat' },
                { label: 'Infants', subLabel: 'On lap', type: 'infantsLap' },
              ].map(({ label, subLabel, type }) => (
                <Box key={type} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle1">{label}</Typography>
                    {subLabel && (
                      <Typography variant="caption" color="text.secondary">
                        {subLabel}
                      </Typography>
                    )}
                  </Box>

                  <IconButton
                    onClick={() => handleDecrement(type)}
                    disabled={passengerCount[type] === 0}
                  >
                    <Remove />
                  </IconButton>

                  <Typography sx={{ mx: 2 }}>{passengerCount[type]}</Typography>

                  <IconButton onClick={() => handleIncrement(type)}>
                    <Add />
                  </IconButton>
                </Box>
              ))}

              <Stack direction='row' mt={2}>
                <Button
                  fullWidth
                  onClick={handleClose}
                  color="primary"
                >
                  Cancel
                </Button>
                <Button
                  fullWidth
                  onClick={handleClose}
                  color="primary"
                >
                  Done
                </Button>
              </Stack>
            </Box>
          </Menu>
        </Box>

        <Select disableUnderline defaultValue="economy" variant='standard'>
          <MenuItem value="economy">Economy</MenuItem>
          <MenuItem value="premium_economy">Premium Economy</MenuItem>
          <MenuItem value="business">Business</MenuItem>
          <MenuItem value="first_class">First Class</MenuItem>
        </Select>
      </Stack>



      <Stack direction={{ xs: 'column', md: 'row' }} alignItems='center' width='100%' gap={2}>

        <Stack width='100%' direction='row' alignItems='center'>

          {/* From Location */}
          <DestinationFrom />

          {/* Swap Locations Icon */}
          <IconButton>
            <SwapHorizIcon />
          </IconButton>

          {/* To Location */}
          <DestinationTo />
        </Stack>

        {/* Departure Date */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer sx={{ width: '100%', mt: -1 }} components={['DateRangePicker']}>
            <DateRangePicker localeText={{ start: 'Departure', end: 'Return' }} />
          </DemoContainer>
        </LocalizationProvider>
      </Stack>
      <Button
        variant="contained"
        startIcon={<SearchIcon />}
        sx={{
          mt: 4,
          mb: -4,
          borderRadius: '50px',
          textTransform: 'none',
          alignSelf: 'center'
        }}
      >
        Explore
      </Button>


    </Stack>
  );
};

export default TravelSearch;
