var http = require('http')
var url = 'http://www.imooc.com/learn/348'
var cheerio = require('cheerio')
function filterChapters(html){
    console.log(1)
    var $ = cheerio.load(html)
    var chapters = $('.learnchapter')
    console.log(chapters)
    var courseData = [];
   
    chapters.each(function(item){
        var chapter = $(this)
        console.log(1)
        var chapterTitle = chapter.find('strong').text()
        var videos = chapter.find('.video').children('li')
        var chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        }

        videos.each(function(item){
            console.log(1)
            var video = $(this).find('.studyvideo')
            var videoTitle = video.text()
            var id = video.attr('href').split('video/')[1]

            chapterData.videos.push({
                title:videoTitle,
                id: id
            })
        })
        courseData.push(chapterData)
    })
    
    return courseData
}

function printCourseInfo(courseData){
    courseData.forEach(function(item){
        var chapterTitle = item.chapterTitle
        console.log(chapterTitle + '\n')
        item.videos.forEach(function(video){
            console.log('   ['+video.id + '] ' + video.title + '\n')
        })

    })
}
http.get(url,function(res){
    var html = ''

    res.on('data',function(data){
        html += data
    })

    res.on('end',function(){
        
        // filterChapters(html)
        var courseData = filterChapters(html);
        console.log(courseData)
        printCourseInfo(courseData)
    })
}).on('error',function(){
    console.log('get error')
})