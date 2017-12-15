$(document.body).ready(function() {
	var collection = $('<ul></ul>');
	var article = $('.article');

	//修改title
	var strs = window.location.href.split('.html')[0].split('/');
	var projName = strs[strs.length - 1];
	var title = projName + '版本记录';
	article.prepend('<H1><strong>' + title + '</strong></H2>');

	document.title = title;

	//创建左侧版本号预览
	var hasCollected = [];
	var leftNav = $('<div></div>').addClass('left-nav');
	var H2s = article.find('h2');
	if (H2s.length === 0) {
		H2s = article.find('h1');
	}

	if ($(document.body).width() < 750) {
		$(leftNav).css('display', 'none');
	}

	for (var i = 0; i < H2s.length; i++) {
		var H2 = $(H2s[i]);
		var id = H2.text();
		var releaseName = id.match(/[0-9]+\.[0-9]+\.[0-9]+/);
		if (projName == 'kero' || projName == 'tinper-neoui' || projName == 'tinper-sparrow') {
			releaseName = 'v' + releaseName;
		}
		var href = 'https://github.com/iuap-design/' + projName + '/archive/' + releaseName + '.zip';

		H2.attr('id', id).append(
			$('<a></a>').attr('href', href).addClass('uf uf-download').css('marginLeft', 15)
		);

		if (!isCollected(id)) {
			collection.append($('<li></li>').append($('<a></a>').append(id).attr('href', '#' + id)));
		}
		hasCollected.push(H2[0].childNodes[0].innerHTML);
	}
	$('#content').append(leftNav.append(collection));

	function isCollected(id) {
		var tag = false;
		var length = hasCollected.length;

		while (length--) {
			if (id == hasCollected[length]) {
				return true;	
			}
		}

		return false;
	}

	//重构版本详情结构
	function refactArticle () {
		var slices = article.find('ul');

		for (var i = 0; i < slices.length; i++) {
			var slice = $(slices[i]);
			var commitType = slice.prev()[0].innerHTML;
			var commits = slice.find('li');

			for(var j = 0; j < commits.length; j++) {
				var commit = commits[j];
				var icon = $('<i></i>');
				var oldHTML = commit.innerHTML;

				switch (commitType)
				{
				case ('Features') :
					icon.addClass('uf uf-plus');
					break;
				case ('Bug Fixes') :
					icon.addClass('uf uf-setting');

				default :
					icon.addClass('uf uf-pencil');
				}

				commit.innerHTML = '';
				$(commit).append(icon).append(oldHTML)
			}
		}
	}
	refactArticle();

	//隐藏H3，commit type
	$(article.find('h3')).css('display', 'none');



	//隐藏toggle 版本预览按钮
	$('.article-header').css('display', 'none');
})