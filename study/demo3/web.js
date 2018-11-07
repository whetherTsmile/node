var http = require('http')
var url = require('url')
var util = require('util')


// get
// http.createServer(function(req,rep){
//     rep.writeHead(200,
//         {'Content-Type':'text/plain;charset=utf-8'})
//     rep.end(util.inspect(url.parse(req.url,true).query))
// }).listen(8080)

//post
var querystring = require('querystring')

var postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function (req, rep) {
    // 定义了一个post变量，用于暂存请求体的信息
    var post = "";
    req.on('data', function (chunk) {
        post += chunk;

    })
    // 在end事件触发后，
    // 通过querystring.parse将post解析为真正的POST请求格式，
    // 然后向客户端返回
    req.on('end', function () {
        post = querystring.parse(post);
        // rep.end(util.inspect(post))
        rep.writeHead(200,
            { 'Content-Type': 'text/html;charset=utf8' });

        if (post.name && post.url) {
            rep.write("网站名：" + post.name);
            rep.write("<br>");
            rep.write("网站 URL：" + post.url);
        } else {  // 输出表单
            rep.write(postHTML)
        }
        rep.end();
    });
}).listen(8080)