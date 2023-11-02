import axios from "axios";

const base = "https://rest.cosmos.directory/celestia/cosmos";


////////////////////////////////////////////////////////
export async function getSpendableBalance(address) {
  const getbalance = `${base}/bank/v1beta1/balances/${address}`;
  try {
    const response = await axios.get(getbalance);
    if (response.data) {
      return response.data;
    } else {
      console.error(`Error: ${response.status} `);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

////////////////////////////////////////////////////////
export async function getAccount(address) {
  const getdetails = `${base}/auth/v1beta1/accounts/${address}`;
  try {
    const response = await axios.get(getdetails);
    if (response.data) {
      return response.data;
    } else {
      console.error(`Error: ${response.status} `);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

////////////////////////////////////////////////////////
export async function getDelegatorsRewards(address) {
  const getdelegatorsrewards = `${base}/distribution/v1beta1/delegators/${address}/rewards`;
  try {
    const response = await axios.get(getdelegatorsrewards);
    if (response.data) {
      return response.data;
    } else {
      console.error(`Error: ${response.status} `);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

////////////////////////////////////////////////////////
export async function getUnbondingDelegations(address) {
  const getunbondingdelegations = `${base}/staking/v1beta1/delegators/${address}/unbonding_delegations`;

  try {
    const response = await axios.get(getunbondingdelegations);
    if (response.data) {
      return response.data;
    } else {
      console.error(`Error: ${response.status} `);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

////////////////////////////////////////////////////////
export async function getDelegationDetails(address) {
const l = `https://rest.cosmos.directory/celestia/cosmos/staking/v1beta1/delegations/${address}`
  try {
    const response = await axios.get(l);
    if (response.data) {
      return response.data;
    } else {
      console.error(`Error: ${response.status} `);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}
////////////////////////////////////////////////////////

export async function getCelestiaUsdPrice() {
  const url =
    "https://api.coingecko.com/api/v3/simple/price?ids=celestia&vs_currencies=usd";

  try {
    const response = await axios.get(url);
    const celestiaPrice = response.data["celestia"].usd;

    return celestiaPrice;
  } catch (error) {
    console.error("Error fetching prices:", error.message);
    return [];
  }
}
/////////////////////////////////////////////////////
export  function delegatorAddress(res) {
  const addr = []
if(res.delegation_responses && Array.isArray(res.delegation_responses)){
if(res.delegation_responses.length < 1){
      return  "Delegator Addresses not found"
    }
    else {
      for (let i = 0 ;  i < res.delegation_responses.length  ;  i ++){
if( res.delegation_responses[i].delegation.delegator_address != undefined){
       const address =  res.delegation_responses[i].delegation.delegator_address
        addr.push(address);
        }
      }
      return addr
    }   
    
    
  }
else  {
return "Something Wrong : ("
  }
}

/////////////////////////////////////////////////////
export  function delegationShares(res) {
  const shares = []
if(res.delegation_responses && Array.isArray(res.delegation_responses)){
if(res.delegation_responses.length < 1){
      return  "Shares not found"
    }
    else {
      for (let i = 0 ;  i < res.delegation_responses.length  ;  i ++){
if( res.delegation_responses[i].delegation.shares != undefined){
       const share =  res.delegation_responses[i].delegation.shares
        shares.push(share);
        }
      }
      return shares
    }   
    
    
  }
else  {
return "Something Wrong : ("
  }
}
/////////////////////////////////////////////////////
export  function delegationRewardsValidator(res) {
  const validator = []
if(res.rewards && Array.isArray(res.rewards)){
if(res.rewards.length < 1){
      return  "Validators not found"
    }
    else {
      for (let i = 0 ;  i < res.rewards.length  ;  i ++){
if( res.rewards[i].validator_address != undefined){
       const val =  res.rewards[i].validator_address
        validator.push(val);
        }
      }
      return validator
    }   
    
    
  }
else  {
return "Something Wrong :("
  }
}

/////////////////////////////////////////////////////
export  function delegationRewardsAmounts(res) {
  const  reward = []
if(res.rewards && Array.isArray(res.rewards)){
if(res.rewards.length < 1){
      return  "No rewards found"
    }
    else {
      for (let i = 0 ;  i < res.rewards.length  ;  i ++){
if( res.rewards[i].reward != undefined){
       const val =  res.rewards[i].reward
        reward.push(val);
        }
      }
      return reward
    }   
    
    
  }
else  {
return "Something Wrong :("
  }
}
