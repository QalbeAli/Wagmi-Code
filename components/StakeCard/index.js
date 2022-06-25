import cardStyles from "../../styles/Card.module.css";
import { Connect } from "../walletConnectButton";
import StakeModal from "../StakeModal";
import { useState } from "react";
import useStake from "../../hooks/useStake";
import UnstakeModal from "../UnstakeModal";
export function StakeCard({ card }) {
  const [stakeOpen, setStakeOpen] = useState(false);
  const [unstakeOpen, setUnstakeOpen] = useState(false);

  const { tierId, cardText } = card;
  const {
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
    reward,
    depositTime,
    unlockTime,
  } = useStake(tierId);
  const progress =
    lockedAmount && totalStake
      ? (Number(lockedAmount) / Number(totalStake)) * 100
      : 0;
  const userStaked = Number(stakedAmount) > 0;
  function handleStakeClose() {
    setStakeOpen(false);
  }
  function handleUnStakeClose() {
    setUnstakeOpen(false);
  }
  return (
    <>
      <StakeModal
        tierId={tierId}
        open={stakeOpen}
        handleClose={handleStakeClose}
      ></StakeModal>
      <UnstakeModal
        tierId={tierId}
        open={unstakeOpen}
        handleClose={handleUnStakeClose}
      />

      <div className={cardStyles.stakingcards}>
        <div className={cardStyles.stakingCardInner}>
          <div className={cardStyles.blend}>
            <img
              className={cardStyles.img33}
              src="banner1.png"
              alt="Card image cap"
            />
          </div>
          <h5 className={cardStyles.head5}>
            {cardText}
            {ISLOCKED && <span className={cardStyles.h5Locked}>Locked-up</span>}
          </h5>
          <div className={"card-body" + ` ${cardStyles.cardBody}`}>
            <div className="row" style={{ marginLeft: "2px" }}>
              <div className="col-lg-4 col-sm 4 col-4">
                <p style={{ color: "#878787", fontSize: "12px" }}>
                  Stake Period
                </p>
                <h6 style={{ color: "white" }}>{stakePeriod} Months</h6>
              </div>
              <div className="col-lg-4 col-sm-4 col-4">
                <p style={{ color: "#878787", fontSize: "12px" }}>
                  {" "}
                  Lock-Up Period
                </p>
                <h6 style={{ color: "white" }}>{lockup} Weeks</h6>
              </div>
              <div className="col-lg-4 col-sm-4 col-4">
                <p style={{ color: "#878787", fontSize: "12px" }}>APY</p>
                <h6 style={{ color: "white" }}>{apy}%</h6>
              </div>
            </div>
            <div
              style={{ marginTop: "20px", marginLeft: "14px", flexGrow: 1 }}
              className={cardStyles.cardBody}
            >
              <p style={{ color: "#878787", fontSize: "12px" }}>Pool size</p>
              <div
                className="progress"
                style={{
                  backgroundColor: "#878787",
                  borderRadius: "20px",
                  height: "10px",
                  marginBottom: "10px",
                }}
              >
                <div
                  className={cardStyles.progress}
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: progress + "%" }}
                ></div>
              </div>

              <p style={{ color: "white", fontSize: "12px" }}>
                {Number(lockedAmount).toLocaleString()} $GEMS{" "}
                <span style={{ color: "#878787", fontSize: "12px" }}>
                  of {Number(totalStake).toLocaleString()} $GEMS
                </span>
              </p>
              <div style={{ marginBottom: "25px" }}>
                <p style={{ color: "#878787", fontSize: "12px" }}>Stake Date</p>
                <div className="row">
                  {depositTime && (
                    <div className="col-5 col-sm-5 col-lg-5">
                      <p
                        style={{
                          fontSize: "17px",
                          color: "white",
                          paddingBottom: "0",
                          marginBottom: 0,
                        }}
                      >
                        {depositTime} UTC
                      </p>
                    </div>
                  )}
                  <div className="col-2 col-sm-2 col-lg-2">
                    <p
                      style={{
                        fontSize: "17px",
                        color: "white",
                        fontWeight: "bold",
                        textAlign: userStaked ? "center" : "left",
                        minHeight: "50px",
                        paddingBottom: "0",
                        marginBottom: 0,
                      }}
                    >
                      -
                    </p>
                  </div>
                  {unlockTime && (
                    <div className="col-5 col-sm-5 col-lg-5">
                      <p
                        style={{
                          fontSize: "17px",
                          color: "white",
                          paddingBottom: "0",
                          marginBottom: 0,
                        }}
                      >
                        {unlockTime} UTC
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6 col-6">
                  <p style={{ color: "#878787", fontSize: "12px" }}>Balance</p>
                  <h5 style={{ color: "white", fontSize: "18px" }}>
                    {stakedAmount} $GEMS
                  </h5>
                </div>
                <div className="col-sm-6 col-6">
                  <p style={{ color: "#878787", fontSize: "12px" }}>Rewards</p>
                  <h5 style={{ color: "#815efa", fontSize: "18px" }}>
                    {reward} $GEMS
                  </h5>
                </div>
              </div>
              <br></br>
              {!account && <Connect btn="btnCard" />}
              <>
                {account && (
                  <>
                    {ISLOCKED ? (
                      <button className={cardStyles.btn11}>Locked-Up</button>
                    ) : (
                      <>
                        {!userStaked ? (
                          <button
                            onClick={() => setStakeOpen(true)}
                            className={cardStyles.btn10}
                          >
                            Stake
                          </button>
                        ) : (
                          <button
                            onClick={() => setUnstakeOpen(true)}
                            className={cardStyles.btn10}
                          >
                            Unstake
                          </button>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
