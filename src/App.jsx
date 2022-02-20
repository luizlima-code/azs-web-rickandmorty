import styled from 'styled-components';
import Router from './Router';
import { GlobalStyle } from './styles/global';

const DivHome = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <DivHome>
      <Router />
      <GlobalStyle />
    </DivHome>
  );
}

export default App;
