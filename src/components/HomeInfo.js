import React from 'react';
import styled from 'styled-components';

const HomeDiv = styled.div`
    height: 30vh;
    font-size: 30px;
    font-weight: bold;
`


const HomeInfo = ({pMoveToForm}) => {
    return ( 
        <HomeDiv>
            <h1>有備無患 : 유비무환 Project</h1>
            <button onClick={pMoveToForm}> 목표 추가하기 </button>

        </HomeDiv>

    );
  
};

export default HomeInfo;