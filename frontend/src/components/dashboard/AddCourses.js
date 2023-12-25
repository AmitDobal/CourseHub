import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import { COLOR_GREYISH_BLACK } from "../../constants/colorConst";
import axios from "axios";

const formInitialState = {
  name: "",
  description: "",
  image: "",
  price: "",
  instructor:""
};
const AddCourses = () => {
  const maxLength = 80;
  const [characterCount, setCharacterCount] = useState(0);
  const [formInputs, setFormInputs] = useState(formInitialState);

  const handleFormInputs = (e) => {
    if (e.target.name === "description") handleDescriptionChange(e);
    setFormInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formInputs);
    addDataToDb();
    // setFormInputs(formInitialState);
  };

  const addDataToDb = async () => {
    try {
      const url = "http://localhost:8080/course";
      const body = formInputs;
      const res = await axios.post(url, body);
      console.log(res)
    } catch (error) {
      console.log("ERRROR! POST ADD COURSE: ", error.message);
    }
  };

  const handleDescriptionChange = (event) => {
    const inputValue = event.target.value;
    setCharacterCount(inputValue.length);
  };

  return (
    <Container sx={{}}>
      <Box sx={{}}>
        <Typography m={1} variant="h4">
          Add Course
        </Typography>

        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="text"
                placeholder="Course Name"
                name="name"
                onChange={handleFormInputs}
                value={formInputs.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="text"
                multiline
                rows={2}
                inputProps={{ maxLength }}
                placeholder="Description"
                name="description"
                onChange={handleFormInputs}
                value={formInputs.description}
              />
              <Typography
                color={characterCount >= maxLength ? "error" : "textSecondary"}
                variant="caption">
                {characterCount}/{maxLength} characters
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="text"
                placeholder="Instructor Name"
                name="instructor"
                onChange={handleFormInputs}
                value={formInputs.instructor}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="number"
                placeholder="Price (Rs)"
                name="price"
                onChange={handleFormInputs}
                value={formInputs.price}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="url"
                placeholder="Image URL"
                name="image"
                onChange={handleFormInputs}
                value={formInputs.image}
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "left", pb: 10 }}>
                <Button
                  onClick={handleFormSubmit}
                  type="submit"
                  variant="contained"
                  sx={{
                    background: COLOR_GREYISH_BLACK,
                    borderRadius: 5,
                    width: 120,
                  }}>
                  Add
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default AddCourses;
