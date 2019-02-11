var EnerZToken = artifacts.require("../contracts/EnerZToken.sol");

contract('EnerZToken', function(accounts) {
  var tokenInstance;

  it('initializes the contract with the correct values', function() {
    return EnerZToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.name();
    }).then(function(name) {
      assert.equal(name, 'EnerZ Token', 'has the correct name');
      return tokenInstance.symbol();
    }).then(function(symbol) {
      assert.equal(symbol, 'EnerZ', 'has the correct symbol');
    })
  })

  it('allocates the initial supply upon deployment', function() {
    return EnerZToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply) {
      assert.equal(totalSupply.toNumber(), 21000000, 'total supply is ok');
      return tokenInstance.balanceOf(accounts[0]);
    }).then(function(adminBalance) {
      assert.equal(adminBalance.toNumber(), 21000000, 'the admin account is ok. it has 21000000 EnerZ token.');
    });
  });

  it('transfers token ownership', function() {
    return EnerZToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.transfer.call(accounts[1], 5); 
    }).then(function(success) {
      assert.equal(success, true, 'Başarılı: token transfer edildi. it returns true');
  });
                                              });

  it('mint token for account 1', function() {
    return EnerZToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.mint.call(accounts[1], 1000000); 
    }).then(function(success) {
      assert.equal(success, true, 'Başarılı: token 1 nolu account icin mint edildi. it returns true');
  });
                                              });

});