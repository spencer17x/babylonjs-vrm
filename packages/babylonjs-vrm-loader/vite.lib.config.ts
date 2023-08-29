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
			name: 'BABYLON.VRMLoader',
			fileName: (format) => `index.${format}.js`,
			formats: ['es', 'umd']
		},
		rollupOptions: {
			external: ['@babylonjs/core', '@babylonjs/loaders'],

			output: {
				globals: {
					'@babylonjs/core': 'BABYLON',
					'@babylonjs/loaders': 'LOADERS',
				}
			},
		},
		commonjsOptions: {
			include: [/babylon-mtoon-material/, /node_modules/],
		},
	}
});
