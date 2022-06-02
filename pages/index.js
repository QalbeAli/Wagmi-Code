import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Card1 from '../components/cards';
import FAQ from '../components/faq';
import Link from 'next/link'
import Table from '../components/table';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Connect } from '../components/walletConnectButton';

import {
  faSearch,
  faAmbulance,
  faAnchor,
  faBars,
  faToggleOff

} from "@fortawesome/free-solid-svg-icons";
export default function Staking() {
const addBorder1=()=>{
  let pootTab=document.getElementById("nav-home-tab");
  let  historyTab=document.getElementById("nav-profile-tab");
  pootTab.style.borderBottom="3px solid #885BFF";
  historyTab.style.borderBottom="none"
}
const addBorder2=()=>{
  let pootTab=document.getElementById("nav-home-tab");
  let  historyTab=document.getElementById("nav-profile-tab");
  pootTab.style.borderBottom="none";
  historyTab.style.borderBottom="3px solid #885BFF";
}
  const showContent = () => {

    let show = document.getElementById("show");

    if (show.style.display === "block") {
      show.style.display = "none";
    } else {
      show.style.display = "block";
    }
  }
  
  const resetMenu=()=>{
    if(window.innerWidth>="990"){
      show.style.display="flex"
    }
    else if(window.innerWidth<"990"){
      show.style.display="none"
    }

  }
  if(typeof window!=="undefined"){
  window.addEventListener("resize",resetMenu)
  }
  const showContent2 = () => {

    let shows = document.getElementById("shows");
    if (shows.style.display === "block") {
      shows.style.display = "none";
    } else {
      shows.style.display = "block";
    }

  }
  
  const resetMenu1=()=>{
    if(window.innerWidth>="990"){
      shows.style.display="flex"
    }
    else if(window.innerWidth<"990"){
      shows.style.display="none"
    }

  }
  if(typeof window!=="undefined"){
  window.addEventListener("resize",resetMenu1)
  }
  return (

    <>
      <Head>
        <title>Create Next App</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
      </Head>
      <div className={styles.con}>
        <div className="row">
          <div className='col-lg-2 col-sm-6 col-6' >
            <img src="logo.png"></img>
          </div>
          <div className='col-lg-3 col-sm-6 col-6'>
            <button className={styles.btn1}>
              Apply for Subscription
            </button>
          </div>
          <div className='col-lg-2 col-sm-12 col-12'>

            <div className={styles.div2}>
              <input type="text" className={styles.input11} placeholder=" Search" />
            </div>
          </div>

          <div className='col-lg-5 col-sm-12 col-12' style={{ textAlign: "center" }} >


            {/* <span className={styles.network}>
                <img src="bar.png"></img>
                &nbsp;&nbsp;BSC</span>
              <span className={styles.address}>
                <span className={styles.level1}>Level 1</span>
                &nbsp; <span style={{ fontSize: "14px" }}>0x24485..3483</span>
                <img src="ellipse1.png" className={styles.img1}></img>
              </span> */}
            {/* <ConnectButton  accountStatus={{
                smallScreen: 'address',
                largeScreen: 'address',
              }} /> */}
            <Connect></Connect>


          </div>
          <div className={styles.baricon} >
            <i className="fa-solid fa-bars" onClick={showContent} style={{ color: "white", marginLeft: "10px", cursor: "pointer", marginTop: "10px" }}></i>
            <i className="fa-solid fa-bars" onClick={showContent2}style={{ color: "white", marginRight: "10px", cursor: "pointer", marginTop: "10px", float: "right" }}></i>
          </div>
        </div>
      </div>
      <div className="container-fluid"  >
        <div className="row" >

          <div className={styles.navColumn} style={{ backgroundImage: "linear-gradient(#331939, #191729)", }}>
            <div className={styles.column33} id="show">
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-70 ">
                <ul
                  className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                  id="menu"
                >
                  <li className="nav-item">
                    <Link href="/" ><a className="nav-link align-middle px-0"><span className={styles.navLinkHome}  >Home</span></a></Link>
                  </li>
                  <li>
                    <Link href="#"><a className="nav-link px-0 align-middle"><span className={styles.navLinks} >Marketplace</span></a></Link>

                  </li>
                  <li>
                    <Link href="#"><a className="nav-link px-0 align-middle"><span className={styles.navLinks}  >Defi Union</span></a></Link>
                  </li>
                  <li>
                    <Link href="#"><a className="nav-link px-0 align-middle"><span className={styles.navLinkPlay}  >Play 2 Earn</span></a></Link>

                  </li>
                  <li>
                    <Link
                      href="#"><a className="nav-link px-0 align-middle"><span className={styles.navLinks}   >Streamer Hub</span></a></Link>
                  </li>
                  <li>
                    <Link href="#"><a className="nav-link px-0 align-middle"><span className={styles.navLinks}  >GEMS Academy </span></a></Link>
                  </li>
                  <li>
                    <Link href="#"><a className="nav-link px-0 align-middle"><span className={styles.navLinks}  >Talent Agency</span></a></Link>
                  </li>
                  <li>
                    <Link href="#"><a className="nav-link px-0 align-middle"><span className={styles.navLinks}  >Guild DAO</span></a></Link>
                  </li>
                  <li>
                    <Link href="#"><a className="nav-link px-0 align-middle"><span className={styles.navLinks}  >Play with gems</span></a></Link>
                  </li>
                </ul>
                <hr />
                <div className={styles.addMar}>
                  <Link href="#"><a><img src="v2.png" className={styles.imgss}></img></a></Link>
                  <Link href="#"><a><img src="v3.png" className={styles.imgs}></img></a></Link>
                  <Link href="#"><a><img src="v4.png" className={styles.imgs}></img></a></Link>
                  <br></br>
                  <br></br>
                  <Link href="#"><a style={{ color: "#878787", textDecoration: "none", fontSize: "12px", fontWeight: "500px" }} >Contact</a></Link><br></br>
                  <Link href="#"><a style={{ color: "#878787", textDecoration: "none", fontSize: "12px", fontWeight: "500px" }}>Privacy policy</a></Link><br></br>
                  <Link href="#"><a style={{ color: "#878787", textDecoration: "none", fontSize: "12px", fontWeight: "500px" }}  >Terms & Conditions</a></Link>
                </div>
              </div>
            </div>
          </div>


          <div className={styles.cardColumn} style={{ backgroundImage: "linear-gradient(#31396E,#121216)" }}>

            <div className={styles.centerCol}>
              <h1 className={styles.heading}>$GEMS Staking</h1>
              <p className={styles.heading1}>Stake your $GEMS in GEMS ecosystem</p>
              <br></br>
              <br></br>
              <h5 className={styles.heads}>Dashboard</h5>
              <div className='container' style={{ marginTop: "20px" }}>
                <div className='row' style={{ backgroundColor: "#1d1d37", padding: "20px", borderRadius: "10px", border: "1px solid #3C3F57" }}>

                  <div className='col-sm-4 col-4 col-lg-4' >
                    <p className={styles.para}>Total Value Locked:</p>
                    <h6 className={styles.head1}>20,834,315 $GEMS</h6>
                  </div>

                  <div className='col-sm-4 col-4 col-lg-4'  >
                    <p className={styles.para}>Available Balance:</p>
                    <h6 className={styles.head1}>-</h6>
                  </div>
                  <div className='col-sm-4 col-4 col-lg-4' >
                    <p className={styles.para}>Total Earnings:</p>
                    <h6 className={styles.head1}>-</h6>
                  </div>
                </div>
              </div>
              <div className={styles.detail}>

                <div className='container'>
                  <br></br>
                  <h4 className={styles.pool}>Staking Pools</h4>
                  <br></br>
                  <nav>
                    <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                      <a className={styles.tab1}  onClick={addBorder1} id="nav-home-tab" data-bs-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">  All Pools</a>
                      <a className={styles.tab2}  onClick={addBorder2} id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Staking History</a>

                    </div>
                  </nav>
                  <br></br>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <Card1></Card1>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <Table></Table>
                    </div>
                  </div>

                  <br></br>
                  <br></br>
                  <FAQ></FAQ>
                </div>

              </div>
            </div>

          </div>
          <div className={styles.walletColumns} style={{ backgroundImage: "linear-gradient(#331939, #191729)" }} >
            <div className={styles.column4} id="shows">
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
        </div>
      </div>


    </>


  )
}
