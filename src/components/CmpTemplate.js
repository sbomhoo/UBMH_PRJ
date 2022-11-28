import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    font-family : sans-serif;
    text-align : center;
    
  }
`;


const cmpTemplate = ({homeInfo, children, inputForm}) => {
    return ( 
        <>
            <GlobalStyle/>
            <div>{homeInfo}</div>
            <div>{children}</div>
            <div>{inputForm}</div>
        </>
    );
};

export default cmpTemplate;