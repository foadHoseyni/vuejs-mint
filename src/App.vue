<template>
  <Navbar/>
  <Carousel/>
  <Tokens/>
  <Wallet v-if="this.walletState.metaMask"/>
  <Mint v-if="this.walletState.metaMask"/>
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


export default {
  components: { Navbar, Carousel, Tokens, Contact, Wallet, Mint },
  computed:mapGetters({
    walletState:"getWalletState"
  })
}
</script>
  

<style>
  @import "./styles.css";
</style>
