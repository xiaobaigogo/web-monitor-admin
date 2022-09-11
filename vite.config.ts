import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [vue(),
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),]
    // server: {
  //   host: '127.0.0.1',
  //   port: 8000,
  //   https: false,
  //   cors: true,
  //   // 反向代理
  //   proxy: {
  //     '/query_pv': {
  //       target: 'http://127.0.0.1:3000',
  //       changeOrigin: true,
  //       // rewrite: path => path.replace(/^\/api/, '')
  //     }
  //   }
  // },
})
