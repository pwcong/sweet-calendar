import 'dart:async';

import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

Future main() async {
  runApp(new MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sweet Calendar',
      theme: ThemeData(
        backgroundColor: Colors.white,
      ),
      home: Scaffold(
          body: WebView(
              initialUrl: 'https://pwcong.gitee.io/sweet-calendar',
              javascriptMode: JavascriptMode.unrestricted)),
    );
  }
}
