import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const imageStyle = {
  height: 0,
  paddingTop: '40%',
};

const useStyles = makeStyles({
  date: {
    marginTop: 15,
  },
});

const NewsItem = ({
  section,
  subsection,
  title,
  abstract: text,
  url,
  byline: by,
  published,
  multimedia,
}) => {
  const classes = useStyles();
  const imageUrl = multimedia.length > 0 ? multimedia[4].url : null;
  const isValidUrl = imageUrl && imageUrl.includes('https');
  const image =
    imageUrl && !isValidUrl ? `https://static01.nyt.com/${imageUrl}` : imageUrl;

  return (
    <Card>
      {image && <CardMedia style={imageStyle} image={image} />}
      <CardContent>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography component="p">{text}</Typography>
        <Typography className={classes.date} color="textSecondary">
          {published}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsItem;
