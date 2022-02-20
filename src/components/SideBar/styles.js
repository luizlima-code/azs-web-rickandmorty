import styled from 'styled-components';

export const Container = styled.div`
  max-width: 300px;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 25vw;
  height: 100vh;
  color: #fff;

  background-image: linear-gradient(
    to bottom right,
    #8d2de4,
    rgba(2, 2, 28, 0.7)
  );
`;

export const InputSearch = styled.input`
  width: 90%;
  text-align: center;

  border: none;
  border-radius: 20px;
`;

export const Button = styled.input``;

export const DivList = styled.div`
  width: 80%;

  height: 75vh;
  overflow-y: scroll;

  details {
    padding: 10px 0;
    cursor: pointer;
    transition: 0.4s;

    summary {
      justify-content: space-between;
      align-items: center;
      font-size: 20px;
    }

    summary:hover {
      color: #02021c;
    }
  }

  details > p {
    font-size: 14px;
    padding: 0 0 10px 15px;
    cursor: text;

    :hover {
      color: #02021c;
    }
  }

  text-align: center;

  svg {
    width: 10%;
    padding-left: 10px;
  }

  input {
    width: 100%;
    border-radius: 20px;
    border: none;
    transition: 0.4s;

    :hover {
      color: white;
      background-color: #02021c;
      cursor: pointer;
    }
  }
`;
