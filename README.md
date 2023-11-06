# Alchemy-Handbook


Template from [LeoHsiao1/Notes](https://github.com/LeoHsiao1/Notes)

## 若要修改

1. 请保证自己的分支与main分支一致，可以用如下命令强行将main分支内容覆盖到自己分支上：
```bash
git checkout your_branch
git reset --hard origin/main
```

2. 然后进行修改内容，修改完成后，提交到自己的分支上，然后向主分支发起pull request。
![13_49_16-1699278555116.png](https://img.idzc.top/picgoimg/2023/11/06/13_49_16-1699278555116.png)
    > 如上图，会先看到自己分支比主分支更加新，点击`Compare & pull request`，然后填写PR信息，点击`Create pull request`即可。

    ![13_51_47-1699278706447.png](https://img.idzc.top/picgoimg/2023/11/06/13_51_47-1699278706447.png)

3. [@zfhxi](https://github.com/zfhxi)收到PR后，会进行review，如果通过，会合并到主分支上。

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

- [x] 修改`set_sidebar.py`使其跳过markdown文件的frontmatter部分的解析。
