// src/components/TodoList.js
import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../store/todoState';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import TodoFilter from './TodoFilter';
import { Empty } from 'antd';

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        📝 我的待办事项
      </h1>
      
      {/* 输入组件 */}
      <TodoInput />
      
      {/* 筛选和批量操作 */}
      <TodoFilter />
      
      {/* 待办事项列表 */}
      <div style={{ marginTop: '20px' }}>
        {todoList.length === 0 ? (
          <Empty description="暂无待办事项" />
        ) : (
          todoList.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;