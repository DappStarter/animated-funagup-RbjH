require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remain solid hover arctic tail theory'; 
let testAccounts = [
"0xb8e436da97e3b5c3a8a0426cd1409242b2bc1338e487c15cf6bcf857e9f03ea1",
"0x95ef51ea5b211c2696ed1cb41f5b13f33aeee89712224fb32e3663c081bda0c0",
"0x17334bda82dde4d9ecc7df4b58cd2aa1214c9f9cff4baea9f10bc94b559932f7",
"0x5e05b384002791dd8052f346bbc18ea28f2f92b543a4aa6a0e83de05ecdc2ad8",
"0x6a925ca1b347daaa5a6ed2307d361fa71a7742593f5f22e95e61b0264c9331fc",
"0x7d004553470c571b4d7176d6b33eff5ba60c471bc3ce3d575e6686222b229b4e",
"0x487324c200d1a24ac8f09e279d212eccc3d3a17552615e1c78592c46baf531c4",
"0x0079606ebeb627eb5e883413706b0f9f37350499ba92041783335d7449a685c2",
"0x18fc95cedabfb96f71582d512804800f2d02bea280e9c174513d27829ec85b57",
"0xaad19a8e1ad352bd81710ef0d3d2fc33f0208df2f6e14362593f5a1922ef9cae"
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


