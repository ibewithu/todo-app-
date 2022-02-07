import React from 'react'
import '../App.css'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
        console.log(props)
        return (
                <div className="container customBox">
                        <h3 className=" my-3 listHeading">Todos List</h3>
                        {props.todos && props.todos.map((todo) => {
                                return <TodoItem todo={todo} key={todo.id} />
                        })}

                </div>
        )
}

