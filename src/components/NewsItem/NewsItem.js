import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const imageStyle = {
  height: 0,
  paddingTop: '40%',
};

const useStyles = makeStyles({
  mainText: {
    marginBottom: 15,
  },

  textContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  cardContainer: {
    textDecoration: 'none',
  },
});

const NewsItem = ({
  title,
  abstract: text,
  url,
  by,
  published,
  multimedia,
}) => {
  const classes = useStyles();
  const imageUrl = multimedia.length > 0 ? multimedia[4].url : null;
  const isValidUrl = imageUrl && imageUrl.includes('https');
  const image =
    imageUrl && !isValidUrl ? `https://static01.nyt.com/${imageUrl}` : imageUrl;

  return (
    <a
      className={classes.cardContainer}
      target="_blank"
      rel="noopener noreferrer"
      href={url}
    >
      <Card>
        {image && <CardMedia style={imageStyle} image={image} />}
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography component="p" className={classes.mainText}>
            {text}
          </Typography>
          <div className={classes.textContainer}>
            <Typography
              display="inline"
              className={classes.date}
              color="textSecondary"
            >
              {published}
            </Typography>
            <Typography display="inline" color="textSecondary" align="right">
              {by}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  published: PropTypes.string.isRequired,
  multimedia: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  by: PropTypes.string.isRequired,
  abstract: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NewsItem;
