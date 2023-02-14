import './Todo.css'
import { AiTwotoneDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MoreIcon from '@mui/icons-material/MoreVert';



const Todo = () => {

    interface Todo {
        name: string,
        address: string,
        date: string,
        phone: string
    }

    const [todolist, setTodolist] = useState<Todo[]>([])
    const [name, setName] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [date, setDate] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleAdding = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setTodolist([...todolist,
        {
            name: name,
            address: address,
            date: date,
            phone: phone
        }])
        setName('')
        setAddress('')
        setDate('')
        setPhone('')
    }

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

    const handleEditing = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
        e.preventDefault()
        todolist.map((data, id) => {
            if (id === index) {
                setName(data.name)
                setAddress(data.address)
                setPhone(data.phone)
                setDate(data.date)
                let newTodoList = [...todolist]
                newTodoList.splice(index, 1)
                setTodolist(newTodoList)
            }
            return data
        })
    }

    console.log(todolist);


    return (
        <div>
            <form action="">
                <input value={name} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} type="text" placeholder='name' name="" id="" />
                <input value={address} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAddress(event.target.value)} type="text" placeholder='address' name="" id="" />
                <input value={phone} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPhone(event.target.value)} type="text" placeholder='011..' name="" id="" />
                <input value={date} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDate(event.target.value)} type="date" name="" id="" />
                <button onClick={handleAdding}>add</button>
            </form>
            <div>
                {todolist.map((todo, index) => (
                    <div key={index}>
                        <p>{todo.name}</p>
                        <p>{todo.address}</p>
                        <p>{todo.date}</p>
                        <p>{todo.phone}</p>
                        {/* <button onClick={(e) => handleDeleting(e, index)}>delete</button> */}
                        {/* <button onClick={(e) => handleEditing(e, index)}>edit</button> */}
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <MoreIcon />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
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
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>
                                <IconButton onClick={(e) => handleEditing(e, index)} sx={{ p: 0 }}>
                                    <Typography style={{marginRight:"4px"}}>Edit</Typography><FaEdit size={18} />
                                </IconButton>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <IconButton onClick={(e) => handleDeleting(e, index)} sx={{ p: 0 }}>
                                    <Typography>Delete</Typography><AiFillDelete size={18}  />
                                </IconButton>
                            </MenuItem>
                        </Menu>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Todo
