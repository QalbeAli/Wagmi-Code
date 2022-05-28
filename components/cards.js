import cardstyles from '../styles/Card.module.css';
const Card1 = () => {
    return (
        <>
            <div className='container-fluid' >
                <div className='row'>
                    <div className='col-sm-6 col col-lg-6'>
                        <div className="card" style={{ width: "19rem", padding: "0px", backgroundColor: "#212228" }}>
                            <img className={cardstyles.img33} src="banner1.png" alt="Card image cap" />
                            <h5 className={cardstyles.head5}>Bronze Tier</h5>
                            <div className="card-body">
                                <div className='row' style={{ marginLeft: "2px" }}>
                                    <div className='col-lg-4'>
                                        <p style={{ color: "#878787", fontSize: "12px" }}>Stake Period</p>
                                        <h6 style={{ color: "white" }}>3 Months</h6>
                                    </div>
                                    <div className='col-lg-4'>
                                        <p style={{ color: "#878787", fontSize: "10px" }}> Lock-Up Period</p>
                                        <h6 style={{ color: "white" }}>2 Weeks</h6>
                                    </div>
                                    <div className='col-lg-4'>
                                        <p style={{ color: "#878787", fontSize: "12px" }}>APY</p>
                                        <h6 style={{ color: "white" }}>12%</h6>
                                    </div>
                                </div>
                                <div style={{ marginTop: "20px", marginLeft: "14px"}}>
                                    <p style={{ color: "#878787", fontSize: "12px" }}>Pool size</p>
                                    <div className="progress" style={{backgroundColor:"#878787",borderRadius:"20px", height:"10px",marginBottom:"10px"}}>
                                        <div
                                            className={cardstyles.progress}
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
                                        <h5 style={{color:"white"}}>-</h5>
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                        <p style={{color:"#878787",fontSize:"12px"}}>Balance</p>
                                        <h5 style={{color:"white"}}>-</h5>
                                        </div>
                                        <div className='col-sm-6'>
                                        <p style={{color:"#878787",fontSize:"12px"}}>Rewards</p>
                                        <h5 style={{color:"#815efa"}}>-</h5>
                                        </div>
                                    </div>
                                    <br></br>
                                    <button className={cardstyles.btn4}>Connect Wallet to Stake</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col col-lg-6'>
                    <div className="card" style={{ width: "19rem", padding: "0px", backgroundColor: "#212228" }}>
                            <img className={cardstyles.img33} src="banner1.png" alt="Card image cap" />
                            <h5 className={cardstyles.head5}>Silver Tier</h5>
                            <div className="card-body">
                                <div className='row' style={{ marginLeft: "2px" }}>
                                    <div className='col-lg-4'>
                                        <p style={{ color: "#878787", fontSize: "12px" }}>Stake Period</p>
                                        <h6 style={{ color: "white" }}>6 Months</h6>
                                    </div>
                                    <div className='col-lg-4'>
                                        <p style={{ color: "#878787", fontSize: "10px" }}> Lock-Up Period</p>
                                        <h6 style={{ color: "white" }}>4 Weeks</h6>
                                    </div>
                                    <div className='col-lg-4'>
                                        <p style={{ color: "#878787", fontSize: "12px" }}>APY</p>
                                        <h6 style={{ color: "white" }}>15%</h6>
                                    </div>
                                </div>
                                <div style={{ marginTop: "20px", marginLeft: "14px"}}>
                                    <p style={{ color: "#878787", fontSize: "12px" }}>Pool size</p>
                                    <div className="progress" style={{backgroundColor:"#878787",borderRadius:"20px", height:"10px",marginBottom:"10px"}}>
                                        <div
                                            className={cardstyles.progress}
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
                                        <h5 style={{color:"white"}}>-</h5>
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                        <p style={{color:"#878787",fontSize:"12px"}}>Balance</p>
                                        <h5 style={{color:"white"}}>-</h5>
                                        </div>
                                        <div className='col-sm-6'>
                                        <p style={{color:"#878787",fontSize:"12px"}}>Rewards</p>
                                        <h5 style={{color:"#815efa"}}>-</h5>
                                        </div>
                                    </div>
                                    <br></br>
                                    <button className={cardstyles.btn4}>Connect Wallet to Stake</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='row' style={{marginTop:"20px"}}>
                    <div className='col-sm-6 col col-lg-6'>
                        <div className="card" style={{ width: "19rem", padding: "0px", backgroundColor: "#212228" }}>
                            <img className={cardstyles.img33} src="banner1.png" alt="Card image cap" />
                            <h5 className={cardstyles.head5}>Gold Tier</h5>
                            <div className="card-body">
                                <div className='row' style={{ marginLeft: "2px" }}>
                                    <div className='col-lg-4'>
                                        <p style={{ color: "#878787", fontSize: "12px" }}>Stake Period</p>
                                        <h6 style={{ color: "white" }}>9 Months</h6>
                                    </div>
                                    <div className='col-lg-4'>
                                        <p style={{ color: "#878787", fontSize: "10px" }}> Lock-Up Period</p>
                                        <h6 style={{ color: "white" }}>6 Weeks</h6>
                                    </div>
                                    <div className='col-lg-4'>
                                        <p style={{ color: "#878787", fontSize: "12px" }}>APY</p>
                                        <h6 style={{ color: "white" }}>18%</h6>
                                    </div>
                                </div>
                                <div style={{ marginTop: "20px", marginLeft: "14px"}}>
                                    <p style={{ color: "#878787", fontSize: "12px" }}>Pool size</p>
                                    <div className="progress" style={{backgroundColor:"#878787",borderRadius:"20px", height:"10px",marginBottom:"10px"}}>
                                        <div
                                            className={cardstyles.progress}
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
                                        <h5 style={{color:"white"}}>-</h5>
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                        <p style={{color:"#878787",fontSize:"12px"}}>Balance</p>
                                        <h5 style={{color:"white"}}>-</h5>
                                        </div>
                                        <div className='col-sm-6'>
                                        <p style={{color:"#878787",fontSize:"12px"}}>Rewards</p>
                                        <h5 style={{color:"#815efa"}}>-</h5>
                                        </div>
                                    </div>
                                    <br></br>
                                    <button className={cardstyles.btn4}>Connect Wallet to Stake</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col col-lg-6'>
                    <div className="card" style={{boxShadow:"0px 0px 9px 3px #6A8EFFCC;", width: "19rem", padding: "0px", backgroundColor: "#212228" }}>
                            <img className={cardstyles.img33} src="banner1.png" alt="Card image cap" />
                            <h5 className={cardstyles.head5}>Platinum Tier</h5>
                            <div className="card-body">
                                <div className='row' style={{ marginLeft: "2px" }}>
                                    <div className='col-lg-4'>
                                        <p style={{ color: "#878787", fontSize: "12px" }}>Stake Period</p>
                                        <h6 style={{ color: "white" }}>12 Month</h6>
                                    </div>
                                    <div className='col-lg-4'>
                                        <p style={{ color: "#878787", fontSize: "10px" }}> Lock-Up Period</p>
                                        <h6 style={{ color: "white" }}>8 Weeks</h6>
                                    </div>
                                    <div className='col-lg-4'>
                                        <p style={{ color: "#878787", fontSize: "12px" }}>APY</p>
                                        <h6 style={{ color: "white" }}>21%</h6>
                                    </div>
                                </div>
                                <div style={{ marginTop: "20px", marginLeft: "14px"}}>
                                    <p style={{ color: "#878787", fontSize: "12px" }}>Pool size</p>
                                    <div className="progress" style={{backgroundColor:"#878787",borderRadius:"20px", height:"10px",marginBottom:"10px"}}>
                                        <div
                                            className={cardstyles.progress}
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
                                        <h5 style={{color:"white"}}>-</h5>
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                        <p style={{color:"#878787",fontSize:"12px"}}>Balance</p>
                                        <h5 style={{color:"white"}}>-</h5>
                                        </div>
                                        <div className='col-sm-6'>
                                        <p style={{color:"#878787",fontSize:"12px"}}>Rewards</p>
                                        <h5 style={{color:"#815efa"}}>-</h5>
                                        </div>
                                    </div>
                                    <br></br>
                                    <button className={cardstyles.btn4}>Connect Wallet to Stake</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Card1;