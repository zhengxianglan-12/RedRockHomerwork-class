// src/store/todoState.js
import { atom, selector } from 'recoil';

// 1. 定义单个待办事项的数据结构
export const todoListState = atom({
  key: 'todoListState',  // 唯一标识
  default: [  // 默认数据
    { id: 1, text: '学习React', completed: false },
    { id: 2, text: '完成TodoList作业', completed: false },
    { id: 3, text: '准备期中考试', completed: true },
  ],
});

// 2. 衍生状态：统计未完成的数量
export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const completedNum = todoList.filter(item => item.completed).length;
    const uncompletedNum = totalNum - completedNum;
    
    return {
      totalNum,
      completedNum,
      uncompletedNum,
      percentCompleted: totalNum === 0 ? 0 : Math.round(completedNum / totalNum * 100)
    };
  },
});

// 3. 筛选状态
export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'all',  // all, completed, uncompleted
});

// 4. 根据筛选条件过滤的待办事项
export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);
    
    switch (filter) {
      case 'completed':
        return list.filter(item => item.completed);
      case 'uncompleted':
        return list.filter(item => !item.completed);
      default:
        return list;
    }
  },
});