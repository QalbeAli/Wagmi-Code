import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card1 from '../components/cards';
import FAQ from '../components/faq';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSearch,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";
export default function Staking() {

  return (

    <>
      <Head>
        <title>Create Next App</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>


      </Head>
      <div className={styles.con}>
        <div className="row">
          <div className='col-lg-2 col-sm-6 col-6'>

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
            <div className={styles.div3}>
              <span className={styles.network}>
                <img src="v1.png"></img>
                &nbsp;&nbsp;BSC</span>
              <span className={styles.address}>
                <span className={styles.level1}>Level 1</span>
                &nbsp; 0x24485..3483
                <img src="ellipse1.png" className={styles.img1}></img>
              </span>

            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" >
  <div className="row flex-nowrap">
    {/* <div className="col-3 col-md-3 col-xl-2 px-sm-2 px-0 " style={{backgroundImage:"linear-gradient(#331939, #191729)"}}>
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item">
            <a href="#" className="nav-link align-middle px-0">
              <span className="ms-1 d-none d-sm-inline" style={{color:"#6a8eff",fontWeight:"bold"}}>Home</span>
            </a>
          </li>
          <li>
            <a
              href="#submenu1"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle"
            >
            
              <span className="ms-1 d-none d-sm-inline"  style={{color:"#878787",fontWeight:"bold"}}>Marketplace</span>{" "}
            </a>
           
          </li>
          <li>
            <a href="#" className="nav-link px-0 align-middle">
              
              <span className="ms-1 d-none d-sm-inline" style={{color:"#878787",fontWeight:"bold"}}>Defi Union</span>
            </a>
          </li>
          <li>
            <a
              href="#submenu2"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle "
            >
           
              <span className="ms-1 d-none d-sm-inline" style={{color:"white",fontWeight:"bold"}}>Play 2 Earn</span>
            </a>
            
          </li>
          <li>
            <a
              href="#submenu3"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle"
            >
        
              <span className="ms-1 d-none d-sm-inline" style={{color:"#878787",fontWeight:"bold"}}>Streamer Hub</span>{" "}
            </a>
           </li>
           <li>
            <a
              href="#submenu3"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle"
            >
        
              <span className="ms-1 d-none d-sm-inline" style={{color:"#878787",fontWeight:"bold"}}>GEMS Academy </span>{" "}
            </a>
           </li>
           <li>
            <a
              href="#submenu3"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle"
            >
        
              <span className="ms-1 d-none d-sm-inline" style={{color:"#878787",fontWeight:"bold"}}>Talent Agency</span>{" "}
            </a>
           </li>
           <li>
            <a
              href="#submenu3"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle"
            >
        
              <span className="ms-1 d-none d-sm-inline" style={{color:"#878787",fontWeight:"bold"}}>Guild DAO</span>{" "}
            </a>
           </li>
           <li>
            <a
              href="#submenu3"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle"
            >
        
              <span className="ms-1 d-none d-sm-inline" style={{color:"#878787",fontWeight:"bold"}}>Play with gems</span>{" "}
            </a>
           </li>
           </ul>
        <hr />
      <div style={{marginTop:"500px"}}>
       <a href="#"><img src="v2.png" className={styles.imgss}></img></a>
       <a href="#"><img src="v3.png" className={styles.imgs}></img></a>
       <a href="#"><img src="v4.png" className={styles.imgs}></img></a>
       <br></br>
       <br></br>
       <a style={{color:"#878787", textDecoration:"none"}} href="#">Contact</a><br></br>
       <a style={{color:"#878787",textDecoration:"none"}}  href="#">Privacy policy</a><br></br>
       <a style={{color:"#878787",textDecoration:"none"}}  href="#">Terms and Conditions</a>
      </div>
      </div>
    </div> */}
    <div className="col-xl-7 col-md-12 col-12" style={{backgroundImage:"linear-gradient(#31396E,#121216)"}}>

    <div className={styles.centerCol}>
      <h1 className={styles.heading}>$GEMS Staking</h1>
      <p className={styles.heading1}>Stake your $GEMS in GEMS ecosystem</p>
      <br></br>
      <br></br>
      <h5 className={styles.heading1}>Dashboard</h5>
      <div className='container' style={{marginTop:"20px"}}>
        <div className='row' style={{backgroundColor:"#1d1d37",padding:"20px",borderRadius:"10px"}}>
          <div className='col-sm-4 col-4 col-lg-4' style={{textAlign:"center"}}>
        <p className={styles.para}>Total Value Locked:</p>
        <h6 className={styles.head1}>20,834,315 $GEMS</h6>
          </div>
          <div className='col-sm-4 col-4 col-lg-4' style={{textAlign:"center"}}>
        <p className={styles.para}>Available Balance:</p>
        <h6 className={styles.head1}>-</h6>
          </div>
          <div className='col-sm-4 col-4 col-lg-4' style={{textAlign:"center"}}>
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
                <div className={styles.myBox}>
              <a href="#"><h4 className={styles.details} onClick={()=>alert("shdsakjdh")}>All Pools</h4></a>
                </div>
           
            <a  href="#">
            <h4 className={styles.detail2} >Staking History</h4>
            </a>
            <hr className={styles.hr1}></hr>
<Card1/>
<FAQ></FAQ>
            </div>
            
        </div>
    </div>
    
    </div>
    {/* <div className="col-3 col-md-3 col-xl-3 px-sm-2 px-0 " style={{backgroundImage:"linear-gradient(#331939, #191729)"}}>
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
      <div className="accordion" id="accordionExample" style={{width:"fit-content"}} >
  <div className="accordion-item" style={{backgroundColor:"#25242d"}}>
    <h2 className="accordion-header" id="headingOne">
      <button
        className="accordion-button"
        style={{width:"270px",backgroundColor:"#25242d", color:"white"}}
        type="button"
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
      <div className="accordion-body" style={{color:"white"}}>
      <span className={styles.username}>Username</span>
      <span className={styles.username1}> 0x24485..3483</span>
      <div className={styles.balance}>
<h5 style={{color:"#5a78d4"}}>Total Balance</h5>
<h6>1,000,000,000USDT</h6>
      </div>
      <div style={{marginTop:"20px"}}>
      <span className={styles.bnb}>BNB</span>
      <span className={styles.bnbnum}>3.5</span>
      <br></br>
      <span className={styles.bnb1}>Binance</span>
      <span className={styles.bnbnum1}>8000USDT</span>
      </div>
      <div style={{marginTop:"20px",backgroundColor:"black", padding:"10px 3px 10px 3px",borderRadius:"10px"}}>
      <span className={styles.bnb}>GEMS</span>
      <span className={styles.bnbnum}>3.5</span>
      <br></br>
      <span className={styles.bnb1}>GEMS</span>
      <span className={styles.bnbnum1}>8000USDT</span>
      </div>
      <div style={{textAlign:"center",marginTop:"20px"}}>
      <button className={styles.btn2}>Add Funds</button>
      </div>
     
      </div>
    </div>
  </div>
  <br></br>
  <div className="accordion-item"  style={{backgroundColor:"#25242d"}}>
    <h2 className="accordion-header" id="headingTwo">
      <button
        className="accordion-button"
        style={{width:"270px",backgroundColor:"#25242d", color:"white"}}
        type="button"
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
        <div className='col-sm-3'>
          <img src="img1.png"></img>
        </div>
        <div className='col-sm-6'>
          <h6>NFT Name</h6>
          <h6>#2451</h6>
        </div>
      </div>
      <div className='row' style={{marginTop:"10px" ,backgroundColor:"black",paddingTop:"10px",borderRadius:"10px"}}>
        <div className='col-sm-3'>
          <img src="img2.png"></img>
        </div>
        <div className='col-sm-6'>
          <h6>NFT Name</h6>
          <h6>#2451</h6>
        </div>
      </div>
      <div className='row' style={{marginTop:"15px"}}>
        <div className='col-sm-3'>
          <img src="img3.png"></img>
        </div>
        <div className='col-sm-6'>
          <h6>NFT Name</h6>
          <h6>#2451</h6>
        </div>
      </div>
      </div>
    </div>
  </div>
  <br></br>
  <div className="accordion-item"  style={{backgroundColor:"#25242d"}}>
    <h2 className="accordion-header" id="headingThree">
      <button
        className="accordion-button "
        style={{width:"270px",backgroundColor:"#25242d", color:"white"}}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="true"
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
        <div className='col-sm-3'>
          <img src="img1.png"></img>
        </div>
        <div className='col-sm-5'>
          <h6>NFT Name</h6>
          <h6>#2451</h6>
        </div>
        <div className='col-sm-4'>
         <p style={{fontSize:"12px"}}>Remain Time:8:36h</p> 
        </div>
      </div>
      <div className='row' style={{marginTop:"10px" ,backgroundColor:"black",paddingTop:"10px",borderRadius:"10px"}}>
        <div className='col-sm-3'>
          <img src="img2.png"></img>
        </div>
        <div className='col-sm-5'>
          <h6>NFT Name</h6>
          <h6>#2451</h6>
        </div>
        <div className='col-sm-4'>
         <p style={{fontSize:"12px"}}>Remain Time:8:36h</p> 
        </div>
      </div>
      <div className='row' style={{marginTop:"15px"}}>
        <div className='col-sm-3'>
          <img src="img3.png"></img>
        </div>
        <div className='col-sm-5'>
          <h6>NFT Name</h6>
          <h6>#2451</h6>
        </div>
        <div className='col-sm-4'>
         <p style={{fontSize:"12px"}}>Remain Time:8:36h</p> 
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
<div className='container'>
<div className='row' style={{marginTop:"100px"}}>
  <div className='col-lg-6' style={{textAlign:"right"}}>
<p style={{color:"#878787",fontWeight:"bold"}}>
Wallet<br></br> powered by
</p>
  </div>
  <div className='col-lg-6'>
    <img src="logos.png"></img>
    </div>
</div>
</div>
        
      </div>
    </div> */}
  </div>
</div>


    </>


  )
}
