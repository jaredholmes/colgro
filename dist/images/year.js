var copyrightYear = (function () {
  var thisYear = new Date();
  var year = thisYear.getFullYear();
  document.getElementById('copyright').innerHTML = 'Copyright | ColGro Pty Ltd. | ' + year;
}());
