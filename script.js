function selectStyle(styleName) {
  //alert(styleName);

  if (document.getElementById('myCss')) {
    // need to do something else
  } else {
    /* <link rel="stylesheet" href="ilya.css"> */
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.id = 'myCss';
    link.href = styleName;

    var allHeads = document.getElementsByTagName('head'); /* [0: '<head>'] */
    var head = allHeads[0]; /* <head> */ 

    head.appendChild(link);
  }
}

/*
function selectStyle(styleName) {
  // check for existing <link> on page, change its src attribute
  // if existing not found, create <link> element on page, set its src attribute

  var cssId = 'myCss';  // you could encode the css path itself to generate id..
  if (!document.getElementById(cssId)) // 'myCss'
  {
    var allHeads = document.getElementsByTagName('head');
    var head = allHeads[0];
    //var head  = document.getElementsByTagName('head')[0];

    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = styleName;
    link.media = 'all';
    head.appendChild(link);
  }

  else
  {
    var link = document.getElementById(cssId); // 'myCss';
    link.href = styleName;
  }
}
*/