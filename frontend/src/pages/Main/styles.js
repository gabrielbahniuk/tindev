import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
  background: ${props => props.bgColor};
  transition: background-color 0.3s ease;
`;

const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin: 50px auto 0 auto;
  width: 80%;

  li {
    display: flex;
    flex-direction: column;
    img {
      max-width: 100%;
      border-radius: 0 0 5px 5px;
    }
    footer {
      flex: 1;
      background: #fff;
      border: 1px solid #eee;
      padding: 15px 20px;
      text-align: left;
      border-radius: 0 0 5px 5px;
      strong {
        font-size: 16px;
        color: #333;
      }
      p {
        font-size: 14px;
        line-height: 20px;
        color: #999;
        margin-top: 5px;
      }
    }
  }
`;

const ButtonsContainer = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

const Button = styled.button`
  height: 50px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
  border: 0;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;

  &:hover {
    img {
      transition: all ease 0.2s;
      transform: translateY(-2px);
    }
  }
`;

const Empty = styled.div`
  font-size: 32px;
  color: #999;
  font-weight: bold;
  margin-top: 300px;
`;

const MatchContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);

  .avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 5px solid #fff;
    margin: 30px 0;
  }

  strong {
    font-size: 32px;
    color: #fff;
  }

  p {
    margin-top: 10px;
    font-size: 20px;
    line-height: 30px;
    max-width: 400px;
    color: rgba(255, 255, 255, 0.8);
  }

  button {
    border: 0;
    background: none;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
    font-size: 18px;
    margin-top: 30px;
    cursor: pointer;
  }
`;

export { Container, List, ButtonsContainer, Button, Empty, MatchContainer };
