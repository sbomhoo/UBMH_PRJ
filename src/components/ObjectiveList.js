import React from 'react';
import styled from 'styled-components';
import ObjectiveListItem from './ObjectiveListItem';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function ObjectiveList({ objectives }){
    const dateFormatCustom2 = (inputDate) => {
        var date1 = new Intl.DateTimeFormat("ko", { dateStyle: 'full' }).format(inputDate);
        var date2 = JSON.stringify(date1);
        
        return date2;
    }

    //디 데이 구하기
    const getDday = (inputDate) => {
        var today = new Date();
        var gap = inputDate.getTime() - today.getTime();        //밀리세컨드
        var result = Math.ceil(gap/(1000*60*60*24));          

        return result;
    }

    return (
        <ObjectListDiv>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 8 }} className="TodoList">
                        {objectives.map((objective, index) => (
                            <Grid item xs={2}>
                                <ObjectiveListItem
                                    objectiveName = {objective.objectiveName}  
                                    objectiveDate = {dateFormatCustom2(objective.objectiveDate)}
                                    dDay = {getDday(objective.objectiveDate)}
                                    id = {objective.id}
                                />
                            </Grid>
                        ))}
                    
                </Grid>
            </Container>
        </ObjectListDiv>
    );
};

export default ObjectiveList;

const ObjectListDiv = styled.div`
    height: 80vh;
    width: 100%;
`