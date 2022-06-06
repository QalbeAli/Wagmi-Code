import { Modal } from 'react-bootstrap';
import usePanelty from '../../hooks/usePanelty';
import useStake from '../../hooks/useStake';
import myModal from '../../styles/Modal.module.css';
import { useContractWrite } from "wagmi";
import { STAKING_CONTRACT_ARGS } from '../../constants';

const UnstakeModal = ({ open, handleClose, tierId }) => {

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
        token,
        reward,
        stakedAmount
    } = useStake(tierId)

    const panelty = usePanelty(tierId)

    const { data, isLoading, writeAsync: withdraw } = useContractWrite(
        STAKING_CONTRACT_ARGS,
        "withdraw", {
        args: [tierId]
    }
    )
    async function unstake() {
        try {

            await withdraw()
            handleClose()
        }
        catch (error) {
            console.error(error)
        }
    }
    return (
        <>
            <Modal
                show={open} onHide={handleClose}
                contentClassName={myModal.modalContent}

            >


                <div className="modal-header" style={{ borderBottom: "0px" }}>
                    <h5 className="modal-title" id="exampleModalLongTitle">

                    </h5>

                    <img src="close.png" className="close"
                        style={{ cursor: 'pointer' }}

                        onClick={handleClose}
                    >
                    </img>

                </div>
                <div className={myModal.stakeAmount}>Unstake Confirmation</div>
                <div className='container' style={{ marginTop: "35px" }}>
                    <div className='row'>
                        <div className='col-sm-5 col-5 col-lg-5'>
                            <p className={myModal.amount}>Total Staking Balance:</p>
                        </div>
                        <div className='col-lg-1 col-1'></div>
                        <div className='col-sm-6 col-6 col-lg-6'>
                            <p className={myModal.amount}>Balance: {stakedAmount} GEMS</p>
                        </div>
                    </div>
                </div>
                <div className={myModal.inputIcons}>
                    <div className={myModal.inputMax}>
                        <input
                            disabled
                            value={stakedAmount}
                            className={myModal.inputField2} type="text" placeholder='0' id="unstake" />
                        <img src="Capture1.PNG" className={myModal.imagess}></img>

                    </div>

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
                            <span className={myModal.stakePeriod5}>Penalty</span>
                            <span className={myModal.stakePeriod6}>-{panelty}%</span>
                            <img src="line.png" className={myModal.line}></img>
                            <span className={myModal.stakePeriod3}>Reward:</span>
                            <span className={myModal.stakePeriod4}>{reward} $GEMS</span>
                            <br></br>
                        </div>

                    </div>
                    <div className='container' style={{ marginTop: "40px" }}>
                        <button className={myModal.confirmBtn}
                            disabled={isLoading}
                            onClick={() => unstake()}>
                            {
                                isLoading ? " Confirm Unstake..." : " Confirm Unstake"
                            }

                        </button>

                    </div>
                    <p className={myModal.stakepara3}>Penalty charge for early unstake, for more please check penalty schedule</p>
                </div>

            </Modal>

        </>
    )
}
export default UnstakeModal;