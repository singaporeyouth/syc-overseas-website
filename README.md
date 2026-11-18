---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 873bfaaf083854a5de824b8053cac050_153e2b1be2f811f1913b525400393706
    ReservedCode1: JuVBWOmWerRqdTT2b+UpSqi6sGETIBr7/jZ09XKTBziOrMLAB5loAFCJcv5g5ywjP3mJ+JlPC0FukCU/secTKGzbjf62Y1pQD9dF1j/PMAKat5574sCQFpzIf4C0TeL+xFJCfFpQrkyO+sPiJwbuyjLI1a1Zr0El3RG1CnaYT5XcjGXwHdcL2094KVE=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 873bfaaf083854a5de824b8053cac050_153e2b1be2f811f1913b525400393706
    ReservedCode2: JuVBWOmWerRqdTT2b+UpSqi6sGETIBr7/jZ09XKTBziOrMLAB5loAFCJcv5g5ywjP3mJ+JlPC0FukCU/secTKGzbjf62Y1pQD9dF1j/PMAKat5574sCQFpzIf4C0TeL+xFJCfFpQrkyO+sPiJwbuyjLI1a1Zr0El3RG1CnaYT5XcjGXwHdcL2094KVE=
---

# Singapore Youth Community (SYC) 海外展示官网

基于 **Astro**（静态站点生成器）+ **GitHub Pages** 的免费技术栈构建，面向全球展示 SYC 国际青年合作网络与 AI-native 青年社区。全站 8 个公开页面，英中双语（英文为基线、中文为待审核草稿），零后端、可完全静态托管。

> ⚠️ **内容合规状态：本仓库为可直接构建预览的原型，尚未上线。**
> 所有人物 / 机构 / 国家 / 案例 / 地图连线 / 概念图均为**示例占位（示例待核验 / `sample_unverified`）**，不得当作真实资料对外发布。数字 `36` 与 `4.3M+` 语义见下文红线。联系表单**未接入真实投递**，页面明确标注草稿，绝不假提交。上线前须完成内容核验（见「上线前红线」）。

---

## 1. 目录结构

```
SYC_Overseas_Website/
├── public/
│   ├── assets/               # 官方 Logo（原文件保留）+ world SVG 底图 + 概念图（占位）
│   │   ├── syc-logo.png      # 官方 Logo，禁止重绘/改色/变形
│   │   ├── world-light.svg   # Natural Earth 真实陆地轮廓底图（可复用）
│   │   ├── world-dark.svg
│   │   └── *.jpg             # AI 生成概念图，占位，需换授权真实素材
│   └── robots.txt
├── src/
│   ├── config/site.ts        # 站点级单一数据源：域名、URL、Org JSON-LD、联系方式、页面清点与 href 辅助
│   ├── i18n/ui.ts            # 英中双语字典（zh 标注为待审核草稿）
│   ├── content/
│   │   ├── config.ts         # Zod 类型化内容集合定义 + schema 校验
│   │   ├── countries.json    # 国家网络（示例，36 国名单待核验）
│   │   ├── people.json       # 人物（示例肖像 + 姓名待核验）
│   │   ├── partners.json     # 合作机构（示例，未授权不得展示 logo）
│   │   ├── case-studies.json # 案例（示例待核验）
│   │   ├── platforms.json    # AI 平台（4 个真实 URL，来自 HTML Kit）
│   │   └── metrics.json      # 关键数字（36 / 4.3M+ 语义 + 待签字）
│   ├── components/           # Header/Footer/SEO/Hero/WorldMap/DualFeature/... 公共组件
│   ├── layouts/BaseLayout.astro  # 全局布局：统一 Header/Footer/CTA/SEO/搜索
│   ├── pages/
│   │   ├── _views/           # 8 个页面视图（EN/ZH 共用，单一实现）
│   │   ├── *.astro           # 英文路由（根路径 /）
│   │   ├── zh/*.astro        # 中文路由（/zh/，审核前 excluded from sitemap）
│   │   └── 404.astro
│   ├── scripts/main.ts       # 移动菜单、筛选、搜索等交互
│   └── styles/               # global.css（设计令牌）+ app.css（组件样式 + 4 档响应式）
├── astro.config.mjs          # site / base / trailingSlash / sitemap 配置
├── package.json
└── dist/                     # 构建产物（部署此目录，gitignore 忽略）
```

**设计令牌**（`src/styles/global.css`）复用 HTML Kit：海军蓝 `#0b214e`、青绿 `#078d93` / `#0ec5c8`、青色 `#57dded`、冰蓝背景、Playfair Display（标题）+ Manrope（正文）；4 档响应式断点 1360 / 1120 / 870 / 600px，验收要求 375px 无横向滚动。

