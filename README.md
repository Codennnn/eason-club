# 意想社团

## 界面预览

![img](https://s1.ax1x.com/2020/09/19/woSmUs.png)

![img](https://s1.ax1x.com/2020/09/19/woSd8x.png)

![img](https://s1.ax1x.com/2020/09/19/woSaP1.png)

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