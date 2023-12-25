import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const CourseCard = ({course}) => {
  return (
    <Card sx={{ width: 300, height:350 }}>
      <CardMedia
        component="img"
        alt={course.name}
        height="140"
        image={course.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {course.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          {course.description}
        </Typography>
        <Typography variant="body2" color="">
          {course.author}
        </Typography>
        <Typography variant="body2" color="">
          Rating: {course.ratings}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
