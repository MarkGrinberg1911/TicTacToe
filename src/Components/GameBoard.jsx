import './gameboard.css'
import { gameContext } from "../App";
import { useState, useContext } from 'react';

function GameBoard() {
    const { player, computer } = useContext(gameContext)

    const [A1, setA1] = useState("")
    const [A2, setA2] = useState("")
    const [A3, setA3] = useState("")
    const [A4, setA4] = useState("")
    const [A5, setA5] = useState("")
    const [A6, setA6] = useState("")
    const [A7, setA7] = useState("")
    const [A8, setA8] = useState("")
    const [A9, setA9] = useState("")

    const [turn, setTurn] = useState(true)
    function handClick1() {
        if (A1 === '') {
            setTurn(!turn);
            if (turn) { setA1(player) }
            else { setA1(computer) }
        }
    }
    function handClick2() {
        if (A2 === '') {
            setTurn(!turn);
            if (turn) { setA2(player) }
            else { setA2(computer) }
        }
    }
    function handClick3() {
        if (A3 === '') {
            setTurn(!turn);
            if (turn) { setA3(player) }
            else { setA3(computer) }
        }
    }
    function handClick4() {
        if (A4 === '') {
            setTurn(!turn);
            if (turn) { setA4(player) }
            else { setA4(computer) }
        }
    }
    function handClick5() {
        if (A5 === '') {
            setTurn(!turn);
            if (turn) { setA5(player) }
            else { setA5(computer) }
        }
    }
    function handClick6() {
        if (A6 === '') {
            setTurn(!turn);
            if (turn) { setA6(player) }
            else { setA6(computer) }
        }
    }
    function handClick7() {
        if (A7 === '') {
            setTurn(!turn);
            if (turn) { setA7(player) }
            else { setA7(computer) }
        }
    }
    function handClick8() {
        if (A8 === '') {
            setTurn(!turn);
            if (turn) { setA8(player) }
            else { setA8(computer) }
        }
    }
    function handClick9() {
        if (A9 === '') {
            setTurn(!turn);
            if (turn) { setA9(player) }
            else { setA9(computer) }
        }
    }


    function winner() {
        if ((A1 === A2 && A2 === A3 && A1 === 'X') || (A4 === A5 && A5 === A6 && A6 === 'X')
            || (A7 === A8 && A8 === A9 && A9 === 'X') || (A1 === A4 && A4 === A7 && A7 === 'X')
            || (A2 === A5 && A5 === A8 && A8 === 'X') || (A3 === A6 && A6 === A9 && A9 === 'X')
            || (A1 === A5 && A5 === A9 && A9 === 'X') || (A3 === A5 && A5 === A7 && A7 === 'X')) { return true }
    }
    function winner2() {
        if ((A1 === A2 && A2 === A3 && A1 === 'O') || (A4 === A5 && A5 === A6 && A6 === 'O')
            || (A7 === A8 && A8 === A9 && A9 === 'O') || (A1 === A4 && A4 === A7 && A7 === 'O')
            || (A2 === A5 && A5 === A8 && A8 === 'O') || (A3 === A6 && A6 === A9 && A9 === 'O')
            || (A1 === A5 && A5 === A9 && A9 === 'O') || (A3 === A5 && A5 === A7 && A7 === 'O')) { return true }
    }
    function draw() {
        if (A1 !== '' && A2 !== '' && A3 !== '' && A4 !== '' && A5 !== '' && A6 !== '' && A7 !== '' && A8 !== '' && A9 !== '' && !winner() && !winner2())
            return true;
    }
    function GameOver() {
        if (winner() || winner2()) {
            return true;
        }
    }
    function refreshPage() {
        window.location.reload(false);
    }





    return (
        <div className="Gameboard">
            <button className='button' onClick={refreshPage}>New game</button>
            {winner() && <h1>P 1 win</h1>}
            {winner2() && <h1>P 2 win</h1>}
            {draw() && <h1>Its a draw</h1>}
            <div className="grid-container">
                <div className="grid-item" onClick={() =>!GameOver()&& handClick1()}>{A1}</div>
                <div className="grid-item" onClick={() =>!GameOver()&& handClick2(player)}>{A2}</div>
                <div className="grid-item" onClick={() =>!GameOver()&& handClick3(player)}>{A3}</div>
                <div className="grid-item" onClick={() =>!GameOver()&& handClick4(player)}>{A4}</div>
                <div className="grid-item" onClick={() =>!GameOver()&& handClick5(player)}>{A5}</div>
                <div className="grid-item" onClick={() =>!GameOver()&& handClick6(player)}>{A6}</div>
                <div className="grid-item" onClick={() =>!GameOver()&& handClick7(player)}>{A7}</div>
                <div className="grid-item" onClick={() =>!GameOver()&& handClick8(player)}>{A8}</div>
                <div className="grid-item" onClick={() =>!GameOver()&& handClick9(player)}>{A9}</div>
            </div>


        </div>
    );
}

export default GameBoard;