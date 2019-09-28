window.onload = function () {
  var video = document.querySelector("video") ;
  video.addEventListener('loadedmetadata', setVideoDimensions, false);
  window.addEventListener('resize', setVideoDimensions, false);

}
var container = document.querySelector('#backgroundContainer');

var setVideoDimensions = function () {
  // Video's intrinsic dimensions
  var w = video.videoWidth
    , h = video.videoHeight;

  // Intrinsic Ratio
  // Will be more than 1 if W > H and less if W < H
  var videoRatio = (w / h).toFixed(2);

  // Get the container's computed styles
  //
  // Also calculate the min dimensions required (this will be
  // the container dimentions)
  var containerStyles = window.getComputedStyle(container)
    , minW = parseInt(containerStyles.getPropertyValue('width'))
    , minH = parseInt(containerStyles.getPropertyValue('height'));
  var widthRatio = minW / w
    , heightRatio = minH / h;

  // Whichever ratio is more, the scaling
  // has to be done over that dimension
  if (widthRatio > heightRatio) {
    var newWidth = minW;
    var newHeight = Math.ceil(newWidth / videoRatio);
  }
  else {
    var newHeight = minH;
    var newWidth = Math.ceil(newHeight * videoRatio);
  }

  video.style.width = newWidth + 'px';
  video.style.height = newHeight + 'px';
};



