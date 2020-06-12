import React from 'react';
import RouterHandler from './router/RouterHandler'
import styled from 'styled-components';

const ContainerGlobal = styled.div`
  background-color: #333;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  clear: both;
`
function App() {
  return (
    <ContainerGlobal>
      <br/>
      <RouterHandler />
      <br/>
    </ContainerGlobal>
  );
}

export default App;
