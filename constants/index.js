import STAKING_CONTRACT_ABI from "../stackingContractABI.json"
import ERC_20_ABI from "../tokenContractABI.json";
export const STAKING_CONTRACT_ADDRESSS = '0x07Eada377fc86D021236Db4C00635fB6d4458C77'
export const STAKING_CONTRACT_ARGS =
{
    addressOrName: STAKING_CONTRACT_ADDRESSS,
    contractInterface: STAKING_CONTRACT_ABI,
}



export const STAKING_TOKEN_ADDRESS = "0x95AB33d3F0D63B480eA52ba803FF3e8B910CFCF1"

export const STAKING_TOKEN_ARGS = {
    addressOrName: STAKING_TOKEN_ADDRESS,
    contractInterface: ERC_20_ABI,
}

export { STAKING_CONTRACT_ABI };

export const cards = [
    {
        tierId: 1,
        status: "", cardText: "Bronze Tier", stackPeriod: "3 Months", LockUpPeriod: "2 Weeks", APY: "12%",
        date1: "", date2: "", balance: "0.00 $GEMS", reward: "0.00 $GEMS"
    },
    {
        tierId: 2,
        status: "", cardText: "Silver Tier", stackPeriod: "6 Months", LockUpPeriod: "4 Weeks", APY: "15%",
        date1: "May 24 12:00am UTC", date2: "August  24 12:00am UTC", balance: "3000 $GEMS", reward: "450 $GEMS"
    },
    {
        tierId: 3,
        status: "", cardText: "Gold Tier", stackPeriod: "9 Months", LockUpPeriod: "6 Weeks", APY: "18%",
        date1: "May 24 12:00am UTC", date2: "August  24 12:00am UTC", balance: "3000 $GEMS", reward: "540 $GEMS"
    },
    {
        tierId: 4,
        status: "", cardText: "Platinum Tier", stackPeriod: "12 Months", LockUpPeriod: "8 Weeks", APY: "21%",
        date1: "May 24 12:00am UTC", date2: "August  24 12:00am UTC", balance: "3000 $GEMS", reward: "630 $GEMS"
    }
]
