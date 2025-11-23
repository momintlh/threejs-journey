### Debug UI
Date: 11/23/25

---

Debug UI is great to well debug and tweak things, basic usage could be changing the color. Usually you don't want users to see it but its pretty easy to hide it. You can 


### The Options
Various options, most are no longer maintained, in the course he is using lil-gui.

- Dat.GUI
- lil-gui
- control-panel
- ControlKit
- Uil
- Tweakpane
- Guify
- Oui

### Lil-gui
Provides lots of different tweaks such as:
- Range  
- Color
- Text
- Checkbox
- Select
- Button

Lil-gui is pretty simple, you create an instance of it after importing it and can easily tweak properties of an object, for example:

```JS
import GUI from `lil-gui`
const gui = new GUI()

gui.
    add(mesh.material, 'wireframe') // bool for toggling
```

Handling color is different we can use:

```JS
gui.
    addColor(mesh.material.color, 'color') 
```
This above will not work accuratly due to the fact that lil-gui works in a different color space than ThreeJS (I think?), ThreeJS does some optimizing or something (idk).

#### The correct way

```JS
gui.
    addColor(mesh.material.color, 'color').onChange((value) => 
    {
        console.log(value.getHexString()) // use this value
    });
```

but this ^ is not the best solution

##### Only dealing with non-modified color

```js
gui.
    addColor(debugObject, 'color').onChange(() => mesh.material.color.set(debugObject.color))
```