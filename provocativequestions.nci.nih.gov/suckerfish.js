function suckerfish(type, tag, parentId) {
    if (window.attachEvent) {
        window.attachEvent("onload", function() {
            var sfEls = (parentId==null)?document.getElementsByTagName(tag):document.getElementById(parentId).getElementsByTagName(tag);
            type(sfEls);
        });
    }
}

sfHover = function(sfEls) {
    for (var i=0; i<sfEls.length; i++) {
        sfEls[i].onmouseover=function() {
            this.className+=" sfhover";
        }
        sfEls[i].onmouseout=function() {
            this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
        }
    }
}