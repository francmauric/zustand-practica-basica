import { create } from 'zustand';

interface AppState {
    count: number;
    todos: string[];
    increment: () => void;
    addTodo: (todo: string) => void
}

const useStore = create<AppState>((set: any) => ({
    count: 0,
    todos: [],
    increment: () => set((state: any) => ({ count: state.count + 1})),
    addTodo: (todo: any) => 
        set((state: any) => ({ todos: [...state.todos, todo]})),

}));

export default useStore;