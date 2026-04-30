// src/my-router/HashRouter.js
import React, { createContext, useState, useEffect } from 'react';

// 创建上下文，用于在组件间传递路由信息
export const RouterContext = createContext();

const HashRouter = ({ children }) => {
  // 当前路径，从hash中提取
  const [currentPath, setCurrentPath] = useState(() => {
    // 初始路径：从hash中提取，如果没有hash则为'/'
    const hash = window.location.hash;
    return hash ? hash.substring(1) : '/';
  });

  // 导航函数
  const navigate = (path) => {
    window.location.hash = path;
  };

  // 监听hash变化
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentPath(hash ? hash.substring(1) : '/');
    };

    // 初始设置
    handleHashChange();
    
    // 监听hash变化事件
    window.addEventListener('hashchange', handleHashChange);
    
    // 清理函数
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // 提供给子组件的上下文值
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

export default HashRouter;