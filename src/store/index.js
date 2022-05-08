import { createStore } from 'vuex'
import walletModule from './modules/wallet.module'
import mintModule from './modules/mint.module'

export default createStore({
  state: {
    walletState: walletModule.state,
    mintState: mintModule.state,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    walletModule,
    mintModule,
  },
  getters:{
    getWalletState: function(state){
      return state.walletState.wallet
    },
    getMintState: function(state){
      return state.mintState.minter
    }
  }
})
