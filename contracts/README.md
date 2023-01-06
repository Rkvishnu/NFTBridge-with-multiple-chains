  
<h4>BridgeCustodial-Smart-Contract</h4>

- The NFT Bridge Custodial Smart Contract will control NFT Release and Retain Functions. 

- It will store NFT's from the source blockchain and also facilitate releasing NFT's at the destination smart contract.

- You must associate this Custodial smart contract with a NFT Collection Smart Contract in the source Blockchain. 

- This contract must be associated with the NFT Bridge Token Smart Contract on the destination blockchains during deployment.

<h4>NFT-Bridge-Custodial-SmartContract-with-CustomERC20-PayTokens-v1.sol</h4>

- Same contract as previous but with added capabilities to charge bridge transaction fees with custom ERC-20 tokens. 

- This contract must also be associated with an NFT Collection and Custom ERC-20 Token SmartContracts at the Source Blockchain
and associated to an Bridge NFT Token and ERC20 Token Smartcontracts at the destination blockchains.

<h4>NFT-Bridge-Token-SmartContract.sol</h4>

- This is the Bridge NFT Token Smartcontract. This ERC721 NFT SmartContract will facilitate NFT minting at the destination
blockchains.

- It has been written to allow custom NFT ID minting.





