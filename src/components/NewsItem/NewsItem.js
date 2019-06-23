import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

const imageStyle = {
  height: 0,
  paddingTop: '40%',
};

const NewsItem = ({
  section,
  subsection,
  title,
  abstract: text,
  url,
  byline: by,
  published_date: published,
  multimedia,
}) => {
  const image = multimedia.length > 0 ? multimedia[4].url : null;
  return (
    <Card>
      {image && <CardMedia style={imageStyle} image={image} />}
      <CardContent>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography component="p">{text}</Typography>
      </CardContent>
    </Card>
  );
};

export default NewsItem;
