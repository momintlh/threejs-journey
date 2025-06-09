import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}
const aspectRatio = sizes.width / sizes.height

const canvas = document.querySelector("canvas.webgl");
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);
camera.position.z = 2;
const boxMesh = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ color: 0xFFFF00 }))


scene.add(camera);
scene.add(boxMesh);


const control = new OrbitControls(camera, canvas)   


const renderer = new THREE.WebGLRenderer({ canvas: canvas })
renderer.setSize(sizes.width, sizes.height)

const tick = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(tick)
}

tick()