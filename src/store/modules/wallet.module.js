import { Wallet } from "../../services/WalletService"
export default{
    namespace: true,
    state:{
        wallet:{
            count: 0,
            address: ""
        }
    },
    mutations:{
        WALLET_INFO: function(state, payload){
            state.wallet.address = payload.address;
            state.wallet.count = payload.count;
        }
    },
    actions:{
        getWalletInfo: async function({commit}){
            const address = await Wallet.getAccount();
            const count = await Wallet.getBalance(address[0]);
            commit("WALLET_INFO", {address: address[0], count: count})
        }
    }
}