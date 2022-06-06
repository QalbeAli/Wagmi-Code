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