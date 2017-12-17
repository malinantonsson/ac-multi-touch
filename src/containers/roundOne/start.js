import {connect} from 'react-redux';

import { startRoundOne } from '../../actions/roundOne/start';

import Start from '../../rounds/round-1/start';
const mapStateToProps = state => {
  console.log('mapStateToProps', state);
  return {
    isRoundOne: true,
    roundOneProgress: state.roundOne.progress,
    isStarted: state.roundOne.isStarted,
  };
};

const mapDispatchToProps = dispatch => ({
  onStartRoundOne: () => {
    dispatch(startRoundOne());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Start);
