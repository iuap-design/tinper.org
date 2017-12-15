var gapi = {};
var https = require('https');

gapi.contents = function ({
	owner, repo, path, branch = 'master', callback
}) {
	var options = {
		host: 'api.github.com',
		path: `/repos/${owner}/${repo}/contents/${path}?ref=${branch}`,
		headers: {
			'User-Agent': 'jinhujie',
			// 'Authorization': 'token 6960dfb4f50695b2d0805ad71f8e62d191bf7fc6',
		}
	};

	https.get(options, function (res) {
		var str = '';
	
		res.on('data', function(c){
			str += c;
		});
		res.on('end', function(){
			callback(str);
		});
		res.on('error', function(err){
			console.log(err);
		});
	});
}

module.exports = gapi;