$(function(){
    'use strict';
    //adjust slider height
    var window_height = $(window).height();
    var upper_height = $('.upper-bar').innerHeight();
    var navbar_height = $('.navbar').innerHeight();
    
    $('.slider').height(window_height - (upper_height+navbar_height));
    
    console.log("hi from java");
});