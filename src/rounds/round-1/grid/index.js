import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../../constants';
import { Crh } from '../../../components/crh';
import { Competitor } from '../../../components/competitor';
import { Square } from '../../../components/square';
import { ColourPicker } from '../../../components/colour-picker';

import './style.scss';

const onElementOver = (evt, state) => {
  const { isActive, selectedColor } = state;
  if(!isActive) return;
  evt.target.style.backgroundColor = selectedColor;
}

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showColorPicker: false,
      showMenu: false,
      selectedSquares: [],
      squares: {},
      isActive: false,
      selectedColor: '',
      gridEl: '',
      isSelected: false,
      isHovering: false,
    };
  }

  componentDidMount() {
    this.setState({
      gridEl: document.querySelector('.grid__squares'),
    });
  }

  toggleMenu(evt) {
    this.setState({ showMenu: !this.state.showMenu });
  }

  toggleColorPicker() {
    this.setState({ showColorPicker: !this.state.showColorPicker });
  }

  onSelectedColour(colour) {
    this.toggleColorPicker();
    this.setState({selectedColor: colour, isActive: true});
    const selectedSquares = this.state.selectedSquares;
  }

  onListenForMouseUp(grid) {
    grid.removeEventListener('mouseover', onElementOver, true);
    this.setState({ isActive: false, isSelected: false });
  }

  setListener() {
    const grid = this.state.gridEl;
    const isActive = this.state.isActive;
    const colour = this.state.selectedColor;

    if(!this.state.isHovering) { //only start this once
      grid.addEventListener('mouseover', (evt) => onElementOver(evt, this.state), true);
      this.setState({isHovering: true});
    }
    
    if(this.state.isSelected) {
      grid.addEventListener('mouseup', () => this.onListenForMouseUp(grid));
    }

    this.setState({isSelected: true});
  }

  onClickSquare(evt) {
    const isActive = this.state.isActive;
    if(isActive) {
      this.setListener();
    }

    const square = {
      el: evt.target,
      selected: true,
      isActive: true,
    }
    const squares = {};

    if(this.state.showColorPicker) return;
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
