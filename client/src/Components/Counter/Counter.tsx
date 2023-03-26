import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease, update } from '../../store/counterSlice'
import { showMe } from '../../store/showSlice'
import imgRight from '../../assets/counter.png'
import './Counter.css'
import { AiOutlineReload } from 'react-icons/ai';
import IconButton from '@mui/material/IconButton';
// types
import { counterState, counterInitState } from '../../store/counterSlice'


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
        <div className="counter-contain" id='counter'>
            <section className="counter-content">
                <h1 data-aos="fade-right">Redux Basics</h1>
                <div className="seperator"></div>
                {
                    showhandler() &&
                    <>
                        <div data-aos="zoom-out" className='counter-text'>Counter is : {counterState.counter.value}</div>
                        <div className='redux-btn-contain'>
                            <button data-aos="zoom-out" onClick={() => dispatch(increase(5))}>+</button>
                            <IconButton data-aos="zoom-out" onClick={() => dispatch(update())} sx={{ p: 0 }}>
                            <AiOutlineReload/>
                            </IconButton>
                            <button data-aos="zoom-out" onClick={() => dispatch(decrease(1))}>-</button>
                        </div>
                    </>
                }
                <button data-aos="zoom-out" onClick={() => dispatch(showMe())}>{showhandler() ? "Hide" : "Show"}</button>
            </section>
            <section className="img-side">
                <img src={imgRight} alt="" />
            </section>
        </div>
    )
}

export default Counter