import { useState } from 'react'
import styles from './App.module.css'  // 导入 CSS Module
import viteLogo from './assets/vite.svg'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.container}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1 className={styles.title}>Vite + React + TypeScript + CSS Module</h1>
      
      <div className="card">
        <button 
          className={styles.button}
          onClick={() => setCount((count) => count + 1)}
        >
          点击次数: {count}
        </button>
        <p>
          编辑 <code>src/App.tsx</code> 并保存以测试 HMR
        </p>
      </div>
      
      <p className="read-the-docs">
        点击 Vite 和 React 徽标了解更多
      </p>
    </div>
  )
  
}


export default App