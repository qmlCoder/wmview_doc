import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/doc/",
  title: "WmView",
  description: "WmView 文档",
  head: [["link", { rel: "icon", href: "/docs/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/src/index.md" },
    ],

    sidebar: [
      {
        text: "简介",
        items: [
          { text: "什么是 WmView", link: "/src/index.md" },
          { text: "界面介绍", link: "/src/程序界面.md" },
          { text: "历史版本", link: "/src/历史版本.md" },
        ],
      },
      {
        text: "功能区",
        items: [
          { text: "程序设置", link: "/src/程序设置.md" },
          { text: "场景管理", link: "/src/场景管理.md" },
          { text: "分子建模", link: "/src/分子建模.md" },
          { text: "运行脚本", link: "/src/运行脚本.md" },
          { text: "插件市场", link: "/src/插件市场.md" },
          { text: "聊天助手", link: "/src/聊天助手.md" },
          {
            text: "波函数分析",
            items: [
              { text: "介绍", link: "/src/波函数分析/介绍.md" },
              {
                text: "原子性质",
                link: "/src/波函数分析/原子性质.md",
              },
              {
                text: "键の性质",
                link: "/src/波函数分析/键の性质.md",
              },
              {
                text: "空间函数",
                link: "/src/波函数分析/空间函数.md",
              },
              {
                text: "表现形式",
                link: "/src/波函数分析/表现形式.md",
              },
            ],
          },
        ],
      },
      { text: "常见错误", link: "/src/常见错误.md" },
      { text: "引用文献", link: "/src/引用文献.md" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  markdown: {
    math: true,
  },
});
