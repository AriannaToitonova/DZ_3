import React from 'react';

function RegusterUser(props) {

    const registerUser = (e) => {
        e.preventDefault()
        console.log("user is register")
    }


    return (
        <form onSubmit={registerUser}>
            <input
                type="text"
                placeholder="age"
            />
            <input
                type="text"
                placeholder="name"
            />
            <input
                type="text"
                placeholder="password"
            />
            <button type="submit">register user</button>
        </form>
    );
}

export default RegusterUser;