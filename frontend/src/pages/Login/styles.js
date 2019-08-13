import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 30%;
  max-width: 300px;
  display: flex;
  flex-direction: column;

  button {
    margin-top: 10px;
    border: 0;
    border-radius: 4px;
    height: 48px;
    font-size: 16px;
    background: #df4723;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
  }

  input {
    margin-top: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 48px;
    padding: 0 20px;
    font-size: 16px;
    color: #666;

    &::placeholder {
      color: #999;
    }
  }
`;

export { Container, Form };
