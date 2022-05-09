<template>
  <div class="container" id="walletInfo">
      <div class="grid">
          <div class="row d-flex justify-content-center">
              <div class="col-md-6 m-3">
                  <div class="card shadow-lg">
                      <div class="card-header">
                          <p class="h2 fw-bold">Wallet Info</p>
                      </div>
                      <div class="card-body d-flex flex-column">
                          <img src="../assets/media/img/metamask.png" class="img-fluid" alt="">
                          <p class="h5"><span class="text-warning V-font">Balance: </span>{{walletState.count}} </p>
                          <p class="h5"><span class="text-warning V-font">Address: </span>{{walletState.address}}</p>
                          <button class="btn btn-warning V-font" @click="this.getBalance">Connect</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Wallet',
    created(){
        if (this.walletState.metaMask){    
            this.$store.dispatch("getTotalMinted")
            this.$store.dispatch("getMintURI")
        }
    },
    methods:{
        getBalance: function(){
            this.$store.dispatch("getWalletInfo");
        },
    },
    computed: mapGetters({
        walletState: "getWalletState"
    })
}
</script>

<style>

</style>