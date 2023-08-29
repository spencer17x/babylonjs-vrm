import './App.css';

import { useEffect, useRef } from 'react';
import { ArcRotateCamera, Engine, HemisphericLight, Scene, Vector3, SceneLoader } from '@babylonjs/core';

import '@babylonjs/inspector';
import './lib';

function App() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) {
			throw new Error('canvas is not found');
		}

		const engine = new Engine(canvas, true);
		const scene = new Scene(engine);
		console.log('scene', scene);

		const camera = new ArcRotateCamera('camera', 0, 0, 0, Vector3.Zero(), scene);
		camera.setPosition(new Vector3(0, 0, -10));
		camera.attachControl(canvas, true);

		const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);
		light.intensity = 1;

		(async function () {
			const modelUrl = 'https://a-cdn.qbox.net/test';
			// await scene.debugLayer.show();
			await SceneLoader.ImportMeshAsync('', modelUrl + '/models/vrm/Keqing.vrm', '', scene);
		}());

		engine.runRenderLoop(() => {
			scene.render();
		});

		window.addEventListener('resize', () => {
			engine.resize();
		});
	}, []);

	return <canvas className="canvas" ref={canvasRef}/>;
}

export default App;
