import Head from 'next/head'
import Image from 'next/image'
import historystyles from '../styles/History.module.css'
import Table from '../components/table'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSearch,
  faAmbulance,
  faAnchor,
  faBars,
  faToggleOff

} from "@fortawesome/free-solid-svg-icons";
export default function StakingHistory() {
  const showContent = () => {

    let show = document.getElementById("show");

    if (show.style.display === "block") {
      show.style.display = "none";
    } else {
      show.style.display = "block";

    }


  }
  const showContent2 = () => {

    let shows = document.getElementById("shows");

    if (shows.style.display === "block") {
      shows.style.display = "none";
    } else {
      shows.style.display = "block";

    }


  }
  return (

    <>
      <Head>
        <title>Create Next App</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>


      </Head>
      <div className={historystyles.con}>
        <div className="row">
          <div className='col-lg-2 col-sm-6 col-6'>

            <img src="logo.png"></img>

          </div>
          <div className='col-lg-3 col-sm-6 col-6'>
            <button className={historystyles.btn1}>
              Apply for Subscription
            </button>
          </div>
          <div className='col-lg-2 col-sm-12 col-12'>

            <div className={historystyles.div2}>
              <input type="text" className={historystyles.input11} placeholder=" Search" />
            </div>



          </div>

          <div className='col-lg-5 col-sm-12 col-12' style={{ textAlign: "center" }} >

            <div className={historystyles.div3}>
              <span className={historystyles.network}>
                <img src="bar.png"></img>
                &nbsp;&nbsp;BSC</span>
              <span className={historystyles.address}>
                <span className={historystyles.level1}>Level 1</span>
                &nbsp; <span style={{fontSize:"14px"}}>0x24485..3483</span>
                <img src="ellipse1.png" className={historystyles.img1}></img>
              </span>

            </div>

          </div>
          <div className={historystyles.baricon} >
            <i className="fa-solid fa-bars" onClick={showContent} style={{ color: "white", marginLeft: "10px", cursor: "pointer", marginTop: "10px" }}></i>
            <i className="fa-solid fa-bars" onClick={showContent2} style={{ color: "white", marginRight: "10px", cursor: "pointer", marginTop: "10px", float: "right" }}></i>
          </div>
        </div>
      </div>
      <div className="container-fluid" >
        <div className="row ">
          <div className={historystyles.navColumn} style={{ backgroundImage: "linear-gradient(#331939, #191729)"}}>
            <div className={historystyles.column33} id="show">
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <ul
                  className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                  id="menu"
                >
                  <li className="nav-item">
                    <Link href="/" ><a className="nav-link align-middle px-0"><span className="ms-1 d-sm-inline" style={{ color: "#6a8eff", fontWeight: "bold" ,fontSize:"14px"}}>Home</span></a></Link>
                  </li>
                  <li>
            <Link href="#"><a className="nav-link px-0 align-middle"><span className="ms-1 d-sm-inline"  style={{color:"#878787",fontWeight:"bold",fontSize:"14px"}}>Marketplace</span></a></Link>
           
          </li>
          <li>
            <Link href="#"><a className="nav-link px-0 align-middle"><span className="ms-1  d-sm-inline" style={{color:"#878787",fontWeight:"bold",fontSize:"14px"}}>Defi Union</span></a></Link>
          </li>
          <li>
            <Link href="#"><a className="nav-link px-0 align-middle"><span className="ms-1 d-sm-inline" style={{color:"white",fontWeight:"bold",fontSize:"14px"}}>Play 2 Earn</span></a></Link>
            
          </li>
          <li>
            <Link
              href="#"><a className="nav-link px-0 align-middle"><span className="ms-1  d-sm-inline" style={{color:"#878787",fontWeight:"bold",fontSize:"14px"}}>Streamer Hub</span></a></Link>
           </li>
           <li>
            <Link href="#"><a className="nav-link px-0 align-middle"><span className="ms-1  d-sm-inline" style={{color:"#878787",fontWeight:"bold",fontSize:"14px"}}>GEMS Academy </span></a></Link>
           </li>
           <li>
            <Link href="#"><a className="nav-link px-0 align-middle"><span className="ms-1 d-sm-inline" style={{color:"#878787",fontWeight:"bold",fontSize:"14px"}}>Talent Agency</span></a></Link>
           </li>
           <li>
            <Link href="#"><a className="nav-link px-0 align-middle"><span className="ms-1 d-sm-inline" style={{color:"#878787",fontWeight:"bold",fontSize:"14px"}}>Guild DAO</span></a></Link>
           </li>
           <li>
            <Link href="#"><a className="nav-link px-0 align-middle"><span className="ms-1  d-sm-inline" style={{color:"#878787",fontWeight:"bold",fontSize:"14px"}}>Play with gems</span></a></Link>
           </li>
                </ul>
                <hr />
                <div className={historystyles.addMar}>
                  <Link href="#"><a><img src="v2.png" className={historystyles.imgss}></img></a></Link>
       <Link href="#"><a><img src="v3.png" className={historystyles.imgs}></img></a></Link>
       <Link href="#"><a><img src="v4.png" className={historystyles.imgs}></img></a></Link>
       <br></br>
       <br></br>
       <Link href="#"><a style={{color:"#878787", textDecoration:"none", fontSize:"12px",fontWeight:"500px"}} >Contact</a></Link><br></br>
       <Link href="#"><a style={{color:"#878787",textDecoration:"none",fontSize:"12px",fontWeight:"500px" }}>Privacy policy</a></Link><br></br>
       <Link href="#"><a style={{color:"#878787",textDecoration:"none",fontSize:"12px",fontWeight:"500px"}}  >Terms & Conditions</a></Link>
                </div>
              </div>
            </div>
          </div>

          <div className={historystyles.cardColumn} style={{ backgroundImage: "linear-gradient(#31396E,#121216)" }}>

            <div className={historystyles.centerCol}>
              <h1 className={historystyles.heading}>$GEMS Staking</h1>
              <p className={historystyles.heading1}>Stake your $GEMS in GEMS ecosystem</p>
              <br></br>
              <br></br>
              <h5 className={historystyles.heads}>Dashboard</h5>
              <div className='container' style={{ marginTop: "20px" }}>
                <div className='row' style={{ backgroundColor: "#1d1d37", padding: "20px", borderRadius: "10px",border: "1px solid #3C3F57" }}>
               
                  <div className='col-sm-4 col-4 col-lg-4' >
                    <p className={historystyles.para}>Total Value Locked:</p>
                    <h6 className={historystyles.head1}>20,834,315 $GEMS</h6>
                  </div>
                 
                  <div className='col-sm-4 col-4 col-lg-4'  >
                    <p className={historystyles.para}>Available Balance:</p>
                    <h6 className={historystyles.head1}>34,310 $GEMS</h6>
                  </div>
                  <div className='col-sm-4 col-4 col-lg-4' >
                    <p className={historystyles.para}>Total Earnings:</p>
                    <h6 className={historystyles.head7}>4,315 $GEMS</h6>
                  </div>
                </div>
              </div>
              <div className={historystyles.detail}>

                <div className='container'>
                  <br></br>
                  <h4 className={historystyles.pool}>Staking Pools</h4>
                  <br></br>
                  <div className={historystyles.myBox}>
                    <Link href="/stakeConnected"><a><h4 className={historystyles.details}>All Pools</h4></a></Link>
                </div>
           
            <Link  href="/stakeHistory"><a><h4 className={historystyles.detail2} >Staking History</h4></a></Link>
                    <hr className={historystyles.hr1}></hr>
                    <img src="lines.png" className={historystyles.lines1}></img>
                  <Table></Table>  
                
                  </div>

                </div>
              </div>

            </div>
            <div className={historystyles.walletColumns}style={{ backgroundImage: "linear-gradient(#331939, #191729)" }}>
              <div className={historystyles.column4} id="shows">
                <div className=" text-white">
                  <div className="accordion" id="accordionExample" style={{ width: "fit-content",marginTop:"10px" }} >
                    <div className="accordion-item" style={{ backgroundColor: "#25242d" }}>
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          style={{ backgroundColor: "#25242d", color: "white" ,fontSize:"14px"}}
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
                        <div className="accordion-body" style={{ color: "white"}}>
                          <span className={historystyles.username}>Username</span>
                          <span className={historystyles.username1}> 0x24485..3483</span>
                          <div className={historystyles.balance}>
                            <h5 style={{ color: "#5a78d4",fontSize:"14px" }}>Total Balance</h5>
                            <h6 style={{fontSize:"16px"}}>1,000,000,000USDT</h6>
                          </div>
                          <div style={{ marginTop: "20px" }}>
                            <span className={historystyles.bnb}>BNB</span>
                            <span className={historystyles.bnbnum}>3.5</span>
                            <br></br>
                            <span className={historystyles.bnb1}>Binance</span>
                            <span className={historystyles.bnbnum1}>8000USDT</span>
                          </div>
                          <div style={{ marginTop: "20px", backgroundColor: "black", padding: "5px 10px 5px 10px", borderRadius: "10px",marginRight:"-10px",marginLeft:"-10px" }}>
                            <span className={historystyles.bnb}>GEMS</span>
                            <span className={historystyles.bnbnum}>3.5</span>
                            <br></br>
                            <span className={historystyles.bnb1}>GEMS</span>
                            <span className={historystyles.bnbnum1}>8000USDT</span>
                          </div>
                          <div style={{ textAlign: "center", marginTop: "20px" }}>
                            <button className={historystyles.btn2}>Add Funds</button>
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
                              <h6 style={{fontSize:"14px"}}>NFT Name</h6>
                              <h6  style={{fontSize:"12px"}}>#2451</h6>
                            </div>
                          </div>
                          <div className='row' style={{ marginTop: "10px", backgroundColor: "black", paddingTop: "10px", borderRadius: "10px" }}>
                            <div className='col-sm-3  col-lg-3 col-3'>
                              <img src="img2.png"></img>
                            </div>
                            <div className='col-sm-6  col-lg-6 col-6'>
                              <h6 style={{fontSize:"14px"}}>NFT Name</h6>
                              <h6 style={{fontSize:"12px"}}>#2451</h6>
                            </div>
                          </div>
                          <div className='row' style={{ marginTop: "15px" }}>
                            <div className='col-sm-3  col-lg-3 col-3'>
                              <img src="img3.png"></img>
                            </div>
                            <div className='col-sm-6  col-lg-6 col-6'>
                              <h6 style={{fontSize:"14px"}}>NFT Name</h6>
                              <h6 style={{fontSize:"12px"}}>#2451</h6>
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
                            <div className='col-sm-3  col-lg-3 col-3'>
                              <img src="img1.png"></img>
                            </div>
                            <div className='col-sm-6  col-lg-6 col-6'>
                              <h6  style={{fontSize:"14px"}}>NFT Name</h6>
                              <h6  style={{fontSize:"12px"}}>#2451</h6>
                            </div>
                            <div className='col-sm-3  col-lg-3 col-3'>
                              <p style={{ fontSize: "12px",marginLeft:"-25px" }}>Remain Time:8:36h</p>
                            </div>
                          </div>
                          <div className='row' style={{ marginTop: "10px", backgroundColor: "black", paddingTop: "10px", borderRadius: "10px" }}>
                            <div className='col-sm-3  col-lg-3 col-3'>
                              <img src="img2.png"></img>
                            </div>
                            <div className='col-sm-6  col-lg-6 col-6'>
                              <h6  style={{fontSize:"14px"}}>NFT Name</h6>
                              <h6  style={{fontSize:"12px"}}>#2451</h6>
                            </div>
                            <div className='col-sm-3  col-lg-3 col-3'>
                              <p style={{ fontSize: "12px",marginLeft:"-25px" }}>Remain Time:8:36h</p>
                            </div>
                          </div>
                          <div className='row' style={{ marginTop: "15px" }}>
                            <div className='col-sm-3  col-lg-3 col-3'>
                              <img src="img3.png"></img>
                            </div>
                            <div className='col-sm-6  col-lg-6 col-6'>
                              <h6 style={{fontSize:"14px"}}>NFT Name</h6>
                              <h6 style={{fontSize:"12px"}}>#2451</h6>
                            </div>
                            <div className='col-sm-3  col-lg-3 col-3'>
                              <p style={{ fontSize: "12px" ,marginLeft:"-25px"}}>Remain Time:8:36h</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='container'>
                    <div className='row' style={{ marginTop: "100px", paddingBottom: "20px" }}>
                      <div className='col-lg-7 col-7' style={{ textAlign: "right" }}>
                        <p style={{ color: "#878787" ,fontSize:"12px"}}>
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
          </div>
        </div>


      </>


      )
}
