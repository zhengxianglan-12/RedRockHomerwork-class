// src/my-router/BrowserRouter.js
import React, { createContext, useState, useEffect } from 'react';

export const RouterContext = createContext();

const BrowserRouter = ({ children }) => {
  // 当前路径
  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.pathname;
  });

  // 导航函数
  const navigate = (path) => {
    // 使用History API改变URL
    window.history.pushState({}, '', path);
    // 手动触发路径更新
    setCurrentPath(path);
  };

  // 监听popstate事件（浏览器的前进/后退）
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    // 监听popstate
    window.addEventListener('popstate', handlePopState);
    
    // 拦截所有a标签的点击
    const handleClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.getAttribute('href')?.startsWith('/')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        navigate(href);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const contextValue = {
    currentPath,
    navigate,
  };

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  );
};

export default BrowserRouter;