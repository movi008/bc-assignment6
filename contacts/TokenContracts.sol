// contracts/TokenContract.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenContract is ERC20 {
    address public owner;

    constructor(string memory name, string memory symbol, uint256 initialSupply, address _owner) ERC20(name, symbol) {
        _mint(msg.sender, initialSupply);
        owner = _owner;
    }

    function mint(uint256 amount) public {
        require(msg.sender == owner, "Only the owner can mint.");
        _mint(owner, amount);
    }
}
