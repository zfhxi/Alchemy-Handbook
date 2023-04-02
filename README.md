# Alchemy-Handbook


Template from [LeoHsiao1/Notes](https://github.com/LeoHsiao1/Notes)

## 本地调试

- 调试时，只需启动开发环境的服务器：
  ```sh
  yarn install
  yarn dev
  ```
- [可选]环境变量设置：
    - `VITE_VALINE_APP_ID`：Valine评论系统的appId；
    - `VITE_VALINE_APP_KEY`：Valine评论系统的appKey；这两个变量位于[Environment variables](https://github.com/zfhxi/Alchemy-Handbook/settings/environments/952272111/edit)。

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

## TODO List

- [ ] 修改`set_sidebar.py`使其跳过markdown文件的frontmatter部分的解析。

