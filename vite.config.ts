import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'use-sync-external-store/shim/with-selector',
      '@aws-amplify/ui-react',
    ],
    needsInterop: [
      'use-sync-external-store/shim/with-selector',
    ],
  },
})