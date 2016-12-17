$(document).foundation()

$('[data-toggle-dia]').click(function () {
  const panel = $(this).data('toggleDias')
  $('#lineup-tabs').foundation('selectTab', panel)
});

// Cerrar off canvas
const $offCanvas = $('#offCanvas');
const $sticky = $('#sticky');

$offCanvas.find('li').click(function (ev) {
  $offCanvas.foundation('close')
  setTimeout(function () {
    $sticky.css('left', '0px');
  }, 300)
})
