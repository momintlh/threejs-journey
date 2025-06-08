import * as THREE from 'three'

const canvas = document.querySelector("canvas.webgl");
const sizes = {
  width: 500,
  height: 500,
}

const apsectRatio = sizes.width / sizes.height;

const cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ color: 0x0000ff }));
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
const camera = new THREE.OrthographicCamera(-1 * apsectRatio,
  1 * apsectRatio,
  1,
  -1,
  0.1, 100)

camera.position.x = 2
camera.position.y = 2
camera.position.z = 2

const scene = new THREE.Scene();
scene.add(cube);
scene.add(camera)

const renderer = new THREE.WebGLRenderer({ canvas: canvas })
renderer.setSize(sizes.width, sizes.height);

const clock = new THREE.Clock();
camera.lookAt(cube.position)

const rotateCube = () => {
  const elaspedTime = clock.getElapsedTime();

  cube.rotation.y = elaspedTime

  renderer.render(scene, camera)
  requestAnimationFrame(rotateCube)
}

rotateCube();