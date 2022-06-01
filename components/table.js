import tablestyles from '../styles/Table.module.css';
const Table = () => {
    return (
        <>

                <div className={tablestyles.table1}>
                    <table className={tablestyles.tableBorder}>
                        <thead>
                            <tr className={tablestyles.tableRow1}>
                              
                                    <th  className={tablestyles.th1}>
                                        <div >Stake Date</div></th>
                                    <th  className={tablestyles.th1}>Pool Size</th>
                                    <th className={tablestyles.th1} >Stake Amount</th>
                                    <th className={tablestyles.th1} >Rewards</th>
                                    <th className={tablestyles.th1}>Status</th>
                             

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={tablestyles.borderRow}>

                                <td className={tablestyles.td1}>26 May 2022 </td>
                                <td  className={tablestyles.td1}>Platinum Tier</td>
                                <td  className={tablestyles.td1}>@3,000 $GEMS</td>

                                <td className={tablestyles.td1}>360 $GEMS</td>
                                <td  className={tablestyles.td1}><span className={tablestyles.completed}>Completed</span></td>
                            </tr>
                            <tr className={tablestyles.borderRow}>

                                <td className={tablestyles.td1}>26 May 2022 </td>
                                <td className={tablestyles.td1}>Platinum Tier</td>
                                <td className={tablestyles.td1}>@3,000 $GEMS</td>

                                <td className={tablestyles.td1}>360 $GEMS</td>
                                <td className={tablestyles.td1}><span className={tablestyles.completed}>Completed</span></td>
                            </tr>
                            <tr className={tablestyles.borderRow}>

                                <td className={tablestyles.td1}>26 May 2022 </td>
                                <td className={tablestyles.td1}>Gold Tier</td>
                                <td className={tablestyles.td1}>@3,000 $GEMS</td>

                                <td className={tablestyles.td1}>540 $GEMS</td>
                                <td className={tablestyles.td1} ><span className={tablestyles.up}>Locked-Up</span></td>
                            </tr>
                            <tr className={tablestyles.borderRow}>

                                <td className={tablestyles.td1}>26 May 2022 </td>
                                <td className={tablestyles.td1}>Silver Tier</td>
                                <td className={tablestyles.td1}>@3,000 $GEMS</td>

                                <td className={tablestyles.td1}>360 $GEMS</td>
                                <td className={tablestyles.td1}><span className={tablestyles.going}>On Going</span></td>
                            </tr>
                            <tr className={tablestyles.borderRow}>

                                <td className={tablestyles.td1}>26 May 2022 </td>
                                <td className={tablestyles.td1}>Gold Tier</td>
                                <td className={tablestyles.td1}>@3,000 $GEMS</td>

                                <td className={tablestyles.td1}>540 $GEMS</td>
                                <td className={tablestyles.td1}><span className={tablestyles.up}>Locked-Up</span></td>
                            </tr>
                            <tr >

                                <td  className={tablestyles.td1}>26 May 2022 </td>
                                <td  className={tablestyles.td1}>Platinum Tier</td>
                                <td  className={tablestyles.td1}>@3,000 $GEMS</td>

                                <td  className={tablestyles.td1}>360 $GEMS</td>
                                <td className={tablestyles.td1}><span className={tablestyles.completed}>Completed</span></td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            
        </>
    )
}
export default Table;