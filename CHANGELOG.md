

## 2.1.1 / 2015-07-14
- Release v2.1.1 / npm@v2.1.1
- update .editorconfig
- add tests for buffer type
- add ref to `kind-of` and `kind-of-types` libs
- switch to use `kind-of-types`
- update readme

## 2.1.0 / 2015-06-30
- Release v2.1.0 / npm@v2.1.0
- update related
- remove most generator function aliases (they are ugly)
- move tests to `test/`, thanks @codeclimate for complexity report
- fix date in changelog
- pull out some logic to `kind-of-extra` and switch to use it

## 2.0.0 / 2015-06-29
- Release v2.0.0 / npm@v2.0.0
- add new tests that use `plugin-error`
- add related
- update readme
- update keywords
- add link for `few aliases` in readme
- fix deps
- update readme
- add tests, update travis
- refactor
  + bump `kind-of@v2`
  + drop support for `arguments` and `isArguments`, use `is-arguments` instead
  + add support for multiple check types, e.g. `is(val, [type, type, type])`
  + add support for promises, generators and other es6 features like Set, WeakMap and etc.
  + better api - four variants, e.g. 
    * `is(val, type)` - where type can be array of types
    * `is(val).number()` - where will return true if `val` is number
    * `is().number(val)`
    * `is.number(val)`

## 1.0.0 / 2015-03-26
- Release v1.0.0 / npm@v1.0.0
- lint
- add keywords
- docs, add `isError`

## 0.0.0 / 2015-03-25
- first commits / npm@v0.0.0