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
						// fade
						fade,

						// slide down
						slideDown,

						// slide up
						slideUp,

						// close.
						close;

						fade = DIV({
							style : {
								fontSize : 50
							},
							children : [SPAN({
								children : ['FADE!!!']
							})]
						}).appendTo(BODY);

						UANI.FADE_OUT({
							node : fade,
							duration : 1
						}, function() {

							UANI.FADE_IN({
								node : fade,
								duration : 1
							});
						});

						slideUp = DIV({
							style : {
								fontSize : 50
							},
							children : [SPAN({
								children : ['SLIDE UP!!!']
							})]
						}).appendTo(BODY);

						UANI.SLIDE_UP_HIDE({
							node : slideUp,
							duration : 1
						}, function() {

							UANI.SLIDE_UP_SHOW({
								node : slideUp,
								duration : 1
							});
						});

						slideDown = DIV({
							style : {
								fontSize : 50
							},
							children : [SPAN({
								children : ['SLIDE DOWN!!!']
							})]
						}).appendTo(BODY);

						UANI.SLIDE_DOWN_HIDE({
							node : slideDown,
							duration : 1
						}, function() {

							UANI.SLIDE_DOWN_SHOW({
								node : slideDown,
								duration : 1
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
