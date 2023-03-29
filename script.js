function selectStyle(styleName) {
  // check for existing <link> on page, change its src attribute
  // if existing not found, create <link> element on page, set its src attribute

  var cssId = 'myCss';  // you could encode the css path itself to generate id..
  if (!document.getElementById(cssId))
  {
      var head  = document.getElementsByTagName('head')[0];
      var link  = document.createElement('link');
      link.id   = cssId;
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = styleName;
      link.media = 'all';
      head.appendChild(link);
  }
}