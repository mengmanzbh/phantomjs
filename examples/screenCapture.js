var page = require('webpage').create();
page.open('http://www.sina.com.cn/', function() {
  page.render('github.png');
  phantom.exit();
});
