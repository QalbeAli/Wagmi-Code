import myModal2 from '../styles/Modal2.module.css';
const Modal2=({setBtn,btnstake,toggle,setToggle})=>{

    const unstake=()=>{
        let unstake=document.getElementById("unstake").value;
        if(unstake!==""){
           
setBtn("Stake");
setToggle("#exampleModalCenter")
document.getElementById("unstake").value="";
        }
    }
    return(
        <>
  <div
    className="modal fade"
    id="exampleModalCenter2"
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
        <div className={myModal2.stakeAmount}>Unstake Confirmation</div>
        <div className='container' style={{marginTop:"35px"}}>
       <div className='row'>
           <div className='col-sm-5 col-5 col-lg-5'>
               <p className={myModal2.amount3}>Total Staking Balance:</p>
           </div>
        <div className='col-lg-1 col-1'></div>
           <div className='col-sm-6 col-6 col-lg-6'>
               <p className={myModal2.amount2}>Balance: 0.00GEMS</p>
           </div>
       </div>
       </div>
       <div className={myModal2.inputIcons}>
       <div className={myModal2.inputMax}>
<input className={myModal2.inputField2} type="text" placeholder='0'  id="unstake" />
<img src="Capture1.PNG" className={myModal2.imagess}></img> 
    
                </div>
              
                </div>
<div className='container'>
    <div className='row'>
        <div className='col-12 col-sm-12 col-lg-12'>
         <div className={myModal2.details}>
             <p className={myModal2.detail}>Details</p>
         </div>
        </div>
    </div>
    <div className='container' >
   <div className={myModal2.stakePeriod}>
       <span className={myModal2.stakePeriod1}>Stake Period:</span>
       <span className={myModal2.stakePeriod2}>3 Months</span>
       <br></br>
       <span className={myModal2.stakePeriod1}>Lock-Up Period:</span>
       <span className={myModal2.stakePeriod2}>2 Weeks</span>
       <br></br>
       <span className={myModal2.stakePeriod1}>APY:</span>
       <span className={myModal2.stakePeriod2}>12%</span>
       
       <br></br>
       <span className={myModal2.stakePeriod5}>Penalty</span>
       <span className={myModal2.stakePeriod6}>-5%</span>
     <img src="line.png" className={myModal2.line}></img>
  <span className={myModal2.stakePeriod3}>Reward:</span>
       <span className={myModal2.stakePeriod4}>3192.0 $GEMS</span>
       <br></br>
   </div>
 
 </div>
 <div className='container' style={{marginTop:"40px"}}>
     <button className={myModal2.confirmBtn2} onClick={unstake} data-bs-dismiss="modal">Confirm Unstake</button>
   
 </div>
 <p className={myModal2.stakepara3}>Penalty charge for early unstake, for more please check penalty schedule</p>
       </div>      
      </div>
    </div>
  </div>
        </>
    )
}
export default Modal2;