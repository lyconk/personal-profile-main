# 个人空间网站

这是一个采用日式设计风格的个人网站，专注于SEO与AI领域，展示个人专业技能与理念。

## 特点

- 🎨 日式美学设计 - 灵感来自日本传统色彩
- 📱 完全响应式 - 适配桌面、平板、手机
- ⚡ 性能优化 - 关键CSS内联、字体预加载、资源延迟加载
- 🔍 SEO友好 - 完整的meta标签、结构化数据、语义化HTML
- ♿ 无障碍支持 - ARIA标签、键盘导航、颜色对比度优化
- 🌊 流畅动画 - CSS过渡效果、悬停交互

## 技术栈

- **HTML5** - 语义化标记、无障碍特性
- **CSS3** - CSS变量、Grid布局、Flexbox
- **JavaScript (ES6+)** - 原生JS、无框架依赖
- **Web Fonts** - Google Fonts (Noto Serif SC & Noto Sans SC)
- **图标** - Font Awesome (动态加载)

## 项目结构

```
personal-profile-main/
├── index.html          # 主页面文件
├── styles.css          # 主样式文件
├── README.md           # 项目说明文档
└── (其他资源文件)
```

## 文件说明

### 1. index.html - 主页面文件

**功能**：网站的单页面入口，包含所有内容结构

**主要部分**：
- **SEO优化**：完整的meta标签、Open Graph、Twitter Cards
- **结构化数据**：JSON-LD格式的Person schema
- **关键CSS**：内联防闪烁样式
- **内容区块**：
  - 头部导航 (#header)
  - 关于理念 (#about)
  - 杠杆方案 (#wealth)
  - 每日功课 (#daily)
  - 知识体系 (#knowledge)
  - 人生信条 (#belief)
- **动态加载**：Font Awesome延迟加载脚本

### 2. styles.css - 主样式文件

**架构**：
- 使用CSS变量管理色彩系统
- 模块化的样式组织
- 移动优先的响应式设计

**主要模块**：
```css
/* 1. 色彩系统 */
:root {
  /* 日式传统色彩 */
  --accent-beni: #c53d43;      /* 紅 */
  --accent-fuji: #8b81c3;      /* 藤 */
  --accent-asagi: #48929b;     /* 浅葱 */
  --accent-kitsune: #c38743;   /* 狐 */
  --accent-gold: #c9a063;      /* 金茶 */
}

/* 2. 布局组件 */
- .side-title (右侧竖排标题)
- .main-content (主内容区)
- .section (页面区块)
- .daily-grid (两列布局)
- .tips-grid (三列布局)

/* 3. 特殊样式 */
- .tech-item[data-tech="nextjs"] (Next.js特殊高亮)
- .daily-card (每日功课卡片)
- .tips-card (AI技巧卡片)
- .prompt-example (代码示例框)
```

**响应式断点**：
- 900px以下：隐藏侧边标题
- 768px以下：单列布局
- 600px以下：移动端优化

## 色彩系统

采用日本传统色彩搭配：

| 色彩 | 用途 | 色值 | 名称 |
|------|------|------|------|
| 背景 | 主背景 | #d4a574 | 赤白橡 |
| 强调 | 标题、重要元素 | #c53d43 | 紅 |
| 辅助 | 次要元素 | #48929b | 浅葱 |
| 文字 | 主文本 | #4a3728 | 深棕 |
| 边框 | 分割线 | rgba(74,55,40,0.2) | 透明棕 |

## 性能优化

1. **字体加载优化**
   - 预连接到Google Fonts
   - 使用preload关键字体
   - font-display: swap

2. **CSS优化**
   - 内联关键CSS防止闪烁
   - 非关键CSS异步加载
   - CSS变量减少重复

3. **资源加载**
   - Font Awesome按需加载
   - 图片延迟加载（如果有）
   - 最小化HTTP请求

## SEO优化

- **元标签**：完整的description、keywords、robots
- **Open Graph**：社交媒体分享优化
- **结构化数据**：JSON-LD格式的Person信息
- **语义化HTML**：正确使用标签层级
- **内部锚点**：平滑滚动导航

## 维护指南

### 修改内容

1. **文本内容**：编辑`index.html`中的相应文本
2. **样式调整**：在`styles.css`中修改CSS变量或具体样式
3. **新增区块**：参考现有section结构添加

### 优化建议

1. **图片优化**：
   - 使用WebP格式
   - 添加懒加载
   - 压缩图片大小

2. **性能监控**：
   - 定期检查Lighthouse分数
   - 监控Core Web Vitals
   - 优化资源加载顺序

3. **内容更新**：
   - 定期更新AI工具链接
   - 添加新的SEO技巧
   - 更新技术栈进度

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 开发注意事项

1. **CSS类命名**：使用BEM命名规范
2. **无障碍性**：确保所有交互元素有ARIA标签
3. **代码注释**：重要功能添加注释说明
4. **版本控制**：使用Git进行版本管理

## 许可

MIT License - 详见LICENSE文件

## 联系方式

如有问题或建议，请通过以下方式联系：
- 邮箱：[kinlycon@gmail.com]