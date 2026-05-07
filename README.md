# REZONA Website

REZONA 官网项目，基于 Next.js App Router 实现。当前站点包含首页、Explore More 游戏列表页、隐私政策页、EULA 条款页，以及账号删除跳转页。

站点视觉主要由切图素材、滚动驱动动画、游戏 iframe 预览和 Lottie 动画组成，桌面端与移动端有独立布局适配。

## Tech Stack

- Next.js `16.2.4`
- React `19.2.4`
- TypeScript `strict: true`
- Tailwind CSS v4 PostCSS 插件
- 自定义 CSS：`app/globals.css`、`app/explore-more.css`、`app/legal-pages.css`
- `lottie-web`：页尾小恐龙动画

> 注意：仓库 `AGENTS.md` 要求，改动 Next.js 行为或约定前先查看 `node_modules/next/dist/docs/` 下对应文档。

## Routes

```text
/                 首页
/explore-more     游戏探索页，15 个游戏卡片
/privacy          Privacy Policy
/terms            End User License Agreement (EULA)
/delete-account   重定向到 Google Form
```

所有页面的 metadata 保持统一，图标资源使用 `/favicon.ico` 和 `/logo.png`。

## Main Features

首页 `app/page.tsx` 负责桌面端和移动端两套渲染链路：

- 桌面首屏：分层背景、中央文案、游戏 iframe 预览、上下切换按钮、粒子扩散、滚动退场。
- 移动首屏：三张背景图入场、顶部导航、CTA、独立粒子屏、独立游戏预览屏。
- 游戏预览：离开当前屏时卸载 iframe，避免游戏和背景乐继续运行；回到当前屏后重新加载。
- 粒子屏：素材池来自 `app/data/hero-particle-ugc.json`，资源在 `public/assets/home/particles/ugc-new`。
- 轮播统计区：桌面和移动端复用统计素材，保持 3D 空间感与循环动画。
- Showcase 区：桌面分屏展示，移动端列表展示。
- Footer：下载入口、二维码、社媒链接、版权信息、Dino Lottie 动画。

`/explore-more` 的客户端逻辑在 `app/explore-more/page-client.tsx`：

- 桌面端以 3 行展示 15 张游戏卡片。
- 移动端滚动到当前可视窗口后再加载对应游戏 iframe。
- iframe 加载并发限制为 2。
- 15 秒未加载成功则显示封面，点击封面可重新加载。

## Assets

资源目录已经去掉旧的 `public/figma` 层级，统一放在 `public/assets`：

```text
public/
  assets/
    home/
      fly/              首页粒子/飞入素材
      footer/           首页尾屏素材
      hero-bg/          首页首屏背景切图
      hero-game/        首页游戏预览按钮与封面
      particles/        UGC 粒子图片池
      showcase/         移动端 showcase 素材
      stats/            轮播统计素材
    shared/
      app-download/     Get App 弹窗素材
      brand/            Logo/header 相关素材
      footer/           Footer 动画 fallback
      social/           社媒 icon
      store/            App Store / Google Play 素材
    explore-more/       Explore More 页面卡片与统计 icon
  fonts/
    Wister-Bold.otf
```

代码中引用静态资源时使用根路径，例如：

```ts
"/assets/shared/brand/mobile-top-logo-2x.webp"
```

## Styling Notes

- 全局默认字体为 `Wister`，通过 `app/globals.css` 的 `@font-face` 引入。
- 正常正文、法律页正文、面包屑、部分按钮文案使用 `var(--font-montserrat)` 保持可读性。
- 移动端通过 `visualViewport` / `innerHeight` 同步 `--mobile-screen-h`，用于处理不同手机浏览器可视高度。
- 根布局导出了 `viewport`，移动端禁止缩放，避免素材对齐在缩放后漂移。
- 样式文件按页面拆分：全站与首页在 `globals.css`，Explore More 在 `explore-more.css`，法律页在 `legal-pages.css`。

## Components

```text
app/components/get-app-button.tsx   Get App 按钮与二维码弹窗
app/components/site-footer.tsx      桌面/移动 Footer
app/components/dino-lottie.tsx      Lottie 动画封装
```

`GetAppButton` 已包含遮罩关闭、Esc 关闭、滚动锁定和移动端尺寸适配。

## Development

推荐 Node.js 20+。

```bash
npm install
npm run dev
```

默认访问：

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev      本地开发
npm run build    生产构建
npm run start    启动生产构建
npm run lint     ESLint 检查
```

本项目常用构建校验：

```bash
npx next build --webpack
```

## Maintenance Checklist

- 新增图片优先使用 `webp` / `avif`，命名使用 kebab-case。
- 新增页面素材优先放入 `public/assets/<page-or-module>`，跨页面复用素材放入 `public/assets/shared`。
- 更新素材目录后，检查代码中是否仍有旧路径，并确认 `public` 下真实文件存在。
- 改动 iframe 游戏逻辑时，同时验证桌面首页、移动首页和 `/explore-more` 的加载/超时/离屏行为。
- 改动移动端高度相关样式时，重点检查 `--mobile-screen-h`、`mobile-fly-section`、`mobile-content-game-section`。
- 改动 Next.js metadata、viewport、路由行为前，先对照 Next.js 16 文档。
