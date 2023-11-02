import { getSpendableBalance,getAccount,getDelegationDetails,delegatorAddress,delegationRewardsValidator , delegationRewardsAmounts , delegationShares , getDelegatorsRewards, getCelestiaUsdPrice } from "./celestia.js";


const address = "celestia1hm2d8e6nd5ngtlte3hlded03vgj3rer9sne5de";
const decimal = 10 ** 6
async function main() {
  const TIAUsdPrice = await getCelestiaUsdPrice();
  


const getAccountDetails = await  getAccount(address) 
  const balance = await getSpendableBalance(address);
  console.log("Account address :" , getAccountDetails.account.address);
  console.log("Account @type : ", getAccountDetails.account["@type"]);
  console.log("Account publickey :" , getAccountDetails.account.pub_key.key);
  console.log("Account number : " , getAccountDetails.account.account_number);
  console.log("Spendable balance with decimals TIA : ", balance.balances[0].amount);
  console.log(
    "Spendable Value TIA in USD : $ %s ",
    (Number(balance.balances[0].amount) /decimal ) * TIAUsdPrice
  );
  
  const delegatorsRewardsDetails = await getDelegatorsRewards(address);
  const delegationDetails = await getDelegationDetails(address);
  const deleaddress = delegatorAddress(delegationDetails)
  const deleShares = delegationShares(delegationDetails)
   const validtor  = delegationRewardsValidator(delegatorsRewardsDetails)
  console.log("delegatorAddress :",deleaddress)
  console.log("delegationShares :",deleShares)
   console.log("Validator address :" , validtor)

  if(Array.isArray(deleShares)){
          if(deleShares.length > 0 ){
console.log("delegationSharesInUSD : $ %s",Number((deleShares[0] /decimal) *TIAUsdPrice ))
    }
  }
const rewards = delegationRewardsAmounts(delegatorsRewardsDetails)
if(rewards[0][0]){
      console.log("Rewards : " , rewards[0][0])
 if(rewards[0][0].amount) {
  console.log("Rewards :" , rewards[0][0].amount) 
 console.log("Reward in USD : $ %s " , (Number(rewards[0][0].amount)/decimal) * TIAUsdPrice) 
  }
}}
main();
