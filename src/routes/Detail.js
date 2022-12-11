import React from 'react';
import { useLocation } from "react-router-dom"
import styled from 'styled-components';
import "../styles/default.css"
import starImg from '../styles/images/star.jpg';

function Detail() {
    const location = useLocation();     //Link에서 전달한 props 가져오기    
    const arrClgList= location.state.challengeList.split(',');

    return (
        <ContainerDiv>
            <TitleDiv>
                <Title>{location.state.objectiveName}</Title>
                <p>{location.state.objectiveDate}</p>
            </TitleDiv>
            <WigetDiv>
                <FirstDiv>
                    <TestDiv>
                        <Label>남은 날짜</Label>
                        <Dday> D-{location.state.dDay}</Dday>
                    </TestDiv>
                </FirstDiv>
                <SecondDiv>
                    <TestDiv2>
                        <Label>중요한 것은 꺽이지 않는 마음</Label>
                        <LabelSmall>오늘도 목표 달성을 위한 Challenge List를 체크해보자!</LabelSmall> 
                        {arrClgList.map((item,index)=>
                            <CheckLabel><input type="checkbox" value={item} key={index}/> <label>{item}</label> </CheckLabel>
                        )}
                    </TestDiv2>
                </SecondDiv>
                
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
    font-family: NanumNeoExtraBold;    
    height: 60%;
    width: 20%;
    margin-top: 5%;
    padding-right: 0px; 
    text-align: center;
`

const Title = styled.h1`
    color: #21223C;
    font-size: 80px;
    font-weight: 900;
    -webkit-transform: translateX(-30%);
    -ms-transform: translateX(-50%);
    transform: translateX(0%);
    background: url('${starImg}') no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: cover;
    background-position: center;
`

const WigetDiv = styled.div`
    background: white;
    height: 580px;
    width: 30%;
    margin-top: 120px;
    border: 0px solid;
    border-radius: 10px;
    box-shadow : 0px 2px 8px -5px #000000;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`
const FirstDiv = styled.div`
    width: 100%;
    height: 25%;
    margin-top: 5px;
    display: flex;
    flex-direction: row;
`

const SecondDiv = styled.div`
    width: 100%;
    height: 100%;
    //margin-top: 5px;
    //margin-left: 85px;
    //text-align: center;
`

const TestDiv = styled.div`
    width: 100%;
    margin: 5px;
    margin-left: 15%;
    display: flex;
    flex-direction: column;
`

const TestDiv2 = styled.div`
    //background: red;
    width: 100%;
    height: 100%;
    margin-top: 5px;
    margin-left: 15%;
    //text-align: center;
`

const Label = styled.h1`
    font-family: NanumNeoExtraBold;    
    font-size: 28px;
    margin-bottom: -5px;
    margin-top: 15px;
`

const LabelSmall = styled.h1`
    font-family: NanumNeoRegular;  
    color: #595959;  
    font-size: 14px;
    margin-bottom: -5px;
    margin-top: 15px;
`

const CheckLabel = styled.h1`
    font-family: NanumNeoRegular;  
    color: #595959;  
    font-size: 17px;
    margin-bottom: -5px;
    margin-top: 20px;
    line-height; 10px;
    //text-decoration: line-through;
`

const Dday = styled.p`
    font-family: NanumNeoExtraBold;    
    font-size: 38px;
    margin-bottom: -5px;
    margin-top: 15px;
    color: #4430A6;
`



