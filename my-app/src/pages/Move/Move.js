import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Heading
} from '../../components';
import './styles.css';

class MoveComponent extends Component {
    render() {
        return (
            <div>
                <Heading />
                <h1> details about a move inside a routine </h1>
            </div>
        );
    }
}

export { MoveComponent };

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    };
};

export const Move = connect(mapStateToProps, {

})(MoveComponent);
