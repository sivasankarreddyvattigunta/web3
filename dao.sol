// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Authentication {
    address public owner;
    string private ownerPassword;
    mapping(address => bool) public users;
    mapping(address => string) public userPasswords;
    address[] public userRequests;

    event UserCreated(address user);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    constructor(string memory _ownerPassword) {
        owner = msg.sender;
        ownerPassword = _ownerPassword;
    }

    function requestAddUser(address _user) public {
        require(!users[_user], "User already exists");
        userRequests.push(_user);
    }

    function addUser(address _user, string memory _ownerPassword, string memory _newUserPassword) public {
        require(msg.sender == owner && keccak256(abi.encodePacked(ownerPassword)) == keccak256(abi.encodePacked(_ownerPassword)), "Owner authentication failed");
        
        users[_user] = true;
        userPasswords[_user] = _newUserPassword;
        emit UserCreated(_user);
    }

    function getRequests() public view onlyOwner returns (address[] memory) {
        return userRequests;
    }

    function countRequests() public view onlyOwner returns (uint256) {
        return userRequests.length;
    }

    function login(address _user, string memory _password) public view returns (bool) {
        return (users[_user] && keccak256(abi.encodePacked(userPasswords[_user])) == keccak256(abi.encodePacked(_password)));
    }

    
    
}
