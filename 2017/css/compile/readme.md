# compile 原因: 不影響舊版網頁內頁

# compile 檔案 2 支
.\2017\css\navbar-versoin-old-compile.css
.\2017\css\bootstrap4.6.0-costom-compile.css

# compile 來源
- .\2017\css\bootstrap4.6.0-costom-compile.scss
- navbar-versoin-old-compile.scss

# bootstrap4.6.0-costom-compile.css 備註:
- 僅修改，從 72行，加入 .nav-old-wrapper
- 因遇到未預期效果，故未從 bootstrap 原 sass 修改

# navbar-versoin-old-compile.css 備註:
- 需蓋過 bootstrap4.6.0-costom-compile.css，故也外加一層 class