## Run curses programs in canvas elements

This library lets you select a canvas element by id, then to define a "main" function for it

This is pretty much just spitballing off my memory of ncurses. Here are the main elements that define the design.
* By default all input is blocking, which essentially makes it event driven
    * Input can be made real-time by changing the input mode
* The cursor is an independent item that can be moved, and usualyl lives in the last place it was used
* 
