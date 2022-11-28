import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ObjectiveListItem = ({objectiveName, objectiveDate}) => {
    
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image={require("../images/zzangu.jpg")}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    { objectiveName }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                { objectiveDate }
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ObjectiveListItem;



