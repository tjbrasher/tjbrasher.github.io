'use strict'


$(function(){
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault()
    });

oldObjChild=$('.active > a'); //gets active nav-item child nav-link
oldObj = $('.active'); //gets the active nav-item
oldObj.removeClass('active'); //remove active from old nav-item
oldObjChild.css('background-color','transparent'); //clear old active nav-item and nav-link style for color
$(this).parent().addClass('active'); //set the active class on the nav-item that called the function
$(this).css('color','#04AA6D'); //set active link color to green

});