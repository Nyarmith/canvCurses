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
    var co2 = RootWindow(document.getElementById("canv2"),125,80, "Courier", 10);//,"Courier New",8);
    co2.move(3,3);
    co2.addstr("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
    co2.refresh();
    var co3 = RootWindow(document.getElementById("canv3"),125,80, "Courier", 10);//,"Courier New",8);
    co3.move(1,1);
    co3.addstr("asdjojaoidijsaioajdijsioikojo");
    co3.refresh();
};
