import js from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'  // 注意：这里是 @typescript-eslint/parser

export default [
  // 基础规则
  js.configs.recommended,
  
  // TypeScript 相关
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      globals: {
        document: 'readonly',  // 添加这行
        window: 'readonly',    // 添加这行
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // 自定义规则
      '@typescript-eslint/no-unused-vars': 'warn',  // 未用变量警告
      'no-console': 'error',                        // 禁止console
      'quotes': ['error', 'single'],                // 强制单引号
    },
  },
]