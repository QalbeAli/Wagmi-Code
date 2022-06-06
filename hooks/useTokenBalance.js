import { BigNumber } from "ethers"
import { formatUnits } from "ethers/lib/utils"
import { useAccount, useContractRead, useToken } from "wagmi"
import { STAKING_TOKEN_ADDRESS, STAKING_TOKEN_ARGS } from "../constants"

export default function useTokenBalance() {
    const { data: accountData } = useAccount()
    const account = accountData?.address
    const { data: token } = useToken({
        address: STAKING_TOKEN_ADDRESS
    })
    const { data: tokenBalance } = useContractRead(
        account ? STAKING_TOKEN_ARGS : null,
        "balanceOf", {

        args: [
            account
        ],
        watch: true,

    }
    )

    return {
        decimals: token?.decimals || 18,
        formatted: tokenBalance && token.decimals ? formatUnits(tokenBalance, token.decimals) : 0,
        value: tokenBalance ? tokenBalance : BigNumber.from(0)
    }
}