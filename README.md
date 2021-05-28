# commitlint-wizardoc
commitlint-wizardoc is a configuration package for [commitlint](https://github.com/conventional-changelog/commitlint) that contain some rules and plugins to check that your commit message conform to the `Wizardoc` convention.

## Usage
If you have never used commitlint before, you can visit [commitlint document](https://commitlint.js.org/) for more detail.

### Install
You can install `commitlint-wizardoc` using NPM and YARN as well.

```shell
# NPM
npm i commitlint-wizardoc -D

# YARN
yarn add commitlint-wizardoc -D
```

### Configuration
Create a [commitlint](https://github.com/conventional-changelog/commitlint) config in the root path of your project, and you can extends the `wizardoc` config to do all configuration work.

For instance, create `.commitlintrc.js` that looks like:

```js
module.exports = {
  // This line config will read the NPM package named "commitlint-config-wizardoc", so please make sure you have installed it before config this line.
  extends: 'wizardoc'
}
```

Now, that's all you need to do.

## Convention
The commit message should consists of four parts:
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

- `Break change symbol`: it can indicate that the commit contains break change
- `Type`: commit type that can only be one of the following types
  - Feat
  - Init
  - Remove
  - Delete
  - Update
  - Refactor
  - Move
  - New
  - Add
  - Patch
  - Fix
  - Test
  - Stub
  - Chore
- `Scope`: scope of modification
- `Subject`: description of the commit 

## Override configs
You can also override `Wizardoc` config to create your own configuration as well.

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
