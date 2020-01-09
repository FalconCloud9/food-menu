(function($, window, document, undefined) {
  "use strict";
    $(function() {
      var lunch = ['Rice, Daal, Omlet Curry, ( For Veg. Potato Bhujiya ) Pickel', 'Rice, Daal, Paneer & Potato, Sadheko Achar']
      var snacks = ['Bhatmas & Pocorn', 'Bhataura & Tarkari']
      $('#lunch').text(lunch[0]);
      $('#snacks').text(snacks[0]);
      $('#nextLunch').text(lunch[1]);
      $('#nextSnacks').text(snacks[1]);
    });
  }(jQuery, window, document));
