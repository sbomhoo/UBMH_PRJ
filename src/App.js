import React, { useRef, useState } from 'react';
import HomeInfo from './components/HomeInfo';
import InputForm from './components/InputForm';
import CmpTemplate from './components/CmpTemplate';
import ObjectiveList from './components/ObjectiveList';

function App() {
  /* 스크롤 이동 */
  const inputForm = useRef();  //특정 DOM을 가리킬 때 사용하는 Hook함수
  const onMoveToForm = () => {
    inputForm.current.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  //상태 관리
  const [inputs, setInputs] = useState([]); //처음에 아무것도 안들어 있어야 한다. 초기값 넣어주니깐 빈 리스트가 생겨버리네..

  const nextId = useRef(1);
  const fnGetData = (data) => {
      //const { value, name } = data; // 우선 e.target 에서 이벤트가 발생한 name 과 value 를 추출
      setInputs([
        ...inputs, // 기존의 input 객체를 복사한 뒤
        {
          objectiveName : data.objectiveName,
          objectiveDate : data.objectiveDate,
          id: nextId.current
        }
      ]);
      nextId.current++; 
  }

  return ( 
    <>
      <CmpTemplate homeInfo={<HomeInfo pMoveToForm = {onMoveToForm} ></HomeInfo>} 
                    inputForm={<InputForm pInputForm = {inputForm} fnGetData={fnGetData}/>}>
        <ObjectiveList objectives={inputs}></ObjectiveList>
      </CmpTemplate>
    </>
  );
}



export default App;
