【关于Chrome读取本地XML失败】

我在网上搜了很多在chrome用JS读取 本地XML文件 的例子，运行时审查元素都报加载错误，不能用使用。

据网上说 chrome 的 ajax 有安全性限制，不能操作本地的文件。
W3C说必须把 XML 文件放到自己的服务器上。否则，xmlDoc.load() 将产生错误 "Access is denied"。


因为没有部署到服务器，还没找到可行方法，所以我在 IE 中用JS简单读取了XML文件，可行。





