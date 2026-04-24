# REZONA Website

REZONA 官网落地页（Next.js App Router）。

当前实现以 **Figma 导出素材 + 自定义滚动动画** 为核心，包含桌面与移动双端布局、首屏粒子扩散、轮播统计区、Showcase 分屏、页尾下载与社媒区，以及 App 下载弹窗。

## 技术栈

- `next@16.2.4`
- `react@19.2.4` / `react-dom@19.2.4`
- TypeScript（`strict: true`）
- CSS（`app/globals.css`，含大量自定义变量与关键帧）
- `lottie-web`（页尾 Dino 动画）

## 核心页面结构

主页面在 `app/page.tsx`，按「桌面 / 移动」两条渲染链路组织

### 桌面端（`isMobile === false`）

1. `hero-fly-scene`：首屏背景分层 + 中央文案 + 游戏预览切换 + 粒子扩散退场
2. `stats-loop-scene`：中间主卡 + 两侧虚化条带循环
3. `showcase-scenes`（sec4~sec7）：图文分屏展示
4. `footer-scene`：尾屏图、下载区、社媒、Dino Lottie

### 移动端（`isMobile === true`）

1. `mobile-hero-section`：首屏 3 图入场 + 顶部导航 + CTA
2. `mobile-fly-section`：移动端粒子层
3. `mobile-content-game-section`：游戏预览 + 上下切换按钮
4. `mobile-stats-loop`：移动版轮播统计区
5. `mobile-showcase-list`：移动版 sec4~sec7
6. `mobile-built-section` + `mobile-footer`

## 动画/交互实现要点

- 使用 `matchMedia` 在 900px 断点切换移动/桌面布局。
- 桌面首屏通过滚动驱动 CSS 变量（如 `--hero-out`、`--hero-copy-exit`）实现离场动画。
- `IntersectionObserver` 统一给场景打 `data-active`，控制动画启停。
- 移动端使用 `visualViewport/innerHeight` 同步 `--mobile-screen-h`，避免不同机型视口高度偏差。
- 游戏预览区支持 iframe 真机加载与 skeleton 过渡。
- 弹窗（App Download Modal）支持点击遮罩关闭、`Esc` 关闭与滚动锁定。

## 资源与字体

- 页面素材主目录：`public/figma/assets`
- 首屏背景素材：`public/figma/website-materials/mobile/desktop`
- 轮播素材：`public/figma/swiper`
- 粒子图片池：`public/figma/assets/hero-particles/ugc`
- 字体：`public/fonts/Wister-Bold.otf`

全局文本默认使用 `Wister`（在 `app/globals.css` 中通过 `@font-face` 与全局选择器设置）。

## 目录结构（关键部分）

```text
app/
  layout.tsx                  # 根布局与 metadata
  page.tsx                    # 主页面（桌面+移动）
  globals.css                 # 全局样式与动画
  data/
    hero-particle-ugc.json    # 粒子素材池配置
    footer-dino-animation.json# Dino Lottie 动画数据

public/
  figma/
    assets/                   # 页面主素材
    website-materials/        # 首屏分层背景素材
    swiper/                   # 轮播卡片素材
  fonts/
    Wister-Bold.otf
```

## 本地开发

> 推荐 Node.js 20+。

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)

## 可用脚本

```bash
npm run dev    # 本地开发
npm run build  # 生产构建
npm run start  # 生产模式启动
npm run lint   # ESLint 检查
```

## 当前已知事项

- 当前 `npm run lint` 会报 `react-hooks/set-state-in-effect`（位于 `app/page.tsx`），这是现有实现的规则告警/错误，不影响 `npx tsc --noEmit` 通过。
- 项目使用 Next.js 16；如需改动框架行为，请优先参考 `node_modules/next/dist/docs/` 下对应文档（仓库 AGENTS.md 要求）。

## 维护建议

- 新增素材优先使用 `webp/avif`，并保持 kebab-case 命名。
- 大改动画前，先确认桌面与移动是否共享同一状态变量，避免互相影响。
- 修改滚动驱动逻辑时，优先检查：`hero-fly-scene`、`stats-loop-scene`、`data-active` 三条链路。
