---
layout: /src/layouts/LayoutBlogPost.astro
title: "What is that `Crypto` stuff?"
description: "this is a post example"
pubDate: 2024-01-03
---


## BITAXE

OPEN SOFTWARE AND OPEN HARDWARE FOR BTC MINING

Decentralizing the BTC Mining

https://www.youtube.com/watch?v=2IU-KRRMiS8

ESP32s3 + ASIC -> SHA256 algorithm

BTC node (validador, no minero) with RPi -> https://www.youtube.com/watch?v=s6yfk92OkWc

https://bitnodes.io/

https://umbrel.com/
https://github.com/getumbrel/umbrel

`umbrel.local`

# Crypto

The cryptocurrency landscape is vast and full of unique concepts that may be unfamiliar to newcomers. In this blog post, we'll cover some of the essential terms and ideas you need to understand to navigate the world of cryptocurrency with confidence and prepare you to find interesting insights during your analysis.

It was already predicted: <https://www.coindesk.com/markets/2014/03/05/how-economist-milton-friedman-predicted-bitcoin/>

## Where to Learn more?

* <https://www.reddit.com/user/CryptoDaily-/>

* <https://github.com/RaidasGrisk/redditcoins-web>
    * <https://www.redditcoins.app/> - Tracks the coins mentioned on <https://www.reddit.com/r/CryptoCurrency/>

## General Crypto Concepts

### Hash

A hash is a unique, fixed-length string of characters generated from input data using a mathematical algorithm known as a hash function. In the context of cryptocurrencies, hashes are primarily used to secure and verify transactions and blocks.

They ensure that data cannot be tampered with, as even a minor change to the input data results in a completely different hash output.

### Transactions - TXN's

Transactions form the backbone of any cryptocurrency network. They represent the transfer of digital assets (like Bitcoin or Ethereum) between users.

* Each transaction consists of inputs (sender addresses) and outputs (receiver addresses), along with the amount being transferred.
* Once a transaction is initiated, it is broadcasted to the network, where miners or validators confirm and include it in a block.

### Block

A block is **a collection of confirmed transactions bundled together** in a single unit. Blocks are added sequentially to create a blockchain, which serves as a public ledger for all transactions. 

You will hear about **block explorers**. Block explorers are search engines that allow users to explore the details of transactions, addresses, and blocks on a particular blockchain. Some popular block explorers are:

* For BTC: <https://blockchain.com/>
* For ETH: <https://etherscan.io/>
* <https://polygonscan.com/>
* <https://blockscan.com>

### Blockchain

A blockchain is like a digital ledger that stores information about transactions. Imagine a notebook with a growing list of transactions that everyone can see and verify. It's secure because it's not controlled by one person or company.

A blockchain is a distributed digital ledger, consisting of blocks linked together in a chain.
* Each block contains multiple transactions, and once a block is added to the chain, it's difficult to change its information. 
    * This makes blockchain secure and trustworthy.
* Blockchain technology is the backbone of cryptocurrencies like Bitcoin and Ethereum.

<!-- A blockchain is a cryptographically secure, distributed ledger that employs consensus algorithms like Proof of Work or Proof of Stake to achieve network-wide agreement. It consists of blocks linked together in a chain, each containing a list of verified transactions.
* The security of a blockchain is derived from its decentralized nature, which ensures no single point of failure and protection against tampering. -->

#### Layer-1 (L1) chains

L1 chains, also known as base layer or main chains, are the foundational layer of a blockchain network, where transactions and smart contracts are processed and recorded on the underlying distributed ledger. 

Examples of L1 chains include Ethereum, Bitcoin, and Binance Smart Chain. L1 chains generally provide security and decentralization but often face challenges with scalability, resulting in limited transaction throughput and high fees.

#### Layer-2 (L2) chains

L2 chains are built on top of L1 chains to improve scalability, reduce fees, and enhance the performance of the underlying blockchain. They offload some of the transaction processing and computation from the L1 chain, enabling more efficient resource usage.

