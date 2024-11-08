import  useStore  from '../store/useStore';


const Counter: React.FC = () => {
    const count = useStore((state: any) => state.count);
    const increment = useStore((state: any) => state.increment);

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter;