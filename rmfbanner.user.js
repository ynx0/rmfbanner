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
    
    // check if exists
    if(typeof(banner_1) != 'undefined' && banner_1 !== null){
        
        console.log("rmfb: Removing banner type 1");
        banner_1.innerHTML = "";
        
    }
    
    if(typeof(banner_2) != 'undefined' && banner_2 !== null){
        
        console.log("rmfb: removing banner type 2");
        banner_2.innerHTML = "";
        
    }
    
    console.log("rmfb: Successfully removed banners");
    
})();