Some examples of L2 solutions include: **Polygon, Optimism, and zkSync**. These solutions leverage various technologies like rollups, sidechains, state channels, or Plasma to achieve their goals.

#### Blockchain Examples

* **Ethereum is the leading smart contract platform** and a Layer-1 blockchain, enabling developers to build decentralized applications (dApps) and issue tokens. It uses a Proof-of-Work (PoW) consensus mechanism, which will transition to Proof-of-Stake (PoS) with the upcoming Ethereum 2.0 upgrade. However, Ethereum currently suffers from high transaction fees and limited scalability, making it difficult for some DeFi applications to operate efficiently.
    * Popular DeFi apps on Ethereum: Aave, Uniswap, Compound, Maker, Yearn Finance, and Synthetix.

* Polygon (formerly Matic Network) is a **Layer-2 scaling solution built on top of Ethereum**. It aims to address Ethereum's scalability issues by providing a faster and more cost-effective platform for deploying and running dApps. Polygon uses a hybrid Proof-of-Stake (PoS) and Plasma framework to secure its network and facilitate low-latency transactions with lower fees than Ethereum.  
    * Popular DeFi apps on Polygon: Aave, QuickSwap, Curve, SushiSwap, and mStable.

<!-- * Arbitrum is a Layer 2 scaling solution for Ethereum, designed to improve the network's scalability and reduce gas fees. It uses a technology called Optimistic Rollups, which allows for off-chain transaction processing and computation. These rollups are periodically submitted to the Ethereum mainnet, allowing for greater throughput and lower costs while maintaining the security of the Ethereum network. -->

* **Avalanche is a Layer-1 blockchain** platform designed for high throughput, low latency, and energy-efficient consensus. It uses the Avalanche **consensus protocol**, which allows for thousands of transactions per second (TPS) while maintaining decentralization and security. Avalanche supports the Ethereum Virtual Machine (**EVM compatible**) and Solidity programming language, making it easy for developers to deploy existing Ethereum dApps or create new ones on the platform.  
    * Popular DeFi apps on Avalanche: Trader Joe, Pangolin, Benqi, and Snowball Finance.
    * Avalanche boasts faster transaction finality (under 3 seconds) and higher throughput (up to 4,500 TPS) compared to Ethereum's current state (15-45 TPS). This makes Avalanche a more attractive option for projects requiring high transaction throughput.
    *  Avalanche Consensus mechanism allows for greater scalability compared to Ethereum's current Proof-of-Work (PoW) system.

<!-- * Fantom is a high-performance, scalable, and secure smart contract platform designed to overcome the limitations of traditional blockchain systems. It employs a novel consensus mechanism called the Lachesis Protocol, which is based on a directed acyclic graph (DAG) structure. This allows for faster transaction processing and lower fees compared to conventional blockchains.
    * Fantom supports the Ethereum Virtual Machine (EVM), making it compatible with Ethereum-based smart contracts and dApps. -->

* **Solana is a high-performance Layer-1 blockchain** that leverages a unique consensus mechanism called Proof of History (PoH) and a PoS-based validation system. Solana offers fast transaction processing, low fees, and supports thousands of TPS, making it well-suited for DeFi applications.
    * Popular DeFi apps on Solana: Serum, Radium, Mango Markets, and Saber.
    * Phantom is not a blockchain network, but rather a popular wallet and browser extension designed for the Solana blockchain


### Smart Contracts

A smart contract, on the other hand, is a self-executing, programmable agreement stored on a blockchain. Smart contracts contain the rules, conditions, and logic for automatically enforcing the terms of an agreement between parties. Once deployed on a blockchain, smart contracts are decentralized, transparent, and tamper-proof, ensuring that the agreements they govern are executed faithfully.
<!-- 
Wallet Polygon: <https://polygonscan.com/address/0x3144C26a8F66a282dA0Fdb8a2567E09135738318>
Contract AAVE (V2): https://polygonscan.com/address/0xbeadf48d62acc944a06eeae0a9054a90e5a7dc97
The code: https://polygonscan.com/address/0xbeadf48d62acc944a06eeae0a9054a90e5a7dc97#code -->


