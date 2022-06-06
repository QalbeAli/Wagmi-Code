import { useAccount, useContract, useContractRead, useProvider, useToken } from "wagmi"
import { STAKING_CONTRACT_ARGS, STAKING_TOKEN_ADDRESS } from "../constants"
import useSWR from 'swr'
import { BigNumber } from "ethers"
import { formatUnits } from "ethers/lib/utils"
export default function useDashboardData() {
    const { data: accountData } = useAccount()
    const account = accountData?.address
    const provider = useProvider()
    const stakingContract = useContract(
        { ...STAKING_CONTRACT_ARGS, signerOrProvider: provider }
    )
    const { data: tierIds } = useContractRead(
        STAKING_CONTRACT_ARGS,
        "getTierIds",
    )
    const { data: token } = useToken({
        address: STAKING_TOKEN_ADDRESS
    })

    const tiers = tierIds && account && stakingContract && stakingContract?.provider ? tierIds.slice(1) : []
    const { data: tierAmounts, error } = useSWR(`useramounts ${account} ${tiers.length}`, async () => {
        const output = await Promise.all(tiers.map((tierId, index) => {
            return stakingContract.userInfo(account, index)

        }))
        return output;
    })
    const totalAmount = tierAmounts && tierAmounts.length > 0 && token?.decimals ? formatUnits(tierAmounts?.reduce((acc, cur) => acc.add(cur?.amount), BigNumber.from(0)), token?.decimals || 18) : "0"
    const { data: rewardAmounts } = useSWR(`userRewardAmounts ${account} ${tiers.length}`, async () => {
        const output = await Promise.all(tiers.map((tierId, index) => {
            return stakingContract.pendingRewards(account, index)

        }))
        return output;
    })
    const pendingRewards = rewardAmounts && rewardAmounts.length > 0 && token?.decimals ? formatUnits(rewardAmounts?.reduce((acc, cur) => acc.add(cur), BigNumber.from(0)), token?.decimals || 18) : "0"
    return {
        totalAmount,
        pendingRewards
    }

}