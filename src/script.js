import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Helpers
 */
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)


/**
 * Meshes
 */
const sphereMesh = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), new THREE.MeshBasicMaterial({ color: 0x00ff00 }))
const boxMesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

const group = new THREE.Group()
group.add(sphereMesh)
group.add(boxMesh)


scene.add(group)

// Position objects
sphereMesh.position.x = -1
boxMesh.position.x = 1

group.position.y = 0.5 // Move the group up
group.rotation.y = Math.PI / 4 // Rotate the group

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
console.log(group.position.distanceTo(camera.position))
// camera.lookAt(group.position) // Make the camera look at the mesh
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)