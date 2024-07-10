import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Assessment_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [AssessmentContract, setAssessmentContract] = useState(undefined);
  const [walletConnected, setWalletConnected] = useState(false);
  const [sumInputs, setSumInputs] = useState({ a: 0, b: 0 });
  const [isEvenInput, setIsEvenInput] = useState(0);
  const [lengthStringInput, setLengthStringInput] = useState("");
  const [output, setOutput] = useState("");

  const contractAddress = "0x0165878A594ca255338adfa4d48449f69242Eb8F";
  const AssessmentABI = Assessment_abi.abi;
  console.log(AssessmentABI)
  useEffect(() => {
    const getWallet = async () => {
      if (window.ethereum) {
        setEthWallet(window.ethereum);
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setWalletConnected(true);
  
          getAssessmentContract(window.ethereum);
        }
      }
    };
  
    getWallet();
  }, []);
  
  const connectAccount = async () => {
    if (!window.ethereum) {
      alert('MetaMask wallet is required to connect');
      return;
    }
  
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    if (accounts.length > 0) {
      setAccount(accounts[0]);
      setWalletConnected(true);

      setEthWallet(window.ethereum);
      getAssessmentContract(window.ethereum);
    }
  };

  const handleSum = async () => {
    const result = await AssessmentContract.sum(sumInputs.a, sumInputs.b);
    setOutput(`Sum: ${result}`);
  };

  const handleIsEven = async () => {
    const result = await AssessmentContract.isEven(isEvenInput);
    setOutput(`Is even: ${result}`);
  };

  const handleLengthString = async () => {
    const result = await AssessmentContract.lengthString(lengthStringInput);
    setOutput(`Length of string: ${result}`);
  };
  
  const getAssessmentContract = (provider) => {
    const ethersProvider = new ethers.providers.Web3Provider(provider);
    const signer = ethersProvider.getSigner();
    const contract = new ethers.Contract(contractAddress, AssessmentABI, signer);
    setAssessmentContract(contract);
  };

  console.log(walletConnected)
  return (
        <div>
          <h1>Assessment Contract Interface</h1>
          {!walletConnected ? (
            <p>Please connect your MetaMask wallet to interact with the contract.</p>
          ) : (
            <>
              <div>
                <input
                  type="number"
                  value={sumInputs.a}
                  onChange={(e) => setSumInputs({ ...sumInputs, a: parseInt(e.target.value, 10) })}
                  placeholder="Enter first number"
                />
                <input
                  type="number"
                  value={sumInputs.b}
                  onChange={(e) => setSumInputs({ ...sumInputs, b: parseInt(e.target.value, 10) })}
                  placeholder="Enter second number"
                />
                <button onClick={handleSum}>Calculate Sum</button>
              </div>
              <div>
                <input
                  type="number"
                  value={isEvenInput}
                  onChange={(e) => setIsEvenInput(parseInt(e.target.value, 10))}
                  placeholder="Enter a number"
                />
                <button onClick={handleIsEven}>Check If Even</button>
              </div>
              <div>
                <input
                  type="text"
                  value={lengthStringInput}
                  onChange={(e) => setLengthStringInput(e.target.value)}
                  placeholder="Enter a string"
                />
                <button onClick={handleLengthString}>Get String Length</button>
              </div>
              <div>
                <p>Output: {output}</p>
              </div>
            </>
          )}
        </div>
      );
}