// run: nodemon UANI.js

require('./UPPERCASE_ONE/BOOT.js');

BOOT({
	CONFIG : {
		isDevMode : true
	},
	SERVER_CONFIG : {
		isNotUsingDB : true
	},
	BROWSER_CONFIG : {
		MAIN : function(ONE) {

			ONE.MATCH_VIEW({
				uris : [''],
				target : CLASS({

					preset : function() {'use strict';
						return VIEW;
					},

					init : function(cls, inner, self) {'use strict';

						var
						// div
						div,

						// close.
						close;

						div = DIV({
							style : {
								fontSize : 50
							},
							children : [SPAN({
								children : ['Hello UPPERCASE!']
							})]
						}).appendTo(BODY);

						UANI.FADE_OUT({
							node : div,
							duration : 1
						}, function() {

							UANI.FADE_IN({
								node : div,
								duration : 1
							}, function() {

								UANI.SCROLL_DOWN({
									node : div,
									duration : 1
								}, function() {

									UANI.SCROLL_UP({
										node : div,
										duration : 1
									}, function() {
										alert('OLLEH!');
									});
								});
							});
						});

						//OVERRIDE: self.close
						self.close = close = function(params) {
							div.remove();
						};
					}
				})
			});
		}
	}
});
