import './gameboard2.css'
import { useEffect, useState } from 'react';


function GameBoard2() {
    const [gameboard, setGameboard] = useState(["", "", "", "", "", "", "", "", "",])
    let [moves, setMoves] = useState(false)


    const [moveCounter, setMoveCounter] = useState(0)
    const [num, setNum] = useState(0)
    const [totalNum, setTotalNum] = useState(moveCounter + num)
    function Play(x, y, i) {
        if (gameboard[i] === "" && !checkWin()) {
            moves = true;
            gameboard[i] = 'X'
            setGameboard([...gameboard])
            CPU()
            setMoveCounter(moveCounter + 1)
        }
        else {
            console.log("INVALID MOVE")
        }
    }
    function CPU() {
        moves = true;
        if (gameboard[6] === gameboard[4] && (gameboard[6] === 'O' || gameboard[6] === 'O') && moves === true) {
            if (gameboard[2] === '') {
                gameboard[2] = "O";
                setGameboard([...gameboard]);
                moves = false;
            }
        }
        if (gameboard[2] === gameboard[4] && (gameboard[2] === 'O' || gameboard[2] === 'O') && moves === true) {
            if (gameboard[6] === '') {
                gameboard[6] = "O";
                setGameboard([...gameboard]);
                moves = false;
            }
        }
        if (gameboard[0] === gameboard[4] && (gameboard[0] === 'O' || gameboard[0] === 'O') && moves === true) {
            if (gameboard[8] === '') {
                gameboard[8] = "O";
                setGameboard([...gameboard]);
                moves = false;
            }
        }
        for (let i = 8; i > 0; i -= 3) {
            if (gameboard[i] === gameboard[i - 2] && (gameboard[i] === 'O' || gameboard[i] === 'O') && moves === true) {
                if (gameboard[i - 1] === '') {
                    gameboard[i - 1] = "O";
                    setGameboard([...gameboard]);
                    moves = false;
                }
            }
        }
        for (let i = 8; i > 5; i--) {
            if (gameboard[i] === gameboard[i - 6] && (gameboard[i] === 'O' || gameboard[i] === 'O') && moves === true) {
                if (gameboard[i - 3] === '') {
                    gameboard[i - 3] = "O";
                    setGameboard([...gameboard]);
                    moves = false;
                }
            }
        }

        for (let i = 0; i < gameboard.length; i += 3) {
            if (gameboard[i] === gameboard[i + 1] && (gameboard[i] === 'O' || gameboard[i] === 'O') && moves === true) {
                if (gameboard[i + 2] === '') {
                    gameboard[i + 2] = "O";
                    setGameboard([...gameboard]);
                    moves = false;
                }
            }
        }
        for (let i = 0; i < 3; i++) {
            if (gameboard[i] === gameboard[i + 3] && (gameboard[i] === 'O' || gameboard[i] === 'O') && moves === true) {
                if (gameboard[i + 6] === '') {
                    gameboard[i + 6] = "O";
                    setGameboard([...gameboard]);
                    moves = false;
                }
            }
        }
        for (let i = 8; i > 0; i -= 3) {
            if (gameboard[i] === gameboard[i - 1] && (gameboard[i] === 'O' || gameboard[i] === 'O') && moves === true) {
                if (gameboard[i - 2] === '') {
                    gameboard[i - 2] = "O";
                    setGameboard([...gameboard]);
                    moves = false;
                }
            }
        }
        for (let i = 8; i > 5; i--) {
            if (gameboard[i] === gameboard[i - 3] && (gameboard[i] === 'O' || gameboard[i] === 'O') && moves === true) {
                if (gameboard[i - 6] === '') {
                    gameboard[i - 6] = "O";
                    setGameboard([...gameboard]);
                    moves = false;
                }
            }
        }
        if (gameboard[6] === gameboard[4] && (gameboard[6] === 'X' || gameboard[6] === 'O') && moves === true) {
            if (gameboard[2] === '') {
                gameboard[2] = "O";
                setGameboard([...gameboard]);
                moves = false;
            }
        }
        if (gameboard[2] === gameboard[4] && (gameboard[2] === 'X' || gameboard[2] === 'O') && moves === true) {
            if (gameboard[6] === '') {
                gameboard[6] = "O";
                setGameboard([...gameboard]);
                moves = false;
            }
        }
        if (gameboard[0] === gameboard[4] && (gameboard[0] === 'X' || gameboard[0] === 'O') && moves === true) {
            if (gameboard[8] === '') {
                gameboard[8] = "O";
                setGameboard([...gameboard]);
                moves = false;
            }
        }
        for (let i = 8; i > 0; i -= 3) {
            if (gameboard[i] === gameboard[i - 2] && (gameboard[i] === 'X' || gameboard[i] === 'O') && moves === true) {
                if (gameboard[i - 1] === '') {
                    gameboard[i - 1] = "O";
                    setGameboard([...gameboard]);
                    moves = false;
                }
            }
        }
        for (let i = 8; i > 5; i--) {
            if (gameboard[i] === gameboard[i - 6] && (gameboard[i] === 'X' || gameboard[i] === 'O') && moves === true) {
                if (gameboard[i - 3] === '') {
                    gameboard[i - 3] = "O";
                    setGameboard([...gameboard]);
                    moves = false;
                }
            }
        }

        for (let i = 0; i < gameboard.length; i += 3) {
            if (gameboard[i] === gameboard[i + 1] && (gameboard[i] === 'X' || gameboard[i] === 'O') && moves === true) {
                if (gameboard[i + 2] === '') {
                    gameboard[i + 2] = "O";
                    setGameboard([...gameboard]);
                    moves = false;
                }
            }
        }
        for (let i = 0; i < 3; i++) {
            if (gameboard[i] === gameboard[i + 3] && (gameboard[i] === 'X' || gameboard[i] === 'O') && moves === true) {
                if (gameboard[i + 6] === '') {
                    gameboard[i + 6] = "O";
                    setGameboard([...gameboard]);
                    moves = false;
                }
            }
        }
        for (let i = 8; i > 0; i -= 3) {
            if (gameboard[i] === gameboard[i - 1] && (gameboard[i] === 'X' || gameboard[i] === 'O') && moves === true) {
                if (gameboard[i - 2] === '') {
                    gameboard[i - 2] = "O";
                    setGameboard([...gameboard]);
                    moves = false;
                }
            }
        }
        for (let i = 8; i > 5; i--) {
            if (gameboard[i] === gameboard[i - 3] && (gameboard[i] === 'X' || gameboard[i] === 'O') && moves === true) {
                if (gameboard[i - 6] === '') {
                    gameboard[i - 6] = "O";
                    setGameboard([...gameboard]);
                    moves = false;
                }
            }
        }
        if (!checkWin() && moves === true) {
            if (gameboard[4] === '') {
                gameboard[4] = 'O'
                setGameboard([...gameboard]);
                moves = false
                setMoveCounter(moveCounter + 1)
            }
            else if (gameboard[6] === '') {
                gameboard[6] = 'O'
                setGameboard([...gameboard]);
                moves = false
                setMoveCounter(moveCounter + 1)
            }

            else if (gameboard[0] === '') {
                gameboard[0] = 'O'
                setGameboard([...gameboard]);
                moves = false
                setMoveCounter(moveCounter + 1)
            }
            else if (gameboard[3] === '') {
                gameboard[3] = 'O'
                setGameboard([...gameboard]);
                moves = false
                setMoveCounter(moveCounter + 1)
            }
            else if (gameboard[8] === '') {
                gameboard[8] = 'O'
                setGameboard([...gameboard]);
                moves = false
                setMoveCounter(moveCounter + 1)
            }
            else if (gameboard[2] === '') {
                gameboard[2] = 'O'
                setGameboard([...gameboard]);
                moves = false
                setMoveCounter(moveCounter + 1)
            }

        }
        moves = false;
        setNum(num + 1)
    }
    const checkRow = () => {
        for (let i = 0; i < gameboard.length; i += 3) {
            if (
                gameboard[i] === gameboard[i + 1] &&
                gameboard[i + 1] === gameboard[i + 2] &&
                gameboard[i] !== ""
            ) {
                return true;
            }
        }
    };
    const checkColumn = () => {
        for (let i = 0; i < gameboard.length; i++) {
            if (
                gameboard[i] === gameboard[i + 3] &&
                gameboard[i + 3] === gameboard[i + 6] &&
                gameboard[i] !== ""
            ) {
                return true;
            }
        }
    };
    const checkDiagnol = () => {
        for (let i = 0; i < gameboard.length; i++) {
            if (
                (gameboard[0] === gameboard[4] && gameboard[4] === gameboard[8] && gameboard[0] !== "") ||
                (gameboard[2] === gameboard[4] && gameboard[4] === gameboard[6] && gameboard[2] !== "")
            ) {
                return true;
            }
        }
    };
    const checkTie = () => {
        for (let i = 0; i < gameboard.length; i++) {
            if (gameboard[i] === "") {
                return false;
            }
        }
        return true;
    };
    const checkWin = () => {
        if (checkColumn() || checkDiagnol() || checkRow()) {
            console.log("CPU WON")
            return true;
        }
    };
    if (!checkWin()) {
        if (checkTie()) {
            console.log("TIE");
        }
    }
    function reset() {
        setGameboard(["", "", "", "", "", "", "", "", "",])
        moves=false;
    }
    console.log(moves)
    useEffect(() => {
        setTotalNum(num + moveCounter)
    })
    return (
        <div className=''>
            <button onClick={() => reset()}>RESET ME</button>
            <table className='Table'>
                <tbody>
                    <tr>
                        <th onClick={() => Play(0, 1, 0)}>{gameboard[0]}</th>
                        <th onClick={() => Play(1, 1, 1)}>{gameboard[1]}</th>
                        <th onClick={() => Play(2, 1, 2)}>{gameboard[2]}</th>
                    </tr>
                    <tr>
                        <th onClick={() => Play(0, 2, 3)}>{gameboard[3]}</th>
                        <th onClick={() => Play(1, 2, 4)}>{gameboard[4]}</th>
                        <th onClick={() => Play(2, 2, 5)}>{gameboard[5]}</th>
                    </tr>
                    <tr>
                        <th onClick={() => Play(0, 3, 6)}>{gameboard[6]}</th>
                        <th onClick={() => Play(1, 3, 7)}>{gameboard[7]}</th>
                        <th onClick={() => Play(2, 3, 8)}>{gameboard[8]}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default GameBoard2;