import { ethers } from 'ethers';

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