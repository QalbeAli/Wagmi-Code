import card2styles from '../styles/Card2.module.css';
import Modal from './modal';
import Modal2 from './modal2';
import {useState} from 'react';
const Card2 = () => {
let[btnstake,setBtn]=useState("Stake")
let[toggle,setToggle]=useState("#exampleModalCenter")
    return (
        <>
            <div className='container-fluid' >
                <div className='row'>
                    <div className='col-sm-6 col col-lg-6'>
                        <div className={card2styles.stakingcards}>
                       <div className={card2styles.blend}>
                            <img className={card2styles.img33} src="banner1.png" alt="Card image cap" />
                            </div>
                            <h5 className={card2styles.head5}>Bronze Tier</h5>
                            <div className="card-body">
                                <div className='row' style={{ marginLeft: "2px" }}>
                                    <div className='col-lg-4 col-sm 4 col-4'>
                                        <p style={{ color: "#878787", fontSize: "12px" }}>Stake Period</p>
                                        <h6 style={{ color: "white" }}>3 Months</h6>
                                    </div>
                                    <div className='col-lg-4 col-sm-4 col-4'>
                                        <p style={{ color: "#878787", fontSize: "12px" }}> Lock-Up Period</p>
                                        <h6 style={{ color: "white" }}>2 Weeks</h6>
                                    </div>
                                    <div className='col-lg-4 col-sm-4 col-4'>
                                        <p style={{ color: "#878787", fontSize: "12px" }}>APY</p>
                                        <h6 style={{ color: "white" }}>12%</h6>
                                    </div>
                                </div>
                                <div style={{ marginTop: "20px", marginLeft: "14px"}}>
                                    <p style={{ color: "#878787", fontSize: "12px" }}>Pool size</p>
                                    <div className="progress" style={{backgroundColor:"#878787",borderRadius:"20px", height:"10px",marginBottom:"10px"}}>
                                        <div
                                            className={card2styles.progress}
                                            role="progressbar"
                                            aria-valuenow={70}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            style={{ width: "60%" }}
                                        >
                                            
                                        </div>
                                    </div>
       
                                    <p style={{color:"white",fontSize:"12px"}}>42,293,740 $GEMS <span style={{color:"#878787",fontSize:"12px"}}>of 1,666,666,667 $GEMS</span></p>
                                    <div style={{marginBottom:"25px"}}>
                                        <p style={{color:"#878787",fontSize:"12px"}}>Stake Date</p>
                                        <h5 style={{color:"white"}}>-</h5>
                                    </div>
                                    
                                    <div className='row'>
                                        <div className='col-sm-6 col-6'>
                                        <p style={{color:"#878787",fontSize:"12px"}}>Balance</p>
                                        <h5 style={{color:"white",fontSize:"18px"}}>0.00 $GEMS</h5>
                                        </div>
                                        <div className='col-sm-6 col-6'>
                                        <p style={{color:"#878787",fontSize:"12px"}}>Rewards</p>
                                        <h5 style={{color:"#815efa",fontSize:"18px"}}>0.00 $GEMS</h5>
                                        </div>
                                    </div>
                                    <br></br>
                                    
                                    <button className={card2styles.btn10}   data-bs-toggle="modal"
    data-bs-target={toggle}>{btnstake}
    </button>
    {btnstake=="Stake"}?
    <Modal btnstake={btnstake} setBtn={setBtn} toggle={toggle} setToggle={setToggle}></Modal>
    :<Modal2 btnstake={btnstake} setBtn={setBtn} toggle={toggle} setToggle={setToggle}> </Modal2>
   
    
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    <div className='col-sm-6 col col-lg-6'>
                        <div className={card2styles.col2}>
                    <div className={card2styles.stakingcards}>
                        <div className={card2styles.blend}>
                            <img className={card2styles.img33} src="banner1.png" alt="Card image cap" />
                        </div>
                            <h5 className={card2styles.head5}>Silver Tier<span className={card2styles.h5Locked}>Locked-up</span></h5>
                            <div className="card-body" style={{paddingBottom:"37px"}}>
                                <div className='row' style={{ marginLeft: "2px" }}>
                                    <div className='col-lg-4 col-sm-4 col-4'>
                                        <p style={{ color: "#878787", fontSize: "12px" }}>Stake Period</p>
                                        <h6 style={{ color: "white" }}>6 Months</h6>
                                    </div>
                                    <div className='col-lg-4 col-sm-4 col-4'>
                                        <p style={{ color: "#878787", fontSize: "12px" }}> Lock-Up Period</p>
                                        <h6 style={{ color: "white" }}>4 Weeks</h6>
                                    </div>
                                    <div className='col-lg-4 col-sm-4 col-4'>
                                        <p style={{ color: "#878787", fontSize: "12px" }}>APY</p>
                                        <h6 style={{ color: "white" }}>15%</h6>
                                    </div>
                                </div>
                                <div style={{ marginTop: "20px", marginLeft: "14px"}}>
                                    <p style={{ color: "#878787", fontSize: "12px" }}>Pool size</p>
                                    <div className="progress" style={{backgroundColor:"#878787",borderRadius:"20px", height:"10px",marginBottom:"10px"}}>
                                        <div
                                            className={card2styles.progress}
                                            role="progressbar"
                                            aria-valuenow={70}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            style={{ width: "60%" }}
                                        >
                                            
                                        </div>
                                    </div>
       
                                    <p style={{color:"white",fontSize:"12px"}}>42,293,740 $GEMS <span style={{color:"#878787",fontSize:"12px"}}>of 1,666,666,667 $GEMS</span></p>
                                    <div>
                                        <p style={{color:"#878787",fontSize:"12px"}}>Stake Date</p>
                                        <div>
                                            <div className='row'>
                                                <div className='col-4 col-sm-4 col-lg-4'>
                                               <p className={card2styles.paraa}>May 24 12:00am UTC</p>
                                                </div>
                                                <div className='col-2 col-sm-2 col-lg-2'>
                                                   <p className={card2styles.paraa}>-</p> 
                                                    </div>
                                                    <div className='col-4 col-sm-4 col-lg-4' style={{textAlign:"left"}}>
                                                  <p className={card2styles.paraa}>
                                                  August 24 12:00am UTC</p> 
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-6 col-6'>
                                        <p style={{color:"#878787",fontSize:"12px"}}>Balance</p>
                                        <h5 style={{color:"white",fontSize:"18px"}}>3,000 $GEMS</h5>
                                        </div>
                                        <div className='col-sm-6 col-6'>
                                        <p style={{color:"#878787",fontSize:"12px"}}>Rewards</p>
                                        <h5 style={{color:"#815efa",fontSize:"18px"}}>450 $GEMS</h5>
                                        </div>
                                    </div>
                                  <br></br>
                                    <button className={card2styles.btn11}>Locked-Up</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    </div>
                </div>
                <div className='row' style={{marginTop:"20px"}}>
                    <div className='col-sm-6 col col-lg-6'>
                    <div className={card2styles.col3}>
                        <div className={card2styles.stakingcards}>
                            <div className={card2styles.blend}>
                            <img className={card2styles.img33} src="banner1.png" alt="Card image cap" />
                            </div>
                            <h5 className={card2styles.head5}>Gold Tier<span className={card2styles.h5going}>On Going</span></h5>
                            <div className="card-body">
                                <div className='row' style={{ marginLeft: "2px" }}>
                                    <div className='col-lg-4 col-sm-4 col-4'>
                                        <p style={{ color: "#878787", fontSize: "12px" }}>Stake Period</p>
                                        <h6 style={{ color: "white" }}>9 Months</h6>
                                    </div>
                                    <div className='col-lg-4  col-sm-4 col-4'>
                                        <p style={{ color: "#878787", fontSize: "12px" }}> Lock-Up Period</p>
                                        <h6 style={{ color: "white" }}>6 Weeks</h6>
                                    </div>
                                    <div className='col-lg-4  col-sm-4 col-4'>
                                        <p style={{ color: "#878787", fontSize: "12px" }}>APY</p>
                                        <h6 style={{ color: "white" }}>18%</h6>
                                    </div>
                                </div>
                                <div style={{ marginTop: "20px", marginLeft: "14px"}}>
                                    <p style={{ color: "#878787", fontSize: "12px" }}>Pool size</p>
                                    <div className="progress" style={{backgroundColor:"#878787",borderRadius:"20px", height:"10px",marginBottom:"10px"}}>
                                        <div
                                            className={card2styles.progress}
                                            role="progressbar"
                                            aria-valuenow={70}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            style={{ width: "60%" }}
                                        >
                                            
                                        </div>
                                    </div>
       
                                    <p style={{color:"white",fontSize:"12px"}}>42,293,740 $GEMS <span style={{color:"#878787",fontSize:"12px"}}>of 1,666,666,667 $GEMS</span></p>
                                    <div>
                                        <p style={{color:"#878787",fontSize:"12px"}}>Stake Date</p>
                                        <div>
                                            <div className='row'>
                                                <div className='col-4 col-sm-4 col-lg-4'>
                                               <p className={card2styles.paraa}>May 24 12:00am UTC</p>
                                                </div>
                                                <div className='col-2 col-sm-2 col-lg-2'>
                                                   <p className={card2styles.paraa}>-</p> 
                                                    </div>
                                                    <div className='col-4 col-sm-4 col-lg-4' style={{textAlign:"left"}}>
                                                  <p className={card2styles.paraa}>
                                                  August 24 12:00am UTC</p> 
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-6 col-6'>
                                        <p style={{color:"#878787",fontSize:"12px"}}>Balance</p>
                                        <h5 style={{color:"white",fontSize:"16px"}}>3,000 $GEMS</h5>
                                        </div>
                                        <div className='col-sm-6 col-6'>
                                        <p style={{color:"#878787",fontSize:"12px"}}>Rewards</p>
                                        <h5 style={{color:"#815efa",fontSize:"16px"}}>540 $GEMS</h5>
                                        </div>
                                    </div>
                                    <br></br>
                                    <button className={card2styles.btn12} data-bs-toggle="modal"
    data-bs-target="#exampleModalCenter2">Unstake</button>
    <Modal2></Modal2>
                                    <p className={card2styles.paraaa}>Penalty charge for early unstake </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='col-sm-6 col col-lg-6'>
                        <div className={card2styles.col4}>
                    <div className={card2styles.stakingcards} style={{boxShadow:"0px 0px 9px 3px #6A8EFFCC;"}}>
                        <div className={card2styles.blend}>
                            <img className={card2styles.img33} src="banner1.png" alt="Card image cap" />
                            </div>
                            <h5 className={card2styles.head5}>Platinum Tier<span className={card2styles.h5complete}>Completed</span></h5>
                            <div className="card-body" style={{paddingBottom:"48px"}}>
                                <div className='row' style={{ marginLeft: "2px" }}>
                                    <div className='col-lg-4  col-sm-4 col-4'>
                                        <p style={{ color: "#878787", fontSize: "12px" }}>Stake Period</p>
                                        <h6 style={{ color: "white" }}>12 Month</h6>
                                    </div>
                                    <div className='col-lg-4  col-sm-4 col-4'>
                                        <p style={{ color: "#878787", fontSize: "12px" }}> Lock-Up Period</p>
                                        <h6 style={{ color: "white" }}>8 Weeks</h6>
                                    </div>
                                    <div className='col-lg-4  col-sm-4 col-4'>
                                        <p style={{ color: "#878787", fontSize: "12px" }}>APY</p>
                                        <h6 style={{ color: "white" }}>21%</h6>
                                    </div>
                                </div>
                                <div style={{ marginTop: "20px", marginLeft: "14px"}}>
                                    <p style={{ color: "#878787", fontSize: "12px" }}>Pool size</p>
                                    <div className="progress" style={{backgroundColor:"#878787",borderRadius:"20px", height:"10px",marginBottom:"10px"}}>
                                        <div
                                            className={card2styles.progress}
                                            role="progressbar"
                                            aria-valuenow={70}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            style={{ width: "60%" }}
                                        >
                                            
                                        </div>
                                    </div>
       
                                    <p style={{color:"white",fontSize:"12px"}}>42,293,740 $GEMS <span style={{color:"#878787",fontSize:"12px"}}>of 1,666,666,667 $GEMS</span></p>
                                    <div>
                                        <p style={{color:"#878787",fontSize:"12px"}}>Stake Date</p>
                                        <div>
                                            <div className='row'>
                                                <div className='col-4 col-sm-4 col-lg-4'>
                                               <p className={card2styles.paraa}>May 24 12:00am UTC</p>
                                                </div>
                                                <div className='col-2 col-sm-2 col-lg-2'>
                                                   <p className={card2styles.paraa}>-</p> 
                                                    </div>
                                                    <div className='col-4 col-sm-4 col-lg-4' style={{textAlign:"left"}}>
                                                  <p className={card2styles.paraa}>
                                                  August 24 12:00am UTC</p> 
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-6 col-6'>
                                        <p style={{color:"#878787",fontSize:"12px"}}>Balance</p>
                                        <h5 style={{color:"white",fontSize:"16px"}}>3,000 $GEMS</h5>
                                        </div>
                                        <div className='col-sm-6 col-6'>
                                        <p style={{color:"#878787",fontSize:"12px"}}>Rewards</p>
                                        <h5 style={{color:"#815efa",fontSize:"16px"}}>630 $GEMS</h5>
                                        </div>
                                    </div>
                                    <br></br>
                                    <button className={card2styles.btn10}>Claim</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card2;