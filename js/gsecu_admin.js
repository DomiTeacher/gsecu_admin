function showModalBg() {
	var modal = '<div id="modalBg" class="modal_bg"></div>';
	$('body').css({'overflow' : 'hidden'}).append(modal);
}
function hideModalBg() {
	 $('#modalBg').remove();
	 $('body').css({'overflow' : 'auto'})
}

function showCenterLayer(aaa) {
	gon = $(aaa);
	gon.css({
		'top': '50%',
		'left': '50%',
		'marginLeft': (gon.outerWidth() / 2) * -1,
		'marginTop': (gon.outerHeight() / 2) * -1
	});
	gon.show();
}
function hideCenterLayer(aaa) {
	gon = $(aaa);
	gon.hide();
}


/* tree menu */
function TreeMenu(element) {
	var parentElements = element.find('li:has(ul)').children('a');
	var parentElements2 = element.find('li:not(:has(ul))').children('a');
	parentElements.click(function(event) {
		var childElements = $(this).siblings('ul');
		if(childElements.is(':hidden')) {
			childElements.show();
		}else{
			childElements.hide();
		}
		return false;
	});
	parentElements2.click(function() {
		element.find('li').removeClass('selected');
		$(this).parent('li').addClass('selected');
		return false;
	});
}








$(function() {

	$('#hoverSelectTable td').hover(
		function() {
			$(this).parent('tr').addClass('on');
			$(this).click(function() {
				$('#hoverSelectTable tr').removeClass('selected');
				$(this).parent('tr').addClass('selected');
			});
		},
		function() { $(this).parent('tr').removeClass('on'); }
	);

	 $('.icon_i[rel]').hover(
          function() {
               $($('#' + $(this).attr('rel'))).stop().fadeIn(200);
          },
          function() {
               $($('#' + $(this).attr('rel'))).stop().fadeOut(200);
          }
     );

});