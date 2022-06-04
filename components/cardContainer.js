import React from 'react'
import Card2 from "./cards2"
// import { isAccountLocked } from "../contractMethods"

let cards = [
    {
        tierId: 0,
        status: "", cardText: "Bronze Tier", stackPeriod: "3 Months", LockUpPeriod: "2 Weeks", APY: "12%",
        date1: "", date2: "", balance: "0.00 $GEMS", reward: "0.00 $GEMS"
    },
    {
        tierId: 1,
        status: "", cardText: "Silver Tier", stackPeriod: "6 Months", LockUpPeriod: "4 Weeks", APY: "15%",
        date1: "May 24 12:00am UTC", date2: "August  24 12:00am UTC", balance: "3000 $GEMS", reward: "450 $GEMS"
    },
    {
        tierId: 2,
        status: "", cardText: "Gold Tier", stackPeriod: "9 Months", LockUpPeriod: "6 Weeks", APY: "18%",
        date1: "May 24 12:00am UTC", date2: "August  24 12:00am UTC", balance: "3000 $GEMS", reward: "540 $GEMS"
    },
    {
        tierId: 3,
        status: "", cardText: "Platinum Tier", stackPeriod: "12 Months", LockUpPeriod: "8 Weeks", APY: "21%",
        date1: "May 24 12:00am UTC", date2: "August  24 12:00am UTC", balance: "3000 $GEMS", reward: "630 $GEMS"
    }
]

const CardContainer = () => {

    //checking if account is locked
    // async function isCardLocked(tierId){
    //     return await isAccountLocked(tierId)
    // }

    return (
        <>
            <div className='container-fluid' >
                {
                    cards.map((card) => {
                        return <Card2 tierId={card.tierId} isCardLocked={()=>isCardLocked(card.tierId)} key={card.tierId} cardText={card.cardText}></Card2>
                    })
                }
            </div>
        </>
    )
}

export default CardContainer
