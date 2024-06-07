// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Addition {
    event AdditionResult(uint256 indexed a, uint256 indexed b, uint256 result);

    function add(uint256 a, uint256 b) public returns (uint256) {
        uint256 result = a + b;
        emit AdditionResult(a, b, result);
        return result;
    }
    
}
