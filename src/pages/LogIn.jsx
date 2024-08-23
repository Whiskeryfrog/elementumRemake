import { Link } from 'react-router-dom';

function LogIn() {
    return (
        <>
        <div className="wrapper-section">
            <div className="sign-up-form">
                <h1>LOG-IN</h1>
                <label for="email" className="label-style">Email</label>
                <input id="email" type="text" placeholder="Enter Email"/>
                <label for="password" className="label-style">Password</label>
                <input id="password" type="password" placeholder="Enter Password"/>
                <button type="submit" className="btn-submit">Log-in</button>
                <Link className="no-text-decoration link-below" to="/Register" >Don't have an Account? Sign-up</Link>
            </div>
        </div>
        </>
    )
}

export default LogIn