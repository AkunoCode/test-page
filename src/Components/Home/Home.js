import './Home.css'
import Buttons from '../swap-buttons/Buttons'

function Home() {

    return (
        <div className="HomeBody" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="topContent">
                <h1>Hello Envergans </h1>
                <h1>Hello Envergans </h1>
            </div>
            <div className="ButtonsArea">
                <Buttons />
            </div>
        </div>

    )
};
export default Home;