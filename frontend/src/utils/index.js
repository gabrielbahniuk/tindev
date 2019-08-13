module.exports = {
  handleToggleSwitch(isSwitched, setIsSwitched, setBgColor) {
    setIsSwitched(!isSwitched);
    setBgColor(isSwitched ? '#16202c' : '#f5f5f5');
  }
};
