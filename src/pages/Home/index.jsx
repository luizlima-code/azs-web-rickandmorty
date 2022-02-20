import SideBar from '../../components/SideBar';
import { Container, DivHome } from './styles';

function Home() {
  return (
    <DivHome>
      <SideBar />
      <Container>
        <div>
          <div>
            <h3>Select an episode in the sidebar for more details</h3>
          </div>
        </div>
      </Container>
    </DivHome>
  );
}

export default Home;
