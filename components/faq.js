import faqstyles from '../styles/Faq.module.css';
const FAQ=()=>{
    return(
        <>
   <div className='container' style={{marginTop:"20px"}}>
       <h2 className={faqstyles.f}>FAQ</h2>
       <br></br>
   <div className="accordion accordion-flush" id="accordionFlushExample" >
  <div className="accordion-item" style={{backgroundColor:"#1d1d37",paddingTop:"10px",paddingBottom:"10px",borderRadius:"10px"}}>
    <h2 className="accordion-header" id="flush-headingOne" style={{backgroundColor:"#1d1d37"}}>  
      <button
        className={faqstyles.accordBtn}
        type="button"
        style={{backgroundColor:"#1d1d37",color:"white",fontSize:"16px"}}
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne"
        aria-expanded="false"
        aria-controls="flush-collapseOne"
      >
       How to stake $GEMS?
   
      </button>
    </h2>
    <div
    
      id="flush-collapseOne"
      className="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#accordionFlushExample"
    >
      <div className="accordion-body" style={{color:"white"}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam 
      </div>
    </div>
  </div>
  <br></br>
  <div className="accordion-item" style={{backgroundColor:"#1d1d37" ,paddingTop:"10px",paddingBottom:"10px",borderRadius:"10px"}}>
    <h2 className="accordion-header" id="flush-headingTwo">
      <button
    className={faqstyles.accordBtn}
        type="button"
        style={{backgroundColor:"#1d1d37",color:"white",fontSize:"16px"}}
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseTwo"
        aria-expanded="false"
        aria-controls="flush-collapseTwo"
      >
        How to stake $GEMS?
      </button>
    </h2>
    <div
      id="flush-collapseTwo"
      className="accordion-collapse collapse"
      aria-labelledby="flush-headingTwo"
      data-bs-parent="#accordionFlushExample"
    >
      <div className="accordion-body" style={{color:"white"}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam 
      </div>
    </div>
  </div>
  <br></br>
  <div className="accordion-item" style={{backgroundColor:"#1d1d37",paddingTop:"10px",paddingBottom:"10px",borderRadius:"10px"}}>
    <h2 className="accordion-header" id="flush-headingThree">
      <button
className={faqstyles.accordBtn}
        type="button"
        data-bs-toggle="collapse"
        style={{backgroundColor:"#1d1d37",color:"white",fontSize:"16px"}}
        data-bs-target="#flush-collapseThree"
        aria-expanded="false"
        aria-controls="flush-collapseThree"
       
      >
 How to stake $GEMS?
      </button>
      
    </h2>
    <div
      id="flush-collapseThree"
      className="accordion-collapse collapse"
      aria-labelledby="flush-headingThree"
      data-bs-parent="#accordionFlushExample"
    >
      <div className="accordion-body" style={{color:"white"}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam 
      </div>
    </div>
  </div>
</div>

   </div>
        </>
    )
}
export default FAQ;