import CarouseSection from '../Carosal'
import './index.css'
const Home = ()=>{
    return(
        <div className="main-home-card">
            <div className='section-home-card'>
                <div className='home-bg-card' style={{width:"60%"}}>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <h1 className='main-head'>Make yourself at home</h1>
                        <div style={{display:"flex",gap:"30px"}}>
                        <div className='location-card'></div>
                        <div className='location-card'></div> 
                    </div>
                    <div className='search-card'></div> 
                    </div>
                    
                </div>
                <CarouseSection/>
            </div>
        </div>
    )
}

export default Home