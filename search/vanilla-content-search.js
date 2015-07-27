(function() {
  'use strict';
  // Old browser compatibility
  if (typeof Array.prototype.forEach != 'function') {
    Array.prototype.forEach = function (callback){
      for (var i = 0; i < this.length; i++){
        callback.apply(this, [this[i], i, this]);
      }
    };
  }
  
  var searchbar = document.getElementById('searchbar');
  searchbar.addEventListener('input', function() {
    var elements = document.querySelectorAll('.content-boxes');
    Array.prototype.forEach.call(elements, function(item){
      if (item.innerText.indexOf(searchbar.value) > -1) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
}());