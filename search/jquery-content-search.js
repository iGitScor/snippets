$( document ).ready(function () {
  $('#searchbar').on('input', function () {
    $('.content-boxes').each(function (item) {
      if (this.innerText.indexOf($('#searchbar').val()) > -1) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
})