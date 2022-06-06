import { formatUnits } from "ethers/lib/utils"
import moment from "moment"
import { useAccount, useBalance, useContractRead, useToken } from "wagmi"
import { STAKING_CONTRACT_ARGS, STAKING_TOKEN_ADDRESS } from "../constants"
import useTokenBalance from "./useTokenBalance"

export default function useStake(tierId) {
    const { data: accountData } = useAccount()
    const account = accountData?.address

    const { data: token } = useToken({
        address: STAKING_TOKEN_ADDRESS
    })
    const balance = useTokenBalance()
    const { data: ISLOCKED } = useContractRead(
        accountData?.address ? STAKING_CONTRACT_ARGS : null,
        'isLocked',
        {
            args: [accountData?.address, tierId],
            watch: true,

        }
    )
    const { data: tier } = useContractRead(
        STAKING_CONTRACT_ARGS,
        "tiers", {
        args: [
            tierId
        ],
        watch: true,


    }
    )
    const { data: tierLockedAmount } = useContractRead(
        STAKING_CONTRACT_ARGS,
        "tierLockedAmount", {
        args: [
            tierId
        ],
        watch: true,


    }
    )
    const { data: userInfo } = useContractRead(
        accountData?.address ? STAKING_CONTRACT_ARGS : null,
        "userInfo", {
        args: [
            accountData?.address,
            tierId
        ],
        watch: true,

    }
    )
    const { data: pendingReward } = useContractRead(
        accountData?.address ? STAKING_CONTRACT_ARGS : null,
        "pendingRewards", {
        args: [
            accountData?.address,
            tierId
        ],
        watch: true,

    }
    )
    const { data: userUnlockTime } = useContractRead(
        accountData?.address ? STAKING_CONTRACT_ARGS : null,
        "getUserUnlockTime", {
        args: [
            accountData?.address,
            tierId
        ],
        watch: true,

    }
    )


    const apy = tier?.apy ? formatUnits(tier.apy, 12) : 0,
        lockup = tier?.lockingPeriod ? Math.round(moment.duration(Number(tier.lockingPeriod), 'seconds').asWeeks()) : 0,
        stakePeriod = tier?.rewardPeriod ? Math.round(tier?.rewardPeriod / 30) : 0,
        minStake = tier?.minStake && token?.decimals ? formatUnits(tier.minStake, token.decimals) : 0,
        maxStake = tier?.maxStake && token?.decimals ? formatUnits(tier.maxStake, token.decimals) : 0,
        totalStake = tier?.totalStake && token?.decimals ? formatUnits(tier.totalStake, token.decimals) : 0,
        lockedAmount = tierLockedAmount && token?.decimals ? formatUnits(tierLockedAmount, token.decimals) : 0,
        stakedAmount = userInfo?.amount && token?.decimals ? formatUnits(userInfo.amount, token.decimals) : 0,
        depositTime = userInfo?.depositTime && stakedAmount > 0 ? moment.unix(userInfo.depositTime).utc().format('MMM DD YY, h:mm a') : '',
        unlockTime = userUnlockTime && stakedAmount > 0 ? moment.unix(userUnlockTime).utc().format('MMM DD YY, h:mm a') : '',
        reward = pendingReward && token?.decimals ? formatUnits(pendingReward, token.decimals) : 0;

    return {
        apy,
        lockup,
        stakePeriod,
        minStake,
        maxStake,
        totalStake,
        lockedAmount,
        stakedAmount,
        ISLOCKED,
        account,
        balance,
        token,
        reward,
        depositTime,
        unlockTime
    }
}