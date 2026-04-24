# REZONA Landing (Next.js + Tailwind)

基于 `.codex/skill.md` 和 Figma 指定节点重构，当前版本使用真实设计导出资源实现高还原页面，包含：

- section1 滚动过渡：中间文案固定，背景空间顺时针旋转淡出
- section2 3D 卡片飞入：由远及近的透视动画
- section2 结束自动平滑滚动到 section3
- section3 自动循环 3D 统计空间效果
- section4~8 采用 Figma 导出画面进行高保真还原
- `prefers-reduced-motion` 降级支持
- 图片已统一接入 `next/image`，footer 使用分层 PNG + 完整 SVG 图标组合

## 运行

```bash
npm install
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)。

## 关键文件

- `app/page.tsx`：分镜结构、滚动进度逻辑、自动跳转逻辑
- `app/globals.css`：视觉样式与 3D/滚动动画
- `app/layout.tsx`：字体与 metadata
- `public/figma/assets/`：Figma 导出 PNG 资源
- `public/figma/icons/`：Figma 导出完整 SVG 社交图标

## 旧版备份

此前的纯静态版本已保存在 `.backup-static/`，可随时对照回滚。
