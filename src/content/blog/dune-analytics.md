---
layout: /src/layouts/LayoutBlogPost.astro
title: "What is Dune Analytics?"
description: "this is a post example"
pubDate: 2024-05-01
---


# Dune

<https://defillama.com/top-protocols>
<https://defillama.com/yields?project=lido>
<https://dune.com/fossengineer/uniswap>

Dune Analytics is a web-based platform that provides users with tools to analyze, visualize, and share Ethereum blockchain data through SQL queries. It simplifies the process of extracting insights from on-chain data, helping users make informed decisions based on their research and analysis.

* <dune.com>
* <dune.xyz>
* <https://github.com/duneanalytics/docs>

https://dune.com/docs/#why-dune

<https://dune.com/fossengineer/uniswap>
<https://fossengineer.com/sql-data-analytics/>

<!-- 
sql.md -->
People use Dune Analytics for various reasons:

* Easy access to on-chain data: Dune Analytics allows users to explore and analyze Ethereum blockchain data without the need to run a full node or set up their own infrastructure.

* SQL-based analysis: Dune Analytics supports SQL, a widely used and familiar language for data analysis. This allows users to easily query the data, filter, sort, and aggregate information as needed.

* Pre-built queries and dashboards: The platform offers a vast collection of community-contributed queries and dashboards, covering different topics such as decentralized finance (DeFi), non-fungible tokens (NFTs), governance, and more. These resources save time and provide a starting point for users to conduct their analysis.

* Customizable visualizations: Users can create custom visualizations, including bar charts, pie charts, line charts, and tables, to better understand the data and share their insights with others.

* Collaboration and sharing: Dune Analytics enables users to share their queries, visualizations, and dashboards with others, promoting collaboration and transparency within the blockchain community.

* Regular data updates: The platform updates its Ethereum data regularly, ensuring users have access to the latest on-chain information for their analysis.

Overall, people use Dune Analytics to extract valuable insights from Ethereum on-chain data in a user-friendly, collaborative environment. This can help inform investment decisions, guide development efforts, and support academic research in the blockchain space.


Comparison with Dune Analytics:
Dune Analytics is a platform that focuses on providing data insights and analytics for blockchain networks. It allows users to create custom SQL queries and visualize data from various blockchain networks, including Ethereum, Polygon, and Binance Smart Chain.


## Examples

* <https://dune.com/hagaetc/dex-metrics>
* <https://dune.com/ilemi/Token-Overview-Metrics>

## Querying DUNE

https://dune.com/docs/data-tables/#the-four-kinds-of-tables

```sql
select * from ethereum.transactions
where "from" = '\x4E60bE84870FE6AE350B563A121042396Abe1eaF'
```

distribution - how well a token is distributed? average holdings...
momentum - user entering vs exiting the community
liquidity sources and inflation values - where the tokens come from? and where they go (exchanges?)

```sql
select * from uniswap.trades
limit 10
```


select token_pair, amount_usd from uniswap.trades
limit 10



```sql
SELECT
  token_pair,
  SUM(amount_usd) AS amount_usd
FROM
  uniswap.trades
WHERE
  block_date >= NOW() - interval '1' day
GROUP BY
  token_pair
ORDER BY
  amount_usd DESC
LIMIT 10;

```
386536800
3364859818

```sql
SELECT
  block_date,
  token_pair,
  SUM(amount_usd) AS amount_usd
FROM
  uniswap.trades
WHERE
  block_date >= NOW() - interval '30' day
GROUP BY
  block_date,
  token_pair
ORDER BY
  block_date ASC,
  amount_usd DESC;
```

```sql
WITH daily_ranked AS (
  SELECT
    block_date,
    token_pair,
    SUM(amount_usd) AS amount_usd,
    ROW_NUMBER() OVER (PARTITION BY block_date ORDER BY SUM(amount_usd) DESC) AS rank
  FROM
    uniswap.trades
  WHERE
    block_date >= NOW() - interval '30' day
  GROUP BY
    block_date,
    token_pair
)
SELECT
  block_date,
  token_pair,
  amount_usd
FROM
  daily_ranked
WHERE
  rank <= 10
ORDER BY
  block_date ASC,
  amount_usd DESC;
```


