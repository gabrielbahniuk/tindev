import React, { useState } from 'react';
import MainContainer from './global/styles';
import '../node_modules/react-toggle-switch/dist/css/switch.min.css';
import './global/App.css';
import FooterContainer from './components/Footer';
import Routes from './routes';

function App() {
  const [isSwitched, setIsSwitched] = useState(true);
  const [bgColor, setBgColor] = useState('#f5f5f5');
  return (
    <MainContainer bgColor={bgColor}>
      <Routes />
      <FooterContainer
        isSwitched={isSwitched}
        setIsSwitched={setIsSwitched}
        setBgColor={setBgColor}
      />
    </MainContainer>
  );
}

export default App;
