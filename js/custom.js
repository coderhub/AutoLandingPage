// $(function () {
//   var viewer = ImageViewer();
//   $('.zoomimg').click(function () {
//       var imgSrc = this.src,
//           highResolutionImage = $(this).data('high-res-img');

//       viewer.show(imgSrc, highResolutionImage);
//   });
// });
$(function () {
  $(window).scroll(function() {
    var hT = $('#screenone').offset().top,
        hH = $('#screenone').outerHeight()/2,
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
        //console.log('Home screen in view!');
        $('#screenone').addClass('visible');
    }
  });
});