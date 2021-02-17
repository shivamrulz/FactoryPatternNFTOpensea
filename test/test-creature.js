const Creature = artifacts.require("Creature");
const ethers = require('ethers');

contract("Creature", accounts => {
    let instance;
    before(() => {
        return Creature.deployed()
            .then(contractInstance => {
                instance = contractInstance;
            });
    });

    it("should have totalSupply of 0", () =>
    {
        return instance.totalSupply()
            .then(supply => {
                assert.equal(
                supply.valueOf(),
                0,
                "total supply is not zero"
                );
            });
        });
    it("should have name as Creature", () =>
    {
      return instance.name()
          .then(name => {
              assert.equal(
              name,
              "Creature-shivam",
              "name is not creature"
              );
          });
    });
    it("should be able to mint successfully", () =>
    {
        const newAddress = ethers.Wallet.createRandom().address;
        return instance.mintTo(newAddress)
            .then(() => instance.totalSupply())
            .then(supply => {
                assert.equal(
                supply.valueOf(),
                1,
                "total supply is not 1"
                );
            });
    });
});
