import { formatUnits } from "ethers/lib/utils";
import { useAccount, useContractRead } from "wagmi";
import { STAKING_CONTRACT_ARGS } from "../constants";

export default function usePanelty(tierId) {
    const { data: accountData } = useAccount()
    const account = accountData?.address

    const { data: panelty } = useContractRead(
        accountData?.address ? STAKING_CONTRACT_ARGS : null,
        "calculatePenality",
        {
            args: [account, tierId],
            watch: true,

        }
    )
    return panelty ? formatUnits(panelty, 12) : 0
}