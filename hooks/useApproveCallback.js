import { constants } from "ethers";
import { useAccount, useContractWrite, useWaitForTransaction } from "wagmi";
import { STAKING_TOKEN_ARGS } from "../constants";
import useTokenAllowance from "./useTokenAllowance";

export default function useApproveCallback(spender, amount) {

    const allowance = useTokenAllowance()
    const { data: accountData } = useAccount()
    const account = accountData?.address

    const { data, isError, isLoading, write: approve } = useContractWrite(
        spender && amount ? STAKING_TOKEN_ARGS : null,
        "approve",
        {
            args: [spender, constants.MaxUint256]
        }
    )
    const { data: trxData, isError: isTrxError, isLoading: isTrxLoading } = useWaitForTransaction({

        hash: data?.hash,

    })
    const loading = isLoading || isTrxLoading || (data && !trxData);
    if (allowance.value.lt(amount)) {
        return {
            isLoading: loading,
            shouldApprove: true,
            approve
        }

    }
    else if (isLoading && allowance.value.lt(amount)) {
        return {
            isLoading: loading,
            shouldApprove: true,
            approve
        }
    }
    return {
        shouldApprove: false,

        isLoading: false,
        approve: () => approve()
    }


}