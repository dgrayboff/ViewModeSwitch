

var frm = document.getElementsByClassName("gridbutton");

for (var i = 0; i < frm.length; ++i) {
  frm[i].addEventListener("click", function() {
    var el = document.getElementById("style1");
    if (el.href.match("assets/styles-list.css")) {
        el.href = "assets/styles-grid.css";
     }
    //  else {
    //     el.href = "assets/styles-list.css";
    // }
  })
}

var frmTwo = document.getElementsByClassName("listbutton");

for (var i = 0; i < frmTwo.length; ++i) {
  frmTwo[i].addEventListener("click", function() {
    var el = document.getElementById("style1");
    if (el.href.match("assets/styles-grid.css")) {
        el.href = "assets/styles-list.css";
     }
    // else {
    //  el.href = "assets/styles-list.css";
    // }
  })
}
