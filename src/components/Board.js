import React, { Component } from 'react';

class Board extends Component{
    renderSquare(i){
        return <Square value={i} />
    }
}
export default Board