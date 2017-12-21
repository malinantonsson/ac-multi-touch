import React from 'react';
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
      squares: {},
      selectedColor: '',
      gridEl: '',
      selectedSquare: '',
    };
  }

  componentDidMount() {
    this.setState({
      gridEl: document.querySelector('.grid__squares'),
    });
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  toggleColorPicker() {
    this.setState({ showColorPicker: !this.state.showColorPicker });
  }

  onSelectedColour(colour) {
    this.toggleColorPicker();
    this.setState({selectedColor: colour });
    this.onElementOver(this.state.selectedSquare, colour);

    this.setListener();
  }

  onElementOver = (evt, colour) => {
    if(evt.target) {
      if(evt.pointerId) {
        console.log('onElementOver: ', evt.pointerId);
      }
      evt.target.style.backgroundColor = evt.fromElement.style.backgroundColor;
    } else {
      evt.style.backgroundColor = colour;
    }
    //const { selectedColor } = this.state;
    //evt.target.style.backgroundColor = selectedColor;
  }

  onMouseUp(evt) {

    const grid = this.state.gridEl;
    if(evt.pointerId) {
      console.log('onMouseUp: ', evt.pointerId);
    }

    //remove all listners
    grid.removeEventListener('pointerdown', this.onMouseDown, true);
    grid.removeEventListener('pointerover', this.onElementOver, true);
  }

  onMouseDown = evt => {
    evt.preventDefault()
    const grid = this.state.gridEl;
    //const colour = this.state.selectedColor;
    if(evt.pointerId) {
      console.log('onMouseDown: ', evt.pointerId);
    }

    // paint first square
    //this.onElementOver(evt, this.state);
    //this.onElementOver(evt, colour);

    // listen for hovers
    grid.addEventListener('pointerover', this.onElementOver, true);
  }

  setListener() {
    const grid = this.state.gridEl;

    grid.addEventListener('pointerdown', this.onMouseDown, true);
    grid.addEventListener('pointerup', (evt) => this.onMouseUp(evt));
  }

  onClickSquare(evt) {
    //console.log(evt.target);

    // const square = {
    //   el: evt.target,
    //   selected: true,
    // }
    // const squares = {};

    if(this.state.showColorPicker) return;
    this.setState({selectedSquare: evt.target});
    this.toggleColorPicker();
  }

  renderSquare(i,id, child) {
    return child ? <Square id={id} onClick={(evt) => { this.onClickSquare(evt); }} key={`square--${i}`}>{child}</Square> : <Square id={id} onClick={(evt) => { this.onClickSquare(evt); }} key={`square--${i}`}/>;
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

      const id = i / SQUARES_PER_ROW + 1;
      const rowPos = Math.floor(id);
      const remains = id - rowPos;
      const squarePos = remains.toFixed(1) * 10 + 1;
      const squareId = `${rowPos}-${squarePos}`;
      if(hasCrh) {
        // squares.push(<Square onClick={(evt) => { this.onClickSquare(evt); }} key={`square--${i}`}><Crh /></Square>);
        squares.push(this.renderSquare(i, squareId, <Crh />));
      } else if(hasComp) {
        // squares.push(<Square onClick={(evt) => { this.onClickSquare(evt); }} key={`square--${i}`}><Competitor /></Square>);
        squares.push(this.renderSquare(i, squareId, <Competitor />));
      } else {
        // squares.push(<Square onClick={(evt) => { this.onClickSquare(evt); }} key={`square--${i}`}/>);
        squares.push(this.renderSquare(i, squareId));
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

          { this.state.showColorPicker && <ColourPicker onSelectColour={(colour) => { this.onSelectedColour(colour); this.toggleColorPicker();}} onClose={() => this.toggleColorPicker()} />}
        </div>
      </div>
    );
  }
}

export default Grid;
