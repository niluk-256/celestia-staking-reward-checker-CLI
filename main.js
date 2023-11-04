import { getSpendableBalance,getAccount,getDelegationDetails,delegatorAddress,delegationRewardsValidator , delegationRewardsAmounts , delegationShares , getDelegatorsRewards, getCelestiaUsdPrice } from "./celestia.js";
import  chalk from "chalk";

const address = "celestia1qe8uuf5x69c526h4nzxwv4ltftr73v7q3l4fzp";
if (!address) {
  console.log("Provide an celestia address");
  process.exit(1);
}

const decimal = 10 ** 6



async function main() {
  const TIAUsdPrice = await getCelestiaUsdPrice();
  


const getAccountDetails = await  getAccount(address) 
  const balance = await getSpendableBalance(address);
  console.log("\n");
  console.log(chalk.yellow("=======================Account Details[+]=========================================="))
  console.log(chalk.yellow("Account address :" , getAccountDetails.account.address));
  console.log(chalk.yellow("Account @type : ", getAccountDetails.account["@type"]));
  console.log(chalk.yellow("Account publickey :" , getAccountDetails.account.pub_key.key));
  console.log(chalk.yellow("Account number : " , getAccountDetails.account.account_number));
  console.log("\n");
  console.log("===========================Equity[+]====================================")

  console.log(chalk.blue("Spendable balance with decimals TIA : "), balance.balances[0].amount);
  console.log(
    chalk.blue("Spendable Value TIA in USD : $ %s "),
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
console.log(chalk.red("delegationSharesInUSD : $ %s"),Number((deleShares[0] /decimal) *TIAUsdPrice ))
    }
  }
const rewards = delegationRewardsAmounts(delegatorsRewardsDetails)
if(rewards[0][0]){
      console.log("Rewards : " , rewards[0][0])
 if(rewards[0][0].amount) {
  console.log(chalk.blue("Staking rewards : %s TIA") , rewards[0][0].amount /decimal) 
 console.log(chalk.green("Staking reward in USD : $ %s ") , (Number(rewards[0][0].amount)/decimal) * TIAUsdPrice) 
  
  console.log("=====================================================================")
    }
}}
main();
