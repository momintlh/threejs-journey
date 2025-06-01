import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

mesh.position.x = 1
mesh.position.y = -1
mesh.position.z = -1

// or alternatively
mesh.position.set(1, -1, -1)
// Length of the position vector from the origin;
console.log(mesh.position.length()) 


//scale 
mesh.scale.set(0.5, 2, 0.5)

const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

scene.add(mesh)


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3

// Distance from the mesh to the camera;
console.log(mesh.position.distanceTo(camera.position)) 

scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)