```bash

npm i 

```

```js
In main.js  replace the address that you want to search ,

getDelegatorsRewards, getCelestiaUsdPrice } from "./celestia.js";


const address = "ADDRESS THAT YOU WANNA FINDOUT!";


```


```bash

node main.js 

Example output :

Account address : celestia1hm2d8e6nd5ngtlte3hlded03vgj3rer9sne5de
Account @type :  /cosmos.auth.v1beta1.BaseAccount
Account publickey : AlhVLe8NzaLROd4Pz93hJnU17OVLmOWcN3lvKHw/7tj2
Account number :  93847
Spendable balance with decimals TIA :  7916000
Spendable Value TIA in USD : $ 21.689840000000004
delegatorAddress : [ 'celestia1hm2d8e6nd5ngtlte3hlded03vgj3rer9sne5de' ]
delegationShares : [ '56000000000.000000000000000000' ]
Validator address : [ 'celestiavaloper1hm2d8e6nd5ngtlte3hlded03vgj3rer94vmdml' ]
delegationSharesInUSD : $ 153440
Rewards :  { denom: 'utia', amount: '96330537.512798736000000000' }
Rewards : 96330537.512798736000000000
Reward in USD : $ 263.94567278506855


```
