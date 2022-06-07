import React from 'react'
import { cards } from '../constants'
import { StakeCard } from './StakeCard'


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
