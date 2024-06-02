import PropTypes from 'prop-types';

function UserGreeting(props){

    const welcome = <h2 className="welcomeMessage">Welcome {props.username}</h2> ;
    const login = <h2 className="loginMessage">Please Log In to continue.</h2>;
    
    return(props.isLoggedIn ?  welcome :  login)

}

UserGreeting.propType = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting;                                              