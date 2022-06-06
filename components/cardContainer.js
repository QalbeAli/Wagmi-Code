import React from 'react'
import { StakeCard } from './StakeCard'

let cards = [
    {
        tierId: 1,
        status: "", cardText: "Bronze Tier", stackPeriod: "3 Months", LockUpPeriod: "2 Weeks", APY: "12%",
        date1: "", date2: "", balance: "0.00 $GEMS", reward: "0.00 $GEMS"
    },
    {
        tierId: 2,
        status: "", cardText: "Silver Tier", stackPeriod: "6 Months", LockUpPeriod: "4 Weeks", APY: "15%",
        date1: "May 24 12:00am UTC", date2: "August  24 12:00am UTC", balance: "3000 $GEMS", reward: "450 $GEMS"
    },
    {
        tierId: 3,
        status: "", cardText: "Gold Tier", stackPeriod: "9 Months", LockUpPeriod: "6 Weeks", APY: "18%",
        date1: "May 24 12:00am UTC", date2: "August  24 12:00am UTC", balance: "3000 $GEMS", reward: "540 $GEMS"
    },
    {
        tierId: 4,
        status: "", cardText: "Platinum Tier", stackPeriod: "12 Months", LockUpPeriod: "8 Weeks", APY: "21%",
        date1: "May 24 12:00am UTC", date2: "August  24 12:00am UTC", balance: "3000 $GEMS", reward: "630 $GEMS"
    }
]

const CardContainer = () => {



    return (
        <>
            <div className='container-fluid' >
                <div className='row'>
                    {
                        cards.map((card) => {
                            return (<div className='col-sm-12 col col-lg-6 col-md-12'>
                                <StakeCard card={card} key={card.tierId} />
                            </div>)
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default CardContainer
