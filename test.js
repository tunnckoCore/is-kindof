/**
 * is-kindof <https://github.com/tunnckoCore/is-kindof>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var isKindof = require('./index');

describe('is-kindof:', function() {
  it('should work as `kind-of` sugar with strict comparison', function(done) {
    assert.strictEqual(isKindof(arguments, 'arguments'), true);
    assert.strictEqual(isKindof(/regex/, 'regexp'), true);
    assert.strictEqual(isKindof({}, 'object'), true);
    assert.strictEqual(isKindof(undefined, 'undefined'), true);
    assert.strictEqual(isKindof(null, 'null'), true);
    assert.strictEqual(isKindof(true, 'boolean'), true);
    assert.strictEqual(isKindof(123, 'number'), true);
    assert.strictEqual(isKindof('', 'string'), true);
    assert.strictEqual(isKindof([], 'array'), true);
    assert.strictEqual(isKindof(function() {}, 'function'), true);
    assert.strictEqual(isKindof(new Date(), 'date'), true);
    assert.strictEqual(isKindof(new Set(), 'set'), true);
    assert.strictEqual(isKindof(new WeakSet(), 'weakset'), true);
    assert.strictEqual(isKindof(new Map(), 'map'), true);
    assert.strictEqual(isKindof(new WeakMap(), 'weakmap'), true);
    assert.strictEqual(isKindof(new Error(), 'error'), true);
    assert.strictEqual(isKindof(Symbol('foo'), 'symbol'), true);
    done();
  });
  it('should work as `kind-of` sugar (loose)', function(done) {
    assert.strictEqual(isKindof(arguments, 'arguments', true), true);
    assert.strictEqual(isKindof(/regex/, 'regexp', true), true);
    assert.strictEqual(isKindof({}, 'object', true), true);
    assert.strictEqual(isKindof(undefined, 'undefined', true), true);
    assert.strictEqual(isKindof(null, 'null', true), true);
    assert.strictEqual(isKindof(true, 'boolean', true), true);
    assert.strictEqual(isKindof(123, 'number', true), true);
    assert.strictEqual(isKindof('', 'string', true), true);
    assert.strictEqual(isKindof([], 'array', true), true);
    assert.strictEqual(isKindof(function() {}, 'function', true), true);
    assert.strictEqual(isKindof(new Date(), 'date', true), true);
    assert.strictEqual(isKindof(new Set(), 'set', true), true);
    assert.strictEqual(isKindof(new WeakSet(), 'weakset', true), true);
    assert.strictEqual(isKindof(new Map(), 'map', true), true);
    assert.strictEqual(isKindof(new WeakMap(), 'weakmap', true), true);
    assert.strictEqual(isKindof(new Error(), 'error', true), true);
    assert.strictEqual(isKindof(Symbol('foo'), 'symbol', true), true);
    done();
  });
  it('should have `isArguments` method', function(done) {
    assert.strictEqual(isKindof.isArguments(arguments), true);
    done();
  });
  it('should have `regexp` and `isRegexp` methods', function(done) {
    assert.strictEqual(isKindof.regexp(/regex/), true);
    assert.strictEqual(isKindof.isRegexp(/regex/), true);
    done();
  });
  it('should have `object` and `isObject` methods', function(done) {
    assert.strictEqual(isKindof.object({}), true);
    assert.strictEqual(isKindof.isObject({}), true);
    done();
  });
  it('should have `undefined` and `isUndefined` methods', function(done) {
    assert.strictEqual(isKindof.undefined(undefined), true);
    assert.strictEqual(isKindof.isUndefined(undefined), true);
    done();
  });
  it('should have `null` and `isNull` methods', function(done) {
    assert.strictEqual(isKindof.null(null), true);
    assert.strictEqual(isKindof.isNull(null), true);
    done();
  });
  it('should have `boolean` and `isBoolean` methods', function(done) {
    assert.strictEqual(isKindof.boolean(true), true);
    assert.strictEqual(isKindof.isBoolean(true), true);
    done();
  });
  it('should have `number` and `isNumber` methods', function(done) {
    assert.strictEqual(isKindof.number(123), true);
    assert.strictEqual(isKindof.isNumber(123), true);
    done();
  });
  it('should have `string` and `isString` methods', function(done) {
    assert.strictEqual(isKindof.string(''), true);
    assert.strictEqual(isKindof.isString(''), true);
    done();
  });
  it('should have `array` and `isRegexp` methods', function(done) {
    assert.strictEqual(isKindof.array([]), true);
    assert.strictEqual(isKindof.isArray([]), true);
    done();
  });
  it('should have `function` and `isFunction` methods', function(done) {
    assert.strictEqual(isKindof.function(function() {}), true);
    assert.strictEqual(isKindof.isFunction(function() {}), true);
    done();
  });
  it('should have `date` and `isDate` methods', function(done) {
    assert.strictEqual(isKindof.date(new Date()), true);
    assert.strictEqual(isKindof.isDate(new Date()), true);
    done();
  });
  it('should have `set` and `isSet` methods', function(done) {
    assert.strictEqual(isKindof.set(new Set()), true);
    assert.strictEqual(isKindof.isSet(new Set()), true);
    done();
  });
  it('should have `weakset` and `isWeakset` methods', function(done) {
    assert.strictEqual(isKindof.weakset(new WeakSet()), true);
    assert.strictEqual(isKindof.isWeakset(new WeakSet()), true);
    done();
  });
  it('should have `map` and `isMap` methods', function(done) {
    assert.strictEqual(isKindof.map(new Map()), true);
    assert.strictEqual(isKindof.isMap(new Map()), true);
    done();
  });
  it('should have `weakmap` and `isWeakmap` methods', function(done) {
    assert.strictEqual(isKindof.weakmap(new WeakMap()), true);
    assert.strictEqual(isKindof.isWeakmap(new WeakMap()), true);
    done();
  });
  it('should have `error` and `isError` methods', function(done) {
    assert.strictEqual(isKindof.error(new Error()), true);
    assert.strictEqual(isKindof.isError(new Error()), true);
    done();
  });
  it('should have `symbol` and `isSymbol` methods', function(done) {
    assert.strictEqual(isKindof.symbol(Symbol('foo')), true);
    assert.strictEqual(isKindof.isSymbol(Symbol('foo')), true);
    done();
  });
});
