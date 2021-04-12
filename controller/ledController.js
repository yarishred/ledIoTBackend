// Funciones y Variables exportadas
const { toggleLed } = require("../helpers/myLedFunction");
const ledVariables = require("../helpers/myLedFunction").ledVariables;

//Rutascontroller
exports.getIndex = (req, res) => {
  toggleLed();
  res.json({ status: ledVariables.isOn });
};
