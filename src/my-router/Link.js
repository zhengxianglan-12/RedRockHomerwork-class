// src/my-router/Link.js
import React, { useContext } from 'react';
import { RouterContext } from './HashRouter';  // 注意：这里需要调整

// 我们需要一个更好的设计，让Link能同时适配两种Router
// 这里我们先使用HashRouter的上下文
// 实际项目中可能需要更复杂的设计

const Link = ({ to, children, ...props }) => {
  const { navigate } = useContext(RouterContext);
  
  const handleClick = (e) => {
    e.preventDefault();
    if (navigate) {
      navigate(to);
    } else {
      // 如果找不到navigate，回退到普通链接
      window.location.href = to;
    }
  };
  
  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default Link;