---

## 2. 本地运行与构建

前置：Node.js ≥ 18.17.1（推荐 20+ / 22 LTS），npm。

```bash
cd SYC_Overseas_Website

# 安装依赖
npm install

# 本地开发服务器（默认 http://localhost:4321）
npm run dev

# 类型 / 内容 schema 校验（建议纳入 CI）
npm run check

# 生产构建，输出到 dist/
npm run build

# 本地预览构建产物（默认 http://localhost:4321）
npm run preview
```

站点 URL 通过 `astro.config.mjs` 的 `SITE` 决定（默认 `https://www.singaporeyouth.com`），可在构建时覆盖：

```bash
SITE_URL=https://www.singaporeyouth.com npm run build
```

> 说明：若本机 `@rollup/rollup-darwin-arm64` 因代码签名报 `ERR_DLOPEN_FAILED`（Team ID 不匹配），这是宿主进程限制，非项目代码问题。CI / 其他机器通常无此问题。构建成功后 `dist/` 下应有 17 个 HTML（8 EN + 8 ZH + 404）、`sitemap-index.xml` / `sitemap-0.xml` 与 `robots.txt`。

---

## 3. 部署到 GitHub Pages（免费方案）

> 选 GitHub Pages 而非 Vercel Hobby：Vercel Hobby 仅限个人非商用，组织官网属商用有被暂停风险；GitHub Pages 免费且合规（遵守其服务条款与软性用量上限）。生产站点使用自定义域名 `www.singaporeyouth.com`。

### 3.1 方式 A：GitHub Actions 自动部署（推荐，部署 `dist/`）

1. 在 GitHub 新建仓库（如 `syc-website`），将本项目 `main` 分支推送上去（`.gitignore` 已排除 `node_modules/`、`dist/`、`.astro/`）。

2. 在项目根目录新建工作流 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run check          # 内容 schema 校验，失败即阻断
      - run: npm run build
        env:
          SITE_URL: https://www.singaporeyouth.com
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

3. 仓库 **Settings → Pages**：Build and deployment → Source 选 **GitHub Actions**。

4. 推送到 `main` 即自动构建部署。PR 可在另外的 workflow 中做预览（或本地 `npm run preview` 评审）。

### 3.2 方式 B：Astro 官方 action（可选替代）

也可用 `withastro/action` 简化构建步骤（同样以 GitHub Pages 为 targets），核心依然是产出 `dist/` 并用 `deploy-pages@v4` 发布。上表方式 A 已足够。

### 3.3 项目站点 vs 自定义域名

- **自定义域名（本项目默认）**：`astro.config.mjs` 保持 `base: '/'`，配合下节 DNS 解析直接绑定 `www.singaporeyouth.com`。
- **若部署为项目站点**（`https://<user>.github.io/<repo>/`）：把 `base: '/<repo>/'` 取消注释并重建；此时 sitemap/OG/canonical 的前缀随之改变。项目方目标为自定义域名，无需此项。

---

## 4. 域名解析：阿里云 → GitHub Pages

> 域名保留在阿里云注册商，无需迁移；仅在阿里云 DNS 修改解析记录指向 GitHub Pages。以 GitHub Pages 官方公布的 IP 与配置提示为准，不要照抄示例值。

### 4.1 前置

1. 站点部署成功后，在仓库 **Settings → Pages → Custom domain** 填入 `www.singaporeyouth.com` 并保存（如同时要根域名，也填入 `singaporeyouth.com`）。
2. GitHub 会自动在仓库根生成 `CNAME` 文件记录所填域名——**不要手动删除**它（每次部署会带回）。

### 4.2 阿里云解析记录

登录阿里云控制台 → 域名 → 解析 → 添加/修改记录：

| 记录类型 | 主机记录 | 记录值 | 线路 | TTL | 说明 |
|---|---|---|---|---|---|
| **A** | `@`（根域名，或留空） | `185.199.108.153`（GitHub Pages 四选一，见下） | 默认 | 600 秒 | 根域名指向 GitHub Pages |
| **CNAME** | `www` | `<username>.github.io` | 默认 | 600 秒 | www 子域名指向 GitHub Pages |

GitHub Pages 根域名 A 记录 IP（四条约等，任选其一或按面板提示）：

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**关键注意事项**

