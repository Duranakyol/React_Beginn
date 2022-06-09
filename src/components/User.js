import PropTypes from "prop-types";

function User(props) {

if (!props.isLoggedIn) {
    return <div>Giris yapmadiniz</div>;
}
    return (
        <div className="user">
            {`${props.name} ${props.surname}`}
            <h1>FRIENDS :</h1>
            {
                props.friends.map((friend) => {
                    return <div key={friend.id}>{friend.name}</div> 
                })
            }<br/>
            ADRESS : { props.adress.title } PLZ : { props.adress.PLZ }
                
        </div>
    )
}

User.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    isLoggedIn: PropTypes.bool,
    friends: PropTypes.array,
    adress: PropTypes.shape({
        title: PropTypes.string,
        PLZ: PropTypes.number
    })
}

User.defaultProps = {
    isLoggedIn: false ,
}

export default User