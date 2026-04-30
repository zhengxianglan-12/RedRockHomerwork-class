// 修改App.js，添加路由到演示页面
import React from 'react';
import { RecoilRoot } from 'recoil';
import { HashRouter, Route, Link } from './my-router';
import TodoList from './components/TodoList';
import RouterDemo from './components/RouterDemo';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <HashRouter>
        <div style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
          {/* 导航栏 */}
          <nav style={{
            backgroundColor: 'white',
            padding: '15px 20px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            marginBottom: '20px'
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '20px' }}>
              <Link to="/" style={{ textDecoration: 'none', color: '#1890ff', fontWeight: 'bold' }}>
                📝 TodoList
              </Link>
              <Link to="/router-demo" style={{ textDecoration: 'none', color: '#1890ff', fontWeight: 'bold' }}>
                🔧 手写Router演示
              </Link>
              <Link to="/about" style={{ textDecoration: 'none', color: '#1890ff', fontWeight: 'bold' }}>
                ℹ️ 关于
              </Link>
            </div>
          </nav>

          {/* 路由内容 */}
          <Route path="/" component={TodoList} exact />
          <Route path="/router-demo" component={RouterDemo} />
          <Route path="/about" component={() => (
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h1>关于</h1>
              <p>这是一个包含手写Router的TodoList项目</p>
            </div>
          )} />
        </div>
      </HashRouter>
    </RecoilRoot>
  );
}

export default App;