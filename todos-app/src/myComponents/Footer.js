import React from 'react'

export const Footer = () => {
        const footerStyle = {
                position: "relative",
                width: "100%"
                // bottom: "0"
        }
        return (
                <div className=" bottom bg-dark text-center text-light my-2 py-2" style={footerStyle}>
                        Copyrights &copy; todo-list-28e0d.web.app
                </div>
        )
}
