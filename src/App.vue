<template>
  <Navbar/>
  <Carousel/>
  <Tokens/>
  <Wallet/>
  <Mint/>
  <Contact/>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Carousel from "./components/Carousel.vue";
import Tokens from "./components/Tokens.vue";
import Contact from "./components/Contact.vue";
import Wallet from "./components/Wallet.vue";
import Mint from "./components/Mint.vue";


export default {
    components: { Navbar, Carousel, Tokens, Contact, Wallet, Mint}
}
</script>
  

<style>
  @import "./styles.css";
</style>
