

export const Square = ({ value, onSquareClick }: any) =>{
    return (
        <button 
            style={{
                display: 'infle-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
                backgroundColor: '#fff',
                border: '1px solid #999',
                outline: 0,
                fontSize: '1rem',
                fontWeight: 'bold',
            }}    
            onClick={onSquareClick}
        >
            {value}
        </button>
    )
}