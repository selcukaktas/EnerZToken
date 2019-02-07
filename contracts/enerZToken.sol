pragma solidity ^0.5.0;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Pausable.sol";

contract EnerZToken is ERC20, ERC20Mintable, ERC20Burnable, ERC20Pausable, ERC20Detailed {
    constructor(
        string memory _name, 
        string memory _symbol, 
        uint8 _decimals
        //address[] memory minters
        ) 
        ERC20Burnable()
        ERC20Mintable()
        ERC20Pausable()
        ERC20Detailed(_name, _symbol, _decimals)  
        ERC20()
        public
    {
        
    }
}