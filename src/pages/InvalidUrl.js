import React from 'react'
import { Link } from 'react-router-dom'

const style = {
    container: {
        height: '100vh',
        width: '100%',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20
    },
    header: {
        color: "#000",
        fontSize: '40px',
        marginBottom: '10px'
    },
    clickable: {
        backgroundColor: '#00853f',
        color: '#fff',
        borderRadius: 10,
        padding: '10px 15px',
        textDecoration: 'none'
    }
}


const InvalidUrl = () => {
    return (
        <div style={style.container}>
            <h1 style={style.header}>404 - PAGE NOT FOUND</h1>
            <Link to='/' style={style.clickable}>GO TO HOMEPAGE</Link>
        </div>
    )
}

export default InvalidUrl