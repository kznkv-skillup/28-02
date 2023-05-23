import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

const Title = () => {
    return <h1>Hello App component</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p className="red">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                sint voluptas facilis voluptatum odio repudiandae, a similique
                nesciunt eos veritatis officia quod autem iste inventore esse
                accusantium hic molestiae assumenda?
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                laborum natus, nisi in itaque velit officia libero, excepturi,
                eaque repudiandae sint reprehenderit obcaecati rerum voluptate?
                Illum recusandae nulla animi iusto.
            </p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
