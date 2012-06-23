var jQT = new $.jQTouch({
  icon:'apple-touch-icon.png',
  //addGlossToIcon: false,
  startupScreen:"apple-touch-startup.png",
  statusBar:'black-translucent',
  formSelector:'.form',
  preloadImages:[
    '/jqtouch/themes/jqt/img/back_button.png',
    '/jqtouch/themes/jqt/img/back_button_clicked.png',
    '/jqtouch/themes/jqt/img/button_clicked.png',
    '/jqtouch/themes/jqt/img/grayButton.png',
    '/jqtouch/themes/jqt/img/whiteButton.png',
    '/jqtouch/themes/jqt/img/loading.gif'
  ]
  $("#login a.login").tap(function(e) {
		var $form = $(this).closest("form");
		return app.login($form); 
	});

	$("#login").submit(function(e) {
		var $form = $(this);
		return app.login($form);
	});
});

var app = {
	login:function($form) {
		$.ajax({
			type:$form.attr("method"), url:$form.attr("action"),
			dataType:"json", data:$form.serialize(),
			complete:function(req) {
				if(req.status == 200 || req.status == 304) {
					jQT.goBack();
				} else {
					alert("There was an error logging in. Try again.");
				}
			}
		});
	return false;
	}
};

jQuery(function() {
  // Add custom handler code here.
});

