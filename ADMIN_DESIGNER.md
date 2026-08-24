# MiniElephant 独立站可视化设计器 — 团队协作版

## 同事怎么用（无需安装任何软件）

1. 浏览器打开：**https://www.semwheelchair.com/admin**
2. 输入管理员密码（找 Johnson 要）
3. 开始编辑：
   - **产品编辑**：改 10 款产品的图片、标题、描述、规格、价格
   - **页面编辑**：点左上角"← 产品编辑器"旁边的链接进 **/admin/pages**，改首页/About/FAQ/Contact/News/Products 文案
4. 改完点 **💾 Save**（保存到代码仓库）或 **🚀 Save + Deploy**（保存并部署上线）

## 编辑内容

| 编辑器 | 地址 | 能改什么 |
|:----|:----|:----|
| 产品编辑器 | /admin | 产品图片、标题、描述、规格表、卖点、价格 |
| 页面编辑器 | /admin/pages | 首页 hero 文案/按钮/视频、区块标题、About/FAQ/Contact/News 页面文案 |

## 工作原理

- 页面打开 `/admin` → 输入密码 → 登录
- 保存时通过 **GitHub API** 直接写入代码仓库（lib/products.js / lib/site-content.js / public/images）
- 部署时通过 **Vercel API** 触发线上更新
- 全部自动，无需命令行

## 注意事项

1. **多人同时编辑**：GitHub 同一文件同时写会冲突——建议同事编辑时先沟通，避免两个人同时改同一个产品
2. **保存后会推送到线上**：点"Save"就会提交到 GitHub（master 分支），有 git 记录可回溯
3. **图片**：上传的图片自动压缩保存，无需额外处理
4. **权限**：管理员密码在 Vercel 环境变量 `ADMIN_PASSWORD` 中，改密码要更新 Vercel

## 密码管理

- 当前管理员密码在 `.env`（本地）和 Vercel production 环境变量 `ADMIN_PASSWORD`
- 要改密码：更新 Vercel 环境变量 `ADMIN_PASSWORD` → 重新部署
