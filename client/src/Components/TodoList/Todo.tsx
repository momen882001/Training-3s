import './Todo.css'
import { MdOutlineAddBox } from 'react-icons/md';
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
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { InputBase } from '@mui/material';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';



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

    // start Todo Add function
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
                let newTodoList = [...todolist]
                newTodoList.splice(index, 1)
                setTodolist(newTodoList)
            }
            return data
        })
    }
    // End Todo Edit function


    return (
        <div>
            <Container>
                <Row className='todo-row'>
                    <Col className='col-1' xs={12} sm={12} md={6} lg={6}>
                        <form className='form'>
                            <p className='form-title'>Form</p>
                            <input required value={name} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} type="text" placeholder='Name' name="name" />
                            <input required value={address} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAddress(event.target.value)} type="text" placeholder='Address' name="address" />
                            <input required value={phone} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPhone(event.target.value)} type="text" placeholder='01*********' name="telephone" />
                            <input required value={date} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDate(event.target.value)} type="date" name="date" />
                            <IconButton onClick={handleAdding} sx={{ p: 0 }}>
                                < MdOutlineAddBox color='#fff' size={30} />
                            </IconButton>
                        </form>
                    </Col>
                    <Col className='col-2' xs={12} sm={12} md={6} lg={6}>
                        <div className='form-results'>
                            {todolist.length === 0 ?
                                <p className='text-no-items'>There are no items</p> :
                                todolist.map((todo, index) => (
                                    <div key={index} className="form-result" >
                                        <div className='name-more-container'>
                                            <div className='name'>
                                                <label>Name:</label>
                                                <p>{todo.name}</p>
                                            </div>
                                            <div className='more-icon'>
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
                                                            <Typography style={{ marginRight: "4px" }}>Edit</Typography><FaEdit size={18} />
                                                        </IconButton>
                                                    </MenuItem>
                                                    <MenuItem onClick={handleCloseUserMenu}>
                                                        <IconButton onClick={(e) => handleDeleting(e, index)} sx={{ p: 0 }}>
                                                            <Typography>Delete</Typography><AiFillDelete size={18} />
                                                        </IconButton>
                                                    </MenuItem>
                                                </Menu>
                                            </div>
                                        </div>
                                        <div className='address'>
                                            <label>Address:</label>
                                            <p>{todo.address}</p>
                                        </div>
                                        <div className='phone'>
                                            <label>Phone:</label>
                                            <p>{todo.phone}</p>
                                        </div>
                                        <div className='date'>
                                            <label>Date:</label>
                                            <p>{todo.date}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Todo
