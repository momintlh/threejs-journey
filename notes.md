### Transform Objects
6/6/2025
[[ThreeJS]]
---

1. axes are similar to Unity 
    - x = horizontal, y = vertical, z = depth
2. Unit of measurement is in meters
_we can change the above as we like (maybe)_
3. There are Vectors in 3JS!  
4. vectors come with useful methods just as, `set`, `distanceTo`, `normalize` etc (more on docs)
5. Scaling is also simple
6. rotation: 2 ways to rotate: rotation and quternions (ah yes)
    - *rotation* is NOT a vector but an Eular, rotation is in radians.
    - gimbel locks, a helper function reorder(), reorder before rotating
7. Quaternions, were apparently not covered in this lesson.
8. object.`lookAt()` -> rotates the object to a target vector
9. We can group objects together using `Group` class.

