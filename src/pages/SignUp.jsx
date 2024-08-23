import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <>
        <div className="wrapper-section">
            <div className="sign-up-form">
                <h1>REGISTER</h1>
                <label for="email" className="label-style">Email</label>
                <input id="email" type="text" placeholder="Enter Email"/>
                <label for="password" className="label-style">Password</label>
                <input id="password" type="password" placeholder="Enter Password"/>
                <label for="password" className="label-style">Confirm Password</label>
                <input id="password" type="password" placeholder="Re-enter Password"/>
                <button type="submit" className="btn-submit">Register</button>
                <Link className="no-text-decoration link-below" to="/LogIn" >Already have an Account? Log-in</Link>
            </div>
        </div>
        </>
    )
}

export default SignUp