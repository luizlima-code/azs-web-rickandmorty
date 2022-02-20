import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { INFO_LIST_EPS } from '../../querys';
import { Button, Container, DivList, InputSearch } from './styles';
import { ReactComponent as StarFull } from '../../assets/starFull.svg';
import { ReactComponent as StarEmpty } from '../../assets/starEmpty.svg';
import { useState } from 'react';

function SideBar() {
  const { loading, error, data } = useQuery(INFO_LIST_EPS);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleChangeFavorite = () => {
    if (isFavorite === true) {
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
    }
  };

  if (loading) {
    return (
      <Container>
        <h1>Rick and Morty</h1>
        <h2>Episodes</h2>
        <DivList>
          <p>Loading...</p>
        </DivList>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <h1>Rick and Morty</h1>
        <h2>Episodes</h2>
        <DivList>
          <p>an error occurred...</p>
        </DivList>
      </Container>
    );
  }

  return (
    <form action="">
      <Container>
        <h1>Rick and Morty</h1>
        <InputSearch type="text" placeholder="Search episode by name" />
        <Button type="submit" value="search" />
        <h2>Episodes</h2>
        <DivList>
          {data.episodes.results.map((ep) => (
            <details key={ep.id}>
              <summary>
                <strong>{ep.episode}</strong>
              </summary>
              <p>
                <strong>Episode Name:</strong>
                {isFavorite ? <StarFull /> : <StarEmpty />} <br /> {ep.name}
              </p>
              <p>
                <strong>Date it was released:</strong> <br /> {ep.air_date}
              </p>
              <p>
                <strong>Number of characters:</strong> {ep.characters.length}
              </p>
              <Link to={`/details/${ep.id}`}>
                <input type="button" value="More Details" />
              </Link>
              <input
                type="button"
                value="Favorite Episode"
                onClick={handleChangeFavorite}
              />
              <input type="button" value="Mark as Seen" />
            </details>
          ))}
        </DivList>
      </Container>
    </form>
  );
}

export default SideBar;
