// src/my-router/Route.js
import React, { useContext } from 'react';
import { RouterContext } from './HashRouter';  // 或 BrowserRouter

const Route = ({ path, component: Component, exact = false }) => {
  const { currentPath } = useContext(RouterContext);
  
  // 判断是否匹配路径
  const isExactMatch = currentPath === path;
  const isMatch = exact ? isExactMatch : currentPath.startsWith(path);
  
  if (!isMatch) {
    return null;
  }
  
  return <Component />;
};

export default Route;