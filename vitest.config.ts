import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',  // 模拟浏览器环境
    globals: true,         // 可以使用 describe, it, expect 等全局变量
  }
})