import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Timer from 'react-compound-timer';
import Card from '@material-ui/core/Card';

import {
    AppBar
} from '../../components';
import './styles.css';

const styles = theme => ({
    card: {
      width: '100%',
      justify: "center",
      font: '100px',
    },
  });

function MoveComponent(props) {
    const { classes } = props;
    return (
        <div>
            <AppBar /> 
            <div class="page-content">
                <h2> Plank </h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/aCa8R9II8F0?controls=0&start=54&end=83" 
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br />
                <br />
                <Card>
                    <div class="timer">
                    <Timer
                            initialTime={45000} // hardcode. replace.
                            direction="backward"
                        >
                            {() => ( // the formatValue attribute formats the seconds such that the leading 0 is displayed on single digits
                                <React.Fragment>
                                    <Timer.Minutes formatValue={(value) => `${(value < 10 ? `0${value}` : value)}:`}/>
                                    <Timer.Seconds formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}/> 
                                </React.Fragment>
                            )}
                        </Timer>
                    </div>
                </Card> 
            </div>
        </div>
    )
};

// class MoveComponent extends Component {
//     render() {
//         return ( // hardcode <h2>. replace.
//             <div>
//                 <AppBar /> 
//                 <div class="page-content">
//                 <h2> Plank </h2>
//                     <Timer
//                         initialTime={45000} // hardcode. replace.
//                         direction="backward"
//                     >
//                         {() => ( // the formatValue attribute formats the seconds such that the leading 0 is displayed on single digits
//                             <React.Fragment>
//                                 <Timer.Minutes formatValue={(value) => `${(value < 10 ? `0${value}` : value)}:`}/>
//                                 <Timer.Seconds formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}/> 
//                             </React.Fragment>
//                         )}
//                     </Timer>
//                 <iframe width="560" height="315" src="https://www.youtube.com/embed/aCa8R9II8F0?controls=0&start=54&end=83" 
//                 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//                 </div>
//             </div>
//         );
//     }
// }

MoveComponent.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export { MoveComponent };

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    };
};

export const Move = connect(mapStateToProps, {

})(MoveComponent);
