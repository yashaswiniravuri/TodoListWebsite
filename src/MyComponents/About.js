import React from 'react'
export const About = () => {
    let myStyle = {
        minHeight: "73vh",
        margin: "10px auto"
    }
    return (
        <div className="container my-5" style={myStyle}>
            <h3>Description</h3>
            <p>A single page react application, where you can add your day to day task and delete them after you finish the task.</p>

        </div>
    )
}            