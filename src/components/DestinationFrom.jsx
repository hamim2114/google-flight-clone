import React, { useState } from "react";
import { Autocomplete, TextField, InputAdornment } from "@mui/material";
import axios from "axios";
import { MyLocation } from "@mui/icons-material";

const DestinationFrom = () => {
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAirports = async (query) => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await axios.get(
        "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport",
        {
          params: { query },
          headers: {
            "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
            "X-RapidAPI-Key": "c08284e7d5mshbfb166f1e77d699p1dc9bdjsna1518b811f48",
          },
        }
      );

      const airports = response.data.data;
      setOptions(
        airports.map((airport) => ({
          label: airport.presentation.suggestionTitle,
          id: airport.navigation.entityId,
          subtitle: airport.presentation.subtitle,
        }))
      );
    } catch (error) {
      console.error("Error fetching airports:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event, value) => {
    setSearchValue(value);
    if (value.length > 2) {
      fetchAirports(value);
    } else {
      setOptions([]);
    }
  };

  return (
    <Autocomplete
      fullWidth
      options={options}
      getOptionLabel={(option) => option.label || ""}
      filterOptions={(x) => x}
      onInputChange={handleInputChange}
      loading={loading}
      renderOption={(props, option) => (
        <li {...props}>
          <div>
            <strong>{option.label}</strong>
            <div style={{ fontSize: "0.85rem", color: "#888" }}>{option.subtitle}</div>
          </div>
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Where from?"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <MyLocation />
              </InputAdornment>
            ),
          }}
        >
        </TextField>
      )}
    />

  );
};

export default DestinationFrom;