## The Blockchain Trilema: The Trade-Off

The blockchain trilemma refers to the challenge of achieving a balance between three critical properties in any blockchain network: **decentralization, security, and scalability**.

It is often difficult to optimize all three properties simultaneously, as improving one may come at the expense of the others.

* Decentralization: A decentralized network ensures that control and decision-making are distributed among various participants, preventing a single point of failure and promoting censorship resistance. However, maintaining a high degree of decentralization can lead to lower transaction throughput and increased latency due to consensus mechanisms and network overhead.

* Security: A secure network ensures that transactions and smart contracts are executed faithfully, and the network is resistant to various attacks. Achieving strong security requires robust consensus mechanisms and a large number of participants, which can negatively impact scalability.

* Scalability: Scalability refers to a network's ability to handle a growing number of transactions and users efficiently. A highly scalable network can process more transactions with lower fees and faster confirmation times. However, increasing scalability often involves trade-offs with decentralization and security, as it may require more centralized or less secure consensus mechanisms.

The blockchain trilemma highlights the challenges in finding the optimal balance between these three properties, which is an ongoing area of research and development in the crypto and blockchain space. Layer-2 solutions like Polygon aim to address the trilemma by enhancing scalability and reducing costs without sacrificing the security and decentralization provided by the underlying L1 blockchain (Ethereum).

## Tokens

Tokens are digital assets created on existing blockchain platforms, such as Ethereum or Binance Smart Chain. They often represent various utilities or assets like voting rights, rewards, or digital goods.

The most common token standards are ERC-20 (for fungible tokens) and ERC-721 (for non-fungible tokens or NFTs).

ERC20 and ERC721 are Ethereum token standards that define a set of rules for creating and managing tokens on the Ethereum blockchain. These standards ensure that tokens are compatible with various wallets, exchanges, and smart contracts.

The main difference between ERC20 and ERC721 tokens lies in their fungibility:

* ERC20 tokens are fungible, meaning that individual tokens of the same type are indistinguishable and can be exchanged with one another without affecting their overall value.
* ERC721 tokens are non-fungible, meaning that each token is unique and cannot be directly replaced or exchanged with another token on a one-to-one basis.

These distinct characteristics make ERC20 tokens suitable for applications that require a standardized and interchangeable token (e.g., cryptocurrencies and utility tokens), while ERC721 tokens are ideal for representing unique digital assets with individual properties and value (e.g., digital art or collectibles).

### ERC-20 Tokens

ERC20 is a standard for **fungible tokens**, meaning that each token is identical and mutually interchangeable, just like currency notes or coins. An ERC20 token follows a predefined set of rules and functions that enable it to interact seamlessly with other ERC20 tokens and the broader Ethereum ecosystem.

Common use cases for ERC20 tokens include cryptocurrencies, utility tokens for decentralized applications (dApps), and governance tokens for decentralized autonomous organizations (DAOs).

### ERC-721 Tokens

ERC721 is a standard for **non-fungible tokens (NFTs)**, meaning that each token is unique and cannot be directly replaced with another token. This standard defines a set of rules and functions to create, manage, and transfer NFTs while ensuring their uniqueness and ownership. NFTs can represent digital art, collectibles, virtual real estate, in-game items, and more. ERC721 tokens have gained popularity due to their ability to prove the scarcity and authenticity of digital assets.

#### Unestopable Domains

Unstoppable Domains is a decentralized domain registry built on blockchain technology.

It allows users to register domain names that are censorship-resistant and not controlled by any central authority. Users can link their cryptocurrency addresses to these domains, enabling easy-to-remember addresses for sending and receiving digital assets.

