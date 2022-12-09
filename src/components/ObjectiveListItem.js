import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, createTheme, ThemeProvider } from '@mui/material';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


function ObjectiveListItem ({objectiveName, objectiveDate, dDay, challengeList, id}){
    return (
        <Link to={`/detail/${id}`} state={{ objectiveName: objectiveName, objectiveDate: objectiveDate, dDay: dDay, challengeList:challengeList }} 
                style={{ textDecoration: "none" }}> 
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={require("../styles/images/start.jpg")}
                    alt="green iguana"
                />
                <DdayDiv>
                    D-day <br/> <b>{ dDay }</b> 
                </DdayDiv>
                <CardContent>
                    <ThemeProvider theme={theme}>
                        <Typography gutterBottom variant="h6" component="div">
                            {objectiveName.length > 10 ?  `${objectiveName.slice(0, 10)}..` : objectiveName} 
                        </Typography>
                        <Typography variant="h7" color="text.secondary">
                            { objectiveDate } <br/>
                        </Typography>
                    </ThemeProvider>
                </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
};

export default ObjectiveListItem;

//mui에서 typography 폰트 지정
const theme = createTheme({
    typography:{
        fontFamily: "NanumNeoExtraBold"
    }
})

const DdayDiv = styled.div`
    font-family: NanumNeoExtraBold; 
    font-size: 30px;
    color : white;
    text-shadow: 2px 2px 2px black; 
    position: absolute;
    top: 15%; left: 34%;
    padding: 0;
    margin: 0;
`


