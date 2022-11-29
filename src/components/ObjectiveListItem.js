import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styled from 'styled-components';

function ObjectiveListItem ({objectiveName, objectiveDate, dDay}){
    
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image={require("../images/start.jpg")}
                alt="green iguana"
            />
            <div>
            <DdayDiv>
                 D-day <br/> <b>{ dDay }</b> 
            </DdayDiv>
            </div>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    { objectiveName }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                { objectiveDate } <br/>
                 
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ObjectiveListItem;

const DdayDiv = styled.div`
    font-size: 30px;
    font-weight : 100;
    color : white;
    text-shadow: 2px 2px 2px black; 
    position: absolute;
    top: 15%; left: 37%;
    padding: 0;
    margin: 0;
`