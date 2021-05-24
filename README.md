# 意想社团

## 界面预览

![img](./img/screenshoot1.jpeg)

![img](./img/screenshoot2.jpeg)

![img](./img/screenshoot3.jpeg)

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
