import {  } from 'react'
import Header from './componentes/Header'
import styled from 'styled-components'
import Banner from './componentes/Banner'
import Destaques from './componentes/Destaques'

const AppContainer = styled.div`
    background-image: #E0E0E0;
    width: 100vw;
    height: 100vh;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Banner />
      <Destaques />
    </AppContainer>
  );
}

export default App