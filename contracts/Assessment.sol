// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Assessment {
    function sum(int a, int b) public pure returns (int) {
        return a + b;
    }

    function isEven(int num) public pure returns (bool) {
        return num % 2 == 0;
    }

    function lengthString(string memory str) public pure returns (uint) {
        return bytes(str).length;
    }
}
