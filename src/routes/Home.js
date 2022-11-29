import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import ObjectiveList from '../components/ObjectiveList';
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css";
import "./react-datepicker.css"
import starImg from '../images/start.jpg';

function Home() {
    /* 스크롤 이동 */
    const inputForm = useRef();  //특정 DOM을 가리킬 때 사용하는 Hook함수
    const onMoveToForm = () => {
        inputForm.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    //input 입력 값 상태 -> 오브젝트형
    const [input, setInput] = useState({
        objectiveName: '',
        objectiveDate: ''
    });

    //submit 제출 할때 보낼 상태  -> 배열 안에 오브젝트형
    const [objectives, setObjectives] = useState([]);

    const { objectiveName, objectiveDate } = input;    //비구조화 할당(객체 안에 있는 값을 추출해서 변수 혹은 상수로 바로 선언)

    const onChange = (e) => {              //onChange 를 써야 인풋박스안에 숫자 칠때마다 보인다..
        const { name, value } = e.target; // 우선 e.target 에서 이벤트가 발생한 name 과 value 를 추출
        setInput({
            [name]: value // name 키를 가진 값을 value 로 수정 
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();  //alert창 확인 클릭 후 새로고침 방지, state 사라질까봐 
        setObjectives((currentState) => [...currentState, input]); //setObjectives에 함수를 보낸다. => 함수를 보낼때 첫번째 인자는 현재state다! 따라서 currentState 인자는 현재 상태를 뜻한다.

        console.log(typeof objectiveName);
        console.log(typeof objectiveDate);
        alert(`"${objectiveName}" 목표가 생성되었습니다. ${objectiveDate}`);      //템플릿 문자열 

        //submit 후 input 제거 하기
        setInput({
            objectiveName: '',
            objectiveDate: ''
        })
    }

    // 요일 반환
    const getDayName = (date) => {
        return date.toLocaleDateString('ko-KR', {
            weekday: 'long',
        }).substr(0, 1);
    }

    // 날짜 비교시 년 월 일까지만 비교하게끔
    const createDate = (date) => {
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
                <form onSubmit={onSubmit}>
                    <h3>Input Form 들어갈곳</h3>
                    <label>
                        *목표명: <input type="text" name="objectiveName" value={objectiveName} onChange={onChange} />
                    </label><br /><br />
                    <div>
                        *목표 달성일 입력: <DatePicker name="objectiveDate" selected={objectiveDate} isClearable autoComplete='off' 
                            minDate={new Date()} // 과거 날짜 disable
                            onChange={(date) => setInput({ ...input, "objectiveDate": date })} locale={ko} dateFormat="yyyy년 MM월 dd일"
                            dayClassName={date => getDayName(createDate(date)) === '일' ? "sunday" : undefined}
                        />
                    </div>
                    <br />
                    <button>제출</button>
                </form>
            </FormDiv>
        </HomeBody>
    );
}

export default Home;

const HomeBody = styled.div`
    font-family : sans-serif;
    text-align : center;
`
const HomeDiv = styled.div`
    height: 35vh;
    position: relative;
    overflow: hidden;
`

const ButtonDiv = styled.div`
    height: 5vh;
    position: relative;
    overflow: hidden;
`


const TitleH1 = styled.h1`
    font-family: 'Montserrat', sans-serif;
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
    
`

const FormDiv = styled.div`
    height: 100vh;
    font-size: 20px;
    font-weight: bold;
    background: #e9ecef;
    display: flex;
    justify-content : center;
`
