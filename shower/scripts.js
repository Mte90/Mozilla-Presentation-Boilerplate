document.addEventListener("DOMContentLoaded", function(event) {
    //This code add the support for remove the slide on the fly after the load of Shower
    button = document.createElement("button");
    button.classList.add('edit');
    button.innerHTML = 'Slide Mode - Click me for start!';
    //Inject the button on the header
    document.querySelector('header.caption p').parentNode.insertBefore(button, document.querySelector('header.caption p').nextSibling);
    button.onclick = function() {
            var js = document.createElement("script");
            js.type = "text/javascript";
            js.src = 'shower/shower.js';
            document.body.appendChild(js);
            //Append shower on click and remove all the buttons
            this.remove();
            [].forEach.call(document.querySelectorAll('.list .remove'), function(button) {
                button.remove();
            });
    };
    
    var slide = document.querySelectorAll('section.slide');
    //Loop all slide for add a single button that add the support for remove it on shower
    [].forEach.call(slide, function(div) {
        offset = div.getBoundingClientRect();
        button = document.createElement("button");
        button.style.top = (div.offsetTop) + 'px';
        button.style.left = offset.left + 'px';
        button.classList.add('remove');
        button.innerHTML = 'X';
        div.parentNode.insertBefore(button, div);
        //Set default way for data-disable
        button.nextSibling.setAttribute('data-disable',false);
    });
    //Add the toggle system for enable/disable
    [].forEach.call(document.querySelectorAll('.list .remove'), function(button) {
        button.onclick = function() {
            if (button.nextSibling.getAttribute('data-disable') === null || button.nextSibling.getAttribute('data-disable') === 'false') {
                button.nextSibling.setAttribute('data-disable',true);
            } else {
                button.nextSibling.setAttribute('data-disable',false);
            }
        }
    });
	
}, false);
