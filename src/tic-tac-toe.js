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
    	if(this.getFieldValue(rowIndex, columnIndex) === null){
    		this.table[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
    		this.symbol = !this.symbol;
    	}
    }

    isFinished() {
    	if (this.isDraw() === true || this.getWinner() !== null)
			return true;
    	return false;
    }

    getWinner() {
		for (let i = 0; i < 3; i++){
			if (this.getFieldValue(0,i) === this.getFieldValue(1,i) && this.getFieldValue(1,i) === this.getFieldValue(2,i))
				return this.getFieldValue(0,i);
			else
				if (this.getFieldValue(i,0) === this.getFieldValue(i,1) && this.getFieldValue(i,1) === this.getFieldValue(i,2))
                    return this.getFieldValue(i,0);
		}
		if ((this.getFieldValue(0,0) === this.getFieldValue(1,1) && this.getFieldValue(1,1) === this.getFieldValue(2,2))||
		(this.getFieldValue(0,2) === this.getFieldValue(1,1) && this.getFieldValue(1,1) === this.getFieldValue(2,0)))
            return this.getFieldValue(1,1);
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
    	return this.table[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
