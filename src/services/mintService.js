import { ethers } from 'ethers';
import FiredGuys from '../artifacts/contracts/MyNFT.sol/FiredGuys.json';


const contentId = 'QmTBxFm3SU3pmWQgGzb2ApZe9oMD6amZCAkyVa6HyvMDxB';
const ipfsGateway = 'https://gateway.pinata.cloud/ipfs'
export class Mint{
    static contractAddress = '0x2F6be3F94b24f87d967c0F2CFfa668C268fD8024';    
    static getTotalMint(){
        if (window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(this.contractAddress, FiredGuys.abi, signer);
        
            return contract.count();
        }
    }
    static async mintURI(){
        if (window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(this.contractAddress, FiredGuys.abi, signer);
        
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
    }
    static mintStatus(metadataURI){
        if (window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(this.contractAddress, FiredGuys.abi, signer);
        
            return contract.isContentOwned(metadataURI);
        }
    }
    static async mintToken(metadataURI){
        if (window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(this.contractAddress, FiredGuys.abi, signer);
        
            const connection = contract.connect(signer);    
            const addr = connection.address;
            const result = await contract.payToMint(addr, metadataURI, {
                value: ethers.utils.parseEther('0.05'),
            });
            await result.wait()
        }
    }
    static showURI(tokenId){
        if (window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, FiredGuys.abi, signer);
        
            return contract.tokenURI(tokenId);
        }
    }
}

export class Wallet{
    static getAccount(){
        if (window.ethereum){
            return window.ethereum.request({ method: 'eth_requestAccounts' });
        }
    }
    static async getBalance(_account) {
        if (window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const balance = await provider.getBalance(_account);
            return ethers.utils.formatEther(balance);
        }
    }
}
