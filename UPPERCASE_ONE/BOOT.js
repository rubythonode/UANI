require('../UPPERCASE/BOOT.js');

var
// origin BOOT
_BOOT = BOOT;

BOOT = function(params) {

	if (params.CONFIG === undefined) {
		params.CONFIG = {};
	}

	params.CONFIG.defaultBoxName = 'UPPERCASE_ONE';

	_BOOT(params);
};
