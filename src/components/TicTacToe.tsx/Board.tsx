import { Square } from "./Square";
import { calculateStatus, calculateTurns, calculateWinner } from "./Calculate";

export const Board = ({ xIsNext, squares, onPlay}: any) => {
    const winner = calculateWinner(squares);
    const turns = calculateTurns(squares);
    const player = xIsNext ? 'X' : 'O';
    const status = calculateStatus(winner, turns, player)

    function handleClick(i: any) {
        if (squares[i] || winner) return
        const nextSquares = squares.slice()
        nextSquares[i] = player
        onPlay(nextSquares)
    }

    return(
        <>
            <div style={{ marginBottom: '0.5rem'}}>{status}</div>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3,1fr)',
                    gridTemplateRows: 'repeat(3,1fr)',
                    width:'calc(3* 2.5rem',
                    height: 'calc(3* 2.5rem',
                    border: '1px solid #999',
                }}
            >
                {squares.map((_: any,i:any) => (
                    <Square
                        key={`square-${i}`}
                        value={squares[i]}
                        onSquareClick={() => handleClick(i)}
                    />
                ))}
            </div>
        </>
    )


}