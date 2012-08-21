/*
 * jQuery Browser 0.1.0 - $.browser support for jQuery 1.8+ (2012.08.20)
 *
 * http://github.com/scien/jquery.browser
 *
 * Copyright (c) 2012 Bryant Williams
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 */

(function($) {
  "use strict";

  var matched, browser;

  // Use of $.browser is frowned upon.
  // More details: http://api.jquery.com/jQuery.browser
  // $.uaMatch maintained for back-compat
  $.uaMatch = function( ua ) {
    ua = ua.toLowerCase();

    var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
      /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
      /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
      /(msie) ([\w.]+)/.exec( ua ) ||
      ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
      [];

    return {
      browser: match[ 1 ] || "",
      version: match[ 2 ] || "0"
    };
  };

  matched = $.uaMatch( navigator.userAgent );
  browser = {};

  if ( matched.browser ) {
    browser[ matched.browser ] = true;
    browser.version = matched.version;
  }

  // Deprecated, use $.browser.webkit instead
  // Maintained for back-compat only
  if ( browser.webkit ) {
    browser.safari = true;
  }
  if ( browser.chrome ) {
    browser.webkit = true;
  }

  $.browser = browser;
})(jQuery);