When you get one ENS, you are actually having in your control one ERC-721 Token.

<!-- 
<https://fossengineer.com/guide-web3/> -->



### Tokenomics

Tokenomics refers to the design and rules around how digital tokens (like cryptocurrencies) work within an ecosystem. It covers things like how tokens are created, distributed, and used, and aims to create a balanced and sustainable system.

Tokenomics is the study of the economic structure and incentives that govern a cryptocurrency or blockchain-based project. It encompasses various aspects, such as token distribution, token supply, and token utility. An effective tokenomics design aims to align the interests of users, investors, and developers while ensuring the long-term viability and stability of the platform.

Tokenomics is a multidisciplinary field that examines the economic, technical, and social aspects of token-based ecosystems. It involves the strategic design of a token's monetary policy, governance structure, and incentive mechanisms.

A well-designed tokenomics model ensures network security, decentralization, and sustainable growth by balancing factors such as token issuance, inflation rates, token burning, staking rewards, and utility functions. The ultimate goal is to create a robust ecosystem where stakeholders' incentives are aligned, and the token maintains its value and utility over time.



## DeFi

DeFi is an umbrella term for financial services and applications built on decentralized blockchain platforms, primarily Ethereum.

* It aims to provide a more open, transparent, and accessible financial system by leveraging smart contracts and decentralized protocols.
* DeFi encompasses various applications such as lending, borrowing, decentralized exchanges (DEXs), yield farming, and more.
* Exploring Defi with DeFiLlama: <https://defillama.com/> - a platform that provides data and analytics related to decentralized finance (DeFi) projects.
    * It offers insights into various DeFi protocols: including total value locked (TVL), user activity, and token prices.

https://www.reddit.com/r/defi/comments/10lgr3d/stablecoin_yield_farming_the_ultimate_guide/

### DeX

<!-- A decentralized exchange (DEX) is a platform that lets people trade digital assets (like cryptocurrencies) without a central authority, like a bank or a company. It's like trading directly with other people in a secure and transparent way. -->

A decentralized exchange (DEX) is a trading platform that operates without a central authority. Users keep control of their assets, and trades are made directly between parties using smart contracts. This reduces the risk of hacks, fraud, or censorship. However, DEXs may have lower trading volumes and slower transaction speeds compared to centralized exchanges.

<!-- A decentralized exchange (DEX) relies on blockchain technology and smart contracts to facilitate peer-to-peer trading of digital assets, without the need for a trusted intermediary. DEXs employ various protocols like Automated Market Makers (AMMs) or Order Book-based systems. While they offer greater security and self-custody of assets, they may suffer from liquidity limitations, lower trading volumes, and latency issues. However, layer 2 solutions and advancements in blockchain technology are being developed to address these challenges. -->

#### AMM
<!-- 
An automated market maker (AMM) is a tool that helps people trade digital assets like cryptocurrencies by automatically setting prices and managing trades. It removes the need for a traditional order book, making it easier for people to trade anytime. -->

An automated market maker (AMM) is a type of decentralized exchange (DEX) that uses algorithms to set and adjust the prices of digital assets. Instead of relying on an order book with buy and sell orders, AMMs utilize liquidity pools filled with different assets. Users can trade assets by interacting with these pools, while liquidity providers earn fees for supplying the assets to the pool.

An automated market maker (AMM) is a novel approach to price discovery and liquidity provision in decentralized exchanges (DEX). It uses mathematical formulas to determine asset prices, typically employing constant function market makers such as the **Constant Product Market Maker** (CPMM) model.

* AMMs rely on **liquidity pools** containing two or more tokens to enable asset swaps. Users can trade against these pools, while liquidity providers (LPs) deposit assets into the pools to facilitate trading.
* LPs earn fees and sometimes additional rewards in the form of **governance tokens**. 
* The **impermanent loss** is a potential risk for LPs when the prices of pooled assets diverge significantly from their initial ratio.


