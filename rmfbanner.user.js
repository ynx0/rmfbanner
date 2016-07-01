// ==UserScript==
// @name         Remove Facebook Join Banner
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  see title
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
})();
