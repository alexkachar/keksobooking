'use strict';

(function () {

  window.ADVERTS_NUMBER = 8;
  window.adverts = [];

  var onSuccessGetAdvertsArray = function (serverData) {
    window.adverts = serverData;
  };

  window.backend.download(onSuccessGetAdvertsArray, window.utils.onErrorRenderMessage);

})();
