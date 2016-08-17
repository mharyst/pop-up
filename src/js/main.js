//Showing Pop Up

$(document).ready(function() {
  $('.container #uninstall').click( function () {
  	$('#overlay').fadeIn(400,
  	 	function() {
  			$('#pop_up')
  				.css('display', 'flex')
  				.animate({opacity: 1, top: '20%'}, 200);
      });
  });
});

//Close Pop Up
function closePopUp() {
$('#pop_up')
  .animate({opacity: 0, top: '15%'}, 200,
    function() {
      $(this).css('display', 'none');
      $('#overlay').fadeOut(50);
    }
  );
}

$('#pop_up button.cancel, #pop_up_close, #overlay').click(closePopUp);

$('#pop_up button.confirm-uninstall').click( function() {
  alert("Done!");
  closePopUp();
});
