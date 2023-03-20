import { useSelector , useDispatch } from 'react-redux'

const Counter = () => {

    type reducerState = {
        value: number
    }

    type reducerAction = {
        type: string,
        payload: number
    }

    const dispatch = useDispatch()
    const getState = useSelector((state: reducerState) => state.value)

    const increase = () => {
        const action : reducerAction = {type : "increase" , payload : 2}
        dispatch(action)
    }

    const decrease = () => {
        const action : reducerAction = {type : "decrease" , payload : 4}
        dispatch(action)
    }

    return (
        <div>
            <h1>Redux Basics</h1>
            <div>Counter is : {getState}</div>
            <button onClick={increase}>Increase +</button>
            <button onClick={decrease}>Decrease -</button>
        </div>
    )
}

export default Counter