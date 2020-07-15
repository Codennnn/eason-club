# 意想社团

## 界面预览
![img](https://gitee.com/chinesee/images/raw/master/club/preview1.png)
![img](https://gitee.com/chinesee/images/raw/master/club/preview2.png)
![img](https://gitee.com/chinesee/images/raw/master/club/preview3.png)

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