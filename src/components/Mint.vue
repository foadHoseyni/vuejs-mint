<template>
  <div class="container" id="#minter">
      <div class="row bg-dark m-2 shadow-lg">
          <div class="col-md-4" v-for="obj in this.mintState.uriArray" :key="obj.tokenId">
            <Minter 
                :token-id=obj.tokenId
                :image-uri=obj.imageURI
                :meta-data-uri=obj.metaDataURI
                :is-minted=obj.isMinted
            />
                
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Minter from './Minter.vue';

export default {
    name: 'Mint',
    computed:mapGetters({
        mintState: "getMintState",
    }),
    components:{Minter},
}

</script>

<style>

</style>