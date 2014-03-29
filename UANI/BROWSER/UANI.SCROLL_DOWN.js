UANI.SCROLL_DOWN = METHOD({

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
				height : 0,
				overflow : 'hidden'
			},
			to : {
				height : dom.getHeight(),
				overflow : dom.getStyle('overflow')
			}
		});

		ANIMATE(params, callback);
	}
});
