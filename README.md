# 舒尔特方格训练

这是一个基于 React 的舒尔特方格训练网页应用，帮助用户提高注意力和视觉搜索能力。

## 功能特点

- 5x5 数字方格训练
- 实时计时功能
- 性能评估反馈
- 响应式设计，支持移动设备

## 本地开发

1. 克隆仓库
```bash
git clone [your-repository-url]
cd schulte-grid
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm start
```

4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 部署到 GitHub Pages

1. 在 package.json 中添加 homepage 字段：
```json
{
  "homepage": "https://[your-github-username].github.io/schulte-grid"
}
```

2. 安装 gh-pages 包：
```bash
npm install --save-dev gh-pages
```

3. 在 package.json 中添加部署脚本：
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

4. 部署到 GitHub Pages：
```bash
npm run deploy
```

## 使用说明

1. 点击"重新开始"按钮开始新的训练
2. 按照从1到25的顺序点击数字
3. 完成后会显示用时和表现评估
4. 可以随时重新开始新的训练

## 性能标准

- 18岁及以上成年人：
  - 8秒以内：优秀
  - 20秒以内：中等水平
- 12-14岁年龄组：
  - 16秒以内：优良
  - 26秒以内：中等水平
  - 36秒以上：需要提高
- 7-12岁年龄组：
  - 26秒以内：优秀
  - 42秒以内：中等水平
  - 50秒以上：需要提高
