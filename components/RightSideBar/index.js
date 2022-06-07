import styles from '../../styles/Home.module.css'

export default function RightSideBar() {
    return (
        <div className={styles.walletColumns}
            id="right-sidebar"

            style={{ backgroundImage: "linear-gradient(#331939, #191729)" }} >

            <div className={styles.column4}>
                <div className=" text-white">
                    <div id="accordionExample" style={{ width: "fit-content", marginTop: "10px" }} className={styles.accordian} >
                        <div className="accordion-item" style={{ backgroundColor: "#25242d" }}>
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button"
                                    style={{ backgroundColor: "#25242d", color: "white", fontSize: "14px" }}
                                    type="button"
                                    disabled
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="false"
                                    aria-controls="collapseOne"

                                >
                                    My Wallet
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body" style={{ color: "white" }}>
                                    <span className={styles.username}>Username</span>
                                    <span className={styles.username1}> 0x24485..3483</span>
                                    <div className={styles.balance}>
                                        <h5 style={{ color: "#5a78d4", fontSize: "14px" }}>Total Balance</h5>
                                        <h6 style={{ fontSize: "16px" }}>1,000,000,000USDT</h6>
                                    </div>
                                    <div style={{ marginTop: "20px" }}>
                                        <span className={styles.bnb}>BNB</span>
                                        <span className={styles.bnbnum}>3.5</span>
                                        <br></br>
                                        <span className={styles.bnb1}>Binance</span>
                                        <span className={styles.bnbnum1}>8000USDT</span>
                                    </div>
                                    <div style={{ marginTop: "20px", backgroundColor: "black", padding: "5px 10px 5px 10px", borderRadius: "10px", marginRight: "-10px", marginLeft: "-10px" }}>
                                        <span className={styles.bnb}>GEMS</span>
                                        <span className={styles.bnbnum}>3.5</span>
                                        <br></br>
                                        <span className={styles.bnb1}>GEMS</span>
                                        <span className={styles.bnbnum1}>8000USDT</span>
                                    </div>
                                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                                        <button className={styles.btn2}>Add Funds</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="accordion-item" style={{ backgroundColor: "#25242d" }}>
                            <h2 className="accordion-header" id="headingTwo">
                                <button
                                    className="accordion-button"
                                    style={{ backgroundColor: "#25242d", color: "white" }}
                                    type="button"
                                    disabled
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    Owned
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse "
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <div className='row'>
                                        <div className='col-sm-3 col-lg-3 col-3'>
                                            <img src="img1.png"></img>
                                        </div>
                                        <div className='col-sm-6 col-lg-6 col-6'>
                                            <h6 style={{ fontSize: "14px" }}>NFT Name</h6>
                                            <h6 style={{ fontSize: "12px" }}>#2451</h6>
                                        </div>
                                    </div>
                                    <div className='row' style={{ marginTop: "10px", backgroundColor: "black", paddingTop: "10px", borderRadius: "10px" }}>
                                        <div className='col-sm-3 col-lg-3 col-3'>
                                            <img src="img2.png"></img>
                                        </div>
                                        <div className='col-sm-6 col-lg-6 col-6'>
                                            <h6 style={{ fontSize: "14px" }}>NFT Name</h6>
                                            <h6 style={{ fontSize: "12px" }}>#2451</h6>
                                        </div>
                                    </div>
                                    <div className='row' style={{ marginTop: "15px" }}>
                                        <div className='col-sm-3 col-lg-3 col-3'>
                                            <img src="img3.png"></img>
                                        </div>
                                        <div className='col-sm-6 col-lg-6 col-6'>
                                            <h6 style={{ fontSize: "14px" }}>NFT Name</h6>
                                            <h6 style={{ fontSize: "12px" }}>#2451</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="accordion-item" style={{ backgroundColor: "#25242d" }}>
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button "
                                    style={{ backgroundColor: "#25242d", color: "white" }}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    disabled
                                    aria-controls="collapseThree"
                                >
                                    Renting
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse "
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <div className='row'>
                                        <div className='col-sm-3 col-lg-3 col-3'>
                                            <img src="img1.png"></img>
                                        </div>
                                        <div className='col-sm-6 col-lg-6 col-6'>
                                            <h6 style={{ fontSize: "14px" }}>NFT Name</h6>
                                            <h6 style={{ fontSize: "12px" }}>#2451</h6>
                                        </div>
                                        <div className='col-sm-3 col-lg-3 col-3'>
                                            <p style={{ fontSize: "12px", marginLeft: "-25px" }}>Remain Time:8:36h</p>
                                        </div>
                                    </div>
                                    <div className='row' style={{ marginTop: "10px", backgroundColor: "black", paddingTop: "10px", borderRadius: "10px" }}>
                                        <div className='col-sm-3 col-lg-3 col-3'>
                                            <img src="img2.png"></img>
                                        </div>
                                        <div className='col-sm-6 col-lg-6 col-6'>
                                            <h6 style={{ fontSize: "14px" }}>NFT Name</h6>
                                            <h6 style={{ fontSize: "12px" }}>#2451</h6>
                                        </div>
                                        <div className='col-sm-3 col-lg-3 col-3'>
                                            <p style={{ fontSize: "12px", marginLeft: "-25px" }}>Remain Time:8:36h</p>
                                        </div>
                                    </div>
                                    <div className='row' style={{ marginTop: "15px" }}>
                                        <div className='col-sm-3 col-lg-3 col-3'>
                                            <img src="img3.png"></img>
                                        </div>
                                        <div className='col-sm-6 col-lg-6 col-6'>
                                            <h6 style={{ fontSize: "14px" }}>NFT Name</h6>
                                            <h6 style={{ fontSize: "12px" }}>#2451</h6>
                                        </div>
                                        <div className='col-sm-3 col-lg-3 col-3'>
                                            <p style={{ fontSize: "12px", marginLeft: "-25px" }}>Remain Time:8:36h</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row' style={{ marginTop: "100px", paddingBottom: "20px" }}>
                            <div className='col-lg-7 col-7' style={{ textAlign: "right" }}>
                                <p style={{ color: "#878787", fontSize: "12px" }}>
                                    Wallet powered by
                                </p>
                            </div>
                            <div className='col-lg-5 col-5'>
                                <img src="logos.png"></img>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}