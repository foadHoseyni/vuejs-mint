<template>
    <div class="card m-2">
        <img v-if="!isMinted" src="../assets/img/placeholder.png" alt="" class="card-img-top">
        <img v-if="isMinted" :src=imageUri alt="" class="card-img-top">
        <button v-if="!isMinted" @click="this.mint(metaDataUri)" class="btn btn-primary V-font">Mint</button>
        <button v-if="isMinted" @click="showImageURI" class="btn btn-secondary V-font">Taken! Show URI</button>
        
    </div>
</template>

<script>
import {Mint} from '../services/MintService'
import { mapGetters } from 'vuex';
export default {
    name: 'Minter',
    props: ['tokenId', 'imageUri', 'metaDataUri', 'isMinted'],
    methods:{
        mint: async function(metadataURI){
            const result = await Mint.mintToken(metadataURI)
            await result.wait();
            this.$store.dispatch('getTotalMinted');
            this.$store.dispatch('getMintStatus', {metadataURI: metadataURI})
            
        },
        showImageURI: async function(){
            const uri = await Mint.showURI(this.tokenId);
            alert(uri);
        }
    },
    computed:mapGetters({
        mintState: "getMintState"
    }),
}
</script>

<style>

</style>