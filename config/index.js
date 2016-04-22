// var configValues = require('./config.json');

try {var configValues = require('./config.json')}
				   catch (e) {console.log('error')};

module.exports = {
	
	DBconnect: function(login) {
		var url = login || configValues.login;

		return url
	}

};
