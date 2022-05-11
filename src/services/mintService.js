import { ethers } from 'ethers';
import FiredGuys from '../artifacts/contracts/MyNFT.sol/FiredGuys.json';


const contentId = 'QmTBxFm3SU3pmWQgGzb2ApZe9oMD6amZCAkyVa6HyvMDxB';
const ipfsGateway = 'https://gateway.pinata.cloud/ipfs'
export class Mint{
    static provider
    static signer
    static contract
    static initial(){
        if (window.ethereum){
             this.provider = new ethers.providers.Web3Provider(window.ethereum);
             this.signer = this.provider.getSigner();
             this.contract = new ethers.Contract(this.contractAddress, FiredGuys.abi, this.signer);
        }
    }
    static contractAddress = '0x2F6be3F94b24f87d967c0F2CFfa668C268fD8024';    
    static getTotalMint(){
        if (window.ethereum){
            this.initial()
            return this.contract.count();
        }
    }
    static async mintURI(){
        if (window.ethereum){
            this.initial()
            let arr = []
                const count = await this.contract.count();
                const counter = parseInt(count);
                console.log(counter);
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
            this.initial()
            return this.contract.isContentOwned(metadataURI);
        }
    }
    static async mintToken(metadataURI){
        if (window.ethereum){
            this.initial()
            const connection = this.contract.connect(this.signer);    
            const addr = connection.address;
            const result = await this.contract.payToMint(addr, metadataURI, {
                value: ethers.utils.parseEther('0.05'),
            });
            await result.wait()
        }
    }
    static showURI(tokenId){
        if (window.ethereum){
            this.initial()
            return this.contract.tokenURI(tokenId);
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
