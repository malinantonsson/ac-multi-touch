import {connect} from 'react-redux';
import { push } from 'react-router-redux';
import { ROUTES } from '../../constants';

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
    dispatch(push(`${ROUTES.ROUND_ONE.BASE}/${ROUTES.ROUND_ONE.MAP}`));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Start);
