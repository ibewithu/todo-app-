import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../App.css'
import { addTodo } from '../store/actions/TodoAction'

export const AddTodo = (proms) => {
        const [title, setTitle] = useState("")
        const [description, setDescription] = useState("")
        const dispatch = useDispatch()
        const onSubmitClick = (e) => {
                e.preventDefault();
                if (!(title && description)) {
                        alert('title or description field can not be empty')
                }
                else {
                        dispatch(addTodo({ title, description }))
                        setTitle("");
                        setDescription("");
                }
        }

        return (
                <div className="container customAdd">
                        <form onSubmit={onSubmitClick}>
                                <div className="mb-3">
                                        <label htmlFor="todoTitle" className="form-label">Enetr todo title here</label>
                                        <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                                </div>

                                <div className="mb-3">
                                        <label htmlFor="todoDescription" className="form-label">Enter todo description here</label>
                                        <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} className="form-control" id="description" />
                                </div>

                                <button type="submit" className="btn btn-success">Add Todo</button>
                        </form>
                </div>
        )
}
