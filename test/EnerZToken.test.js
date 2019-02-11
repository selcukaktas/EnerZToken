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
      assert.equal(totalSupply.toNumber(), 0, 'total supply is ok');
      return tokenInstance.balanceOf(accounts[0]);
    }).then(function(adminBalance) {
      assert.equal(adminBalance.toNumber(), 0, 'the admin account is ok. it has 0 EnerZ token.');
    });
  });

  it('transfers token ownership', function() {
    return EnerZToken.deployed().then(function(instance) {
      tokenInstance = instance;
      // Test `require` statement first by transferring something larger than the sender's balance
      return tokenInstance.transfer.call(accounts[1], 9999999999999999999); //99999999999999999999999
    }).then(assert.fail).catch(function(error) {
      assert(error.message.indexOf('revert') >= 0, 'Hata Mesaji: yetersiz bakiye. error message must contain revert');
      return tokenInstance.transfer.call(accounts[1], 5, { from: accounts[2] });
    }).then(function(success) {
      assert.equal(success, true, 'Başarılı: token transfer edildi. it returns true');
    }); 
    });
});