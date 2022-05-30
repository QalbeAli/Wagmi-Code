import myModal from '../styles/Modal.module.css';
const Modal=()=>{
    const btnColor=()=>{
    let btncolor=document.getElementById("btnColor");
    let noInput=document.getElementById("noInput").value;
    if(noInput!==""){
        btncolor.style.background="linear-gradient(270deg, #885BFF 0.19%, #5977D6 100%)";
        btncolor.style.color="white";
        btncolor.style.border="none";
      
    }
else
btncolor.style.background="transparent";
btncolor.style.border="1px solid #777777";


   
    }
    return(
        <>
              <div
    className="modal fade"
    id="exampleModalCenter"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
    
  >
    <div className="modal-dialog modal-dialog-centered" role="document"  >
      <div className="modal-content" style={{backgroundColor:"#181818",border:"2px solid #885bff",borderRadius:"10px",paddingBottom:"20px"

}}>
        <div className="modal-header" style={{borderBottom:"0px"}}>
          <h5 className="modal-title" id="exampleModalLongTitle">
       
          </h5>
         
         <img src="close.png"     className="close"
            data-bs-dismiss="modal"
            aria-label="Close"> 
         </img>
        
        </div>
        <div className={myModal.stakeAmount}>Enter your stake amount</div>
        <div className='container' style={{marginTop:"35px"}}>
       <div className='row'>
           <div className='col-sm-5 col-5 col-lg-5'>
               <p className={myModal.amount1}>Total Amount</p>
           </div>
        <div className='col-lg-1 col-1'></div>
           <div className='col-sm-6 col-6 col-lg-6'>
               <p className={myModal.amount2}>Balance: 0.00GEMS</p>
           </div>
       </div>
       </div>
       <div className={myModal.inputIcons}>
       <div className={myModal.inputMax}>
<input className={myModal.inputField} type="text" placeholder='0' id="noInput" onInput={btnColor}  />
<img src="Capture.PNG" className={myModal.imagess}></img> 
   <input type="button" value="MAX"className={myModal.maxbtn}/>      
                </div>
                <p className={myModal.deposit}>Deposit must be between: 20,000 and 2,000,000 $GEMS</p>
                </div>
<div className='container'>
    <div className='row'>
        <div className='col-12 col-sm-12 col-lg-12'>
         <div className={myModal.details}>
             <p className={myModal.detail}>Details</p>
         </div>
        </div>
    </div>
    <div className='container' >
   <div className={myModal.stakePeriod}>
       <span className={myModal.stakePeriod1}>Stake Period:</span>
       <span className={myModal.stakePeriod2}>3 Months</span>
       <br></br>
       <span className={myModal.stakePeriod1}>Lock-Up Period:</span>
       <span className={myModal.stakePeriod2}>2 Weeks</span>
       <br></br>
       <span className={myModal.stakePeriod1}>APY:</span>
       <span className={myModal.stakePeriod2}>12%</span>
       <br></br>
     <img src="line.png" className={myModal.line}></img>
  <span className={myModal.stakePeriod3}>Reward:</span>
       <span className={myModal.stakePeriod4}>0.00 $GEMS</span>
       <br></br>
   </div>
 
 </div>
 <div className='container' style={{marginTop:"40px"}}>
     <button className={myModal.confirmBtn} id="btnColor">Confirm Staking</button>
   
 </div>
 <p className={myModal.stakepara}>Each account can only stake once in each tier</p>
       </div>      
      </div>
    </div>
  </div>
        </>
    )
}
export default Modal;