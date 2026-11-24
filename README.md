# CAPER academic project page

Authors (in order): Hanzhao Xi, Zesheng Chen, Suxuan Liu, Zhonghao Li, Shanghan Zhou, Qiufeng Wang, Yaran Chen.
Affiliation: Xi’an Jiaotong-Liverpool University.
Zesheng Chen, Suxuan Liu, Zhonghao Li and Shanghan Zhou are equally contributing co-second authors. Yaran Chen is the corresponding author. Superscripts on this project page denote contribution designations, not institutional affiliations: 1 = first author; 2 = equally contributing co-second authors; 3 = third author; * = corresponding author.

## GitHub Pages 上传步骤

1. 新建公开仓库 CAPER，勾选 Add README。
2. 解压本压缩包，将里面的 index.html、style.css、app.js、assets 文件夹和 README.md 拖入仓库的 Add file → Upload files 页面。不要上传 ZIP 本身，也不要多套一层文件夹。
3. 如能看到 .nojekyll，一并上传；看不到也不影响本静态页面运行。
4. 提交到 main 分支。
5. Settings → Pages → Source: Deploy from a branch → Branch: main → Folder: /(root) → Save。
6. 等待 Actions 中 Pages 部署成功，在 Settings → Pages 点击 Visit site。
7. 最终网址通常为 https://YOUR-USERNAME.github.io/CAPER/，以 GitHub 实际显示的地址为准。

视频、图片、PDF 均已随包附带，全部小于网页上传的单文件限制。资源使用相对路径，支持 /CAPER/ 子路径。
下载的论文 PDF 是原文件，尚未补作者及修订旧统计。完成最终论文后，用同名 assets/caper-paper.pdf 替换。

## arXiv 链接

确认最终地址后，在论文摘要末尾加入：
Project page and video: \url{YOUR_FINAL_PROJECT_URL}.
导言区需要 hyperref 宏包。

arXiv 表单的 Abstract / Comments 中使用普通网址，不要复制 \url 命令。
