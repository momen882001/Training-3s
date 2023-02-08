import { AiTwotoneDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import React, { useState } from 'react'

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

    const handleAdding = (e: any) => {
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

    const handleDeleting = (e: any) => {
        e.preventDefualt()
        let newTodoList = [...todolist]
        // newTodoList.splice(index,1)
        setTodolist(newTodoList)
    }

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
                        <button onClick={handleDeleting}>delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Todo
