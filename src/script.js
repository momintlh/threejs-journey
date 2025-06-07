import * as THREE from 'three'

const canvas = document.querySelector('canvas.webgl');

const sizes = {
  width: 500,
  height: 500
};

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
camera.position.z = 5;

const boxMesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);


scene.add(boxMesh);

const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

const tick = () => {
  boxMesh.rotation.x += 0.01;
  boxMesh.rotation.y += 0.01;

  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
}

tick();