- 根域名（apex）因 DNS 规范已有 NS/SOA 记录，**不能设 CNAME，只能设 A 记录**；`www` 子域名用 CNAME。
- **不要添加 AAAA（IPv6）记录**，否则会阻碍 GitHub Pages 的 SSL 自动签发。
- 若存在旧站解析记录（原 A/CNAME），先删除或替换，避免冲突。
- 先设短 TTL（600 秒）加速生效，稳定后可延长。
- 只填 `www` 或同时填 `@`：若只绑定 `www`，建议把根域名 `@` A 记录也配上，并在 GitHub Pages 勾选重定向到 `www`（见 4.4），避免重复内容与 SEO 权重分散。

### 4.3 生效验证

DNS 生效（国内通常 10 分钟–数小时）后：

```bash
dig A singaporeyouth.com +short          # 应返回 GitHub Pages IP（如 185.199.108.153）
dig CNAME www.singaporeyouth.com +short  # 应返回 <username>.github.io
curl -I https://www.singaporeyouth.com   # 应返回 HTTP/2 200 且为 HTTPS
```

GitHub Pages 的 **Enforce HTTPS** 在域名生效后自动签发 Let's Encrypt 证书（Settings → Pages 勾选 Enforce HTTPS）。

### 4.4 根域名 / www 重定向

在 GitHub Pages 设置中，把 `singaporeyouth.com` 与 `www.singaporeyouth.com` 绑定后，GitHub 通常自动在两者间做 301 重定向（以配置为主域名为准）。建议统一到 `www`，保证访问两域名落到同一站点。

### 4.5 切换风险控制

低峰期切换解析，保留旧站回滚记录（切回原 IP），观察 24–48 小时确认稳定后再清理旧记录；SSL 出问题优先排查是否误加 AAAA 或记录值与面板不符。

---

## 5. 内容与数据维护

所有展示数据集中在 `src/content/*.json`，由 `src/content/config.ts` 的 Zod schema 在 `npm run check` / 构建时校验。改数据 = 改 JSON，无需改组件。每条记录带 `verificationStatus` 字段：

| 状态值 | 含义 |
|---|---|
| `sample_unverified` | 示例占位，待核验，**不得作为真实资料发布** |
| `owner_supplied_needs_signoff` | 负责人提供，待签字确认（如 36 / 4.3M+） |
| `confirmed_url` | 已核验真实 URL（如 4 个 AI 平台） |

组件会对 `sample_unverified` 的条目渲染「示例待核验」标识，防止误发布。上线时须逐表核验并把状态改为已确认。

---

## 6. 上线前红线（Go / No-Go）

上线前必须全部满足，任一未清禁止上线：

1. **不得**将 AI 概念人物 / 机构 / 连线 / 数字作为真实信息发布（逐页红线核验）。
2. **不得**将 `4.3M+` 表述为注册用户 / 会员数——统一为「青年网络触达量（network reach，非注册用户）」；`36` 国为合作网络覆盖，非 36 个正式法律分支。
3. **不得**使用未授权的真实机构 logo 或肖像；概念图需换为授权真实素材。
4. 联系表单：设置 `src/config/site.ts` 的 `contactEmail` 为核验后的真实邮箱并接入第三方表单服务（如 Formspree/Getform 免费档）或 Serverless 转发；**接入并测试投递前，页面保持草稿标注，不假提交**。
5. 中文页 `/zh/` 文案经负责人审核前，保持 sitemap 过滤（`astro.config.mjs` 中的 sitemap filter），审核通过后移除该 filter。
6. 每页 title / description / OG / canonical 齐备；`sitemap-index.xml` / `robots.txt` 可访问（`reference-gallery` 与概念截图不对外发布）。
7. 375px 无横向滚动；`npm run check` 与 `npm run build` 均通过；负责人书面确认内容清单与设计还原。
8. 不得清空或破坏现有 `www.singaporeyouth.com` 站点与后台数据——先审计现有栈与数据迁移方案再切换 DNS。

---

## 7. 常见问题

- **构建报 `ERR_DLOPEN_FAILED`（rollup Team ID）**：本机代码签名限制，CI/其他机器通常无；可临时以 WASM 版 rollup 验证构建，生产部署不受影响。
- **`SITE_URL` 与 canonical 不符**：部署前确认 `astro.config.mjs` 的 `site` 为最终域名，或用环境变量覆盖。
- **中文页不出现在 sitemap**：刻意为之（审核草稿），审核后移除 `sitemap({ filter })` 中的 `/zh/` 过滤。
- **表单显示「草稿」**：`contactEmail` 为 `null` 时的预期行为；填入真实邮箱并接入投递后更新相关文案。
*（内容由AI生成，仅供参考）*