embed? 
https://dune.com/embeds/2417632/3968625


```sql
SELECT
  blockchain,
  SUM(amount_usd) AS amount_usd
FROM
  uniswap.trades
WHERE
  block_date >= NOW() - interval '30' day
GROUP BY
  blockchain
ORDER BY
  amount_usd DESC;
```

```sql
  SELECT
  version,
  SUM(amount_usd) AS amount_usd
FROM
  uniswap.trades
WHERE
  block_date >= NOW() - interval '30' day
GROUP BY
  version
ORDER BY
  amount_usd DESC;

```sql
  SELECT
  block_date,
  version,
  SUM(amount_usd) AS amount_usd
FROM
  uniswap.trades
WHERE
  block_date >= NOW() - interval '180' day
GROUP BY
  block_date,
  version
ORDER BY
  block_date ASC,
  amount_usd DESC;
```


```sql
SELECT
  project,
  DATE_TRUNC('month', block_time),
  SUM(CAST(amount_usd AS DOUBLE)) AS usd_volume
FROM
  dex."trades" AS t
WHERE
 block_time > CAST('2023-01-01' AS TIMESTAMP)
GROUP BY
  1,
  2
```

```sql
SELECT
  project,
  block_date,
  SUM(CAST(amount_usd AS DOUBLE)) AS usd_volume
FROM
  dex."trades" AS t
WHERE
 block_date >= NOW() - interval '30' day
GROUP BY
  1,
  2

WITH daily_volume AS (
  SELECT
    project,
    block_date,
    SUM(CAST(amount_usd AS DOUBLE)) AS usd_volume
  FROM
    dex."trades" AS t
  WHERE
    block_date >= NOW() - interval '120' day
  GROUP BY
    1,
    2
),
top_projects AS (
  SELECT
    project,
    ROW_NUMBER() OVER (ORDER BY SUM(usd_volume) DESC) AS rank
  FROM
    daily_volume
  GROUP BY
    project
  LIMIT 3
),
aggregated_volume AS (
  SELECT
    dv.block_date,
    CASE
      WHEN tp.rank IS NOT NULL THEN dv.project
      ELSE 'others'
    END AS project,
    SUM(dv.usd_volume) AS usd_volume
  FROM
    daily_volume dv
    LEFT JOIN top_projects tp ON dv.project = tp.project
  GROUP BY
    1,
    2
)
SELECT
  block_date,
  project,
  SUM(usd_volume) AS usd_volume
FROM
  aggregated_volume
GROUP BY
  1,
  2
ORDER BY
  block_date ASC,
  project ASC;
```


```sql
  SELECT
  token_bought_symbol,
  SUM(amount_usd) AS amount_usd
FROM
  uniswap.trades
WHERE
  block_date >= NOW() - interval '30' day
GROUP BY
  token_bought_symbol
ORDER BY
  amount_usd DESC;
```


```sql
    SELECT
  token_bought_address,
  SUM(amount_usd) AS amount_usd
FROM
  uniswap.trades
WHERE
  block_date >= NOW() - interval '30' day
GROUP BY
  token_bought_address
ORDER BY
  amount_usd DESC;
```


```sql
SELECT
  token_bought_address,
  SUM(amount_usd) AS amount_usd_30d,
  SUM(CASE WHEN block_date >= NOW() - interval '7' day THEN amount_usd ELSE 0 END) AS amount_usd_7d
FROM
  uniswap.trades
WHERE
  block_date >= NOW() - interval '30' day
GROUP BY
  token_bought_address
ORDER BY
  amount_usd_30d DESC
