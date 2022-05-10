import { Wallet } from '../../services/mintService';
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
            state.wallet.metaMask = !!window.ethereum;
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
