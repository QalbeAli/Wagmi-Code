import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FAQ from '../components/faq';
import Link from 'next/link'
import Table from '../components/table';

import CardContainer from '../components/cardContainer';
import Header from '../components/header';
import useTokenBalance from '../hooks/useTokenBalance';
import useDashboardData from '../hooks/useDashboardData';
import { Nav, Tab } from 'react-bootstrap';
export default function Staking({ }) {
  const {
    totalAmount,
    pendingRewards
  } = useDashboardData()

  const balance = useTokenBalance()

  return (

    <>
      <Head>
        <title>Gems Staking</title>
      </Head>
      <Header />
      <div   >
        <div className="d-flex position-relative" >

          <div
            id="left-sidebar"
            className={styles.navColumn} style={{ backgroundImage: "linear-gradient(#331939, #191729)", }}>
            <div className={styles.column33} >
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
            <div className='container'>

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
                      <h6 className={styles.head1}>{totalAmount ? Number(totalAmount).toLocaleString() : "-"} $GEMS</h6>
                    </div>

                    <div className='col-sm-4 col-4 col-lg-4'  >
                      <p className={styles.para}>Available Balance:</p>
                      <h6 className={styles.head1}>
                        {
                          balance ? balance.formatted +
                            "  $GEMS" : "-"
                        }
                      </h6>
                    </div>
                    <div className='col-sm-4 col-4 col-lg-4' >
                      <p className={styles.para}>Total Earnings:</p>
                      <h6 className={styles.head1}>
                        {
                          pendingRewards ? Number(pendingRewards).toLocaleString() : "-"
                        }
                      </h6>
                    </div>
                  </div>
                </div>
                <div className={styles.detail}>

                  <div className='container'>
                    <br></br>
                    <h4 className={styles.pool}>Staking Pools</h4>
                    <br></br>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="allpools">
                      <Nav className='nav_border' >
                        <Nav.Link
                          className={'tab'}
                          eventKey="allpools">All Pools</Nav.Link>
                        <Nav.Link
                          className={'tab'}
                          eventKey="stakehistory">Staking History</Nav.Link>
                      </Nav>
                      <br></br>
                      <Tab.Content>
                        <Tab.Pane eventKey="allpools">
                          <CardContainer />
                        </Tab.Pane>
                        <Tab.Pane eventKey="stakehistory">
                          <Table></Table>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>


                    <br></br>
                    <br></br>
                    <FAQ></FAQ>
                  </div>

                </div>
              </div>
            </div>

          </div>

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
        </div>
      </div>


    </>


  )
}
