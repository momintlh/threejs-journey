import * as THREE from 'three'
import gsap from 'gsap';

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

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(sizes.width, sizes.height);

const tickWithoutDelta = () => {
  boxMesh.rotation.y += 0.01;
  renderer.render(scene, camera);
  window.requestAnimationFrame(tickWithoutDelta);
}

// tickWithoutDelta();

let time = Date.now()

const tickWithDelta = () => {
  // get current time
  const currentTime = Date.now();

  // subtrackt time from prev tick
  const deltaTime = currentTime - time;

  // set new value
  time = currentTime;

  boxMesh.rotation.y += 0.01 * deltaTime;
  renderer.render(scene, camera);
  window.requestAnimationFrame(tickWithoutDelta);
}
// tickWithDelta();

//#region Clock based
const clock = new THREE.Clock();

const tickWithClock = () => {
  // starts with 0 and seconds
  const elaspedTime = clock.getElapsedTime();

  camera.position.y = Math.sin(elaspedTime);
  camera.position.x = Math.cos(elaspedTime);

  camera.lookAt(boxMesh.position)

  renderer.render(scene, camera);
  requestAnimationFrame(tickWithClock)
}
// tickWithClock();

//#endregion

//#region Using GSAP!!!
gsap.to(boxMesh.position, {
  x: 2,
  duration: 1,
  delay: 1
})


const tickWithGsap = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(tickWithGsap)
}

tickWithGsap()



//#endregion