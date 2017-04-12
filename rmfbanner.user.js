// ==UserScript==
// @name         rmfbanner
// @namespace    https://github.com/ThePhantomGamer/rmfbanner/
// @version      0.5
// @description  Removes the "Join Facebook" Banner
// @author       Yaseen S./ThePhantomGamer
// @match        https://www.facebook.com/*
// @match        http://www.facebook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // exists on individual/isolated pages
    var banner_1 = document.getElementById("headerArea");
    
    // exists on landing/profile pages
    var banner_2 = document.getElementById("pagelet_growth_expanding_cta");
    
    var popdialog = document.getElementById("dialog_0");
    
    var popdialog2 = document.getElementsByClassName('_3-8y');
    
    var element_arr = [banner_1, banner_2, popdialog, popdialog2]
    
    window.onload = function() {
        element_arr.forEach(function(element){
            if(typeof(element) != 'undefined' && banner_1 !== null){
                console.log('removing: ' + element);
                element.innerHTML = '';
            }
        }
    });
    
    
    
    
})();
