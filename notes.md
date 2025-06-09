### Fullscreen and resizing
date: 6/9/25

for making sure the canvas resizes with the screen size, we can listen to the `resize` event.

### resizing:
- first of all use the `innerWidth` and `innerHeight`
- You will also need to remove the default margin and padding styling, and make the canvas fixed with no overflow on the body.
- listen to the resize event and update any references to width, height, and update camera.aspect with the new values.
- Update the camera's projection with `updateProjectionMatrix`
- make sure to update renderer size according to new values.

### Pixel Ratio 
Finally, update the pixel ratio of the renderer to match the device pixel ratio. This will prevent pixelation on high DPI displays like retina screens.

```js
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
```

Note: Limiting the pixel ratio to 2 is a good practice as higher values can impact performance with minimal visual benefit.

## Fullscreen
- We can use an event to trigger fullscreen, for example double clicking.
- Use `document.fullscreenElement` to check if we're in fullscreen mode.
- To enter fullscreen, use `canvas.requestFullscreen()`.
- To exit fullscreen, use `document.exitFullscreen()`.
- Also note that the canvas element is being fullscreened, this means only the stuff in canvas will be fullscreened

Example:
```js
window.addEventListener('dblclick', () => {
    if (!document.fullscreenElement) {
        canvas.requestFullscreen()
    } else {
        document.exitFullscreen()
    }
})
```

Note: Some browsers might require vendor prefixes for fullscreen API. Modern browsers typically don't need this.
