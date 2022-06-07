import { Accordion } from 'react-bootstrap';
import faqstyles from '../styles/Faq.module.css';
const faqs = [{
  question: "How to Stake $GEMS?"
  ,
  awnser: <>
    <a href="https://docs.google.com/document/d/1D3vlr98qvQt17xgaFkmpCciJtnw-wd3S0MMKGeRnAZ0" target="_blank" >
      Guide
    </a>
  </>
}
  , {
  question: "How does it work?",
  awnser: <>
    You can stake from 20,000 to 2M $GEMS and receive respective compounded interest based on your chosen staking pool.

  </>
}
  , {
  question: "What are the staking options?",
  awnser: <>
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

  </>
},
{
  question: "Is there any lockup period or penalty",
  awnser: <>
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

  </>
},
{
  question: "Who can stake?",
  awnser: <>
    Anyone holding a minimum of 20,000 $GEMS in their wallet can stake via our Staking Platform on desktop.
  </>
},
{
  question: "Is there any limit on the staking amount?",
  awnser: <>
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

  </>
},
{
  question: "What are the maximum capacities for each pool?  "
  ,
  awnser: <>
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

  </>
},
{
  question: "Which devices and browsers are supported?",
  awnser: <>
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

  </>
}
]
const FAQ = () => {
  return (
    <>
      <div className='container' style={{ marginTop: "20px" }}>
        <h2 className={faqstyles.f}>FAQ</h2>
        <br></br>
        <Accordion >
          {
            faqs.map((faq, i) => {
              return (
                <>
                  <Accordion.Item eventKey={i}
                    key={i}
                    className={faqstyles.accordionItem}
                  >
                    <Accordion.Header
                      className={faqstyles.accordionHeader}
                    >
                      {faq.question}

                    </Accordion.Header>
                    <Accordion.Body>
                      {faq.awnser}
                    </Accordion.Body>
                  </Accordion.Item>
                  <br></br>
                </>
              )
            })
          }
          <br></br>

        </Accordion>


      </div>
    </>
  )
}
export default FAQ;