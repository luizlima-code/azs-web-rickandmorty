import styled from 'styled-components';

export const DivHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Container = styled.section`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100%;

  align-items: center;
  justify-content: center;

  background-color: rgba(2, 2, 28, 0.4);

  > div {
    width: 60%;
    height: 30%;
    background-color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #02021c;
    border-radius: 20px;

    h3 {
      text-align: center;
      color: #02021c;
    }
  }

  :after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    z-index: -1;
    background: url('https://img.elo7.com.br/product/zoom/2AC11BE/placa-decorativa-quadro-anime-rick-and-morty-gh347-placa-decorativa.jpg')
      center center no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
  }
`;
