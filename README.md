# canvCurses
### \-> Run curses-style graphics in canvas elements!


Pros:
* Cool ascii graphics on a canvas
* Lightweight

Cons:
* Curses your canvas (for life?)


#### QuickStart

Initialization:
```
var cursObj = RootWindow(document.getElementById("canv1"),125,80, "Courier", 10);
var co = Cursify("canv1",125,80); //shorthand for above, but sets font to 10, resized canvas width to 8*colnum pixels and height to 12*rownum pixels
//you will want to put these in window.onload or something
```

Methods:
```
move(row,col);    //move cursor to the row and col, i.e. the (y,x) coords
addch('a'); //write a character at the current cursor position, moves the cursor to the next position
mvaddch(row,col,'a'); //move cursor to new position then addch
addstr("string");  //string variants of above
mvaddstr(row,col,"string");
setfg("color");  //set text color
setbg("color");  //set highlight color
refresh();       //draws the current characters to the screen
clear();         //clears all characters from the screen
```

Usage:
```
var cob = Cursify("canv1",125,80);
cob.mvaddstr(2,1,"evalS egaW");
cob.setfg("rgb(10,10,200)") //any javascript valid color will work here
cob.setbg("orange"); //any javascript valid color will work here
cob.mvaddstr(3,1,"What is easy, is often not what is right.");
cob.refresh(); //actually draws the above

```

Tips:
- Like curses, cells on the screen have a state and will stay until they are explicitly removed via clear() or overwritten.
- Use `await sleep(TimeInMs);` for time-delays in e.g. animations, games
