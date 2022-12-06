import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ObjectiveList from '../components/ObjectiveList';
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css";
import "./react-datepicker.css"
import starImg from '../images/star.jpg';

function Home() {
    /*** 스크롤 이동  ***/ 
    const inputForm = useRef();  //특정 DOM을 가리킬 때 사용하는 Hook함수
    const onMoveToForm = () => {
        inputForm.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    /*** 상태 관리  ***/ 
    const [input, setInput] = useState({        //input 입력 값 상태 -> 오브젝트형
        objectiveName: '',
        objectiveDate: '',
        challengeList: ''
    });
    const [objectives, setObjectives] = useState([]);    //submit 제출 할때 보낼 상태  -> 배열 안에 오브젝트형
    const [objectiveId, setObjectiveId] = useState(1);

    /*** 비구조화 할당 (객체 안에 있는 값을 추출해서 변수 혹은 상수로 바로 선언)  ***/
    const { objectiveName, objectiveDate, challengeList } = input;   

    /*** Input 입력 시  */
    const onChange = (e) => {              //onChange 를 써야 인풋박스안에 숫자 칠때마다 보인다..
        const { name, value } = e.target; // 우선 e.target 에서 이벤트가 발생한 name 과 value 를 추출

        setInput({
            ...input,
            [name]: value, // name 키를 가진 값을 value 로 수정
            id: objectiveId
        });

        setObjectiveId( 
            (objectiveId) => ++objectiveId      //ID 업!
        );
    }

    /*** 목표 제출시  ***/ 
    const onSubmit = (e) => {
        e.preventDefault();  //alert창 확인 클릭 후 새로고침 방지, state 사라질까봐 
        
        if(objectiveName !== '' && objectiveDate !== '' && objectiveDate !== null){

            setObjectives((currentState) => [...currentState, input]); //setObjectives에 함수를 보낸다. => 함수를 보낼때 첫번째 인자는 현재state다! 따라서 currentState 인자는 현재 상태를 뜻한다.
            alert(`"${objectiveName}" 목표가 생성되었습니다.`);      //템플릿 문자열 
    
            //submit 후 input 제거 하기
            setInput({
                objectiveName: '',
                objectiveDate: '',
                challengeList: ''
            })
        }else{
            alert('목표명 또는 목표 달성일이 비어있습니다. \n원할한 제출을 위해 입력해주세요.');
        }
    }

    useEffect(() => {
        localStorage.setItem("objectiveItem", JSON.stringify(objectives));
    },[objectives])
    

    /*** 날짜 관련 함수  ***/ 
    const getDayName = (date) => {          // 요일 반환
        return date.toLocaleDateString('ko-KR', {
            weekday: 'long',
        }).substr(0, 1);
    }

    const createDate = (date) => {          // 날짜 비교시 년 월 일까지만 비교하게끔
        return new Date(new Date(date.getFullYear()
            , date.getMonth()
            , date.getDate()
            , 0
            , 0
            , 0));
    }

    return (
        <HomeBody>
            <HomeDiv>
                <TitleH1> Project : <br /> 有備無患  유비무환 </TitleH1>
            </HomeDiv>
            <ButtonDiv>
                <AddBtn onClick={onMoveToForm}> 목표 추가하기 </AddBtn>
            </ButtonDiv>
            <ObjectiveList objectives={objectives}></ObjectiveList>
            <FormDiv ref={inputForm}>
                <Form onSubmit={onSubmit}>
                    <FormTitle>有備無患 : 유비무환</FormTitle>
                    
                    <InputDiv>
                        <h2> 목표 입력하기 </h2>
                        <Label> 목표명 </Label><br/>
                        <Input type="text" name="objectiveName" value={objectiveName} onChange={onChange} /><br /><br />
                        <Label> 목표 달성일 </Label>
                        <DatePicker name="objectiveDate" selected={objectiveDate} isClearable autoComplete='off' 
                                minDate={new Date()} // 과거 날짜 disable
                                onChange={(date) => setInput({ ...input, "objectiveDate": date })} locale={ko} dateFormat="yyyy년 MM월 dd일"
                                dayClassName={date => getDayName(createDate(date)) === '일' ? "sunday" : undefined}
                            /> <h5> </h5>
                        <Label> Challenge List (*콤마로 구분) </Label><br/>
                        <Input2 type="text" name="challengeList" value={challengeList} onChange={onChange} placeholder = "목표 달성을 위해 매일 해야하는 일들을 적어봅시다. "/><br />
                        
                    </InputDiv>
                    <br/>
                    <SubmitBtn>제 출</SubmitBtn>
                </Form>
            </FormDiv>
        </HomeBody>
    );
}

export default Home;

const HomeBody = styled.div`
    font-family : Noto Sans KR,sans-serif;
    text-align : center;
`
const HomeDiv = styled.div`
    height: 35vh;
    position: relative;
    overflow: hidden;
`

const ButtonDiv = styled.div`
    height: 7vh;
    position: relative;
    overflow: hidden;
`

const TitleH1 = styled.h1`
    font-family: Noto Sans KR,sans-serif;
    font-size: 90px;
    font-weight: 900;
    position: absolute;
    left: 50%;
    top: -5%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    background: url('${starImg}') no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: cover;
    background-position: center;
`

const AddBtn = styled.button`
    box-shadow : 0px 2px 10px -5px #000000;
    border: none;
    border-radius: 20px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 5rem;
    padding-right: 5rem;
    height: 2.25rem;
    font-size: 1rem;
    background: #21223C;
    &:hover {
      background: #3F416E;
    }
    &:active {
      background: #21223C;
    }
`

const FormDiv = styled.div`
    height: 100vh;
    background: #e9ecef;
    display: flex;
    justify-content : center;
`

const Form = styled.form`
    height: 600px;
    width: 500px;
    margin-top: 80px;
    background : white;
    border: 0px solid;
    border-radius: 10px;
    box-shadow : 0px 2px 8px -5px #000000;
    outline: none;
    overflow: hidden;
`;

const FormTitle = styled.div`
    background : #21223C; 
    padding: 20px;
    color: white;
    font-size: 30px;
    font-weight: bold;
    
`;

const InputDiv = styled.div`
    padding-top: 20px;
    padding-left: 20%;
    text-align: left;
    font-size: 17px;
    font-weight: bold;
`

const Label = styled.label`
    color: #595959;
    line-height: 1.5rem;
`;


const Input = styled.input`
    width: 300px;
    border: 1px solid gray;
    border-radius: 5px;
    outline: none;
    line-height: 2.5rem;
    font-size: 15px;
`;

const Input2 = styled.textarea`
    width: 300px;
    height: 90px;
    border: 1px solid gray;
    border-radius: 5px;
    outline: none;
    font-size: 15px;
    resize: none;
    
`;

const SubmitBtn = styled.button`
    width: 305px;
    margin-left: 5px;
    box-shadow : 0px 2px 10px -5px #000000;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    line-height: 2.5rem;
    font-size: 1rem;
    background: #21223C;
    &:hover {
      background: #3F416E;
    }
    &:active {
      background: #21223C;
    }
`