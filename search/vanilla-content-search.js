(function (document) {
  'use strict';
  // Old browser compatibility
  if (typeof Array.prototype.forEach != 'function') {
    Array.prototype.forEach = function (callback){
      var iterator;
      for (iterator = 0; iterator < this.length; iterator++){
        callback.apply(this, [this[iterator], iterator, this]);
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
}(document));