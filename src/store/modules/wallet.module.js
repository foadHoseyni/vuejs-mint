import { ethers } from 'ethers';
export default{
    namespace: true,
    state:{
        wallet:{
            count: 0,
            address: "",
            metaMask: false
        }
    },
    mutations:{
        META_MASK: function(state){
            state.wallet.metaMask = Wallet.metamask !=='undefined';
        },
        WALLET_INFO: function(state, payload){
            state.wallet.address = payload.address;
            state.wallet.count = payload.count;
        }
    },
    actions:{
        getMetaMask: function({commit}){
            commit("META_MASK")
        },
        getWalletInfo: async function({commit}){
            const address = await Wallet.getAccount();
            const count = await Wallet.getBalance(address[0]);
            commit("WALLET_INFO", {address: address[0], count: count})
        }
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
