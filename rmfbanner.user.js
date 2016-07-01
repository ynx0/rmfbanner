// ==UserScript==
// @name         rmfbanner
// @namespace    https://github.com/ThePhantomGamer/rmfbanner/
// @version      0.1
// @description  Removes the "Join Facebook" Banner
// @author       Yaseen S.
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    console.log('rmfbanner: removing banner');
    var annoyingBanner = document.getElementById('pagelet_growth_expanding_cta');
    annoyingBanner.innerHTML = '';
    console.log('rmfbanner: finished');
    
    }
)();
