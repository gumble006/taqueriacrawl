var configValues = require('./config.json');


module.exports = {
	
	DBconnect: function(login) {
		var url = login || configValues.login;

		return url
	}

};
