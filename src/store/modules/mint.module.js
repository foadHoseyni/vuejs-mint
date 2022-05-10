import {Mint} from '../../services/mintService';
export default{
    namespace: true,
    state:{
        minter:{
            totalMint: 0,
            uriArray: []
        }
    },
    mutations:{
        TOTAL_MINT : function(state, payload){
            state.minter.totalMint = payload.counter;
        },
        URI_ARRAY: function(state, payload) {
            state.minter.uriArray = payload
        },
        MINT_STATUS: function(state, payload){
            state.minter.isMinted = payload.isMinted;
        }
    },
    actions:{
        getTotalMinted: async function({commit}){
            const count = await Mint.getTotalMint()
            const counter = parseInt(count);
            commit('TOTAL_MINT', {counter:counter});
        },
        getMintURI: async function({commit}){
            const arr = await Mint.mintURI()
            commit('URI_ARRAY', arr)
        }, 
        getMintStatus: async function({commit}, payload){
            const result = await Mint.mintStatus(payload.metadataURI)
            commit("MINT_STATUS", {isMinted: result});
        }
    }
}
