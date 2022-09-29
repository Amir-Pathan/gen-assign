import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

export default function DivisionCard(props) {

    const {name,email,incharge,totalemp} = props

  return (
    <Card sx={{width: 345 }}>
      <CardContent style={{
        width:"100%",

      }}>
        <Paper style={{
            width:'100%',
            height:'30px',
            backgroundColor:'MediumSeaGreen'
        }}
        >
            {name}
        </Paper>
        <Typography variant="body2" color="text.secondary">
            Incharge : {incharge}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Email-id : {email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            total Employe : {totalemp}
        </Typography>
      </CardContent>
    </Card>
  );
}
