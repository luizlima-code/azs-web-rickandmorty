import { Container, Infos } from './styles';

function Card(props) {
  return (
    <Container>
      <img
        src={props.image}
        alt={`Avatar of ${props.name}`}
        style={{ height: '30%', width: '100%' }}
      />
      <Infos>
        <h4>
          <b>{props.name}</b>
        </h4>
        <p>
          <b>SPECIE:</b> {props.species}
        </p>
        <p>
          <b>STATUS:</b> {props.status}
        </p>
      </Infos>
    </Container>
  );
}

export default Card;
