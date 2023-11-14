import './Home.css'
import Buttons from '../swap-buttons/Buttons'
import bannerImg from './Assets/bannerImg.png'

function Home() {

    return (
        <div className="HomeBody" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="topContent">
                <div id='banner'>
                    <img src={bannerImg} alt='children writing' id='bannerImg' />
                    <div id='bannerText'>
                        <h1>Where <span style={{ color: "#3F8E9B" }}>education</span><br />
                            is at your <span style={{ color: "#F18D04" }}>fingertips</span>
                        </h1>
                        <p>
                            Find the best tutor. Be the best tutor. <br />
                            Bridging education and communities.
                        </p>
                        <button id='learnMore'>Learn More</button>
                    </div>
                </div>
            </div>
            <div className="ButtonsArea">
                <Buttons />
            </div>
        </div>

    )
};
export default Home;