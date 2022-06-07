import moment from 'moment';
import { cards } from '../constants';
import useStake from '../hooks/useStake';
import tablestyles from '../styles/Table.module.css';
const Table = () => {
    return (
        <>

            <div className={tablestyles.table1}>
                <table className={tablestyles.tableBorder}>
                    <thead>
                        <tr className={tablestyles.tableRow1}>

                            <th className={tablestyles.th1}>
                                <div >Stake Date</div></th>
                            <th className={tablestyles.th1}>Pool Size</th>
                            <th className={tablestyles.th1} >Stake Amount</th>
                            <th className={tablestyles.th1} >Rewards</th>
                            <th className={tablestyles.th1}>Status</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            cards.map(card => {
                                return <TableHistory card={card} key={card.tierId} />
                            })
                        }
                    </tbody>
                </table>

            </div>

        </>
    )
}
export default Table;

function TableHistory({ card }) {
    const { tierId, cardText } = card;
    const {
        ISLOCKED,
        unlockTime,
        depositTime,
        stakedAmount,
        reward
    } = useStake(tierId)

    return (
        stakedAmount > 0 ?
            <tr >

                <td className={tablestyles.td1}>{depositTime} </td>
                <td className={tablestyles.td1}>{cardText}</td>
                <td className={tablestyles.td1}>@{Number(stakedAmount)} $GEMS</td>

                <td className={tablestyles.td1}>{reward} $GEMS</td>
                <td className={tablestyles.td1}>
                    {
                        ISLOCKED &&
                        <span className={tablestyles.up}>Locked-Up</span>
                    }
                    {
                        !ISLOCKED && moment(unlockTime).isBefore(moment()) &&
                        <span className={tablestyles.completed}>Completed</span>
                    }
                    {
                        !ISLOCKED && !moment(unlockTime).isBefore(moment()) &&
                        <span className={tablestyles.going}>On Going</span>
                    }

                </td>
            </tr>
            : null
    )
}