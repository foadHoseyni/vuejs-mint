import { ethers } from 'ethers';
import FiredGuys from '../artifacts/contracts/MyNFT.sol/FiredGuys.json';

const contractAddress = '0x2F6be3F94b24f87d967c0F2CFfa668C268fD8024';
const contentId = 'QmTBxFm3SU3pmWQgGzb2ApZe9oMD6amZCAkyVa6HyvMDxB';
const ipfsGateway = 'https://gateway.pinata.cloud/ipfs'
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, FiredGuys.abi, signer);

export class Mint{
    static getTotalMint(){
        return contract.count();
    }
    static async mintURI(){
        let arr = []
            const count = await contract.count();
            const counter = parseInt(count);
            for (let i=0;i<counter+1;i++){
                if(!arr[i]){
                    arr.push({
                        tokenId: i+1,
                        imageURI: `${ipfsGateway}/${contentId}/${i+1}.png`,
                        metaDataURI: `${ipfsGateway}/${contentId}/${i+1}.json`,
                        isMinted: i < counter
                    })
                }
            }
        return arr
    }
    static mintStatus(metadataURI){
        return contract.isContentOwned(metadataURI);
    }
    static mintToken(metadataURI){
        const connection = contract.connect(signer);    
        const addr = connection.address;
        return contract.payToMint(addr, metadataURI, {
            value: ethers.utils.parseEther('0.05'),
        });
            
    }
    static showURI(tokenId){
        return contract.tokenURI(tokenId);
    }
}