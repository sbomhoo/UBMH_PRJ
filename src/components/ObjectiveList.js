import React from 'react';
import styled from 'styled-components';
import ObjectiveListItem from './ObjectiveListItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


const HomeDiv = styled.div`
    height: 70vh;
    width: 100%;
`

const ObjectiveList = ({objectives}) => {
    return (
        <HomeDiv>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className="TodoList">
                        {objectives.map((Objective) => (
                            <Grid item xs={2} key = {Objective.id}>
                                <ObjectiveListItem
                                    objectiveName = {Objective.objectiveName}  
                                    objectiveDate = {Objective.objectiveDate}
                                    key = {Objective.id}
                                />
                            </Grid>
                        ))}
                    
                </Grid>
            </Container>
        </HomeDiv>
    );


    
};

export default ObjectiveList;