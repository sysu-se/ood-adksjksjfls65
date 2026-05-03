import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      // 核心：强制将这些别名指向你实际的文件路径
      '@sudoku/constants': path.resolve(__dirname, './src/node_modules/@sudoku/constants.js'),
      '@sudoku/sencode': path.resolve(__dirname, './src/node_modules/@sudoku/sencode/index.js'),
      '@sudoku/sudoku': path.resolve(__dirname, './src/node_modules/@sudoku/sudoku.js'),
      // 处理测试脚本硬编码的路径需求
      'src': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
  },
});
