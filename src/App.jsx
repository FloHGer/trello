import React from 'react'
import List from './components/List.jsx'
import './index.css'

export default function App() {
    return (
        <>
            <h1>List-Render-App</h1>
            <section className='lists'>
                <List index='0' />
                <List index='1' />
            </section>
        </>
    )
}
