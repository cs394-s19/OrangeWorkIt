import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    AppBar,
    Paper,
    List
} from '../../components';
import './styles.css';

// import AppBar from '../../components/Heading/AppBar.js';

class RoutineComponent extends Component {
    render() {
        return (
            <div>
                <AppBar/>
                <br />
                <h3>Your Routine: Favorite Ab Workout</h3>
                <List />
            </div>
        );
    }
}

export { RoutineComponent };

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    };
};

export const Routine = connect(mapStateToProps, {

})(RoutineComponent);
