// src/components/TodoInput.js
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../store/todoState';
import { Input, Button } from 'antd';

const TodoInput = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);
  
  // 添加待办事项
  const addTodoItem = () => {
    if (inputValue.trim() === '') {
      alert('请输入待办事项');
      return;
    }
    
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: Date.now(),  // 用时间戳作为唯一ID
        text: inputValue,
        completed: false,
        createdAt: new Date().toLocaleString(),
      }
    ]);
    
    setInputValue('');  // 清空输入框
  };
  
  // 按回车键添加
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodoItem();
    }
  };
  
  return (
    <div style={{ display: 'flex', marginBottom: '20px' }}>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="输入新的待办事项..."
        style={{ marginRight: '10px' }}
      />
      <Button type="primary" onClick={addTodoItem}>
        添加
      </Button>
    </div>
  );
};

export default TodoInput;