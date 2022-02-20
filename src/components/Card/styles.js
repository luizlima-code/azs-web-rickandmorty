import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5% 5% 5% 0;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  transition: 0.4s;
  color: #fff;
  background-image: linear-gradient(
    to bottom right,
    rgba(138, 44, 226, 1),
    rgba(2, 2, 28, 1)
  );

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
    height: 350px;
  }

  img {
    border-radius: 10px 10px 0 0;
    height: 180px !important;
  }
`;

export const Infos = styled.div`
  display: flex;
  height: 60%;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-around;
  padding: 0px 16px;
`;