LIMIT 10;
```


```sql
SELECT
  token_sold_address,
  SUM(amount_usd) AS amount_usd_30d,
  SUM(CASE WHEN block_date >= NOW() - interval '7' day THEN amount_usd ELSE 0 END) AS amount_usd_7d
FROM
  uniswap.trades
WHERE
  block_date >= NOW() - interval '30' day
GROUP BY
  token_sold_address
ORDER BY
  amount_usd_30d DESC
LIMIT 10;
```



  0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2
	
10351981126.134596
2109903176.0830781


```sql
    SELECT
  token_bought_symbol,
  SUM(amount_usd) AS amount_usd
FROM
  uniswap.trades
WHERE
  block_date >= NOW() - interval '7' day
GROUP BY
  token_bought_symbol
ORDER BY
  amount_usd DESC;
  LIMIT 10;
```

  ## top 3 and others

```sql
  WITH weekly_volume AS (
  SELECT
    token_bought_symbol,
    SUM(amount_usd) AS amount_usd
  FROM
    uniswap.trades
  WHERE
    block_date >= NOW() - interval '7' day
  GROUP BY
    token_bought_symbol
),
top_tokens AS (
  SELECT
    token_bought_symbol,
    ROW_NUMBER() OVER (ORDER BY amount_usd DESC) AS rank
  FROM
    weekly_volume
  LIMIT 3
),
aggregated_volume AS (
  SELECT
    CASE
      WHEN tt.rank IS NOT NULL THEN wv.token_bought_symbol
      ELSE 'others'
    END AS token_bought_symbol,
    SUM(wv.amount_usd) AS amount_usd
  FROM
    weekly_volume wv
    LEFT JOIN top_tokens tt ON wv.token_bought_symbol = tt.token_bought_symbol
  GROUP BY
    1
)
SELECT
  token_bought_symbol,
  SUM(amount_usd) AS amount_usd
FROM
  aggregated_volume
GROUP BY
  token_bought_symbol
ORDER BY
  amount_usd DESC;
```


```sql
SELECT
  token_pair,
  SUM(amount_usd) AS amount_usd
FROM
  uniswap.trades
WHERE
  block_date >= NOW() - interval '7' day
  AND blockchain = 'ethereum'
GROUP BY
  token_pair
ORDER BY
  amount_usd DESC
LIMIT 10;
```

USDC-WETH


```sql
SELECT
  block_date,
  token_pair,
  SUM(amount_usd) AS amount_usd
FROM
  uniswap.trades
WHERE
  block_date >= NOW() - interval '180' day
  AND token_pair = 'USDC-WETH'
GROUP BY
  block_date,
  token_pair
ORDER BY
  block_date ASC,
  amount_usd DESC;
```

## adding daily chang ewith lag

```sql
  WITH daily_volume AS (
  SELECT
    block_date,
    token_pair,
    SUM(amount_usd) AS amount_usd
  FROM
    uniswap.trades
  WHERE
    block_date >= NOW() - interval '180' day
    AND blockchain = 'ethereum'
    AND token_pair = 'USDC-WETH'
  GROUP BY
    block_date,
    token_pair
)
SELECT
  block_date,
  token_pair,
  amount_usd,
  amount_usd - LAG(amount_usd) OVER (PARTITION BY token_pair ORDER BY block_date ASC) AS daily_change
FROM
  daily_volume
ORDER BY
  block_date ASC;
```

```sql
SELECT
  block_date,
  COUNT(DISTINCT token_bought_address) AS unique_addresses
FROM
  uniswap.trades
WHERE
  block_date >= NOW() - interval '120' day  
GROUP BY
  block_date
ORDER BY
  block_date ASC;
```

```sql
SELECT
  block_date,
  blockchain,
  COUNT(DISTINCT token_bought_address) AS unique_addresses
FROM
  uniswap.trades
WHERE
  block_date >= NOW() - interval '120' day  
GROUP BY
  block_date,
  blockchain
ORDER BY
  block_date ASC,
  blockchain;
```