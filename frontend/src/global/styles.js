import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.bgColor};
  transition: background-color 0.3s ease;
  height: 100%;
  width: 100%;
`;

export default MainContainer;
