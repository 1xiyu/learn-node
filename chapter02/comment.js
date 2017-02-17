var http = require('http')
var querystring = require('querystring')
var postData = querystring.stringify({
    'content': '一起期待下一期的course',
    'cid': '348'
})

var  options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: 'course/docomment',
    methodd: 'POST',
    headers: {
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate, sdch',
        'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6',
        'Cache-Control':'no-cache',
        'Connection':'keep-alive',
        'Cookie':'imooc_uuid=5a19b4eb-18e5-44c9-be27-e8cbaeeb40bb; imooc_isnew_ct=1477379950; PHPSESSID=r9retea1h4oeghp78gib5bua03; loginstate=1; apsid=kzNjk3Y2QzYmM2Mjk2ZTQ5MjVmNDVlMWQ2YTE2OGIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjUxMDY3MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3MjgwMDkyMzFAcXEuY29tAAAAAAAAAAAAAAAAAAAAADM2MzI5ZWNmNGJjNjI0NDhkM2RiMWNjOWFmMzg2YzE2CqxrWAqsa1g%3DND; last_login_username=728009231%40qq.com; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1482909829,1483451395,1483879576; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1483886823; imooc_isnew=2; cvde=586bac01a6da9-115; jwplayer.volume=19',
        'Host':'www.imooc.com',
        'Pragma':'no-cache',
        'Referer':'http://www.imooc.com/video/8837',
        'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
    }
}

var req = http.request(options,function(res){
    console.log('status:' + res.status)
    console.log('header:' + JSON.stringify(res.headers))
    res.on('data',function(chunk){
        console.log(Buffer.isBuffer(chunk))
        console.log(typeof chunk)
    })
    res.on('end',function(){
        console.log('comment accomplished')
    })  
})

 res.on('error',function(e){
        console.log('error'+ e.message)
    })
    req.write(postData)