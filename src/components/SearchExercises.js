import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box>
        <TextField
          height="76px"
          value=""
          placeholder="Search Exercises"
          type="text"
          onChange={(e) => {}}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "40px",
            width: { lg: "800px", xs: "350px" },
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
          }}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            // textAlign: "center",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "relative",
          }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
