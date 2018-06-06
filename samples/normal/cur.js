window.onload = function(){
    //each obj = 8px wide, 12px high
    var cursObj = RootWindow(document.getElementById("canv1"),125,80, "Courier", 10);//,"Courier New",8);
    cursObj.move(1,1);
    cursObj.addstr("8888888888 aycdefg help me pls! to");
    cursObj.mvaddstr(2,1,"aeyou aeyou Aeyou");
    cursObj.set_fg("rgb(200,150,50)");
    cursObj.set_bg("rgb(20,50,50)");
    cursObj.mvaddstr(3,1,"ahhhyAu aeyou Aeyou");
    cursObj.refresh();
};
