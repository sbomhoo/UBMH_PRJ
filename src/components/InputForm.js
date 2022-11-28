import React,  { useState } from 'react';
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css";

//자식끼리 상태 공유하려면 부모 걸쳐야 함, 자식1 -> 부모 -> 자식2
const InputForm = ({pInputForm, fnGetData}) => {

    const [inputs, setInputs] = useState({
        objectiveName : '',
        objectiveDate : '',
        checkList : ''   //체크박스 상태관리 하는거 ,.. 크롬 북마크 참고.. 
    });

    const { objectiveName , objectiveDate} = inputs;    //비구조화 할당(객체 안에 있는 값을 추출해서 변수 혹은 상수로 바로 선언)

    const onChange = (e) => {              //onChange 를 써야 인풋박스안에 숫자 칠때마다 보인다..
        const { value, name } = e.target; // 우선 e.target 에서 이벤트가 발생한 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 수정 
        });
    }

    const handleSubmit = (e) => {
        alert(`"${objectiveName}" 목표가 생성되었습니다. ${objectiveDate}`);      //템플릿 문자열 
        fnGetData(inputs);        //부모 컴포넌트로 데이터 보내기 위해 함수 선언
        alert("목표가 생성되었습니다.");
        e.preventDefault();  //alert창 확인 클릭 후 새로고침 방지, state 사라질까봐 
    }


    return (
        <FormDiv ref={pInputForm}>
            <div>
            <h3>Input Form 들어갈곳</h3>
            <label>
                *목표명: <input type="text" name="objectiveName" value={objectiveName} onChange={onChange} />
            </label><br/><br/>
            <div>
                *목표 달성일 입력: 
                <DatePicker name="objectiveDate" selected={objectiveDate} onChange={date => setInputs({...inputs,"objectiveDate":date})} locale={ko} dateFormat="yyyy년 MM월 dd일" />
                <br/>
            </div>
            <br/><br/>
            <button onClick={handleSubmit}>제출</button>
            </div>
        </FormDiv>
    );
};

export default InputForm;


const FormDiv = styled.div`
    height: 100vh;
    font-size: 20px;
    font-weight: bold;
    background: #e9ecef;
`