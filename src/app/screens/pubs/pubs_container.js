import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as positionActions from '../../actions/position';

import Pubs from './pubs_component';


const mapStateToProps = (state, ownProps) => {
    const {
        date,
        items,
        filteredPubs
    } = state.position;

    return {
        date,
        items,
        filteredPubs
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const boundPositionActions = bindActionCreators(positionActions, dispatch);

    return {
        updateTime: date => {
            boundPositionActions.updateTime(date)
        },
        setCurrentPub: item => {
            console.log('Set current item', item);
        }
    }
}

const PubsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Pubs)

export default PubsContainer;
