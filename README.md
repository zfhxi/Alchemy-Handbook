# Alchemy-Handbook


Template from [LeoHsiao1/Notes](https://github.com/LeoHsiao1/Notes)

## 部署

- 调试时，只需启动开发环境的服务器：
  ```sh
  yarn install
  yarn dev
  ```

- 正式部署的步骤：
  1. 先构建网站：
      ```sh
      yarn
      yarn vuepress build docs
      ```
      构建结果会保存到 `docs/.vuepress/dist/` 目录下，用 Nginx 代理即可。

## 配置

### 目录结构

- 笔记保存为 .md 文件，位于 docs 目录的文件夹或者index.md。以书籍为单位划分多个目录，以章节为单位划分多个子目录。
- .vuepress是vuepress模版文件。
- 需要在 `docs/${BOOK}/index.md`、`docs/.vuepress/config.js` 文件中配置目录结构。
- 执行以下命令，会根据 `docs/index.md`、`docs/${BOOK}/index.md` 文件中的目录，修改 `docs/.vuepress/config.js` 文件中的 nav、sidebar 配置。
  ```sh
  python3 etc/set_sidebar.py
  ```
- 书籍目录显示的名称用 《 》 包住。
- 以 ♢ 开头的章节名表示 Python 模块。


## 新建笔记
- 先占个坑