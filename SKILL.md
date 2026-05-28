---
name: rezona-website
description: Use when working on the Rezona website project, including Next.js App Router pages, homepage responsive layout, Explore More game iframe behavior, legal pages, FAQ, shared footer/header data, assets, metadata, sitemap, and visual QA.
---

# Rezona Website

## 项目背景

这是 Rezona 官网项目，基于 Next.js App Router 实现。

核心技术栈：

- Next.js 16.2.4
- React 19.2.4
- TypeScript strict mode
- Tailwind CSS v4 PostCSS 插件
- 自定义 CSS：`app/globals.css`、`app/explore-more.css`、`app/legal-pages.css`
- Footer 小恐龙动画使用 `lottie-web`

重要规则：本项目使用的 Next.js 版本和常见旧版本存在差异。修改路由、metadata、viewport、sitemap、robots、redirects、server behavior 等 Next.js 行为前，先阅读 `node_modules/next/dist/docs/` 下对应文档。

## 主要路由

- `/`：首页
- `/explore-more`：游戏探索页
- `/privacy`：Privacy Policy
- `/terms`：Terms of Service
- `/community_guidelines`：Community Guidelines
- `/faq`：FAQ 页面
- `/delete-account`：跳转 Google Form

## 关键文件

```text
app/page.tsx                         首页
app/globals.css                      全局与首页样式
app/data/home.ts                     首页静态数据与响应式切图配置

app/explore-more/page.tsx            Explore More 路由壳
app/explore-more/page-client.tsx     Explore More 客户端逻辑
app/explore-more.css                 Explore More 样式
app/data/explore-more-games.json     Explore More 游戏数据

app/privacy/page.tsx                 Privacy 页面
app/terms/page.tsx                   Terms 页面
app/community_guidelines/page.tsx    Community Guidelines 页面
app/faq/page.tsx                     FAQ 路由壳
app/faq/page-client.tsx              FAQ 手风琴逻辑
app/legal-pages.css                  Legal 与 FAQ 共用样式

app/components/legal-header.tsx      Legal 顶部导航
app/components/site-footer.tsx       通用 footer
app/components/get-app-button.tsx    App 下载按钮与弹窗
app/components/dino-lottie.tsx       Footer Lottie 封装
app/components/home-stats-loop.tsx   首页 stats 轮播

app/data/legal-links.ts              Footer legal 链接
app/data/social-links.ts             Footer 社媒链接
app/shared-metadata.ts               全站 metadata 与 canonical URL
app/sitemap.ts                       自动生成 sitemap
app/robots.ts                        自动生成 robots.txt
next.config.ts                       redirects 与 Next 配置
```

## 通用工作流

1. 修改前先阅读相关文件，理解现有实现。
2. 优先沿用项目已有模式，不随意引入新的抽象。
3. 改动范围尽量贴近用户请求，避免顺手重构无关代码。
4. 页面静态配置优先放入 `app/data`，避免组件文件继续膨胀。
5. Footer legal、社媒、首页配置、Explore More 游戏数据优先使用共享数据模块。
6. 样式按页面族维护：
   - 首页与全局：`app/globals.css`
   - Explore More：`app/explore-more.css`
   - Legal 与 FAQ：`app/legal-pages.css`
7. 改完至少运行：
   ```bash
   npx tsc --noEmit
   git diff --check
   ```
8. 涉及范围较大时再运行：
   ```bash
   npm run build
   ```

## 编辑规则

- 手动修改文件使用 `apply_patch`。
- 不要回滚用户或其他会话已有改动。
- 不要修改构建产物。
- 文件默认保持 ASCII；法律正文、品牌文案或已有内容确实需要时再使用非 ASCII 字符。
- 只在非显而易见的逻辑处添加简短注释。
- 搜索文件或文本优先使用 `rg` 和 `rg --files`。

## 首页规则

首页主要在 `app/page.tsx`，静态配置在 `app/data/home.ts`。

响应式规则：

- 首页移动端判断标准为 `<=1024px`。
- 非首页移动端通常使用 `<=640px`。
- `1025px - 1366px` 是窄 PC 专门布局。
- 窄 PC 首屏使用 `narrowPcHeroBgSlices` 和 `narrowPcHeroGameSlices`。
- 桌面首屏使用 `heroBgSlices` 和 `heroGameSlices`。
- 移动端首屏使用独立的移动端 section 与素材。

