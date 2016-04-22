var configValues = require('./config.json');


module.exports = {
	
	DBconnect: function(ENVlogin) {
		var url = ENVlogin || configValues.login;

		return url
	}

};
