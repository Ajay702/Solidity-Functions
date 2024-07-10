# Solidity Functions Interface

This project provides a user interface to interact with the Assessment smart contract deployed on the Ethereum blockchain. It allows users to perform three main functions: summing two integers, checking if a number is even, and getting the length of a string.

## Usage

### Connecting MetaMask Wallet

- Open the application in your browser.
- Connect your MetaMask wallet by clicking on the "Connect Wallet" button.

### Interacting with the Contract

1. **Calculate Sum**
   - Enter two numbers in the input fields and click on "Calculate Sum" to see the result.

2. **Check If Even**
   - Enter a number in the input field and click on "Check If Even" to see if the number is even.

3. **Get String Length**
   - Enter a string in the input field and click on "Get String Length" to get the length of the string.

### Viewing Output

- The output of each operation will be displayed below the input fields.

## Deployment

After cloning the github, you will want to do the following to get the code running on your computer.

1. First Command: npm i
2. Second Command: npx hardhat node
3. Third Command : type: npx hardhat run --network localhost scripts/deploy.js
4. Copy the contract address from output of third command in Pages/Index.js
5. Fourth Command : npm run dev

After this, the project will be running on your localhost. 
Typically at http://localhost:3000/

## Testing

Automated tests can be added using Hardhat's testing framework to ensure the contract functions correctly.

## Troubleshooting

If you encounter any issues, check the browser console for error messages.
Ensure your MetaMask wallet is connected to the correct network (e.g., localhost ).

## Contributing

Contributions are welcome! Fork the repository and submit a pull request with your changes.

## Authors 

Ajay702
