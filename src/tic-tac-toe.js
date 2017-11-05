class TicTacToe {
    constructor() {
    	this.symbol = true;
    	this.table = [
    	[null, null, null],
    	[null, null, null],
    	[null, null, null]
    	];
    }

    getCurrentPlayerSymbol() {
    	if (this.symbol) return 'x'; 
    	return 'o';
    }

    nextTurn(rowIndex, columnIndex) {
    	if(this.table[rowIndex][columnIndex] === null){
    		this.table[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
    		this.symbol = !this.symbol;
    	}
    }

    isFinished() {
    	if (this.isDraw() === true && this.getWinner() !== null)
    		return true;
    	return false;    	
    }

    getWinner() {
    	return null;
    }

    noMoreTurns() {
    	for(let i = 0; i < 3; i++){
    		for(let j = 0; j < 3; j++){
    			if (this.table[i][j] === null) return false;
    		}
    	}
    	return true;
    }

    isDraw() {
    	if (this.noMoreTurns() === true && this.getWinner() === null)
    		return true;
    	return false;
    }

    getFieldValue(rowIndex, colIndex) {
    	return this.table[rowIndex][columnIndex];
    }
}

module.exports = TicTacToe;
