import faqstyles from '../styles/Faq.module.css';
const FAQ = () => {
  return (
    <>
      <div className='container' style={{ marginTop: "20px" }}>
        <h2 className={faqstyles.f}>FAQ</h2>
        <br></br>
        <div className="accordion accordion-flush" id="accordionFlushExample" >
          <div className="accordion-item" style={{ backgroundColor: "#1d1d37", paddingTop: "10px", paddingBottom: "10px", borderRadius: "10px" }}>
            <h2 className="accordion-header" id="flush-headingOne" style={{ backgroundColor: "#1d1d37" }}>
              <button
                className={faqstyles.accordBtn}
                type="button"
                style={{ backgroundColor: "#1d1d37", color: "white", fontSize: "16px" }}
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                How to Stake $GEMS?

              </button>
            </h2>
            <div

              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={{ color: "white" }}>
                <a href="https://docs.google.com/document/d/1D3vlr98qvQt17xgaFkmpCciJtnw-wd3S0MMKGeRnAZ0" target="_blank" >
                  Guide
                </a>
              </div>
            </div>
          </div>
          <br></br>
          <div className="accordion-item" style={{ backgroundColor: "#1d1d37", paddingTop: "10px", paddingBottom: "10px", borderRadius: "10px" }}>
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className={faqstyles.accordBtn}
                type="button"
                style={{ backgroundColor: "#1d1d37", color: "white", fontSize: "16px" }}
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                How does it work?

              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={{ color: "white" }}>
                You can stake from 20,000 to 2M $GEMS and receive respective compounded interest based on your chosen staking pool.


              </div>
            </div>
          </div>
          <br></br>
          <div className="accordion-item" style={{ backgroundColor: "#1d1d37", paddingTop: "10px", paddingBottom: "10px", borderRadius: "10px" }}>
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className={faqstyles.accordBtn}
                type="button"
                data-bs-toggle="collapse"
                style={{ backgroundColor: "#1d1d37", color: "white", fontSize: "16px" }}
                data-bs-target="#flush-collapseThree-3"
                aria-expanded="false"
                aria-controls="flush-collapseThree-3"

              >
                What are the staking options?
              </button>

            </h2>
            <div
              id="flush-collapseThree-3"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={{ color: "white" }}>
                We have four staking options offering different time periods:
                <ul>
                  <li>

                    Bronze Pool: 3 months
                  </li>
                  <li>
                    Silver Pool: 6 months
                  </li>
                  <li>
                    Gold Pool: 9 months
                  </li>
                  <li>
                    Platinum Pool: 1 year
                  </li>

                </ul>
                When you stake by choosing a specific time frame, you’ll receive the respective APY based on that specified pool.

              </div>
            </div>
          </div>
          <br></br>
          <div className="accordion-item" style={{ backgroundColor: "#1d1d37", paddingTop: "10px", paddingBottom: "10px", borderRadius: "10px" }}>
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className={faqstyles.accordBtn}
                type="button"
                data-bs-toggle="collapse"
                style={{ backgroundColor: "#1d1d37", color: "white", fontSize: "16px" }}
                data-bs-target="#flush-collapseThree-4"
                aria-expanded="false"
                aria-controls="flush-collapseThree-4"

              >
                Is there any lockup period or penalty
              </button>

            </h2>
            <div
              id="flush-collapseThree-4"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={{ color: "white" }}>
                Staking $GEMS does require you to lock up your tokens. You can withdraw your tokens at any time after the required lock period. However, it comes with a cost. Withdrawing the assets before the end of chosen staking period results in a penalty depending on the number of days prior to maturity.

                <br />
                <br />
                There’s a different initial penalty percentage for each staking pool, and it decreases linearly towards zero, day by day until maturity.
                <br />
                <br />

                So using our penalty schedule you can calculate the exact penalty based on the staking pool and the number of days left to the end of the staking period.
                <br />
                <br />
                <a href="https://docs.google.com/spreadsheets/d/1bD3GA8bLmB0n6cqbAjAXq7-Uo2Y5fIxMWiNhxOPce6Q/edit?usp=sharing" target="_blank">

                  https://docs.google.com/spreadsheets/d/1bD3GA8bLmB0n6cqbAjAXq7-Uo2Y5fIxMWiNhxOPce6Q/edit?usp=sharing
                </a>

              </div>
            </div>
          </div>
          <br></br>
          <div className="accordion-item" style={{ backgroundColor: "#1d1d37", paddingTop: "10px", paddingBottom: "10px", borderRadius: "10px" }}>
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className={faqstyles.accordBtn}
                type="button"
                data-bs-toggle="collapse"
                style={{ backgroundColor: "#1d1d37", color: "white", fontSize: "16px" }}
                data-bs-target="#flush-collapseThree-5"
                aria-expanded="false"
                aria-controls="flush-collapseThree-5"

              >
                Who can stake?
              </button>

            </h2>
            <div
              id="flush-collapseThree-5"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={{ color: "white" }}>
                Anyone holding a minimum of 20,000 $GEMS in their wallet can stake via our Staking Platform on desktop.
              </div>
            </div>
          </div>
          <br></br>
          <div className="accordion-item" style={{ backgroundColor: "#1d1d37", paddingTop: "10px", paddingBottom: "10px", borderRadius: "10px" }}>
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className={faqstyles.accordBtn}
                type="button"
                data-bs-toggle="collapse"
                style={{ backgroundColor: "#1d1d37", color: "white", fontSize: "16px" }}
                data-bs-target="#flush-collapseThree-6"
                aria-expanded="false"
                aria-controls="flush-collapseThree-6"

              >
                Is there any limit on the staking amount?
              </button>

            </h2>
            <div
              id="flush-collapseThree-6"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={{ color: "white" }}>
                We have minimum and maximum limits for each staking pool (in $GEMS).
                <br />
                <br />
                Bronze pool (3 months):
                <br />
                <br />
                Minimum: 20,000
                <br />
                Maximum: 2M
                <br />
                <br />

                Silver pool (6 months):
                <br />
                <br />
                Minimum: 20,000
                <br />
                Maximum: 2M
                <br />
                <br />

                Gold pool (9 months):
                <br />
                <br />
                Minimum: 20,000
                <br />
                Maximum: 2M
                <br />
                <br />

                Platinum pool (12 months):
                <br />
                <br />
                Minimum: 20,000
                <br />
                Maximum: 2M

              </div>
            </div>
          </div>
          <br></br>
          <div className="accordion-item" style={{ backgroundColor: "#1d1d37", paddingTop: "10px", paddingBottom: "10px", borderRadius: "10px" }}>
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className={faqstyles.accordBtn}
                type="button"
                data-bs-toggle="collapse"
                style={{ backgroundColor: "#1d1d37", color: "white", fontSize: "16px" }}
                data-bs-target="#flush-collapseThree-7"
                aria-expanded="false"
                aria-controls="flush-collapseThree-7"

              >
                What are the maximum capacities for each pool?

              </button>

            </h2>
            <div
              id="flush-collapseThree-7"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={{ color: "white" }}>
                Staking pools’ capacities are limited. It means if the amount of staked tokens in one pool in total (by others, as well) has reached the pool’s capacity limit, the pool will become unavailable for everyone to stake more. Capacities are as follows (in $GEMS):
                <br />
                <br />
                Bronze Pool: 50M
                <br />
                Silver Pool:  50M
                <br />
                Gold Pool:  50M
                <br />
                Platinum Pool:  50M

              </div>
            </div>
          </div>
          <br></br>
          <div className="accordion-item" style={{ backgroundColor: "#1d1d37", paddingTop: "10px", paddingBottom: "10px", borderRadius: "10px" }}>
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className={faqstyles.accordBtn}
                type="button"
                data-bs-toggle="collapse"
                style={{ backgroundColor: "#1d1d37", color: "white", fontSize: "16px" }}
                data-bs-target="#flush-collapseThree-8"
                aria-expanded="false"
                aria-controls="flush-collapseThree-8"

              >
                Which devices and browsers are supported?

              </button>

            </h2>
            <div
              id="flush-collapseThree-8"
              className="accordion-collapse collapse"
              aria-labelledby="flush-collapseThree-8"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={{ color: "white" }}>
                You can stake $GEMS only on desktop for now. Unfortunately, staking on mobile is not supported yet. In terms of desktop browsers, five of them support MetaMask. If you have any problem with these browsers, check out our related blog post for troubleshooting:
                <br />
                <br />
                Chrome
                <br />
                Firefox
                <br />
                Brave
                <br />
                Edge

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
export default FAQ;