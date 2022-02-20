import styled from 'styled-components';

export const DivResults = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  width: 100%;

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
    background: url('https://vertentesdocinema.com/wp-content/uploads/2018/04/rick-morty-poster.jpg')
      center center no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
  }
`;

export const DivTitles = styled.div`
  width: 100%;
  background-image: linear-gradient(
    180deg,
    rgba(2, 2, 28, 0.8),
    rgba(2, 2, 28, 0.4)
  );

  color: #fff;

  h1 {
    text-align: center;
  }

  h3 {
    margin-bottom: 20px;
    text-align: center;
  }
  h2 {
    margin-bottom: 20px;
  }
`;

export const Container = styled.section`
  display: grid;
  overflow-y: scroll;
  width: 100%;
  padding: 0 10px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 2fr));
  gap: 50px;
  background-color: rgba(2, 2, 28, 0.4);
`;

export const DivLoading = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  justify-content: center;
  align-items: center;

  @keyframes move {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(100%);
    }
  }

  div {
    width: 50px;
    height: 50px;
    background-color: #02021c;
    border-radius: 50%;
    margin-left: 15px;

    animation: move 1s ease-in-out infinite alternate;
  }

  div:nth-child(1) {
    animation-delay: -0.4s;
  }

  div:nth-child(2) {
    animation-delay: -0.2s;
  }
`;
