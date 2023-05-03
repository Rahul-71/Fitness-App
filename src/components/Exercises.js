import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ setExercises, exercises, setBodyPart }) => {
  // console.log(exercises);
  const [currentPage, setcurrentPage] = useState(1);
  const exercisePerPage = 9;

  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentPageExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setcurrentPage(value);
    document
      .getElementById("searchResult")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box>
      <Typography
        id="searchResult"
        sx={{ fontSize: { lg: "30px", xs: "20px" } }}
        mb="40px"
        fontWeight="bold"
      >
        Showing Results
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
      >
        {currentPageExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>

      {/* to add the pagination feature to explore the search result items */}
      <Stack mt="2rem" alignItems="center">
        {exercises.length > exercisePerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            count={Math.ceil(exercises.length / exercisePerPage)}
            size="large"
            page={currentPage}
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
