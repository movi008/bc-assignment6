const { expect } = require("chai");

describe("Calculator", function () {
  let calculator;

  beforeEach(async function () {
    const Calculator = await ethers.getContractFactory("Calculator");
    calculator = await Calculator.deploy();
    await calculator.deployed();
  });

  it("should add two numbers", async function () {
    await calculator.add(2, 3);
    expect(await calculator.lastResult()).to.equal(5);
  });

  it("should subtract two numbers", async function () {
    await calculator.subtract(5, 3);
    expect(await calculator.lastResult()).to.equal(2);
  });

  it("should multiply two numbers", async function () {
    await calculator.multiply(2, 3);
    expect(await calculator.lastResult()).to.equal(6);
  });

  it("should divide two numbers", async function () {
    await calculator.divide(6, 3);
    expect(await calculator.lastResult()).to.equal(2);
  });
});
