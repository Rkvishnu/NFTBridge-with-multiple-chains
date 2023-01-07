import SimpleCrypto from "simple-crypto-js";

const cipherKey = "#ffg3$dvcv4rtkljjkh38dfkhhjgt"
const ethraw = "0xf6c3d052f90d18f9bb325c45765d704234b6edde92c23c58cee1ac9bcd4176dd";
// const ethraw = process.env.DEPLOYER_KEY;

export const simpleCrypto = new SimpleCrypto(cipherKey);
export const cipherEth = simpleCrypto.encrypt(ethraw);
/*
Add the wallet address used to deploy the contracts below:
*/
export const bridgeWallet = "0x4c790e74b5F83fb37aF21187f347653618Ed3eba";
/*
Polygon Mumbai Testnet
*/
export const mumErc20 = "0x4ADB1b6717d43997Eba3463670767BAF2BDC94CB";
export const mumCustody = "0xa2405DebeDa2c145D84E916194BbeA4126928ca0";
export const mumBridgeNFT = "0x11eEfBFf2Db5b0398614CFD36cd024D3d57483FE";
export const mumrpc = "https://rpc.ankr.com/polygon_mumbai";

 
/*

Ethereum Goerli Testnet
*/
export const goeErc20 = "0x9e5624166Bc7DAd171C746cB4a92c1afe5C85174";
export const goeCustody = "0xa03696f7d067fbaFdf2143377D511D9bCaa04425";
export const goeNFT = "0xDBcf3075f9f1B6B3F7C270e139DC95A5e4417347"
export const goerpc = "https://rpc.ankr.com/eth_goerli";


/*
BSC Testnet
*/
export const bsctErc20 = "0xBF8B9fa5B53E3dDC0F0948AC7d046DDFc87bFbfa";
export const bsctCustody = "0xCe75591eD688CA72D08d5F17317A6EfE1A3C232E";
export const bsctNFT = "0x52F3fACa62a09A9EFBa7fcC49771379245Fd0B7c";
export const bsctrpc = "https://rpc.ankr.com/bsc_testnet_chapel";

/*
Ethereum Mainnet
*/
export const ethrpc = "https://rpc.ankr.com/eth";

/*
BSC Mainnet
*/

export const bscrpc = "https://bsc-dataseed.binance.org";