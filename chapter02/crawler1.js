var http = require('http');
var cheerio = require('cheerio');//cheerio模块类似于jquery
var url = 'http://www.imooc.com/learn/348';


function filterChapters (html) {
	var $ = cheerio.load(html);
	var chapters = $('.chapter');
	var courseData = [];
	chapters.each(function (item) {
		var chapter = $(this);
		var chapterTitle = chapter.find('strong').text().trim();
		var videos = chapter.find('.video').children('li');
		var chapterData = {
			chapterTitle: chapterTitle,
			videos: getVideos(videos, $)
		};

		courseData.push(chapterData);
	});

	return courseData;
}

function getVideos(videoDoms, $) {
	var result = [];
	videoDoms.each(function (item) {
		var video = $(this);
		var videoTitle = video.find('a').text().trim();
		var id = video.attr('data-media-id');
		result.push({title: videoTitle, id: id});
	});

	return result;
}

function printCouseData(course) {
	for (var i = 0; i < course.length; i ++) {
		var item = course[i];
		console.log('XXXXXXXXXXXXXXXXXXXXXX' + item.chapterTitle + 'XXXXXXXXXXXXXXXXXXXXXX');
		for (var j = 0; j < item.videos.length; j ++) {
			console.log('    ' + item.videos[j].id + '    ' + item.videos[j].title);
		}
	}
}

http.get(url, function (res) {
	var html = '';
	res.on('data', function (data) {
		html += data;
	});

	res.on('end', function () {
		var result = filterChapters(html);
		printCouseData(result);
	});

	res.on('error', function (err) {
		console.log(err);
	});
});