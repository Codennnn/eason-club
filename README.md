# 意想社团

## 参赛海报

![参赛海报](./img/poster.jpg)

## 应用界面

![应用界面截图1](./img/screenshoot1.jpeg)

![应用界面截图2](./img/screenshoot2.jpeg)

![应用界面截图3](./img/screenshoot3.jpeg)

## 项目配置

```
# 安装依赖
yarn
# 启动本地运行程序
yarn android
```

## 生成发行 APK 包

```
# 进入根目录下的 android 文件夹
cd android
# 执行打包命令
./gradlew assembleRelease
```

生成的 APK 文件位于 `android/app/build/outputs/apk/release/app-release.apk`
