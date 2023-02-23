import './Todo.css'
import { IoIosAddCircle } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { TbArrowBigTop } from 'react-icons/tb';
import React, { useRef, useState , useEffect} from 'react'
import Swal from 'sweetalert2'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MoreIcon from '@mui/icons-material/MoreVert';
import imgLeft from '../../assets/todo.png'
import AOS from "aos";
import "aos/dist/aos.css";


const Todo = () => {

    interface Todo {
        name: string,
        address: string,
        date: string,
        phone: string,
        id: number
    }

    const [todolist, setTodolist] = useState<Todo[]>([])
    const [name, setName] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [date, setDate] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [todoId, setTodoId] = useState<number>(0)
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    let todoIndex = useRef<number | undefined>(undefined)

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
        setAnchorElUser(event.currentTarget);
        todoIndex.current = index
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        todoIndex.current = undefined
    };

    // console.log(todoIndex);


    // start Todo Add function
    const handleAdding = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (todolist.length === 0) {
            console.log("1st condition");
            setTodolist([...todolist,
            {
                name: name,
                address: address,
                date: date,
                phone: phone,
                id: todoId
            }])
            setName('')
            setAddress('')
            setDate('')
            setPhone('')
            setTodoId(todoId + 1)
        } else {
            todolist.map((data) => {
                if (data.id === undefined) {
                    console.log("dakhlt el map");
                    setTodolist([...todolist,
                    {
                        name: name,
                        address: address,
                        date: date,
                        phone: phone,
                        id: todoId
                    }])
                    setName('')
                    setAddress('')
                    setDate('')
                    setPhone('')
                    setTodoId(todoId + 1)
                } else {
                    console.log("edit box");
                    console.log(data.id);
                    console.log(todoId);
                    let newTodoList = todolist[data.id]
                    newTodoList.name = name
                    newTodoList.address = address
                    newTodoList.phone = phone
                    newTodoList.date = date
                    setName('')
                    setAddress('')
                    setDate('')
                    setPhone('')
                    setTodoId(todoId + 1)
                }
            })
        }
    }
    // End Todo Add function

    // start Todo Delete function
    const handleDeleting = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
        e.preventDefault()
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // #1st way
                let newTodoList = [...todolist]
                newTodoList.splice(index, 1)
                setTodolist(newTodoList)
                // #2nd way
                // let newTodoList = todolist.filter((todo, id) => id !== index)
                // setTodolist(newTodoList)
            }
        })
    }
    // End Todo delete function

    // start Todo Edit function
    const handleEditing = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
        e.preventDefault()
        todolist.map((data, id) => {
            if (id === index) {
                setName(data.name)
                setAddress(data.address)
                setPhone(data.phone)
                setDate(data.date)
            }
            return data
        })
    }
    // End Todo Edit function

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


    return (
        <>
        <div id='todo' className="todo-contain">
            <section className="todo-img">
                <img src={imgLeft} alt="" />
            </section>
            <section className="todo-content">
                <h3>Todo form</h3>
                <div className="separator"></div>
                <form className='form' onSubmit={handleAdding}>
                    <input required value={name} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} type="text" placeholder='Name' name="name" />
                    <input required value={address} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAddress(event.target.value)} type="text" placeholder='Address' name="address" />
                    <input required value={phone} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPhone(event.target.value)} type="text" placeholder='01*********' name="telephone" />
                    <input required value={date} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDate(event.target.value)} type="date" name="date" />
                    <button type='submit' className='add-btn'>Add <IoIosAddCircle size={15}/> </button>
                </form>
                <div className='form-results'>
                    {todolist.length === 0 ?
                        <p className='text-no-items'>There are no items</p> :
                        todolist.map((todo, index) => (
                            <div key={index} className="form-result" >
                                <div className='name-more-container'>
                                    <div className='name'>
                                        <label>Name :</label>
                                        <p>{todo.name}</p>
                                    </div>
                                    <div className='more-icon'>
                                        <Tooltip style={{color:"#fff"}} title="Open options">
                                            <IconButton onClick={(e) => handleOpenUserMenu(e, index)} sx={{ p: 0 }}>
                                                <MoreIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Menu
                                            sx={{ mt: '45px' }}
                                            id={index.toString()}
                                            anchorEl={anchorElUser}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={todoIndex.current === index}
                                            onClose={handleCloseUserMenu}
                                        >
                                            <MenuItem onClick={handleCloseUserMenu}>
                                                <IconButton onClick={(e) => handleEditing(e, index)} sx={{ p: 0 }}>
                                                    <Typography style={{ marginRight: "24px" }}>Edit</Typography><FaEdit size={18} />
                                                </IconButton>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseUserMenu}>
                                                <IconButton onClick={(e) => handleDeleting(e, index)} sx={{ p: 0 }}>
                                                    <Typography style={{ marginRight: "4px" }}>Delete</Typography><AiFillDelete size={18} />
                                                </IconButton>
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                </div>
                                <div className='address'>
                                    <label>Address :</label>
                                    <p>{todo.address}</p>
                                </div>
                                <div className='phone'>
                                    <label>Phone :</label>
                                    <p>{todo.phone}</p>
                                </div>
                                <div className='date'>
                                    <label>Date :</label>
                                    <p>{todo.date}</p>
                                </div>
                            </div>
                        ))}
                </div>
                <a href="#todo">
                <div className="return-icon">
                    <TbArrowBigTop size={27} style={{color:"#191919"}}/>
                </div>
                </a>
            </section>
        </div>
                <div className="separator-section"></div>
        </>
    )
}

export default Todo
