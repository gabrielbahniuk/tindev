import React from 'react';
import FooterContainer from './styles';
import Switch from 'react-toggle-switch';
import nerd from '../../assets/nerd.svg';
import { handleToggleSwitch } from '../../utils';
export default function Footer({ isSwitched, setIsSwitched, setBgColor }) {
  return (
    <FooterContainer>
      <Switch
        onClick={() =>
          handleToggleSwitch(isSwitched, setIsSwitched, setBgColor)
        }
        on={!isSwitched}
      >
        {!isSwitched && <img src={nerd} alt="Nerd Icon" />}
      </Switch>
    </FooterContainer>
  );
}
