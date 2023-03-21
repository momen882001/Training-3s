import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from '../../store/counterSlice'
import { counterState } from '../../store/counterSlice'
import { showMe } from '../../store/showSlice'

const Counter = () => {

    const dispatch = useDispatch()
    const counterState = useSelector((state: counterState) => state)
    const showState = useSelector((state: { show: { isShown: boolean } }) => state)

    const showhandler = () => {
        return showState.show.isShown
    }

    // Redux Basics
    // const counterOperations = (type: string, payload: number) => {
    //     const action: reducerAction = { type, payload }
    //     dispatch(action)
    // }

    return (
        <div>
            <h1>Redux Basics</h1>
            {
                showhandler() &&
                <>
                    <div>Counter is : {counterState.counter.value}</div>
                    {/* <div>{counterState.name}</div> */}
                    <button onClick={() => dispatch(increase(5))}>Increase +</button>
                    <button onClick={() => dispatch(decrease(1))}>Decrease -</button>
                </>
            }
            <button onClick={() => dispatch(showMe())}>{showhandler() ? "Hide" : "Show"}</button>
        </div>
    )
}

export default Counter