修改首页 hero 时：

1. 同时检查桌面、窄 PC、移动端三条渲染链路。
2. 切图位置、尺寸、素材数据优先改 `app/data/home.ts`。
3. 保持桌面首页顶部导航逻辑：首屏开始透明，第一屏滚走后才加背景。
4. 顶部背景图需要在导航栏后面时，不要额外把它压到导航栏下方。
5. 检查游戏预览区在不同视窗宽度下是否平滑缩放。
6. 注意上下按钮、固定控件在响应式变化中不要漂移。

首页 iframe / 游戏预览：

- 桌面首页游戏预览离开当前屏时会卸载 iframe，回到当前屏后重新加载。
- 移动首页有独立游戏预览逻辑。
- 不要把 Explore More 的 iframe 生命周期规则直接套到首页。

粒子屏：

- 粒子素材数据在 `app/data/hero-particle-ugc.json`。
- 素材位于 `public/assets/home/particles/ugc-new`。
- 调整动画质感时，优先在现有实现中调整 scale、opacity、duration、运动速度等参数，不要轻易重写整套系统。

## Explore More 规则

主要逻辑在 `app/explore-more/page-client.tsx`，数据在 `app/data/explore-more-games.json`，样式在 `app/explore-more.css`。

当前行为：

- 桌面端游戏卡片固定宽度为 `255px`。
- 桌面端列数随视窗变化从 5 列逐步降到 4 / 3 / 2 列。
- 桌面端游戏渲染区域高度为 `425px`。
- 桌面端 iframe 满足首次加载条件后会保留在 DOM 中，不因滚动离屏重新加载。
- 移动端断点为 `640px`。
- 移动端卡片铺满内容区宽度，按单列列表展示；如果要做“每个游戏与 meta 内容铺满一屏”的体验，需要同步检查并调整 `app/explore-more.css` 中移动端卡片、media frame、meta 和列表间距。
- 移动端 iframe 会抢占滚动事件，因此页面右下角有 fixed 上下滚动按钮。
- 移动端上下滚动按钮支持点击滚动和长按连续滚动。
- iframe 加载并发限制为 2。
- 游戏 15 秒未加载成功时显示封面，点击封面可重新加载。

修改 Explore More 时：

1. 保留桌面端与移动端的行为差异。
2. 除非用户明确要求，不要改 iframe 重新加载策略。
3. 调整滚动按钮时，同时验证点击距离和长按丝滑度。
4. 确认移动端上下按钮固定在右下角，响应式过程中不漂移。
5. 修改游戏数据后检查实际 URL 是否可访问，尤其是 Google Storage 外部资源。
6. 外部 iframe 游戏报错可能来自游戏内部、CDN、CORS 或上游资源，不一定是父页面问题。

## Legal 与 FAQ 规则

Legal 与 FAQ 页面共用结构和样式：

- `app/privacy/page.tsx`
- `app/terms/page.tsx`
- `app/community_guidelines/page.tsx`
- `app/faq/page.tsx`
- `app/legal-pages.css`
- `app/components/legal-header.tsx`
- `app/components/site-footer.tsx`

Legal 页面壳应保持：

```tsx
<main className="privacy-page ...">
  <LegalHeader />
  <section className="privacy-content-shell">
    ...
  </section>
  <SiteFooter variant="legal" />
</main>
```

规则：

- 保留 `createPageMetadata()`，除非明确要求修改 metadata 行为。
- 顶部与底部内容默认保持和 Terms 页面一致。
- support 邮箱使用 `privacy-email-link` 和 `mailto:support@rezona.ai`。
- support 邮箱链接需要可点击并带下划线。
- 从 PDF 替换正文时，排除 `do not publish`、internal note、legal review note 等内部备注。
- 文字、段落、列表样式优先改 `app/legal-pages.css`，不要写 inline style。
- 法律页列表项要保留足够间距，避免长条目糊成一整段。
- FAQ 手风琴逻辑在 `app/faq/page-client.tsx`。
- FAQ 左侧 bullet 资源在 `public/assets/faq/Bullet.svg`。

Legal 顶部 CTA：

