### 6-Cameras
6/7/25

# Cameras

1. All camera types inherit from an abstract `Camera` class.
2. ArrayCamera: _Its like split screen view in old co-op games_
3. CubeCamera: _Does 6 renders for each face of the cube, used for creating enviroment maps, reflection / refraction or shadow map_
4. StereoCamera: _Mimics the eyes, uses two perspective cameras, usefull for VR projects_
5. OrthgraphicCamera: _renders the scene without perspective, no z axis, usefull for many things such as 2d games and isometeric_ 
6. PerspectiveCamera: _renders with perspective_

#### PerspectiveCamera:
    - (fov, aspectRatio, near, far)
    - Don't use too small / large values for near and far, to prevent [[z-fighting]]
#### OrthgraphicCamera:
    - (left, right, top, bottom, near, far)
    - doing a square render so canvas should be square. OR we use aspect ratio
    

# Controls
1. **DeviceOrientationControls**: has been removed in latest version because a reliable implementation across all devices was not possible.
3. **FlyControls**: Like a spaceship  
4. **FirstPersonControl**: Similar to wasd in Unity in scene
5. **PointerLock**: similar to FPS things, no mouse cursor, uses pointer lock
6. **OrbitControls**: Camera Movement bascically orbit around an object.
7. **TrackBall**: Similar to orbitControls without limits

## Non camera controls
8. **TransformControls**: has nothing to do with camera controls but it is used to move objects, GIZMO basically
2. **DragControls**:  dragging objects! drag and drop??