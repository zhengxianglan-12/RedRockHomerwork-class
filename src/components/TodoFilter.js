// src/components/TodoFilter.js
import React from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { todoListState, todoListFilterState, todoListStatsState } from '../store/todoState';
import { Radio, Button, Space, Statistic } from 'antd';

const TodoFilter = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const stats = useRecoilValue(todoListStatsState);
  
  // 全选
  const selectAll = () => {
    setTodoList(oldList =>
      oldList.map(item => ({ ...item, completed: true }))
    );
  };
  
  // 全不选
  const unselectAll = () => {
    setTodoList(oldList =>
      oldList.map(item => ({ ...item, completed: false }))
    );
  };
  
  // 反选
  const invertSelection = () => {
    setTodoList(oldList =>
      oldList.map(item => ({ ...item, completed: !item.completed }))
    );
  };
  
  // 清空已完成
  const clearCompleted = () => {
    setTodoList(oldList =>
      oldList.filter(item => !item.completed)
    );
  };
  
  return (
    <div style={{ marginBottom: '20px' }}>
      {/* 统计信息 */}
      <div style={{ marginBottom: '16px' }}>
        <Space>
          <Statistic title="总计" value={stats.totalNum} />
          <Statistic title="已完成" value={stats.completedNum} />
          <Statistic title="未完成" value={stats.uncompletedNum} />
          <Statistic title="完成率" value={stats.percentCompleted} suffix="%" />
        </Space>
      </div>
      
      {/* 筛选选项 */}
      <div style={{ marginBottom: '16px' }}>
        <Radio.Group value={filter} onChange={(e) => setFilter(e.target.value)}>
          <Radio.Button value="all">全部 ({stats.totalNum})</Radio.Button>
          <Radio.Button value="uncompleted">未完成 ({stats.uncompletedNum})</Radio.Button>
          <Radio.Button value="completed">已完成 ({stats.completedNum})</Radio.Button>
        </Radio.Group>
      </div>
      
      {/* 批量操作按钮 */}
      <Space style={{ marginBottom: '16px' }}>
        <Button type="primary" onClick={selectAll}>
          全选
        </Button>
        <Button onClick={unselectAll}>
          全不选
        </Button>
        <Button onClick={invertSelection}>
          反选
        </Button>
        <Button danger onClick={clearCompleted}>
          清除已完成
        </Button>
      </Space>
    </div>
  );
};

export default TodoFilter;