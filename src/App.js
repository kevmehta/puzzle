import React from 'react';
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    const board = {
      tiles: props.defaultvalue,
      width: props.width,
      height: props.height,
      emptycellx: props.emptycellx,
      emptycelly: props.emptycelly
    };

    this.solution = props.result;
    this.state = { board: board };
  };

  move = (board, x, y) => {
    const adj = [-1, 0, 1];
    if ((x === board.emptycellx) && (y === board.emptycelly))
      return;
    else if (x !== board.emptycellx && y !== board.emptycelly)
      return;
    else if (adj.includes(board.emptycellx - x) && adj.includes(board.emptycelly - y)) {
      let tiles = board.tiles.slice();
      let emptycellindex = board.emptycellx + (board.emptycelly * board.width);
      let numberedcellindex = x + (y * board.width);
      [tiles[emptycellindex], tiles[numberedcellindex]] = [tiles[numberedcellindex], tiles[emptycellindex]];
      return Object.assign({}, board, { tiles: tiles, emptycellx: x, emptycelly: y });
    } else
      return;
  };

  handleMouseDown(x, y) {
    let board = this.move(this.state.board, x, y);
    if (board)
      this.setState({ board: board });
  };

  render() {
    return (
      <>
        <div className="background">
          <MainBoard
            board={this.state.board}
            onMouseDown={(x, y) => this.handleMouseDown(x, y)}
          />
        </div>
      </>
    );
  };
};

const MainBoard = ({ board, onMouseDown }) => {
  let rows = [];

  for (let y = 0; y < board.width; y++) {
    let row = [];
    for (let x = 0; x < board.height; x++) {
      row.push(
        <BlockElem
          key={'x' + x + 'y' + y}
          value={board.tiles[x + (y * board.width)]}
          isSpace={board.emptycellx === x && board.emptycelly === y}
          onMouseDown={() => onMouseDown(x, y)}
        />
      );
    };
    rows.push(<div key={'row' + y} className="tiles-row">{row}</div>);
  };
  return (<div className="tiles">{rows}</div>);
};

const BlockElem = ({ value, isSpace, onMouseDown }) => {
  const _class = isSpace ? "block zero" : "block";
  return (
    <button className={_class} onMouseDown={onMouseDown}>
      {value}
    </button>
  );
};
