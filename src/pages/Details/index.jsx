import { useQuery } from '@apollo/client';
import { Container, DivLoading, DivResults, DivTitles } from './styles';
import { useParams } from 'react-router-dom';
import { INFO_EP } from '../../querys';

import SideBar from '../../components/SideBar';
import Card from '../../components/Card';

function Details() {
  let { id } = useParams();

  const { loading, error, data } = useQuery(INFO_EP, {
    variables: { id },
  });

  if (loading) {
    return (
      <>
        <p>Loading...</p>
        <DivLoading>
          <div></div>
          <div></div>
          <div></div>
        </DivLoading>
      </>
    );
  }

  if (error) {
    return <p>an error occurred...</p>;
  }

  return (
    <>
      <SideBar />
      <DivResults>
        <DivTitles>
          <h1>
            {data.episode.name} - {data.episode.episode}
          </h1>
          <h3>Date it was released: {data.episode.air_date}</h3>
          <h2>Episode characters:</h2>
        </DivTitles>
        <Container>
          {data.episode.characters.map((props, index) => (
            <Card key={props.name} {...props} />
          ))}
        </Container>
      </DivResults>
    </>
  );
}

export default Details;
