// contracts/TokenFactory.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./TokenContract.sol";

contract TokenFactory {
    address[] public createdTokens;

    function createToken(string memory name, string memory symbol, uint256 initialSupply) public {
        TokenContract newToken = new TokenContract(name, symbol, initialSupply, msg.sender);
        createdTokens.push(address(newToken));
    }
}
