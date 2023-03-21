import { useSelector, useDispatch } from 'react-redux'
import { reducerAction, reducerState, increase, decrease } from '../../store/index'

const Counter = () => {

    const dispatch = useDispatch()
    const counterState = useSelector((state: reducerState) => state)

    // Redux Basics
    // const counterOperations = (type: string, payload: number) => {
    //     const action: reducerAction = { type, payload }
    //     dispatch(action)
    // }

    return (
        <div>
            <h1>Redux Basics</h1>
            <div>Counter is : {counterState.value}</div>
            <div>{counterState.name}</div>
            <button onClick={() => dispatch(increase(5))}>Increase +</button>
            <button onClick={() => dispatch(decrease(1))}>Decrease -</button>
        </div>
    )
}

export default Counter