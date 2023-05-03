
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const Rental = await hre.ethers.getContractFactory("Rental");
  const rental = await Rental.deploy();

  await rental.deployed();

  console.log("Deployed at:", rental.address);
  console.log(
    "Deploying contracts with the account:",
    deployer.address
    );
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
