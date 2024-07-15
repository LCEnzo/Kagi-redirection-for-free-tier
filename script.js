// ==UserScript==
// @name        Kagi redirection to Google for free tier
// @namespace   https://kagi.com/
// @match       https://kagi.com/?q=*
// @description The script clicks the search on google button when the max free searches on kagi are reached.
// @version     1.0
// @noframes
// @grant       none
// @license     GNU GPLv3
// ==/UserScript==

(function () {
  'use strict'
  
  var googButton = document.querySelectorAll('.search-elsewhere a[href*="google"]')

  if(googButton.length != 1) {
    console.error('googButton is more than 1 selected element, ' + googButton.length)

    if(googButton.length == 0) {
      throw 'No button found'
    }
  }   

  console.error('googButton is more than 1 selected element, ' + googButton.length)
  
  googButton[0].target = ""
  googButton[0].click()
}());
