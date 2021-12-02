require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strong regret muscle column hover clinic fortune gift'; 
let testAccounts = [
"0xb1d24a575a9e2e90db24c527f9ab2d1784a1ac5df51401cbfe050d804df040b7",
"0xfa4dbf3503316288a2c964006307211481c3fde07cb1c0ffc48bde61754ddf4d",
"0x24870f5a2d2a291a5c69fd5a1b813474829509420b97937855527833dc1e94d7",
"0x87d10d209363dc47ada8b1f178fc9982bbf11d10c962193c2b898782d5b86207",
"0x461b2fcb92e99e1b86dbb2823d066bceacbd1fa92e954c2a778ea338e1eaaaf0",
"0x056133deca5ab1264ca6f6c79f8fd1a2fc3850a84148092af4d7a3db29ed6c31",
"0x6aeac43fdb5f197e9a1eaf6bf418bfc5205550c76d44f9998e996eed8c8d9751",
"0x451f035862782784f2a4357a475039ce0ddfcd4c174ebbca95ea9ad9b3aab1f8",
"0x2b83f1bd649be2ce3db3af7982b35766416fb06e86e0c6bdfbc77d22fae0c393",
"0x32828289916d6855d9264fff08c2e0408479152c5e148f2e747f17d2d0855df1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


