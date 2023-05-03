import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ setExercises, exercises, setBodyPart }) => {
  console.log(exercises);
  return (
    <Box>
      <Typography variant="h3" mb="40px">
        Showing Results
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
