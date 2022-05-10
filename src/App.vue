<template>
  <Navbar/>
  <Carousel/>
  <Tokens/>
  <div class="div" v-if="this.walletState.metaMask">
    <Wallet/>
    <Mint />
  </div>
  <MetaMask v-if="!this.walletState.metaMask"/>
  <Contact/>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Carousel from "./components/Carousel.vue";
import Tokens from "./components/Tokens.vue";
import Contact from "./components/Contact.vue";
import Wallet from "./components/Wallet.vue";
import Mint from "./components/Mint.vue";
import { mapGetters } from 'vuex';
import MetaMask from "./components/MetaMask.vue";


export default {
  components: { Navbar, Carousel, Tokens, Contact, Wallet, Mint, MetaMask },
  computed:mapGetters({
    walletState:"getWalletState"
  })
}
</script>
  

<style>
  @import "./styles.css";
</style>
