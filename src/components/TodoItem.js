// src/components/TodoItem.js
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../store/todoState';
import { Checkbox, Input, Button, Space, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined, SaveOutlined, CloseOutlined } from '@ant-design/icons';

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const setTodoList = useSetRecoilState(todoListState);
  
  // 切换完成状态
  const toggleCompletion = () => {
    setTodoList((oldTodoList) =>
      oldTodoList.map(item =>
        item.id === todo.id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };
  
  // 删除待办事项
  const deleteItem = () => {
    setTodoList((oldTodoList) =>
      oldTodoList.filter(item => item.id !== todo.id)
    );
  };
  
  // 开始编辑
  const startEditing = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };
  
  // 保存编辑
  const saveEdit = () => {
    if (editText.trim() === '') {
      alert('待办事项不能为空');
      return;
    }
    
    setTodoList((oldTodoList) =>
      oldTodoList.map(item =>
        item.id === todo.id
          ? { ...item, text: editText }
          : item
      )
    );
    setIsEditing(false);
  };
  
  // 取消编辑
  const cancelEdit = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };
  
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '12px',
      marginBottom: '8px',
      border: '1px solid #f0f0f0',
      borderRadius: '4px',
      backgroundColor: todo.completed ? '#f6ffed' : 'white',
    }}>
      {/* 完成状态复选框 */}
      <Checkbox
        checked={todo.completed}
        onChange={toggleCompletion}
        style={{ marginRight: '12px' }}
      />
      
      {/* 待办事项内容 */}
      <div style={{ flex: 1 }}>
        {isEditing ? (
          <Input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onPressEnter={saveEdit}
            style={{ marginRight: '8px' }}
          />
        ) : (
          <span style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? '#999' : '#333',
            fontSize: '16px',
          }}>
            {todo.text}
            {todo.createdAt && (
              <div style={{ fontSize: '12px', color: '#999' }}>
                创建于: {todo.createdAt}
              </div>
            )}
          </span>
        )}
      </div>
      
      {/* 操作按钮 */}
      <Space>
        {isEditing ? (
          <>
            <Button
              type="text"
              icon={<SaveOutlined />}
              onClick={saveEdit}
              style={{ color: '#52c41a' }}
            />
            <Button
              type="text"
              icon={<CloseOutlined />}
              onClick={cancelEdit}
              style={{ color: '#ff4d4f' }}
            />
          </>
        ) : (
          <>
            <Button
              type="text"
              icon={<EditOutlined />}
              onClick={startEditing}
              disabled={todo.completed}
            />
            <Popconfirm
              title="确定要删除这个待办事项吗？"
              onConfirm={deleteItem}
              okText="确定"
              cancelText="取消"
            >
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
              />
            </Popconfirm>
          </>
        )}
      </Space>
    </div>
  );
};

export default TodoItem;