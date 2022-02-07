import React from 'react'

export const About = () => {
        const aboutStyle = {
                minHeight: "70vh",
                margin: "3%"
        }
        return (
                <div style={aboutStyle}>
                        <p>Hi there, Welcome to my todo-list app made with React and database and deployed with firebase.</p>
                        <p>You can create your todo-list here by simply adding the title and desctiption of your todo and also you can delete the todos which are done. </p>
                        <p>Enjoy!</p>
                </div>
        )
}
