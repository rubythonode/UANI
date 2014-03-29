UANI.SLIDE_RIGHT_HIDE = METHOD({

	statics : function(m) {'use strict';

		// saved widths
		m.savedWidths = {};
	},

	run : function(m, params, callback) {'use strict';
		//REQUIRED: params
		//REQUIRED: params.node
		//OPTIONAL: params.width
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

		// width
		width = params.width,

		// origin width
		originWidth = dom.getWidth(),

		// origin margin left
		originMarginLeft = dom.getStyle('marginLeft'),

		// params
		params = COPY_DATA(params);

		m.savedWidths[dom.id] = originWidth;

		params.keyframes = KEYFRAMES({
			from : {
				width : originWidth,
				marginLeft : originMarginLeft === undefined ? 0 : originMarginLeft,
				overflow : dom.getStyle('overflow')
			},
			to : {
				marginLeft : width === undefined ? originWidth : width,
				overflow : 'hidden'
			}
		});

		ANIMATE(params, callback);
	}
});
