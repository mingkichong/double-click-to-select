function findAncestorWithClassName(el, clsName) {
    if (el.className.indexOf(clsName) !== -1){
        return el;
    }
    while (el.parentElement) {
        el = el.parentElement;
        if (el.className.indexOf(clsName) !== -1){
            return el;
        }
    }
    return null;
}

function selectText(el){
    var range, selection;
    if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(el);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(el);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

window.onload=function(){
    document.body.addEventListener('dblclick', function(e){
        var foundElement = findAncestorWithClassName(e.srcElement, 'double-click-highlight');
        if (foundElement){
            selectText(foundElement);
        }
    });
}