# yvon.dev

个人网站 / 数字花园项目，基于 Next.js App Router 打造的内容站点。通过 Contentlayer2 管理 MDX 文章，配合 Tailwind CSS、Drizzle ORM 以及多种第三方服务，提供博客、标签、统计、评论、搜索等功能。

## 功能亮点

- Next.js 15 + React Server Components，支持暗色模式与全局主题配置
- Contentlayer2 + MDX 内容系统，自动生成目录、阅读时长、RSS 订阅与标签数据
- 博客访问统计（浏览、互动）通过 Drizzle ORM + SQLite 存储，API 路由实时更新
- 内置 Kbar 指令面板、站内搜索索引、Giscus 评论以及 Buttondown/Convertkit 等订阅渠道
- 集成 Spotify Now Playing、GitHub 仓库信息、Goodreads/IMDB 数据同步脚本
- 预置 Umami Analytics（可扩展 Posthog），支持自定义重定向与站点配置

## 技术栈

- **框架**：Next.js 15 (App Router)、React 19、TypeScript
- **样式**：Tailwind CSS、PostCSS、Framer Motion、class-variance-authority
- **内容**：Contentlayer2、MDX、Remark/Rehype 插件（数学公式、代码高亮、引用等）
- **数据**：Drizzle ORM、better-sqlite3（默认 `dev.db`）、contentlayer 静态 JSON
- **前端组件**：Headless UI、Lucide、Font Awesome、Kbar
- **工具链**：pnpm、ESBuild、tsx、Husky、Lint-staged、Prettier、Commitlint

## 快速开始

1. **安装依赖**

   ```bash
   pnpm install
   ```

2. **配置环境变量**

   ```bash
   cp .env.example .env.local
   echo 'DATABASE_URL="file:./dev.db"' >> .env.local
   ```

   可直接复用仓库中的 `dev.db`，或通过 `pnpm db:init` 重新生成。

3. **启动开发服务器**

   ```bash
   pnpm dev
   ```

   默认运行在 `http://localhost:3434`，`pnpm start` 会使用 3435 端口。

## 环境变量

按功能分组列出常用变量，未使用的服务可以留空。

### 基础

- `DATABASE_URL`：Drizzle ORM 数据库连接串，默认 `file:./dev.db`
- `NODE_ENV` / `BASE_PATH` / `UNOPTIMIZED`：Next.js 构建相关控制项（可选）

### 分析 & 统计

- `NEXT_UMAMI_ID`：Umami Analytics 的站点 ID

### 评论与互动

- `NEXT_PUBLIC_GISCUS_REPO`
- `NEXT_PUBLIC_GISCUS_REPOSITORY_ID`
- `NEXT_PUBLIC_GISCUS_CATEGORY`
- `NEXT_PUBLIC_GISCUS_CATEGORY_ID`

### 邮件订阅（根据所选服务填写）

- `BUTTONDOWN_API_KEY`
- `CONVERTKIT_API_KEY`
- `CONVERTKIT_FORM_ID`
- `MAILCHIMP_API_KEY` / `MAILCHIMP_API_SERVER` / `MAILCHIMP_AUDIENCE_ID`
- `EMAILOCTOPUS_API_KEY` / `EMAILOCTOPUS_LIST_ID`
- `BEEHIVE_API_KEY` / `BEEHIVE_PUBLICATION_ID`
- `KLAVIYO_API_KEY` / `KLAVIYO_LIST_ID`
- `REVUE_API_KEY`

### 外部 API

- `GITHUB_API_TOKEN`：用于 GraphQL 查询仓库信息
- `SPOTIFY_CLIENT_ID` / `SPOTIFY_CLIENT_SECRET` / `SPOTIFY_REFRESH_TOKEN`
- `OMDB_API_KEY`：脚本拉取 IMDB 电影数据时使用

## 常用脚本

| 命令             | 说明                                                     |
| ---------------- | -------------------------------------------------------- |
| `pnpm dev`       | 本地开发，端口 3434                                      |
| `pnpm start`     | 运行构建后的产物                                         |
| `pnpm build`     | 构建 Next.js 并生成 RSS、搜索索引等静态资源              |
| `pnpm analyze`   | 查看打包体积分析                                         |
| `pnpm lint`      | 运行 ESLint（含 `--fix`）                                |
| `pnpm typecheck` | TypeScript 项目范围类型检查                              |
| `pnpm db:init`   | 基于 Drizzle schema 生成并推送 SQLite 迁移               |
| `pnpm db:studio` | 打开 Drizzle Studio（默认 8088 端口）                    |
| `pnpm seed`      | 拉取 Goodreads/IMDB 数据生成 JSON，需配置 `OMDB_API_KEY` |

## 内容与数据

- 文章、作者、导航等内容位于 `data/`，Markdown/MDX 文件会被 Contentlayer2 编译为静态 JSON。
- `scripts/post-build.ts` 会在构建后生成 RSS (`public/feed.xml`) 与标签 RSS。
- `json/` 目录存放 Contentlayer 导出的标签统计、种子脚本生成的书影音数据。
- 接口：`app/api/*` 提供 Newsletter 订阅、Spotify、GitHub、阅读统计等 API。
- Drizzle 默认使用根目录下的 `dev.db`，可根据需要替换为远程 PostgreSQL/SQLite。

## 部署

1. **构建产物**

   ```bash
   pnpm build
   ```

   构建会执行 Contentlayer 编译、生成搜索索引与 RSS。

2. **Vercel / 平台部署**
   - 连接代码仓库，导入项目
   - 在平台上配置与本地一致的环境变量、数据库字符串、第三方 API 密钥
   - 若使用 SQLite，可上传 `.vercel` KV 或改用其他数据库服务

3. **自托管**

   ```bash
   pnpm build
   pnpm serve
   ```

   默认监听 3000 端口，可配合反向代理上线。

## 许可

本项目基于 [MIT License](LICENSE) 开源，欢迎在保留版权声明的前提下自由使用与二次创作。
