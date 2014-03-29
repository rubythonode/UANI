UANI.SLIDE_DOWN_HIDE = METHOD({

	statics : function(m) {'use strict';

		// saved heights
		m.savedHeights = {};
	},

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

		// origin height
		originHeight = dom.getHeight(),

		// params
		params = COPY_DATA(params);

		m.savedHeights[dom.id] = originHeight;

		params.keyframes = KEYFRAMES({
			from : {
				height : originHeight,
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
