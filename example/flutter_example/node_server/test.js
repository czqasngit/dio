// 引入http模块
var http = require("http"); 
var fs = require("fs");
 
// 创建server，指定处理客户端请求的函数
http.createServer(
  function(request, response) {
    //判断HTTP方法，只处理GET 
    if(request.method != "GET"){
      response.writeHead(403);
      response.end();
      return null;
    }
 
    //此处也可使用URL模块来分析URL(https://nodejs.org/api/url.html)
    var sep = request.url.indexOf('?');
    var filePath = sep < 0 ? request.url : request.url.slice(0, sep);
    console.log("请求: " + filePath);
 
		var responseJSONString = '{"name": "游小彬", "age": 32, "性别": "男"}';
		//当文件存在时发送数据给客户端，否则404
		console.log('长度: ' + responseJSONString.length);
    response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
		response.end(responseJSONString);
  }
).listen(8000); 
 
console.log("Hello World start listen on port 8000");