const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("SampleNFT", function () {
  let nftContract;

  beforeEach(async function () {
    const FiredGuys = await ethers.getContractFactory("FiredGuys");
    const firedguys = await FiredGuys.deploy();
    nftContract = await firedguys.deployed();
  });
  
  it("check wheather contract is created or not", async function () {
    const contractAddress = nftContract.address;
    expect(contractAddress).is.not.equal(null);
  });

  it("check if token assigned to recipent with enough ethers", async function(){
    
    const recipient = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266';
    const metadataURI = 'cid/test.png';

    let balance = await nftContract.balanceOf(recipient);
    expect(balance).to.equal(0);

    const newlyMintedToken = await nftContract.payToMint(recipient, metadataURI, { value: ethers.utils.parseEther('0.05') });

    await newlyMintedToken.wait();

    balance = await nftContract.balanceOf(recipient)
    expect(balance).to.equal(1);

    expect(await nftContract.isContentOwned(metadataURI)).to.equal(true);
  });
});
