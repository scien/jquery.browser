# $.browser support for jQuery 1.8+

```
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


```
## Other resources

- jQuery Documentation: http://api.jquery.com/jquery.browser

- Related Bug: http://bugs.jquery.com/ticket/12333

- jQuery Blog Post: http://blog.jquery.com/2012/06/22/jquery-1-8-beta-1-see-whats-coming-and-going

- Check the project's history at the [change log](https://github.com/scien/jquery.browser/blob/master/CHANGELOG.md)

