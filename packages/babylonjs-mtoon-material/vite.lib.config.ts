import { defineConfig } from 'vite';
import * as path from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [dts()],
	build: {
		outDir: 'dist/lib',
		lib: {
			entry: path.resolve(__dirname, 'src/lib/index.ts'),
			name: 'BABYLON.MToonMaterial',
			fileName: (format) => `index.${format}.js`,
			formats: ['es', 'umd']
		},
		rollupOptions: {
			external: ['@babylonjs/core'],

			output: {
				globals: {
					'@babylonjs/core': 'BABYLON'
				}
			},
		}
	}
});