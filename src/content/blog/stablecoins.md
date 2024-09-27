---
layout: /src/layouts/LayoutBlogPost.astro
title: "What about stablecoins?"
description: "stablecoins 101"
pubDate: 2024-09-24
---

Stablecoins are a type of cryptocurrency designed to have a stable value, unlike other cryptocurrencies like Bitcoin, which can have highly volatile prices. The value of a stablecoin is usually tied to (or "pegged" to) a stable asset, such as a government-issued currency like the US dollar or a commodity like gold.

### Key Points:
- **Stable value**: The main goal of a stablecoin is to maintain a steady price, usually around $1 USD.
- **Backed by real assets**: To achieve this stability, most stablecoins are backed by reserves, meaning for every stablecoin issued, there is an equivalent amount of the pegged asset (like dollars) held in reserve.

### Examples:
1. **Tether (USDT)**: One of the most popular stablecoins, it is pegged to the US dollar, so 1 USDT is typically equal to $1.
2. **USD Coin (USDC)**: Another stablecoin that is backed by real US dollars in reserve, keeping its value close to $1.
3. **Dai (DAI)**: This stablecoin is a bit different because it's **decentralized and backed by other cryptocurrencies**, but it’s still designed to maintain a stable value close to $1.
   * https://github.com/makerdao/dss
   * https://etherscan.io/address/0x6B175474E89094C44Da98b954EedeAC495271d0F

In summary, stablecoins provide a way to enjoy the benefits of cryptocurrency (like fast transactions and global use) without the price swings that come with other coins.

---

## Protocols

### Lending

* AAVE a Peer to Contract Lending DeFi Protocol

* https://curve.fi/#/ethereum/pools/aave/deposit
* https://app.aave.com/reserve-overview/?underlyingAsset=0x6b175474e89094c44da98b954eedeac495271d0f&marketName=proto_mainnet_v3
  * https://aavescan.com/polygon-v3/0x8f3cf7ad23cd3cadbd9735aff958023239c6a0630xa97684ead0e402dc232d5a977953df7ecbab3cdb
 
Lending Assets: You supply assets (like ETH, USDC, DAI, etc.) to Aave’s liquidity pools. These assets are then made available for others to borrow.

Interest Accrual: Just like Compound, when you lend assets, you earn interest. This interest is algorithmically determined based on the supply and demand for each asset in the pool. The interest rate can be variable (changes based on market conditions) or fixed (for more predictable returns).

aTokens: When you supply assets to Aave, you receive aTokens (like aDAI for DAI or aETH for ETH). These aTokens represent your deposited amount and the interest you accrue over time.

The value of aTokens doesn’t change, but your balance of aTokens increases automatically as interest is earned. For example, if you deposit DAI, you’ll get aDAI in return, and as time passes, your aDAI balance grows.
Withdrawing: You can withdraw your supplied assets at any time. When you redeem your aTokens, you get back your original assets plus any interest that was accrued during the lending period, all in the same currency you initially lent.

* Compound: A lending and borrowing platform. Users can supply crypto to earn interest or borrow assets by providing collateral. It’s focused on decentralized lending markets.
  * https://app.compound.finance/markets
 
Lending: When you supply (lend) a cryptocurrency like ETH, USDC, or DAI to Compound, it gets locked into the protocol.

Earning Interest: Over time, you earn interest based on the demand for that asset in the lending pool. The more people borrowing that asset, the higher the interest rate you earn as a lender.

Redeeming Your Tokens: When you're ready to withdraw, you get back your original cryptocurrency (like USDC if that's what you supplied), plus the accrued interest. The interest is earned in the same cryptocurrency you lent, so if you lent DAI, you'd get back DAI + interest in DAI.

cTokens: When you lend assets, Compound gives you cTokens (like cUSDC for USDC, cETH for ETH). These represent your balance in the pool. The value of these cTokens increases over time as interest accumulates, and when you redeem them, you get back more of the original currency than you started with.

### DEX

* Uniswap: A decentralized exchange (DEX). It allows users to swap one cryptocurrency for another directly from their wallets without an intermediary. Liquidity is provided by users who deposit tokens into pools, and the exchange is automated using algorithms (AMM model).
  * https://app.uniswap.org/
