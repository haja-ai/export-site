# MiniElephant 独立站可视化设计器

本地可视化编辑器，用于修改产品图片、标题、描述、规格等，改完可一键部署上线。

## 启动

```bash
cd C:\Users\Administrator\Desktop\export-site
NEXT_PUBLIC_ADMIN_MODE=1 npx next dev -p 3001
```

然后浏览器打开：**http://localhost:3001/admin**

> 注意：必须先设置 `NEXT_PUBLIC_ADMIN_MODE=1`，否则 /admin 会返回 403（安全保护）。
> 生产环境（Vercel）没有这个环境变量，所以 /admin 线上不可用 —— 设计器只在本机使用。

## 功能

| 功能 | 说明 |
|:----|:----|
| 左侧产品列表 | 10 款 MiniRedone 产品，点击切换编辑 |
| 图片编辑 | 每张图片有"选择文件"按钮，上传后自动保存到 `public/images/`，可删除/新增 |
| 标题修改 | Name（导航/卡片标题）、Full Name（页面标题）、Tagline（副标题） |
| 价格修改 | b2bPrice（美元），影响 JSON-LD 结构化数据 |
| 描述编辑 | 大文本框，支持长文 |
| 规格编辑 | 规格表（重量/载重/续航等），可增删行 |
| 卖点编辑 | Features 列表，可增删 |
| 实时预览 | 右侧 iframe 实时显示产品页效果 |
| 保存 | 💾 只保存到本地文件（不部署） |
| 保存+部署 | 🚀 保存 + git commit + push + Vercel 部署 |

## 安全说明

- /admin 页面、/api/admin/* 接口都检查 `NEXT_PUBLIC_ADMIN_MODE=1`，未开启时返回 403
- 部署 API 需要 `.env` 里的 `VERCEL_TOKEN`（已配置）
- 只在本机使用，不推送到生产环境可访问

## 技术实现

- `app/admin/page.js` — 设计器界面（client component）
- `app/api/admin/products/route.js` — 读/写 `lib/products.js`
- `app/api/admin/upload/route.js` — 图片上传到 `public/images/`
- `app/api/admin/deploy/route.js` — git commit + push + Vercel deploy

## 常见问题

- **admin 打不开（403）**：确认启动命令带了 `NEXT_PUBLIC_ADMIN_MODE=1`
- **保存后网站没变化**：本地 dev 是热更新；点"🚀 Save + Deploy"才会推线上
- **图片上传后列表页不显示**：可能需要强制刷新（Ctrl+F5），因为 Vercel 静态图片缓存一年
