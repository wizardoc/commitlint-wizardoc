# commitlint-wizardoc

[English](/README.md) | 中文文档

commitlint-wizardoc 是包含某些规则和插件[commitlint](https://github.com/conventional-changelog/commitlint) 的配置包，他可以检查你提交的`commit-message`是否符合 `Wizardoc` 约定。

## 用法

如果你之前没有使用过 commitlint，你可以前往[commitlint document](https://commitlint.js.org/)来查看更多详情。

### 安装

你可以使用`npm`和`yarn`来安装`commitlint-wizardoc`。

```shell
# NPM
npm i commitlint-config-wizardoc -D

# YARN
yarn add commitlint-config-wizardoc -D
```

### 配置

在你项目的根目录下创建一个[commitlint](https://github.com/conventional-changelog/commitlint)的配置文件，你能通过`extends` `wizardoc`的`config`文件来完成配置。

例如，将以下代码加入到`.commitlintrc.js`文件。

```js
module.exports = {
  // This line config will read the NPM package named "commitlint-config-wizardoc", so please make sure you have installed it before config this line.
  extends: "wizardoc",
};
```

只需要做这些，你就可以使用`commitlint-wizardow`的`commit-message`的校验了。

## 规则

git 的`commit-message`由以下四部分组成：

```
![Feat::scope] some sentence
^  ^      ^          ^
|  |      |          |
|  |      |          |
|  |      |          |- Subject(required)
|  |      |
|  |      |- Scope(optional)
|  |
|  |- Type(required)
|
|- Break change symbol(optional)
```

- `Break change symbol`：在提交破坏性更改的时候，需要使用时候用`Break change symbol`。
- `Type`：`commit-message`的`Type`必须是以下类型之一。

  | 规范名   | 描述                             |
  | -------- | -------------------------------- |
  | Feat     | 新增新功能                       |
  | Init     | 新建项目时，对项目的初始化       |
  | Remove   | 代码的改动（删除），粒度较小     |
  | Delete   | 文件的改动（删除），粒度较大     |
  | Update   | 代码块的修改                     |
  | Refactor | 代码重构                         |
  | Move     | 移动文件位置                     |
  | Perf     | 优化相关，比如提升性能、体验     |
  | Doc      | 文档相关的修改                   |
  | Add      | 规模较小的新增                   |
  | Patch    | 增加逻辑块为了修复某一个逻辑错误 |
  | Fix      | 修复 bug                         |
  | Test     | 覆盖测试用例                     |
  | Stub     | 桩代码用于临时测试               |
  | Chore    | 小修改，修复，一些琐碎的小事情   |

- `Scope`: 修改的模块。
- `Subject`: 提交的具体描述信息。

## 覆盖配置

你可以覆盖 `Wizardoc` 的配置，来创建自己的配置

```js
module.exports = {
  extends: 'wizardoc',
  rules: [
    // Set the $ as the third parameter if you wanna change break symbol to $
    "break-change-prefix": [2, "always", '$'],
  ]
}
```

## LICENSE

MIT.
