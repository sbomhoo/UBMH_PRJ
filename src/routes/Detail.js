import React from 'react';
import { useLocation } from "react-router-dom"
import styled from 'styled-components';

function Detail() {
    const location = useLocation();     //Link에서 전달한 props 가져오기
    //console.log(location)
    
    return (
        <ContainerDiv>
            <TitleDiv>
                <Title>{location.state.objectiveName}</Title>
                <p>{location.state.objectiveDate}</p>
            </TitleDiv>
            <WigetDiv>
                <TestDiv>
                    <Dday>D-day</Dday>
                    <Dday> {location.state.dDay}</Dday>
                </TestDiv>
                <TestDiv>
                    진행률
                </TestDiv>
                <TestDiv2>
                    <h1>challengeList</h1>
                    {location.state.challengeList}
                </TestDiv2>
            </WigetDiv>
        </ContainerDiv>
    );
}

export default Detail;

const ContainerDiv = styled.div`
    height: 100vh;
    background: #EBEAEC;
    display: flex;
    justify-content : center;
    
`
const TitleDiv = styled.div`
    //background: blue;
    height: 50%;
    width: 25%;
    margin-top: 5%;
    padding-right: 20px; 
    text-align: center;
    font-family: Noto Sans KR,sans-serif;
`

const Title = styled.h1`
    color: #21223C;
    font-size: 80px;
    font-weight: 900;
`

const WigetDiv = styled.div`
    background: white;
    height: 580px;
    width: 30%;
    margin-top: 120px;
    display: flex;
    flex-wrap: wrap;
    border: 0px solid;
    border-radius: 10px;
    box-shadow : 0px 2px 8px -5px #000000;
    overflow: hidden;
`

const Dday = styled.h1`
    font-size: 40px;
    margin-bottom: -20px;
    margin-top: 8px;
`

const TestDiv = styled.div`
    background: white;
    height: 18%;
    width: 48%;
    margin: 5px;
    text-align: center;
`

const TestDiv2 = styled.div`
    border-top: 1px solid gray;
    background: white;
    width: 100%;
    height: 100%;
    margin: 5px;
`