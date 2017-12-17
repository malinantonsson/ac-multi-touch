import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../../constants';
import { Crh } from '../../../components/crh';
import { Competitor } from '../../../components/competitor';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    return (
      <div className={'map'}>
        <Link to={`/${ROUTES.ROUND_ONE.BASE}/${ROUTES.ROUND_ONE.GRID}`}>Next</Link>
        <h1>Round one: Map</h1>
        <div className={'map__map'}>
          This would be round one map
          <Crh />
          <Competitor name={'Competitor 1'} />
          { this.state.showMenu ? <p>Contextual menu Open</p> : <p>Contextual menu close</p>}
          <button onClick={() => { this.toggleMenu(); }}>Open menu</button>
        </div>
      </div>
    );
  }
}

Map.propTypes = {};

export default Map;
