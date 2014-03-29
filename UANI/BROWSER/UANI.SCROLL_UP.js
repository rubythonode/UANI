UANI.SCROLL_UP = METHOD({

	run : function(m, params, callback) {'use strict';
		//REQUIRED: params
		//REQUIRED: params.node
		//OPTIONAL: params.duration
		//OPTIONAL: params.timingFunction
		//OPTIONAL: params.delay
		//OPTIONAL: params.iterationCount
		//OPTIONAL: params.direction
		//OPTIONAL: params.playStateduration
		//OPTIONAL: callback

		var
		// dom
		dom = params.node.getDom(),

		// params
		params = COPY_DATA(params);

		params.keyframes = KEYFRAMES({
			from : {
				height : dom.getHeight(),
				overflow : dom.getStyle('overflow')
			},
			to : {
				height : 0,
				overflow : 'hidden'
			}
		});

		ANIMATE(params, callback);
	}
});
