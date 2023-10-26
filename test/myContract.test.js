const { expect } = require("chai");

describe("MyContract", function () {
  it("Should set and get the variable correctly", async function () {
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy();

    await myContract.setMyVariable(42);
    const result = await myContract.getMyVariable();

    expect(result).to.equal(42);
  });
});
