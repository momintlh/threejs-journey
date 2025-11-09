### Gemetries
date: 11/09/2025

## What is a Geometry?
- Linked up vertices make a face, and combined faces make a geometry.
- Geometries can be used to make a mesh and particles (which is a vertex? particles will be shown in a later lesson)
- Each vertex has: position, UV co-ordinates, Normal, and everything else like size, colours (we can put anything we want)

## ThreeJS Built-In Geometries:
- threejs comes with many geometries, and all are inherited from [[BufferGeometry]] class.
- BufferGeometry has lots of functions
- we usually move meshes but there are usecases where we moves vertices (will be shown in upcomming lessions)

### Availabe Geometries:
- BoxGeometry
- BufferGeometry
- PlaneGeometry
- CircleGeometry
- ConeGeometry
- CylinderGeometry
- RingGeometry
- TorusGeometry
- TorusKnotGeometry
- DodecahedronGeometry
- OctahedronGeometry
- TetrahedronGeometry
- IcosahedronGeometry
- SphereGeometry
- ShapeGeometry > Based on curves (bezier)
- TubeGeometry
- ExtrudeGeometry
- LatheGeometry
- TextGeometry 

### Segments:
- Each face is composed of triangles and we can control how many are there, called segments
- We can use this to create complex things like a Terrain using a plane.
This is the same concept as Subdivision in Blender.

> _wireframe is useful to see how the geometry is composed_

### Custom BufferGeometery
- To create custom geometery we use:
    - [Float32Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) (This is native JavaScript)
    - It is a typed array, meaning can only store floating points, and it is has a fixed length
    - Easy for computer to handle
    - It is flat array that means we need to put vertices sequentially
    ```js
    //x, y, z
    [1, 0, 0,  //v1
     0, 1, 0, // v2 
     0, 0, 1]  // v3
    ```
Then we can use this with `ThreeJS.BufferAttribute(float32Array, noOfVertices)`
- 

Imp Notes:
- position here is a predefined property threejs's shader
`geometery.setAttribute("position", positionsAttribute)`

### Basic Example:

```js
const vertexPositionsArray = new Float32Array([
    0, 0, 0,
    0, 1, 0,
    0, 0, 1,
])

const positionsAttribute = new THREE.BufferAttribute(vertexPositionsArray, 3)

const geometery = new THREE.BufferGeometry()
geometery.setAttribute("position", positionsAttribute)

const material = new THREE.MeshBasicMaterial({ color: 0xFFFF00, wireframe: true })

const myMesh = new THREE.Mesh(geometery, material)
```

### Index
Some geometries have faces that share common vertices, when create a custom geometry using BufferGeometry we can specify bunch of vertices and then indices to create the face and reuse vertices multiple times, instead of create a new vertex. This can improve the performance.