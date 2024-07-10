const hre = require("hardhat");

async function main() {
  // Assuming the contract doesn't require any initial parameters for the constructor
  const Assessment = await hre.ethers.getContractFactory("Assessment");
  const assessment = await Assessment.deploy();

  await assessment.deployed();

  console.log(`Assessment contract deployed to: ${assessment.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});