import React, { Component } from 'react';
import { connect } from 'react-redux';


import Grid from '@material-ui/core/Grid';

import {
    AppBar,
    TextField,
    Button
} from '../../components';
import {
    load_moves,
    load_routines
} from '../../reducers/reducer';
import './styles.css';
import SetTimeButton from "../../components/Button/Button";

// import AppBar from '../../components/Heading/AppBar.js';

class SetTimeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            move_time: 45000,
            break_time: 20000,
        };

    };

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <AppBar/>
                <br />
                <div className="page-content">
                    <h3>Set Time</h3>
                    <TextField
                        id="moveTime"
                        label="Move Time(s)"
                        type="number"
                        onChange={e => this.setState({ move_time: e.target.value })}
                    />
                    <TextField
                        id="moveTime"
                        label="Break Time(s)"
                        type="number"
                        onChange={e => this.setState({ break_time: e.target.value })}
                    />
                    <Button to={{pathname: "/move",state: {move_time: this.state.move_time * 1000, break_time:this.state.break_time * 1000}}}/>
                    <br />
                </div>
            </div>
        );
    }
}

export { SetTimeComponent };

const mapStateToProps = (state, ownProps) => {
    const { reducer } = state;
    const { loading, moves, routines } = reducer;
    return {
        ...ownProps,
        loading,
        moves,
        routines
    };
};

export const SetTime = connect(mapStateToProps, {
    load_moves,
    load_routines
})(SetTimeComponent);