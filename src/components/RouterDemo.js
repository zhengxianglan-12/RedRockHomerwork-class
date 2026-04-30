// src/components/RouterDemo.js
import React, { useState } from 'react';
import { HashRouter, BrowserRouter, Route, Link } from '../my-router';

// 首页组件
const DemoHome = () => (
  <div style={{ padding: '20px', backgroundColor: '#f0f9ff', borderRadius: '8px' }}>
    <h2>🏠 首页</h2>
    <p>欢迎来到手写Router演示页面！</p>
    <p>当前URL: {window.location.href}</p>
  </div>
);

// 关于页面
const DemoAbout = () => (
  <div style={{ padding: '20px', backgroundColor: '#f6ffed', borderRadius: '8px' }}>
    <h2>ℹ️ 关于</h2>
    <p>这是一个手写Router的演示。</p>
    <p>实现了Hash和Browser两种模式。</p>
  </div>
);

// 用户页面
const DemoUser = () => (
  <div style={{ padding: '20px', backgroundColor: '#fff7e6', borderRadius: '8px' }}>
    <h2>👤 用户</h2>
    <p>用户ID: 123</p>
    <p>用户名: 测试用户</p>
  </div>
);

// Router演示组件
const RouterDemo = () => {
  const [routerType, setRouterType] = useState('hash');
  
  const renderRouter = () => {
    if (routerType === 'hash') {
      return (
        <HashRouter>
          <div style={{ marginTop: '20px' }}>
            <nav style={{ marginBottom: '20px' }}>
              <Link to="/demo" style={{ marginRight: '15px' }}>🏠 首页</Link>
              <Link to="/demo/about" style={{ marginRight: '15px' }}>ℹ️ 关于</Link>
              <Link to="/demo/user" style={{ marginRight: '15px' }}>👤 用户</Link>
            </nav>
            <Route path="/demo" component={DemoHome} exact />
            <Route path="/demo/about" component={DemoAbout} />
            <Route path="/demo/user" component={DemoUser} />
          </div>
        </HashRouter>
      );
    } else {
      return (
        <BrowserRouter>
          <div style={{ marginTop: '20px' }}>
            <nav style={{ marginBottom: '20px' }}>
              <Link to="/demo" style={{ marginRight: '15px' }}>🏠 首页</Link>
              <Link to="/demo/about" style={{ marginRight: '15px' }}>ℹ️ 关于</Link>
              <Link to="/demo/user" style={{ marginRight: '15px' }}>👤 用户</Link>
            </nav>
            <Route path="/demo" component={DemoHome} exact />
            <Route path="/demo/about" component={DemoAbout} />
            <Route path="/demo/user" component={DemoUser} />
          </div>
        </BrowserRouter>
      );
    }
  };
  
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🔧 手写Router演示</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>选择路由模式：</h3>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <button
            onClick={() => setRouterType('hash')}
            style={{
              padding: '10px 20px',
              backgroundColor: routerType === 'hash' ? '#1890ff' : '#f5f5f5',
              color: routerType === 'hash' ? 'white' : 'black',
              border: '1px solid #d9d9d9',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Hash模式
          </button>
          <button
            onClick={() => setRouterType('browser')}
            style={{
              padding: '10px 20px',
              backgroundColor: routerType === 'browser' ? '#1890ff' : '#f5f5f5',
              color: routerType === 'browser' ? 'white' : 'black',
              border: '1px solid #d9d9d9',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Browser模式
          </button>
        </div>
        
        <div style={{ 
          padding: '15px', 
          backgroundColor: '#fff7e6', 
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          <h4>当前模式：{routerType === 'hash' ? 'Hash模式' : 'Browser模式'}</h4>
          <p>URL: {window.location.href}</p>
          <p>Hash模式URL示例: http://localhost:3000/#/router_demo</p>
          <p>Browser模式URL示例: http://localhost:3000/router_demo</p>
        </div>
      </div>
      
      {renderRouter()}
      
      <div style={{ 
        marginTop: '40px', 
        padding: '20px', 
        backgroundColor: '#f6f8fa',
        borderRadius: '8px',
        border: '1px solid #e1e4e8'
      }}>
        <h3>💡 实现原理</h3>
        <h4>Hash Router原理：</h4>
        <ul>
          <li>监听 <code>window.onhashchange</code> 事件</li>
          <li>URL的hash部分变化时更新组件</li>
          <li>通过 <code>window.location.hash</code> 修改路由</li>
        </ul>
        
        <h4>Browser Router原理：</h4>
        <ul>
          <li>使用HTML5 History API (<code>pushState</code>)</li>
          <li>监听 <code>window.onpopstate</code> 事件</li>
          <li>拦截a标签点击，阻止默认跳转</li>
        </ul>
        
        <h4>核心组件：</h4>
        <ul>
          <li><strong>Router</strong>: 提供路由上下文，监听URL变化</li>
          <li><strong>Route</strong>: 根据当前路径渲染对应组件</li>
          <li><strong>Link</strong>: 路由跳转链接，阻止默认行为</li>
        </ul>
      </div>
    </div>
  );
};

export default RouterDemo;