// ==UserScript==
// @name         rmfbanner
// @namespace    https://github.com/ThePhantomGamer/rmfbanner/
// @version      0.4.2
// @description  Removes the "Join Facebook" Banner
// @author       Yaseen S./ThePhantomGamer
// @match        https://www.facebook.com/*
// @match        http://www.facebook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    console.log('rmfbanner: removing banner');
    // This is the element that has the banner
    var annoyingBanner = document.getElementById('pagelet_growth_expanding_cta');
    // This just deletes any content inside
    annoyingBanner.innerHTML = '';
    console.log('rmfbanner: finished');
    
    }
)();
