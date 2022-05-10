import { ethers } from 'ethers';
import FiredGuys from '../artifacts/contracts/MyNFT.sol/FiredGuys.json';

const contractAddress = '0x2F6be3F94b24f87d967c0F2CFfa668C268fD8024';
const contentId = 'QmTBxFm3SU3pmWQgGzb2ApZe9oMD6amZCAkyVa6HyvMDxB';
const ipfsGateway = 'https://gateway.pinata.cloud/ipfs'
export class Mint{
    static provider = new ethers.providers.Web3Provider(window.ethereum);
    static signer = this.provider.getSigner();
    static contract = new ethers.Contract(contractAddress, FiredGuys.abi, this.signer);
    
    static getTotalMint(){
        return this.contract.count();
    }
    static async mintURI(){
        let arr = []
            const count = await this.contract.count();
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
        return this.contract.isContentOwned(metadataURI);
    }
    static async mintToken(metadataURI){
        const connection = this.contract.connect(this.signer);    
        const addr = connection.address;
        const result = await this.contract.payToMint(addr, metadataURI, {
            value: ethers.utils.parseEther('0.05'),
        });
        await result.wait()
        console.log(result);
            
    }
    static showURI(tokenId){
        return this.contract.tokenURI(tokenId);
    }
}

export class Wallet{
    static metamask = function(){
        return window.ethereum;
    }
    static provider = new ethers.providers.Web3Provider(window.ethereum);
    static getAccount(){
        return window.ethereum.request({ method: 'eth_requestAccounts' });

    }
    static async getBalance(_account) {
        
        const balance = await this.provider.getBalance(_account);
        return ethers.utils.formatEther(balance);
    }
}
