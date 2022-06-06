import myModal from '../../styles/Modal.module.css';
import { useEffect, useState } from "react";
import { useContractWrite } from 'wagmi';
import { Modal } from 'react-bootstrap';
import useStake from '../../hooks/useStake';
import { STAKING_CONTRACT_ARGS } from '../../constants';
import { parseUnits } from 'ethers/lib/utils';
import useApproveCallback from '../../hooks/useApproveCallback';

const StakeModal = ({
    open, handleClose, tierId, }) => {

    const [stackAmount, setStackAmount] = useState("0");
    const [stackAmountError, setStackAmountError] = useState("");

    const {
        apy,
        lockup,
        stakePeriod,
        minStake,
        maxStake,
        totalStake,
        lockedAmount,
        balance,
        amount,
        ISLOCKED,
        account,
        token

    } = useStake(tierId)
    const parsedAmount = parseUnits(stackAmount || "0", token?.decimals || 18);
    const { approve, isLoading: isApproving, shouldApprove } = useApproveCallback(STAKING_CONTRACT_ARGS.addressOrName, parsedAmount);
    const { data, isError, isLoading, writeAsync: deposit } = useContractWrite(
        STAKING_CONTRACT_ARGS,
        "deposit",
        {
            args: [tierId, parsedAmount]
        }
    )
    useEffect(() => {
        if (stackAmount && (Number(stackAmount) < Number(minStake) || Number(stackAmount) > Number(maxStake))) {
            setStackAmountError("Deposit must be between: " + minStake + " and " + maxStake + "  $GEMS");
        }
        else {
            setStackAmountError("");
        }
    }, [stackAmount])

    const reward = Number(stackAmount) * apy / 100

    function handleMaxClick() {
        setStackAmount(Math.min(maxStake, balance.formatted).toString())
    }

    async function stake() {
        try {
            await deposit();
            setStackAmount("0");
            handleClose();
        }
        catch (error) {
            console.error(error)
        }
    }
    return (
        <>
            <Modal show={open} onHide={handleClose}
                contentClassName={myModal.modalContent}
            >

                <div className="modal-header" style={{ borderBottom: "0px" }}>
                    <h5 className="modal-title" id="exampleModalLongTitle"></h5>

                    <img src="close.png" className="close"
                        style={{ cursor: 'pointer' }}
                        onClick={handleClose}
                    >
                    </img>

                </div>
                <div className={myModal.stakeAmount}>Enter your stake amount</div>
                <div className='container' style={{ marginTop: "35px" }}>
                    <div className='row'>
                        <div className='col-sm-5 col-5 col-lg-5'>
                            <p className={myModal.amount}>Total Amount</p>
                        </div>
                        <div className='col-lg-1 col-1'></div>
                        <div className='col-sm-6 col-6 col-lg-6'>
                            <p className={myModal.amount}>Balance: {balance.formatted} GEMS</p>
                        </div>
                    </div>
                </div>
                <div className={myModal.inputIcons}>
                    <div className={myModal.inputMax}>
                        <input className={myModal.inputField} required type="number" onChange={(e) => setStackAmount(e.target.value)} placeholder='0' id="noInput"
                            value={stackAmount}

                        />
                        <img src="Capture.PNG" className={myModal.imagess}></img>
                        <input type="button" value="MAX" className={myModal.maxbtn} onClick={handleMaxClick} />
                    </div>
                    {
                        stackAmountError &&
                        <p className={myModal.deposit}>{stackAmountError}</p>
                    }
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-lg-12'>
                            <div className={myModal.details}>
                                <p className={myModal.detail}>Details</p>
                            </div>
                        </div>
                    </div>
                    <div className='container' >
                        <div className={myModal.stakePeriod}>
                            <span className={myModal.stakePeriod1}>Stake Period:</span>
                            <span className={myModal.stakePeriod2}>{stakePeriod} Months</span>
                            <br></br>
                            <span className={myModal.stakePeriod1}>Lock-Up Period:</span>
                            <span className={myModal.stakePeriod2}>{lockup} Weeks</span>
                            <br></br>
                            <span className={myModal.stakePeriod1}>APY:</span>
                            <span className={myModal.stakePeriod2}>{apy}%</span>
                            <br></br>
                            <img src="line.png" className={myModal.line}></img>
                            <span className={myModal.stakePeriod3}>Reward:</span>
                            <span className={myModal.stakePeriod4}>{reward} $GEMS</span>
                            <br></br>
                        </div>

                    </div>
                    <div className='container' style={{ marginTop: "40px" }}>
                        {
                            shouldApprove ?
                                <button className={myModal.confirmBtn} id="btnColor"
                                    onClick={() => approve()}
                                    disabled={isApproving}

                                >
                                    {
                                        isApproving ? "Approving..." : "Approve"
                                    }
                                </button>
                                :

                                <button className={myModal.confirmBtn} id="btnColor"

                                    disabled={isLoading}
                                    onClick={stake}

                                >
                                    {
                                        isLoading ? "Confirm Staking..." :
                                            "Confirm Staking"
                                    }
                                </button>
                        }
                    </div>
                    <p className={myModal.stakepara}>Each account can only stake once in each tier</p>
                </div>
            </Modal>
        </>
    )
}
export default StakeModal;