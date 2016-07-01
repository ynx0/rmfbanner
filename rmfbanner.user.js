// ==UserScript==
// @name         rmfbanner
// @namespace    https://github.com/ThePhantomGamer/rmfbanner/
// @version      0.2.1
// @description  Removes the "Join Facebook" Banner
// @author       Yaseen S.
// @match        https://www.facebook.com/*
// @match        http://www.facebook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    var d = new Date();
    var h = Date.getHours();
    var m = Date.getMinutes();
    var s = Date.getSeconds();
    
    console.log(h + ":" + m + ":" + s + 'rmfbanner: removing banner');
    // This is the element that has the banner
    var annoyingBanner = document.getElementById('pagelet_growth_expanding_cta');
    // This just deletes any content inside
    annoyingBanner.innerHTML = '';
    console.log(h + ":" + m + ":" + s + 'rmfbanner: finished');
    
    }
)();
