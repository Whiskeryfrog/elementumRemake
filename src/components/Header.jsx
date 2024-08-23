import { Link } from 'react-router-dom';
import 'boxicons';

function Header (props) {
    return (
        <>
         <div className="header-main">
         <div className="header-item header-logo logo-hover"><Link className="no-text-decoration" to="/">LOGO</Link></div>
            <div className="header-main-rightside">
                {props.name ? (
                    <a><div className="header-item">WELCOME {props.name}</div></a>
                ) : (
                    <>
                    <Link className="no-text-decoration" to="/LogIn"><div className="header-item">LOGIN</div></Link>
                    <Link className="no-text-decoration" to="/Register"><div className="header-item sign-in-btn">REGISTER</div></Link>
                    </>
                )}
            </div>
         </div>
        </>
    )
}

export default Header;