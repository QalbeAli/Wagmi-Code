import { BigNumber } from "ethers"
import { formatUnits } from "ethers/lib/utils"
import { useAccount, useContractRead, useToken } from "wagmi"
import { STAKING_CONTRACT_ADDRESSS, STAKING_TOKEN_ADDRESS, STAKING_TOKEN_ARGS } from "../constants"

export default function useTokenAllowance() {
    const { data: accountData } = useAccount()
    const account = accountData?.address
    const { data: token } = useToken({
        address: STAKING_TOKEN_ADDRESS
    })
    const { data: tokenAllowance } = useContractRead(
        account ? STAKING_TOKEN_ARGS : null,
        "allowance", {
        args: [
            account,
            STAKING_CONTRACT_ADDRESSS
        ],
        watch: true,

    }
    )
    return {
        decimals: token?.decimals || 18,
        formatted: tokenAllowance && token?.decimals ? formatUnits(tokenAllowance, token?.decimals) : 0,
        value: tokenAllowance ? tokenAllowance : BigNumber.from(0)
    }
}