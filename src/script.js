import * as THREE from 'three'

const canvas = document.querySelector("canvas.webgl");
const sizes = {
  width: 500,
  height: 500,
}

const cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ color: 0x0000ff }));
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
camera.position.z = 5



const scene = new THREE.Scene();
scene.add(cube);
scene.add(camera)

const renderer = new THREE.WebGLRenderer({ canvas: canvas })
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera)