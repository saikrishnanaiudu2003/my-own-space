

import './index.css'
const Contact = ()=>{

    return(
        <div className="main-home-card">
            <div className='section-home-card'>
                <div className='home-bg-card main-left-card' style={{width:"40%"}}>
                    <div >
                        <h1  className='property-head'>Contact
                        <span style={{color:"#27B974"}}> Us</span></h1>
                        <div style={{marginTop:"60px"}}>
                        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                            <img src='../../../assets/phone.svg' style={{height:"30px",width:"26px"}}/>
                            <h1 className='help-head'>Helpline Number</h1>
                        </div>
                        <div style={{width:"101px",height:"2px",backgroundColor:"#27B974"}}></div>
                        </div>

                        <div style={{marginTop:"60px"}}>
                        <div style={{}}>
                            <img src='../../../assets/email.svg' style={{height:"21px",width:"26px"}}/>
                            <h1 className='help-head2'>Contact us through email</h1>
                        </div>
                        <div style={{width:"101px",height:"2px",backgroundColor:"#27B974"}}></div>
                        </div>
                        <div style={{marginTop:"60px"}}>
                        <div style={{}}>
                            <img src='../../../assets/adress.svg' style={{height:"49px",width:"33px"}}/>
                            <h1 className='help-head2'>Address</h1>
                        </div>
                        <div style={{width:"101px",height:"2px",backgroundColor:"#27B974"}}></div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className='center-card-property2'>
           <div>
           <h1 className='property-head2'>Make an enquiry</h1>
           <form style={{marginTop:"20px"}}>
            <div style={{display:"flex",gap:"10px"}}>
           <div>
           <label className='label-style' htmlFor='name'>Name</label>
            <br/>
            <input id='name' className='input-name-style' type='text'/>
           </div>
           
         <div>
         <label className='label-style' htmlFor='phone'>Phone</label>
            <br/>
            <input id='phone' className='input-name-style' type='text'/>
         </div>
            </div>
           <div style={{marginTop:"20px"}}>
           <label className='label-style' htmlFor='email'>Email*</label>
            <br/>
            <input type='email' id="email" className='email-input-style'/>
           </div>

           <div style={{marginTop:"20px"}}>
           <label className='label-style' htmlFor='message'>Message</label>
            <br/>
            <input type='text' id='message' className='message-input-style'/>
           </div>
           </form>
           </div>
        </div>
            </div>
        </div>
    )
}

export default Contact