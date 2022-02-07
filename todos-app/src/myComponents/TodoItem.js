import React from 'react'
import { useDispatch } from 'react-redux'
import { onDeleteClick } from '../store/actions/TodoAction'
import moment from 'moment'

export const TodoItem = ({ todo }) => {
        const dispatch = useDispatch()
        return (
                <div className="todoItem">
                        <h4>{todo.title}</h4>

                        <p>{todo.description}</p>

                        {/* <p>{todo.createdAt}</p> */}
                        <p>{moment(todo.createdAt.toDate()).calendar()}</p>

                        <button className="btn btn-danger btn-sm" onClick={() => { dispatch(onDeleteClick(todo)) }} >Delete</button>
                </div>
        )
}
