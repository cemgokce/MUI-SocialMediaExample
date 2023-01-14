import React from "react";
import { Button, Typography, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const BlueButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#888",
  margin: 5,
  "&:hover": {
    backgroundColor: "lightblue",
  },
  "&:disabled": {
    backgroundColor: "gray",
    color: "white",
  },
}));

const Appex = () => {
  return (
    <div>
      {" "}
      Hello
      <Button variant="text">Text</Button>
      <Button variant="contained" color="otherColor">
        Contained
      </Button>
      <Button startIcon={<AddIcon />} variant="contained" color="success">
        Add new statement
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h1" component="h2">
        It is a p tag but it is lookig like h1
      </Typography>
      <BlueButton>My Unique Button</BlueButton>
    </div>
  );
};

export default Appex;
