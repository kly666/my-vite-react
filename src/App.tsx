import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import { defaultError } from ''

function App() {
  const [count, setCount] = useState(0)
  // console.log(MyEnum, 'MyEnum')
  let a = 1
  switch (a) {
    case 1:
      console.log(1)
      break
    case 2:
      console.log(2)
      break
    default:
      console.log('default')
  }

  return (
    <div className="App">
      {false}11
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
