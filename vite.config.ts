import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // 让生成的类名更易读
      localsConvention: 'camelCase',
      // 生成格式：文件名__类名--哈希值
      generateScopedName: '[name]__[local]--[hash:base64:5]'
    }
  }
})