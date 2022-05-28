import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '' : '/build/',
  publicDir: false,
  build: {
    manifest: true,
    outDir: 'public/build',
    rollupOptions: {
      input: 'resources/scripts/main.ts',
    },
  },
  plugins: [
    vue(),
    {
      name: 'blade',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.blade.php')) {
          server.ws.send({
            type: 'full-reload',
            path: '*',
          })
        }
      },
    },
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dts: 'resources/scripts/auto-imports.d.ts',
      dirs: ['resources/scripts/composables', 'resources/scripts/store'],
      vueTemplate: true,
    }),
    Components({
      dirs: ['resources/scripts/components'],
      dts: 'resources/scripts/components.d.ts',
      directoryAsNamespace: true,
    }),
    Pages({
      importMode: 'async',
      dirs: [
        {
          dir: 'resources/scripts/pages',
          baseRoute: '',
        },
        {
          dir: 'resources/scripts/pages/auth',
          baseRoute: '',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './resources/scripts'),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  optimizeDeps: {
    include: ['axios', 'vue'],
  },
}))
