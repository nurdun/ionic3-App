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
首先在电脑上安装好ionic3,Android SDk,xcode等需要的环境
用 git clone 的方式拉项目到本地
先到package.json中删掉jpush-phonegap-plugin(注意dependencies和cordova中都删掉)
jpush-phonegap-plugin 需要先删掉，等安装完其他依赖之后再单独安装，因为这里的消息推送插件需要配置自己的appkey
不需要消息推送功能的话，删掉这个插件和之后app.component.ts中的消息推送相关代码就可以
用 npm install 的方式 安装node_modules
用ionic serve 命令可以启动项目并在浏览器中查看(此功能需要删掉消息推送相关代码)
Android
ionic cordova platform add android 打包安卓项目
ionic cordova emulate android  -lc 启动安卓模拟器并查看项目
ionic cordova run android -lc  真机调试

IOS
ionic cordova platform add ios 
ionic cordova emulate ios -lc
ionic cordova run ios -lc