### Liquidity Staking

Liquidity staking is when you deposit your tokens into a pool on a platform, helping users trade more easily. In return, you earn rewards.

* By staking your tokens in a liquidity pool, you provide assets that enable smoother trades on decentralized exchanges.
* You earn fees as rewards based on the pool's trading volume.
* It involves depositing tokens into a **smart contract-based liquidity pool**, which helps facilitate transactions in a decentralized exchange by reducing slippage. Providers receive a proportionate share of the trading fees generated in the pool as an incentive.

### CDP (Collateralized Lending)

With these protocols, you lock up some assets and receive a loan in return. If you don't repay the loan, your assets will be taken.
* You deposit digital assets as collateral into a smart contract to receive a loan. Your collateral can be liquidated if the loan isn't repaid or its value drops significantly.
* Collateralized lending involves locking up digital assets, often in stablecoins. These loans are overcollateralized to ensure that the lender's risk is minimized.

### Bridge

A bridge is a tool that connects different blockchains, letting you move assets between them.
b. Intermediate: A blockchain bridge allows users to transfer assets between different blockchain networks, expanding the use cases for cryptocurrencies and enabling cross-chain interactions.
c. Advanced: Blockchain bridges are protocols or platforms that facilitate interoperability between distinct blockchain ecosystems. They enable the trustless transfer of assets and data across different networks, often employing smart contracts or third-party validators to ensure the process's security and accuracy.

## The Crypto Analytics

It is possible to analyze on-chain data to study user behavior in blockchain-based systems. By examining transaction data, smart contract interactions, and token movements, you can gain insights into the activities and preferences of users within a particular ecosystem.

A general outline of how you can analyze on-chain data for user behavior:

* Define your objectives: Identify the specific user behaviors you are interested in studying, such as trading patterns, wallet usage, or token holding behavior. This will help you focus your analysis and determine which data points are relevant.

* Access blockchain data: To analyze on-chain data, you need access to the relevant blockchain's data. You can do this by running a full node, using an API from blockchain data providers like Infura, QuickNode, or Alchemy, or by accessing public block explorers.
    * Some popular blockchain analytics platforms, such as Nansen or **Dune Analytics**, offer comprehensive tools and datasets to analyze on-chain data.

* Extract relevant data points: Depending on your objectives, extract the necessary data points from the blockchain, such as transaction details (sender, receiver, timestamp, value, etc.), smart contract interactions, token transfers, and address balances.

* Clean and preprocess the data: As with any data analysis, you may need to clean and preprocess the data to ensure its accuracy and relevance. This might involve filtering out irrelevant transactions, consolidating multiple transactions from the same address, or normalizing data to account for fluctuations in token prices or network fees.

* Analyze the data: With the cleaned and preprocessed data, you can start analyzing user behavior. Use statistical methods, visualization tools, or machine learning algorithms to identify patterns, trends, or correlations in the data. Depending on your objectives, this might involve identifying active traders, detecting whale movements, understanding liquidity provision patterns, or segmenting users based on their token holding behavior.

* Interpret the results: Draw conclusions from your analysis and consider the implications of your findings for the blockchain ecosystem you are studying. Be cautious when interpreting the results, as on-chain data might not fully capture users' motives or intentions, and addresses don't necessarily correspond to individual users.

Remember that privacy-preserving technologies like mixers, tumblers, and zero-knowledge proofs can make it more difficult to analyze user behavior on some blockchains. In such cases, on-chain data analysis might not provide a complete picture of user activity.

---

## FAQ

### F/OSS APP for Personal Finances

https://github.com/firefly-iii/firefly-iii
https://firefly-iii.org/

https://github.com/financelurker/crypto-trades-firefly-iii


### F/OSS Crypto Wallets

* Metamask
    * portfolio.metamask.io

### DeFi

https://spark.fi/

### Managing Crypto Assets

### WHat it is alchemy?

### what it is rss3?