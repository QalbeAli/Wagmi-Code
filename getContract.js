import ABI from "./abi.json"
import { ethers } from 'ethers';
const contractAddress = '0x07Eada377fc86D021236Db4C00635fB6d4458C77'

export const getContract = async () => {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, ABI, provider)
        // console.log(contract);
        // const isLocked = await contract.isLocked("0x9BC73c3F94152EF7dE16793E5eD9fB20D3AC09eb", 3)
        // console.log(isLocked);
        const signedContract = new ethers.Contract(contractAddress, ABI, signer)
        // const deposit = await signedContract.deposit(2, 7);
        // console.log(deposit);
        // execution reverted: Stake: User has no locked gems
        // const withDraw = await signedContract.withdraw(2);
        return contract;
    }

}