import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from '../Styles/landing.module.css'

export default function LatestNewsCardComponent({cardData}) {
    console.log('props', cardData);
  return (
    <Card className={styles.newsCard}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardData?.heading}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {cardData?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={styles.greenButton}>Learn More</Button>
      </CardActions>
    </Card>
  );
}