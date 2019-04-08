import React from 'react'
import { hot } from 'react-hot-loader/root'
import './app.css'

function App() {
  return (
    <div className='root' onClick={() => this.setState({ num: this.state.num + 1 })}>
      
      Hello World.

      <style jsx>{`
        .root{
          margin-top: 20vh;
          width: 100;
          font-size: 40px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default hot(App)
