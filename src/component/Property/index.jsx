
import  { useState } from 'react';
import './index.css'
const Property = ()=>{

    const [selectedButton, setSelectedButton] = useState(null);

    // Handler to set the selected button
    const handleButtonClick = (value) => {
        setSelectedButton(value);
    };
    return(
        <div className="main-home-card">
            <div className='section-home-card'>
                <div className='home-bg-card' style={{width:"40%"}}>
                    <div >
                        <h1  className='property-head'>Looking for the<br/>
                        <span style={{color:"#27B974"}}>right buyer?</span></h1>
                        
                    </div>
                    
                </div>
                <div className='center-card-property'>
            <div className='property-card'>
                <div>
                    <h1 className='card-head'>Tell more about yourself</h1>
                    <div style={{ marginLeft: "40px", marginTop: "20px" }}>
                        <button
                            className={`card-one ${selectedButton === 'Agent' ? 'selected' : ''}`}
                            onClick={() => handleButtonClick('Agent')}
                        >
                            Agent
                        </button>
                        <button
                            className={`card-one margin-card ${selectedButton === 'Owner' ? 'selected' : ''}`}
                            onClick={() => handleButtonClick('Owner')}
                        >
                            Owner
                        </button>
                    </div>
                    <div style={{ marginLeft: "40px", marginTop: "10px" }}>
                        <button
                            className={`card-one ${selectedButton === 'Builder' ? 'selected' : ''}`}
                            onClick={() => handleButtonClick('Builder')}
                        >
                            Builder
                        </button>
                        <button
                            className={`card-one margin-card ${selectedButton === 'Flatmate' ? 'selected' : ''}`}
                            onClick={() => handleButtonClick('Flatmate')}
                        >
                            Flatmate
                        </button>
                    </div>
                </div>
                <form className='form-card'>
                    <input className='input-style' type='text' placeholder='City'/>
                    <input className='input-style margin-top-card' type='text' placeholder='Name*'/>
                    <input className='input-style margin-top-card' type='text' placeholder='Email'/>
                    <button type='submit' className='submit-button'>Submit</button>
                </form>
            </div>
        </div>
            </div>
        </div>
    )
}

export default Property