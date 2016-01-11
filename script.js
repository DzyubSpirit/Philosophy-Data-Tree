window.onload = function() {
    // var articles = document.querySelectorAll('.main article');
    // [].forEach.call(articles, makeCheckable);
    var checkboxes = document.querySelectorAll('.main article .parts .data-checkbox');
    [].forEach.call(checkboxes, linkCheckboxWithNextElement);

    /*
        Links click event of element that follows checkbox 
        with checkbox. So css can use .data-checkbox:checked 
        for different rules
    */
    function linkCheckboxWithNextElement(checkbox) {
        var nextElem = checkbox.nextElementSibling;
        // console.log(nextElem);
        if (nextElem === undefined) {
            return;
        }
        makeClickLinkBetween(nextElem, checkbox);
    }


    /*
        Function adds event listeners that provids
        clicking on accesor element when provider 
        element has been clicked. Accesor element do
        not bubble event to parent
    */
    function makeClickLinkBetween(provider, accesor) {
        accesor.addEventListener('click', function(e) {
            e.stopPropagation();
        });

        provider.addEventListener('click', function() {
            accesor.click();
            // console.log(accesor+': '+accesor.checked);
        });
    }
}