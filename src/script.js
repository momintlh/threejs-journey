import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
    aspectRatio: window.innerWidth / window.innerHeight
}


window.addEventListener("resize", () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    sizes.aspectRatio = sizes.width / sizes.height

    camera.aspect = sizes.aspectRatio
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

window.addEventListener('dblclick', () => {
    // for webkit for some browsers which do not have support yet
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

    if (!fullscreenElement) {
        // go fullscreen, we need to do this in canvas

        if (canvas.requestFullscreen) {
            canvas.requestFullscreen()
        }
        else if (canvas.webkitRequestFullscreen) {
            canvas.webkitRequestFullscreen();
        }
    }
    else {
        // leave full screen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
})

const canvas = document.querySelector("canvas.webgl");
const scene = new THREE.Scene()



const camera = new THREE.PerspectiveCamera(75, sizes.aspectRatio, 0.1, 100);
camera.position.z = 2;
const control = new OrbitControls(camera, canvas)

const geometery = new THREE.BufferGeometry()

const count = 50
const positionsArray = new Float32Array(count * 3 * 3) // count # of triangles so * 3 as each vertex has 3 points and then * 3 because mesh

for (let i = 0; i < positionsArray.length; i++) {
    positionsArray[i] = 2* (Math.random() - 0.5);
}

const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3)
geometery.setAttribute("position", positionsAttribute)

const material = new THREE.MeshBasicMaterial({ color: 0xFFFF00, wireframe: true })
const mesh = new THREE.Mesh(geometery, material)

scene.add(camera);
scene.add(mesh);



const renderer = new THREE.WebGLRenderer({ canvas: canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const tick = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(tick)
}

tick()