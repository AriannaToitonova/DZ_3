import React from 'react';
import classes from "./classComponent.module.css";


class  ClassComponent extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <>
            //     <h1>Hello {this.props.name}</h1>
            // </>
            <ul>
                <li className={classes.title}>name : {this.props.user.name}</li>
                <li className={classes.title}>age : {this.props.user.age}</li>
            </ul>
        )
    }


}

export default ClassComponent;

