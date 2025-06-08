import * as THREE from 'three'

//#region Cursor
// native js:

const cursor = {
  x: 0,
  y: 0
}
window.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / sizes.width - 0.5
  cursor.y = -(event.clientY / sizes.height - 0.5)
})
//#endregion








const canvas = document.querySelector("canvas.webgl");
const sizes = {
  width: 500,
  height: 500,
}

const apsectRatio = sizes.width / sizes.height;

const cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ color: 0x0000ff }));
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
// const camera = new THREE.OrthographicCamera(-1 * apsectRatio,
//   1 * apsectRatio,
//   1,
//   -1,
//   0.1, 100)

// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 3

const scene = new THREE.Scene();
scene.add(cube);
scene.add(camera)

const renderer = new THREE.WebGLRenderer({ canvas: canvas })
renderer.setSize(sizes.width, sizes.height);

const clock = new THREE.Clock();
camera.lookAt(cube.position)

const rotateCube = () => {
  const elaspedTime = clock.getElapsedTime();

  camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
  camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
  camera.position.y = cursor.y * 5

  camera.lookAt(cube.position)

  // cube.rotation.y = elaspedTime

  renderer.render(scene, camera)
  requestAnimationFrame(rotateCube)
}

rotateCube();