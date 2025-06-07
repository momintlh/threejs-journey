1. We need delta time like thing to make sure animations are similar everywhere.
2. `requestAnimation` -> call a function in the next frame.
3. arrow functions are also called fat arrow functions apparently, lol
4. requestAnimation is not different for computer, same thing, it needs a time.deltatime like thing.
5. One way is to use use DateTime (date.now), creating our own delta!
    - Calculting deltaTime means saving prev time, subing current time from prev time and setting its new value.
6. Another wat to do the same thing is using `Clock` class from threejs