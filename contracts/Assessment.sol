// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Assessment {
    // Function to sum two integers
    function sum(int a, int b) public pure returns (int) {
        return a + b;
    }

    // Function to check if a number is even
    function isEven(int num) public pure returns (bool) {
        return num % 2 == 0;
    }

    // Function to return the length of a string
    function lengthString(string memory str) public pure returns (uint) {
        return bytes(str).length;
    }
}