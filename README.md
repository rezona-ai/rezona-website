# REZONA Website

REZONA 官网项目，基于 Next.js App Router 实现。当前站点包含首页、Explore More 游戏列表页、隐私政策页、EULA 条款页、FAQ 页，以及账号删除跳转页。

站点视觉主要由切图素材、滚动驱动动画、游戏 iframe 预览和 Lottie 动画组成。首页使用桌面、窄 PC、移动端三套适配规则，其余页面主要按桌面与移动端两套规则适配。

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
/faq              Frequently Asked Questions
/delete-account   重定向到 Google Form
```

所有页面的 metadata 保持统一，图标资源使用 `/favicon.ico` 和 `/logo.png`。

## Main Features

首页 `app/page.tsx` 负责桌面端、窄 PC 和移动端渲染链路：

- 桌面首屏：分层背景、中央文案、游戏 iframe 预览、上下切换按钮、粒子扩散、滚动退场。
- 窄 PC 首屏：`1025px` - `1366px` 使用独立的 `narrowPcHeroBgSlices` / `narrowPcHeroGameSlices`，避免背景和游戏区域在小桌面宽度下被挤压或裁切。
- 移动首屏：三张背景图入场、顶部导航、CTA、独立粒子屏、独立游戏预览屏。
- 游戏预览：离开当前屏时卸载 iframe，避免游戏和背景乐继续运行；回到当前屏后重新加载。
- 粒子屏：素材池来自 `app/data/hero-particle-ugc.json`，资源在 `public/assets/home/particles/ugc-new`。
- 轮播统计区：桌面和移动端复用统计素材，保持 3D 空间感与循环动画。
- Showcase 区：桌面分屏展示，移动端列表展示。
- Footer：下载入口、二维码、社媒链接、版权信息、Dino Lottie 动画。

`/explore-more` 的客户端逻辑在 `app/explore-more/page-client.tsx`：

- 游戏数据集中维护在 `app/data/explore-more-games.json`，当前共 15 个游戏。
- 桌面端卡片固定 `255px` 宽，按视窗宽度自动从 5 列逐步降到 4 / 3 / 2 列，游戏渲染区域高度固定为 `425px`。
- 桌面端游戏 iframe 首次进入加载条件后会保留在 DOM 中，滚动离屏不重新加载。
- 移动端断点为 `640px`，滚动到当前可视窗口后再加载对应游戏 iframe，并保留离屏卸载/重载逻辑。
- 移动端卡片铺满内容区宽度，右下角提供上下滚动按钮并支持长按连续滚动，缓解 iframe 抢占触摸滚动的问题。
- iframe 加载并发限制为 2。
- 15 秒未加载成功则显示封面，点击封面可重新加载。

Legal 页面与 FAQ 页面共用 `app/legal-pages.css` 和 `SiteFooter variant="legal"`：

- `/privacy`、`/terms`、`/faq` 顶部 logo 回到首页，右侧 CTA 跳转 `/explore-more`。
- 顶部 CTA 桌面端显示 `Explore more games`，移动端隐藏 `games`，显示为 `Explore more`。
- `/faq` 的手风琴逻辑在 `app/faq/page-client.tsx`，默认展开第一个问题；当前所有问题暂时复用第一条答案。
- FAQ 问题左侧 bullet 使用 `public/assets/faq/Bullet.svg`。
- FAQ 联系邮箱使用 `mailto:support@rezona.ai`，点击后唤起系统默认邮箱客户端。
- Footer legal 链接为 `Privacy Policy | Term of Service | Faq`，桌面端和移动端都在 `app/components/site-footer.tsx` 中维护；首页桌面内联 footer 也在 `app/page.tsx` 中同步维护。

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
    faq/                FAQ 页面 bullet 等素材
    shared/
      app-download/     Get App 弹窗素材
      brand/            Logo/header 相关素材
      footer/           Footer 动画 fallback
      game-loading/     iframe 游戏 loading skeleton 素材
      social/           社媒 icon
      store/            App Store / Google Play 素材
    avatar/             Explore More 创作者头像
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
- 法律页与 FAQ 顶部 CTA 使用 `.privacy-top-cta-extra` 控制 `games` 的桌面间距与移动端隐藏，避免在 `inline-flex` 中依赖文本前导空格。
- 移动端通过 `visualViewport` / `innerHeight` 同步 `--mobile-screen-h`，用于处理不同手机浏览器可视高度。
- 根布局导出了 `viewport`，移动端禁止缩放，避免素材对齐在缩放后漂移。
- 样式文件按页面拆分：全站与首页在 `globals.css`，Explore More 在 `explore-more.css`，法律页在 `legal-pages.css`。
- Footer 的 `REZONA.AI` 桌面文字使用 `width: max-content` + `right` 定位对齐社媒 icon，调整时要同时确认完整显示与右边缘对齐。

## Components

```text
app/components/get-app-button.tsx   Get App 按钮与二维码弹窗
app/components/legal-header.tsx     Privacy / Terms 顶部导航
app/components/site-footer.tsx      桌面/移动 Footer
app/components/dino-lottie.tsx      Lottie 动画封装
```

`GetAppButton` 已包含遮罩关闭、Esc 关闭、滚动锁定和移动端尺寸适配。
`LegalHeader` 的 CTA 指向 `/explore-more`，PC 文案为 `Explore more games`，移动端隐藏 `games` 后显示 `Explore more`。

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
npx next typegen
npx tsc --noEmit
npm run build
```

## Maintenance Checklist

- 新增图片优先使用 `webp` / `avif`，命名使用 kebab-case。
- 新增页面素材优先放入 `public/assets/<page-or-module>`，跨页面复用素材放入 `public/assets/shared`。
- 新增或调整 Explore More 游戏时，优先修改 `app/data/explore-more-games.json`，避免在页面组件里重复维护卡片数据。
- 更新素材目录后，检查代码中是否仍有旧路径，并确认 `public` 下真实文件存在。
- 清理素材时，先对 `app`、配置文件和数据 JSON 做引用扫描；头像、粒子池和社媒 icon 多数通过数组/JSON 间接引用，避免只按页面文本人工判断。
- 改动首页首屏切图时，同时检查桌面 `heroBgSlices` / `heroGameSlices`、窄 PC `narrowPcHeroBgSlices` / `narrowPcHeroGameSlices`，以及移动端首屏素材。
- 改动响应式断点时，注意首页与其他页面标准不同：首页移动端当前按 `<=1024px`，非首页移动端当前按 `<=640px`。
- 改动 iframe 游戏逻辑时，同时验证桌面首页、移动首页和 `/explore-more` 的加载/超时/离屏行为；`/explore-more` 桌面与移动端离屏策略不同。
- 外部游戏 iframe 的资源报错可能来自游戏内部域名和 CDN 的 CORS 配置，父页面通常无法用 iframe 属性修复。
- 改动移动端高度相关样式时，重点检查 `--mobile-screen-h`、`mobile-fly-section`、`mobile-content-game-section`。
- 改动 legal footer 链接时，同时检查 `app/components/site-footer.tsx` 和首页 `app/page.tsx` 的桌面 footer 链接是否一致。
- 改动 `/privacy`、`/terms`、`/faq` 顶部 CTA 时，同时检查 PC 文案 `Explore more games`、移动端文案 `Explore more` 和按钮宽度。
- 改动 FAQ 页面时，检查 `app/faq/page-client.tsx`、`app/legal-pages.css` 和 `public/assets/faq` 的资源引用是否同步。
- 改动 Next.js metadata、viewport、路由行为前，先对照 Next.js 16 文档。
