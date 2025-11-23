import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import gsap from 'gsap';
import GUI from 'lil-gui';

/**
 * Debug
 */

const gui = new GUI({ width: 300, closeFolders: true, title: 'cool debug' })
// gui.hide()

window.addEventListener('keypress', (event) => {
    if(event.key == 'h')
        gui.show(gui._hidden)

});

// my debug holder
const debugObject = {}

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

debugObject.color = '#1f84d1'

const boxMesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1, 2, 2, 2), new THREE.MeshBasicMaterial({ color: debugObject.color, wireframe: false }))

scene.add(camera);
scene.add(boxMesh);

debugObject.spin = () => {
    gsap.to(boxMesh.rotation, { 'duration': 2, 'y': boxMesh.rotation.y + Math.PI * 2, })
}


const cubeTweaks = gui.addFolder('Cube Tweaks')
cubeTweaks.close()

// simple add
cubeTweaks.
    add(boxMesh.position, 'y')

// range
cubeTweaks.
    add(boxMesh.position, 'y').min(-3).max(3).step(0.01).name('elevation')

cubeTweaks.
    add(boxMesh, 'visible')

cubeTweaks.
    add(boxMesh.material, 'wireframe')

cubeTweaks.
    addColor(debugObject, 'color').onChange(() => boxMesh.material.color.set(debugObject.color))

cubeTweaks
    .add(debugObject, 'spin')


debugObject.subDivision = 2

cubeTweaks.
    add(debugObject, 'subDivision').min(1).max(10).step(1).onFinishChange(() => {
        boxMesh.geometry.dispose();
        boxMesh.geometry = new THREE.BoxGeometry(1, 1, 1, debugObject.subDivision, debugObject.subDivision, debugObject.subDivision)
    })



const control = new OrbitControls(camera, canvas)

const renderer = new THREE.WebGLRenderer({ canvas: canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const tick = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(tick)
}

tick()