- PC 端文案为 `Explore more games`。
- 移动端文案为 `Explore more`。
- `games` 的字体样式要和 `Explore more` 一致。
- `more` 和 `games` 之间需要有可见空格。
- 当前通过 `.privacy-top-cta-extra` 在移动端隐藏 `games`。

Footer legal 链接：

- 统一维护在 `app/data/legal-links.ts`。
- 不要在多个 footer 组件中手写重复链接。
- 当前包括 Privacy Policy、Term of Service、Community Guidelines。
- 移动端 legal 链接必须可以自然换行，不能出现横向截断或内部 y 轴滚动。

## 资源规则

资源统一放在 `public/assets`。

代码里使用根路径引用：

```ts
"/assets/shared/brand/mobile-top-logo-2x.webp"
```

常见目录：

```text
public/assets/home
public/assets/explore-more
public/assets/faq
public/assets/shared
public/assets/avatar
```

新增或清理资源时：

1. 同时扫描 `app`、配置文件、JSON 数据和 CSS 引用。
2. 注意资源可能通过数组、JSON 或数据模块间接引用。
3. 图片优先使用 `webp` 或 `avif`。
4. 文件命名使用 kebab-case。
5. 没完成引用扫描前不要删除资源。

## Metadata、Sitemap 与 SEO

全站 metadata 在 `app/shared-metadata.ts`。

当前 canonical 生产域名：

```text
https://rezona.ai
```

自动生成文件：

```text
app/sitemap.ts
app/robots.ts
```

规则：

- 不要手动新增静态 `sitemap.xml` 或 `robots.txt`。
- Next.js App Router 会生成 `/sitemap.xml` 和 `/robots.txt`。
- 正确路径是 `/sitemap.xml`，不是 `/sitmap.xml`。
- 修改 title、description、canonical、sitemap、robots、redirects 时，同时检查：
  - `app/shared-metadata.ts`
  - `app/sitemap.ts`
  - `app/robots.ts`
  - `next.config.ts`

## Header 与 Footer 规则

顶部导航：

- 所有页面顶部内容 fixed。
- 宽度铺满视窗。
- PC 高度为 `96px`。
- 移动端高度为 `60px`。
- z-index 应高于页面其他内容。
- Legal 页面使用半透明模糊背景。
- 首页 PC 端初始透明，第一屏滚走后再加背景。

Footer：

- 通用 footer 在 `app/components/site-footer.tsx`。
- 首页如果存在内联 footer，也应消费共享的 `legalLinks` 和 `socialLinks`。
- 社媒链接在 `app/data/social-links.ts`。
- Legal 链接在 `app/data/legal-links.ts`。
- Footer 桌面 `REZONA.AI` 文案需要完整显示，并在视觉上右边缘对齐最后一个社媒 icon。

## 视觉 QA

涉及视觉或响应式改动时：

1. 必要时启动本地 dev server：
   ```bash
   npm run dev
   ```
2. 在浏览器打开对应页面检查。
3. 至少检查：
   - 常见移动端宽度约 `375px`
   - 首页边界 `1024px`
   - 窄 PC 区间 `1025px - 1366px`
   - 常见桌面宽度 `1440px` 或以上
4. 重点观察：
   - 文案是否被截断
   - 背景图是否被不合理裁切
   - 控件是否漂移
   - iframe 区域是否跳变
   - footer legal 链接是否截断
   - 是否出现意外横向滚动或内部滚动

## 构建与验证

按改动风险选择验证命令：

```bash
npx tsc --noEmit
git diff --check
npm run lint
npm run build
```

涉及 Next.js 路由或 generated types 时，可按需要额外运行：

```bash
npx next typegen
```

如果用户已经提供 dev server 地址，不要默认使用 `3000`，以用户给的端口为准。

## 常见坑

- Next.js 16 行为可能不同于旧经验，改框架约定前先读本地文档。
- 首页移动端断点和其他页面不同。
- Explore More 桌面端和移动端 iframe 生命周期规则不同。
- Footer legal 链接是共享数据，手动改某一个 footer 容易造成页面不一致。
- Privacy、Terms、Community Guidelines、FAQ 共用 legal 样式，CSS 改动会影响全部页面。
- 外部 iframe 游戏失败可能来自游戏 URL、CDN、CORS 或上游服务，不一定是父页面问题。
