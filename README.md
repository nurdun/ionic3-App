This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTabs tabs
```

Then, to run it, cd into `myTabs` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

# ionic3-App


# 安装并启动
 首先在电脑上安装好ionic3,Android SDk,xcode等需要的环境<br />
 用 git clone 的方式拉项目到本地<br />
 先到package.json中删掉jpush-phonegap-plugin(注意dependencies和cordova中都删掉)<br />
jpush-phonegap-plugin 需要先删掉，等安装完其他依赖之后再单独安装，因为这里的消息推送插件需要配置自己的appkey<br />
不需要消息推送功能的话，删掉这个插件和之后app.component.ts中的消息推送相关代码就可以<br />
用 npm install 的方式 安装node_modules<br />
用ionic serve 命令可以启动项目并在浏览器中查看(此功能需要删掉消息推送相关代码)<br />
# Android
ios的消息推送功能用到了phonegap-plugin-push插件，本插件在安卓上需要使用google services通过firebase来推送消息。<br />
因为我们用不了google services，所以Android端用了极光的jpush-phonegap-plugin来实现了消息推送。<br />
要打包成Android时需要用 ionic cordova plugin remove phonegap-plugin-push命令来删除phonegap-plugin-push插件<br />
否则的话因为获取不到google services配置文件，打包会失败。这个问题之后会解决<br />

ionic cordova platform add android 打包安卓项目<br />
ionic cordova emulate android  -lc 启动安卓模拟器并查看项目<br />
ionic cordova run android -lc  真机调试<br />

# IOS
ionic cordova platform add ios<br />
ionic cordova emulate ios -lc<br />
ionic cordova run ios -lc<br />

# 注意
config.xml中的widget id="ionic.App" 需要替换成自己的App id

# 建议
安装npm package时可能会报错 <br />
建议自己ionic start xxx新建一个ionic3项目然后把代码复制进去运行<br />
创建新项目并复制我的代码的时候需要单独安装几个插件和npm包
$ ionic cordova plugin add phonegap-plugin-push
$ npm install --save @ionic-native/push
ionic plugin add jpush-phonegap-plugin --variable APP_KEY=your_jpush_appkey
$ npm install --save ionic3-jpush
上面四个是消息推送相关的插件和包，如果不需要消息推送功能的话可以不安装，记得注释掉app.component.ts中的相关代码就好
$ npm install --save cordova-sqlite-storage






