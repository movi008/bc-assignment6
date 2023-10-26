 SPDX-License-Identifier MIT
pragma solidity ^0.8.0;

import hardhatconsole.sol;
import { ethers } from hardhat;
import { expect } from chai;

describe(Calculator, function () {
  let calculator;
  let owner;
  const initialValue = 10;
  const updatedValue = 20;

  beforeEach(async function () {
    const Calculator = await ethers.getContractFactory(Calculator);
    calculator = await Calculator.deploy();
    await calculator.deployed();

    [owner] = await ethers.getSigners();
  });

  it(should retrieve the initial value, async function () {
    const result = await calculator.getResult();
    expect(result).to.equal(initialValue);
  });

  it(should update the value using the set method, async function () {
    await calculator.connect(owner).setResult(updatedValue);
    const result = await calculator.getResult();
    expect(result).to.equal(updatedValue);
  });
});
