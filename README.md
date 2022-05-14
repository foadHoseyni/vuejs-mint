# Basic Minting Website using vuejs 3

This project basically is a minting website, that allows everyone who have meta mask wallet to mint images, the images uploaded to pniata. the smart contract to mint NFT is written in solidity using [openzeppelin wizard](https://wizard.openzeppelin.com/), and tested using hardhat. the test files written in javascript.
Demo of this project [is here](https://vuejs-minter.netlify.app/).
Clone this Github repository using flowing command.
```shell
git clone https://github.com/foadHoseyni/vuejs-mint.git
```
Install node module packages using these commands.
```shell
cd vuejs-mint
npm install
```
For running website locally use the flowing command.
Befor runing this project, please install meta mask [ using this link.](https://metamask.io/download.html)

```shell
npm run serve
```
For build use
```shell
npm run build
```
Vue3 is used in this project, vuex is responsible for state management and for UI bootstrap is used. ethers used to interact with metamask wallet. you can use [Infura](https://infura.io/) or [Alechemy](https://www.alchemy.com/) as RPC to connect to the ethereum nets. this project tested using localhost of hardhat and rinkeby test net of ethereum.

Create .env file in the root of project and put URL of your RPC, and private address of your metamask account in it and run the project.

```shell
url = 'your RPC api'
key = 'your account private key from metamask'
```

For runing tests use the bellow command in the root directory of project:

```shell

npx hardhat test

```