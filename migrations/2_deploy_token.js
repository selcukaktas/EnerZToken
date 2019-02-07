var enerZToken = artifacts.require("../contracts/enerZToken.sol");

module.exports = function(deployer) {
    const _name = 'EnerZ Token';
    const _symbol = 'EnerZ';
    const _decimals = 18;
   // const _amount = 21000000;
  deployer.deploy(enerZToken, _name, _symbol, _decimals);
};