# YourProject GitHub Homepage Starter

这是一个为 **VitaGlyph 同类型项目**准备的 GitHub 项目主页模板（单页静态站点）。
你只需要把内容替换进去即可，不需要改动框架结构。

## 目录结构

```text
.
├── index.html              # 主页面（所有区块已搭好）
├── assets
│   ├── css/style.css       # 页面样式
│   ├── js/main.js          # 复制代码按钮等小交互
│   ├── images              # 放图片（teaser、pipeline、results）
│   └── videos              # 预留给视频素材
└── README.md
```

## 你只需要改这几处

### 1) 项目标题和简介
编辑 `index.html`：
- `<title>`
- Hero 区域的项目标题（`<h1>`）
- 一段简介（`subtitle`）

### 2) 按钮链接
编辑 Hero 按钮中的链接：
- 论文链接（Paper）
- 代码链接（Code）

### 3) 替换图片
直接把 `assets/images/` 下的占位图替换为你的图，保持文件名即可：
- `teaser-placeholder.svg`
- `pipeline-placeholder.svg`
- `result-01.svg` ~ `result-04.svg`

> 如果你更喜欢 `.png/.jpg`，也可以改 `index.html` 里的文件名。

### 4) Quick Test 代码
在 `index.html` 的 `#quickstart` 区域，把示例命令替换成你的快速测试代码。

### 5) Citation
在 `#citation` 区块替换 BibTeX。

## 本地预览

在仓库根目录执行：

```bash
python -m http.server 8000
```

然后打开：`http://localhost:8000`

## 发布到 GitHub Pages

1. 推送到 GitHub 仓库。
2. 进入 **Settings → Pages**。
3. `Build and deployment` 选择：
   - Source: `Deploy from a branch`
   - Branch: `main`（或你的分支） / `/ (root)`
4. 保存后等待部署完成。

---

如果你希望，我下一步可以继续帮你：
- 改成更接近 HairCLIP / VitaGlyph 的配色和布局风格。
- 增加视频展示区（MP4 + 自动播放）。
- 增加“方法对比表格”和“更多可折叠结果”。
