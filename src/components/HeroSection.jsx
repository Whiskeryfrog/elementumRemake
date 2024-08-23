
import { Link } from 'react-router-dom';

function Hero (props) {
    return(
        <>
            <div className="parent">
                <Link to="/AnotherPage" className="no-text-decoration hero-grid hero-grid1 hero-grid-long">
                   <div className="image-class game-image"></div>
                   <div>GAMES</div> 
                </Link>
                {props.name ?(
                    <div className="hero-grid hero-grid2">
                        <div className="image-class profile-image"></div>
                            Profile
                            <p className="small-text">Welcome {props.name}</p>
                    </div>
                ) : (
                    <div className="hero-grid hero-grid2 no-hero-grid">
                        <div className="image-class"></div>
                            Profile
                    </div>
                )}
                <div className="hero-grid hero-grid4">
                <div className="image-class leaderboard-image"></div>
                    LeaderBoard 
                </div>
                <Link to="/About" className="no-text-decoration hero-grid hero-grid3">
                <div className="image-class about-image"></div>
                    About
                </Link>
            </div> 
        </>
    )
}

export default Hero;