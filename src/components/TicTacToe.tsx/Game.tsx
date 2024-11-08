import { useGameStore } from "../../store/useStore2"
import { Board } from "./Board";


export const Game = () => {
    const { history, setHistory, currentMove, setCurrentMove } = useGameStore()
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares: any) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
        setCurrentMove(nextHistory.length - 1)
    }

    function jumpTo(nextMove: any) {
        setCurrentMove(nextMove)
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                fontFamily: 'monospace'
            }}
        >
            <div>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div style={{ marginLeft: '1rem'}}>
                <ol>
                    {history.map((_: any, historyIndex: any) => {
                        const description = 
                            historyIndex > 0
                            ? `Go to move #${historyIndex}`
                            : 'Go to game start'

                        return (
                            <li key={historyIndex}>
                                <button onClick={() => jumpTo(historyIndex)}>
                                    {description}
                                </button>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
    )

}