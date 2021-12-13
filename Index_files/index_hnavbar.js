//©Xara Ltd
if(typeof(loc)=="undefined"||loc==""){var loc="";if(document.body&&document.body.innerHTML){var tt=document.body.innerHTML;var ml=tt.match(/["']([^'"]*)index_hnavbar.js["']/i);if(ml && ml.length > 1) loc=ml[1];}}

var bd=0
document.write("<style type=\"text/css\">");
document.write("\n<!--\n");
document.write(".index_hnavbar_menu {z-index:999;border-color:#000000;border-style:solid;border-width:"+bd+"px 0px "+bd+"px 0px;background-color:#aaaaaa;position:absolute;left:0px;top:0px;visibility:hidden;}");
document.write(".index_hnavbar_plain, a.index_hnavbar_plain:link, a.index_hnavbar_plain:visited{text-align:left;background-color:#aaaaaa;color:#000000;text-decoration:none;border-color:#000000;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:8pt;font-family:Arial, Helvetica, sans-serif;font-weight:bold;}");
document.write("a.index_hnavbar_plain:hover, a.index_hnavbar_plain:active{background-color:#0000aa;color:#ffffff;text-decoration:none;border-color:#000000;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:8pt;font-family:Arial, Helvetica, sans-serif;font-weight:bold;}");
document.write("\n-->\n");
document.write("</style>");

var fc=0xffffff;
var bc=0x0000aa;
if(typeof(frames)=="undefined"){var frames=0;}

startMainMenu("",0,0,2,0,0)
mainMenuItem("index_hnavbar_b1",".gif",20,97,loc+"../"+"index.html","","Home",2,2,"index_hnavbar_plain");
mainMenuItem("index_hnavbar_b2",".gif",20,97,loc+"../"+"gallery.html","","Picture Gallery",2,2,"index_hnavbar_plain");
mainMenuItem("index_hnavbar_b3",".gif",20,97,loc+"../"+"clubprojects.html","","Club Projects",2,2,"index_hnavbar_plain");
mainMenuItem("index_hnavbar_b4",".gif",20,97,loc+"../"+"links.html","","Links",2,2,"index_hnavbar_plain");
endMainMenu("",0,0);

startSubmenu("index_hnavbar_b3","index_hnavbar_menu",97);
submenuItem("Leuthen",loc+"../"+"leuthen.html","","index_hnavbar_plain");
submenuItem("RCW",loc+"../"+"rcwproject.html","","index_hnavbar_plain");
endSubmenu("index_hnavbar_b3");

startSubmenu("index_hnavbar_b2","index_hnavbar_menu",98);
submenuItem("Ancients",loc+"../"+"ancients.html","","index_hnavbar_plain");
submenuItem("Medieval",loc+"../"+"medieval.html","","index_hnavbar_plain");
submenuItem("ECW",loc+"../"+"ecw.html","","index_hnavbar_plain");
submenuItem("Renaissance",loc+"../"+"ren.html","","index_hnavbar_plain");
submenuItem("SYW",loc+"../"+"syw.html","","index_hnavbar_plain");
submenuItem("ACW",loc+"../"+"acw.html","","index_hnavbar_plain");
submenuItem("RCW",loc+"../"+"rcw.html","","index_hnavbar_plain");
submenuItem("WWII",loc+"../"+"wwii.html","","index_hnavbar_plain");
submenuItem("Vietnam",loc+"../"+"vietnam.html","","index_hnavbar_plain");
submenuItem("Club Xmas 2006",loc+"../"+"clubxmas2006.html","","index_hnavbar_plain");
endSubmenu("index_hnavbar_b2");

startSubmenu("index_hnavbar_b1","index_hnavbar_menu",97);
submenuItem("Join Us",loc+"../"+"joinus.html","","index_hnavbar_plain");
submenuItem("Club Dates",loc+"../"+"calendar.html","","index_hnavbar_plain");
endSubmenu("index_hnavbar_b1");

loc="";
