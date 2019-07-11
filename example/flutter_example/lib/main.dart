import 'package:flutter/material.dart';
import 'package:dio/dio.dart';
import 'package:sky_engine/_http/http.dart';

void simpleJSONRequest() async {
  Options opts = Options(contentType: ContentType.json);
  Response<String> response = await Dio().get('http://localhost:8000');

}

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text('Dio测试'),
        ),
        body: Center(
          child: RaisedButton(
            child: Text('简单数据请求'),
            onPressed: () => simpleJSONRequest(),
          ),
        ),
      ),
    );
  }
}

void main() {
  runApp(App());
}
