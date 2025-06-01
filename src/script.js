import * as THREE from "three"

const sizes = {
    width: 800,
    height: 600,
}

const canvas = document.querySelector("canvas.webgl")
console.log(canvas)

// SCENE
const scene = new THREE.Scene();


// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3
scene.add(camera)

// Object
const cube = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe:true })
const mesh = new THREE.Mesh(cube, material);
scene.add(mesh)

// renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera)