import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../../constants';
import { Crh } from '../../../components/crh';
import { Competitor } from '../../../components/competitor';
import { Square } from '../../../components/square';
import { ColourPicker } from '../../../components/colour-picker';

import './style.scss';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showColorPicker: false,
      showMenu: false,
      selectedSquares: [],
    };
  }

  toggleMenu(evt) {
    this.setState({ showMenu: !this.state.showMenu });
  }

  toggleColorPicker() {
    this.setState({ showColorPicker: !this.state.showColorPicker });
  }

  onSelectedColour(colour) {
    this.toggleColorPicker();
    const selectedSquares = this.state.selectedSquares;
    console.log(selectedSquares);
    const divStyle = {
      backgroundColor: 'red'
    }
    selectedSquares.map(item => {
      console.log(item);
      item.style.backgroundColor = colour;
    });
  }

  onClickSquare(evt) {
    console.log('onClickSquare', evt.target);
    if(this.state.showColorPicker) return;
    const selectedSquares = this.state.selectedSquares;
    selectedSquares.push(evt.target);
    this.setState({ selectedSquares: selectedSquares });
    this.toggleColorPicker();
  }

  renderSquares() {
    const SQUARES_PER_ROW = 9;
    const ROWS = 8;
    const AMOUNT_OF_SQUARES = SQUARES_PER_ROW * ROWS;
    const squares = [];
    const crhPos = 32;
    const competitorPos = 29;
    for(let i = 0; i < AMOUNT_OF_SQUARES; i++) {
      const hasCrh = i === crhPos;
      const hasComp = i === competitorPos;
      if(hasCrh) {
        squares.push(<Square onClick={(evt) => { this.onClickSquare(evt); }} key={`square--${i}`}><Crh /></Square>);
      } else if(hasComp) {
        squares.push(<Square onClick={(evt) => { this.onClickSquare(evt); }} key={`square--${i}`}><Competitor /></Square>);
      } else {
        squares.push(<Square onClick={(evt) => { this.onClickSquare(evt); }} key={`square--${i}`}/>);
      }

    }
    return squares;
  }

  render() {


    return (
      <div className={'grid'}>
        <Link to={`/${ROUTES.ROUND_ONE.BASE}/${ROUTES.ROUND_ONE.GRID}`}>Next</Link>
        <h1>Round one: Grid</h1>
        <div className={'grid__grid'}>
          <div className={'grid__squares'}>
            {this.renderSquares()}
          </div>

          { this.state.showMenu ? <p>Contextual menu Open</p> : <p>Contextual menu close</p>}
          <button onClick={(evt) => { this.toggleMenu(evt); }}>Open menu</button>

          { this.state.showColorPicker ? <ColourPicker onSelectColour={ (colour) => { this.onSelectedColour(colour); this.toggleColorPicker(); }} onClose={() => this.toggleColorPicker()} /> : <p>Colour picker close</p>}
          <button onClick={() => { this.toggleColorPicker(); }}>Open colorpicker</button>
        </div>
      </div>
    );
  }
}

Grid.propTypes = {};

export default Grid;
