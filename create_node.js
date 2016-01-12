    window.onload = function() {
    var themeExample = document.querySelector('#form > fieldset:nth-of-type(2) > .theme-group:first-of-type');
    var thesisExample = document.querySelector('#form > fieldset:nth-of-type(2) > .theme-group:first-of-type textarea');

    var button1 = document.getElementsByClassName('add-1')[0];
    var button2 = document.getElementsByClassName('add-2')[0];

    button1.onclick = addThesis;
    button2.onclick = addTheme;
    button2.click();

    // var sendButton = document.getElementById('sendButton');
    // sendButton.onclick = function() {
    //     var form = document.getElementByClassName('form')[0];
    //     var obj = {
    //         'header': form.children[0].children[0].value,
    //         'description': from.children[0].children[1].value,
    //         'themes': []
    //     };
    //     for (var i = 1; i < form.children.length-1; i++) {
    //         var theme = {

    //         }            
    //     }
    //     document.write();
    // }

    function addTheme() {
        var newTheme = themeExample.cloneNode(true);
        newTheme.children[2].onclick = addThesis;
        this.parentNode.insertBefore(newTheme, this);
        
    }

    function addThesis() {
        var newThesis = thesisExample.cloneNode();
        this.parentNode.insertBefore(newThesis, this);
    }
}
