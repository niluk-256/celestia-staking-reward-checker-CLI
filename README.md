
#### A quick tool to check delegation rewards && account details via terminal 

```bash

npm i 

```

```js
In main.js  replace the address that you want to search ,

getDelegatorsRewards, getCelestiaUsdPrice } from "./celestia.js";


const address = "ADDRESS THAT YOU WANNA FINDOUT!";

In .bashrc / .zshrc add ,
alias tia='"/home/{ur username }/celestia_js/quickcheck.sh"'

```

```js

now just type  tia as a command in the terminal  and press enter thats it 😉

Example random address onchain,

tia
=======================Account Details[+]==========================================
Account address : celestia1qe8uuf5x69c526h4nzxwv4ltftr73v7q3l4fzp
Account @type :  /cosmos.auth.v1beta1.BaseAccount
Account publickey : AuWYtBbktzO6xMxXxpCAvbtCgwTfMu6OnmHZzXO+OBiV
Account number :  134776

===========================Equity[+]====================================
Spendable balance with decimals TIA :  2599946872
Spendable Value TIA in USD : $ 6369.8698364
delegatorAddress : [ 'celestia1qe8uuf5x69c526h4nzxwv4ltftr73v7q3l4fzp' ]
delegationShares : [ '60000000000.000000000000000000' ]
Validator address : [ 'celestiavaloper1qe8uuf5x69c526h4nzxwv4ltftr73v7q5qhs58' ]
delegationSharesInUSD : $ 147000
Rewards :  { denom: 'utia', amount: '179283182.654626680000000000' }
Staking rewards : 179.28318265462667 TIA
Staking reward in USD : $ 439.24379750383537
=====================================================================
```
