import "./deps.js";

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/constants.js
var PATH_SEPARATOR = ".";
var TARGET = Symbol("target");
var UNSUBSCRIBE = Symbol("unsubscribe");

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/is-builtin.js
function isBuiltinWithMutableMethods(value) {
  return value instanceof Date || value instanceof Set || value instanceof Map || value instanceof WeakSet || value instanceof WeakMap || ArrayBuffer.isView(value);
}
function isBuiltinWithoutMutableMethods(value) {
  return (typeof value === "object" ? value === null : typeof value !== "function") || value instanceof RegExp;
}

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/is-array.js
var is_array_default = Array.isArray;

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/is-symbol.js
function isSymbol(value) {
  return typeof value === "symbol";
}

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/path.js
var path = {
  after: (path2, subPath) => {
    if (is_array_default(path2)) {
      return path2.slice(subPath.length);
    }
    if (subPath === "") {
      return path2;
    }
    return path2.slice(subPath.length + 1);
  },
  concat: (path2, key) => {
    if (is_array_default(path2)) {
      path2 = [...path2];
      if (key) {
        path2.push(key);
      }
      return path2;
    }
    if (key && key.toString !== void 0) {
      if (path2 !== "") {
        path2 += PATH_SEPARATOR;
      }
      if (isSymbol(key)) {
        return path2 + key.toString();
      }
      return path2 + key;
    }
    return path2;
  },
  initial: (path2) => {
    if (is_array_default(path2)) {
      return path2.slice(0, -1);
    }
    if (path2 === "") {
      return path2;
    }
    const index = path2.lastIndexOf(PATH_SEPARATOR);
    if (index === -1) {
      return "";
    }
    return path2.slice(0, index);
  },
  last: (path2) => {
    if (is_array_default(path2)) {
      return path2[path2.length - 1] || "";
    }
    if (path2 === "") {
      return path2;
    }
    const index = path2.lastIndexOf(PATH_SEPARATOR);
    if (index === -1) {
      return path2;
    }
    return path2.slice(index + 1);
  },
  walk: (path2, callback) => {
    if (is_array_default(path2)) {
      for (const key of path2) {
        callback(key);
      }
    } else if (path2 !== "") {
      let position = 0;
      let index = path2.indexOf(PATH_SEPARATOR);
      if (index === -1) {
        callback(path2);
      } else {
        while (position < path2.length) {
          if (index === -1) {
            index = path2.length;
          }
          callback(path2.slice(position, index));
          position = index + 1;
          index = path2.indexOf(PATH_SEPARATOR, position);
        }
      }
    }
  },
  get(object, path2) {
    this.walk(path2, (key) => {
      if (object) {
        object = object[key];
      }
    });
    return object;
  }
};
var path_default = path;

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/is-iterator.js
function isIterator(value) {
  return typeof value === "object" && typeof value.next === "function";
}

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/wrap-iterator.js
function wrapIterator(iterator, target, thisArg, applyPath, prepareValue) {
  const originalNext = iterator.next;
  if (target.name === "entries") {
    iterator.next = function() {
      const result = originalNext.call(this);
      if (result.done === false) {
        result.value[0] = prepareValue(
          result.value[0],
          target,
          result.value[0],
          applyPath
        );
        result.value[1] = prepareValue(
          result.value[1],
          target,
          result.value[0],
          applyPath
        );
      }
      return result;
    };
  } else if (target.name === "values") {
    const keyIterator = thisArg[TARGET].keys();
    iterator.next = function() {
      const result = originalNext.call(this);
      if (result.done === false) {
        result.value = prepareValue(
          result.value,
          target,
          keyIterator.next().value,
          applyPath
        );
      }
      return result;
    };
  } else {
    iterator.next = function() {
      const result = originalNext.call(this);
      if (result.done === false) {
        result.value = prepareValue(
          result.value,
          target,
          result.value,
          applyPath
        );
      }
      return result;
    };
  }
  return iterator;
}

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/ignore-property.js
function ignoreProperty(cache, options, property) {
  return cache.isUnsubscribed || options.ignoreSymbols && isSymbol(property) || options.ignoreUnderscores && property.charAt(0) === "_" || "ignoreKeys" in options && options.ignoreKeys.includes(property);
}

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/cache.js
var Cache = class {
  constructor(equals) {
    this._equals = equals;
    this._proxyCache = /* @__PURE__ */ new WeakMap();
    this._pathCache = /* @__PURE__ */ new WeakMap();
    this.isUnsubscribed = false;
  }
  _getDescriptorCache() {
    if (this._descriptorCache === void 0) {
      this._descriptorCache = /* @__PURE__ */ new WeakMap();
    }
    return this._descriptorCache;
  }
  _getProperties(target) {
    const descriptorCache = this._getDescriptorCache();
    let properties = descriptorCache.get(target);
    if (properties === void 0) {
      properties = {};
      descriptorCache.set(target, properties);
    }
    return properties;
  }
  _getOwnPropertyDescriptor(target, property) {
    if (this.isUnsubscribed) {
      return Reflect.getOwnPropertyDescriptor(target, property);
    }
    const properties = this._getProperties(target);
    let descriptor = properties[property];
    if (descriptor === void 0) {
      descriptor = Reflect.getOwnPropertyDescriptor(target, property);
      properties[property] = descriptor;
    }
    return descriptor;
  }
  getProxy(target, path2, handler, proxyTarget) {
    if (this.isUnsubscribed) {
      return target;
    }
    const reflectTarget = target[proxyTarget];
    const source = reflectTarget || target;
    this._pathCache.set(source, path2);
    let proxy = this._proxyCache.get(source);
    if (proxy === void 0) {
      proxy = reflectTarget === void 0 ? new Proxy(target, handler) : target;
      this._proxyCache.set(source, proxy);
    }
    return proxy;
  }
  getPath(target) {
    return this.isUnsubscribed ? void 0 : this._pathCache.get(target);
  }
  isDetached(target, object) {
    return !Object.is(target, path_default.get(object, this.getPath(target)));
  }
  defineProperty(target, property, descriptor) {
    if (!Reflect.defineProperty(target, property, descriptor)) {
      return false;
    }
    if (!this.isUnsubscribed) {
      this._getProperties(target)[property] = descriptor;
    }
    return true;
  }
  setProperty(target, property, value, receiver, previous) {
    if (!this._equals(previous, value) || !(property in target)) {
      const descriptor = this._getOwnPropertyDescriptor(target, property);
      if (descriptor !== void 0 && "set" in descriptor) {
        return Reflect.set(target, property, value, receiver);
      }
      return Reflect.set(target, property, value);
    }
    return true;
  }
  deleteProperty(target, property, previous) {
    if (Reflect.deleteProperty(target, property)) {
      if (!this.isUnsubscribed) {
        const properties = this._getDescriptorCache().get(target);
        if (properties) {
          delete properties[property];
          this._pathCache.delete(previous);
        }
      }
      return true;
    }
    return false;
  }
  isSameDescriptor(a, target, property) {
    const b = this._getOwnPropertyDescriptor(target, property);
    return a !== void 0 && b !== void 0 && Object.is(a.value, b.value) && (a.writable || false) === (b.writable || false) && (a.enumerable || false) === (b.enumerable || false) && (a.configurable || false) === (b.configurable || false) && a.get === b.get && a.set === b.set;
  }
  isGetInvariant(target, property) {
    const descriptor = this._getOwnPropertyDescriptor(target, property);
    return descriptor !== void 0 && descriptor.configurable !== true && descriptor.writable !== true;
  }
  unsubscribe() {
    this._descriptorCache = null;
    this._pathCache = null;
    this._proxyCache = null;
    this.isUnsubscribed = true;
  }
};

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/is-object.js
function isObject(value) {
  return toString.call(value) === "[object Object]";
}

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/smart-clone/diff/is-diff-certain.js
function isDiffCertain() {
  return true;
}

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/smart-clone/diff/is-diff-arrays.js
function isDiffArrays(clone, value) {
  return clone.length !== value.length || clone.some((item, index) => value[index] !== item);
}

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/smart-clone/methods/object.js
var IMMUTABLE_OBJECT_METHODS = /* @__PURE__ */ new Set([
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
]);

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/smart-clone/methods/array.js
var IMMUTABLE_ARRAY_METHODS = /* @__PURE__ */ new Set([
  "concat",
  "includes",
  "indexOf",
  "join",
  "keys",
  "lastIndexOf"
]);
var MUTABLE_ARRAY_METHODS = {
  push: isDiffCertain,
  pop: isDiffCertain,
  shift: isDiffCertain,
  unshift: isDiffCertain,
  copyWithin: isDiffArrays,
  reverse: isDiffArrays,
  sort: isDiffArrays,
  splice: isDiffArrays,
  flat: isDiffArrays,
  fill: isDiffArrays
};
var HANDLED_ARRAY_METHODS = /* @__PURE__ */ new Set([
  ...IMMUTABLE_OBJECT_METHODS,
  ...IMMUTABLE_ARRAY_METHODS,
  ...Object.keys(MUTABLE_ARRAY_METHODS)
]);

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/smart-clone/diff/is-diff-sets.js
function isDiffSets(clone, value) {
  if (clone.size !== value.size) {
    return true;
  }
  for (const element of clone) {
    if (!value.has(element)) {
      return true;
    }
  }
  return false;
}

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/smart-clone/methods/set.js
var COLLECTION_ITERATOR_METHODS = [
  "keys",
  "values",
  "entries"
];
var IMMUTABLE_SET_METHODS = /* @__PURE__ */ new Set([
  "has",
  "toString"
]);
var MUTABLE_SET_METHODS = {
  add: isDiffSets,
  clear: isDiffSets,
  delete: isDiffSets,
  forEach: isDiffSets
};
var HANDLED_SET_METHODS = /* @__PURE__ */ new Set([
  ...IMMUTABLE_SET_METHODS,
  ...Object.keys(MUTABLE_SET_METHODS),
  ...COLLECTION_ITERATOR_METHODS
]);

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/smart-clone/diff/is-diff-maps.js
function isDiffMaps(clone, value) {
  if (clone.size !== value.size) {
    return true;
  }
  let bValue;
  for (const [key, aValue] of clone) {
    bValue = value.get(key);
    if (bValue !== aValue || bValue === void 0 && !value.has(key)) {
      return true;
    }
  }
  return false;
}

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/smart-clone/methods/map.js
var IMMUTABLE_MAP_METHODS = /* @__PURE__ */ new Set([...IMMUTABLE_SET_METHODS, "get"]);
var MUTABLE_MAP_METHODS = {
  set: isDiffMaps,
  clear: isDiffMaps,
  delete: isDiffMaps,
  forEach: isDiffMaps
};
var HANDLED_MAP_METHODS = /* @__PURE__ */ new Set([
  ...IMMUTABLE_MAP_METHODS,
  ...Object.keys(MUTABLE_MAP_METHODS),
  ...COLLECTION_ITERATOR_METHODS
]);

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/smart-clone/clone/clone-object.js
var CloneObject = class {
  constructor(value, path2, argumentsList, hasOnValidate) {
    this._path = path2;
    this._isChanged = false;
    this._clonedCache = /* @__PURE__ */ new Set();
    this._hasOnValidate = hasOnValidate;
    this._changes = hasOnValidate ? [] : null;
    this.clone = path2 === void 0 ? value : this._shallowClone(value);
  }
  static isHandledMethod(name) {
    return IMMUTABLE_OBJECT_METHODS.has(name);
  }
  _shallowClone(value) {
    let clone = value;
    if (isObject(value)) {
      clone = { ...value };
    } else if (is_array_default(value) || ArrayBuffer.isView(value)) {
      clone = [...value];
    } else if (value instanceof Date) {
      clone = new Date(value);
    } else if (value instanceof Set) {
      clone = new Set([...value].map((item) => this._shallowClone(item)));
    } else if (value instanceof Map) {
      clone = /* @__PURE__ */ new Map();
      for (const [key, item] of value.entries()) {
        clone.set(key, this._shallowClone(item));
      }
    }
    this._clonedCache.add(clone);
    return clone;
  }
  preferredThisArg(isHandledMethod, name, thisArg, thisProxyTarget) {
    if (isHandledMethod) {
      if (is_array_default(thisProxyTarget)) {
        this._onIsChanged = MUTABLE_ARRAY_METHODS[name];
      } else if (thisProxyTarget instanceof Set) {
        this._onIsChanged = MUTABLE_SET_METHODS[name];
      } else if (thisProxyTarget instanceof Map) {
        this._onIsChanged = MUTABLE_MAP_METHODS[name];
      }
      return thisProxyTarget;
    }
    return thisArg;
  }
  update(fullPath, property, value) {
    const changePath = path_default.after(fullPath, this._path);
    if (property !== "length") {
      let object = this.clone;
      path_default.walk(changePath, (key) => {
        if (object && object[key]) {
          if (!this._clonedCache.has(object[key])) {
            object[key] = this._shallowClone(object[key]);
          }
          object = object[key];
        }
      });
      if (this._hasOnValidate) {
        this._changes.push({
          path: changePath,
          property,
          previous: value
        });
      }
      if (object && object[property]) {
        object[property] = value;
      }
    }
    this._isChanged = true;
  }
  undo(object) {
    let change;
    for (let index = this._changes.length - 1; index !== -1; index--) {
      change = this._changes[index];
      path_default.get(object, change.path)[change.property] = change.previous;
    }
  }
  isChanged(value) {
    return this._onIsChanged === void 0 ? this._isChanged : this._onIsChanged(this.clone, value);
  }
};

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/smart-clone/clone/clone-array.js
var CloneArray = class extends CloneObject {
  static isHandledMethod(name) {
    return HANDLED_ARRAY_METHODS.has(name);
  }
};

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/smart-clone/clone/clone-date.js
var CloneDate = class extends CloneObject {
  undo(object) {
    object.setTime(this.clone.getTime());
  }
  isChanged(value, equals) {
    return !equals(this.clone.valueOf(), value.valueOf());
  }
};

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/smart-clone/clone/clone-set.js
var CloneSet = class extends CloneObject {
  static isHandledMethod(name) {
    return HANDLED_SET_METHODS.has(name);
  }
  undo(object) {
    for (const value of this.clone) {
      object.add(value);
    }
    for (const value of object) {
      if (!this.clone.has(value)) {
        object.delete(value);
      }
    }
  }
};

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/smart-clone/clone/clone-map.js
var CloneMap = class extends CloneObject {
  static isHandledMethod(name) {
    return HANDLED_MAP_METHODS.has(name);
  }
  undo(object) {
    for (const [key, value] of this.clone.entries()) {
      object.set(key, value);
    }
    for (const key of object.keys()) {
      if (!this.clone.has(key)) {
        object.delete(key);
      }
    }
  }
};

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/smart-clone/clone/clone-weakset.js
var CloneWeakSet = class extends CloneObject {
  constructor(value, path2, argumentsList, hasOnValidate) {
    super(void 0, path2, argumentsList, hasOnValidate);
    this._arg1 = argumentsList[0];
    this._weakValue = value.has(this._arg1);
  }
  isChanged(value) {
    return this._weakValue !== value.has(this._arg1);
  }
  undo(object) {
    if (this._weakValue && !object.has(this._arg1)) {
      object.add(this._arg1);
    } else {
      object.delete(this._arg1);
    }
  }
};

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/smart-clone/clone/clone-weakmap.js
var CloneWeakMap = class extends CloneObject {
  constructor(value, path2, argumentsList, hasOnValidate) {
    super(void 0, path2, argumentsList, hasOnValidate);
    this._weakKey = argumentsList[0];
    this._weakHas = value.has(this._weakKey);
    this._weakValue = value.get(this._weakKey);
  }
  isChanged(value) {
    return this._weakValue !== value.get(this._weakKey);
  }
  undo(object) {
    const weakHas = object.has(this._weakKey);
    if (this._weakHas && !weakHas) {
      object.set(this._weakKey, this._weakValue);
    } else if (!this._weakHas && weakHas) {
      object.delete(this._weakKey);
    } else if (this._weakValue !== object.get(this._weakKey)) {
      object.set(this._weakKey, this._weakValue);
    }
  }
};

// ../../local/lib/hexlet-javascript/node_modules/on-change/lib/smart-clone/smart-clone.js
var SmartClone = class {
  constructor(hasOnValidate) {
    this._stack = [];
    this._hasOnValidate = hasOnValidate;
  }
  static isHandledType(value) {
    return isObject(value) || is_array_default(value) || isBuiltinWithMutableMethods(value);
  }
  static isHandledMethod(target, name) {
    if (isObject(target)) {
      return CloneObject.isHandledMethod(name);
    }
    if (is_array_default(target)) {
      return CloneArray.isHandledMethod(name);
    }
    if (target instanceof Set) {
      return CloneSet.isHandledMethod(name);
    }
    if (target instanceof Map) {
      return CloneMap.isHandledMethod(name);
    }
    return isBuiltinWithMutableMethods(target);
  }
  get isCloning() {
    return this._stack.length > 0;
  }
  start(value, path2, argumentsList) {
    let CloneClass = CloneObject;
    if (is_array_default(value)) {
      CloneClass = CloneArray;
    } else if (value instanceof Date) {
      CloneClass = CloneDate;
    } else if (value instanceof Set) {
      CloneClass = CloneSet;
    } else if (value instanceof Map) {
      CloneClass = CloneMap;
    } else if (value instanceof WeakSet) {
      CloneClass = CloneWeakSet;
    } else if (value instanceof WeakMap) {
      CloneClass = CloneWeakMap;
    }
    this._stack.push(new CloneClass(value, path2, argumentsList, this._hasOnValidate));
  }
  update(fullPath, property, value) {
    this._stack[this._stack.length - 1].update(fullPath, property, value);
  }
  preferredThisArg(target, thisArg, thisProxyTarget) {
    const { name } = target;
    const isHandledMethod = SmartClone.isHandledMethod(thisProxyTarget, name);
    return this._stack[this._stack.length - 1].preferredThisArg(isHandledMethod, name, thisArg, thisProxyTarget);
  }
  isChanged(isMutable, value, equals) {
    return this._stack[this._stack.length - 1].isChanged(isMutable, value, equals);
  }
  undo(object) {
    if (this._previousClone !== void 0) {
      this._previousClone.undo(object);
    }
  }
  stop() {
    this._previousClone = this._stack.pop();
    return this._previousClone.clone;
  }
};

// ../../local/lib/hexlet-javascript/node_modules/on-change/index.js
var defaultOptions = {
  equals: Object.is,
  isShallow: false,
  pathAsArray: false,
  ignoreSymbols: false,
  ignoreUnderscores: false,
  ignoreDetached: false,
  details: false
};
var onChange = (object, onChange2, options = {}) => {
  options = {
    ...defaultOptions,
    ...options
  };
  const proxyTarget = Symbol("ProxyTarget");
  const { equals, isShallow, ignoreDetached, details } = options;
  const cache = new Cache(equals);
  const hasOnValidate = typeof options.onValidate === "function";
  const smartClone = new SmartClone(hasOnValidate);
  const validate = (target, property, value, previous, applyData) => !hasOnValidate || smartClone.isCloning || options.onValidate(path_default.concat(cache.getPath(target), property), value, previous, applyData) === true;
  const handleChangeOnTarget = (target, property, value, previous) => {
    if (!ignoreProperty(cache, options, property) && !(ignoreDetached && cache.isDetached(target, object))) {
      handleChange(cache.getPath(target), property, value, previous);
    }
  };
  const handleChange = (changePath, property, value, previous, applyData) => {
    if (smartClone.isCloning) {
      smartClone.update(changePath, property, previous);
    } else {
      onChange2(path_default.concat(changePath, property), value, previous, applyData);
    }
  };
  const getProxyTarget = (value) => value ? value[proxyTarget] || value : value;
  const prepareValue = (value, target, property, basePath) => {
    if (isBuiltinWithoutMutableMethods(value) || property === "constructor" || isShallow && !SmartClone.isHandledMethod(target, property) || ignoreProperty(cache, options, property) || cache.isGetInvariant(target, property) || ignoreDetached && cache.isDetached(target, object)) {
      return value;
    }
    if (basePath === void 0) {
      basePath = cache.getPath(target);
    }
    return cache.getProxy(value, path_default.concat(basePath, property), handler, proxyTarget);
  };
  const handler = {
    get(target, property, receiver) {
      if (isSymbol(property)) {
        if (property === proxyTarget || property === TARGET) {
          return target;
        }
        if (property === UNSUBSCRIBE && !cache.isUnsubscribed && cache.getPath(target).length === 0) {
          cache.unsubscribe();
          return target;
        }
      }
      const value = isBuiltinWithMutableMethods(target) ? Reflect.get(target, property) : Reflect.get(target, property, receiver);
      return prepareValue(value, target, property);
    },
    set(target, property, value, receiver) {
      value = getProxyTarget(value);
      const reflectTarget = target[proxyTarget] || target;
      const previous = reflectTarget[property];
      if (equals(previous, value) && property in target) {
        return true;
      }
      const isValid = validate(target, property, value, previous);
      if (isValid && cache.setProperty(reflectTarget, property, value, receiver, previous)) {
        handleChangeOnTarget(target, property, target[property], previous);
        return true;
      }
      return !isValid;
    },
    defineProperty(target, property, descriptor) {
      if (!cache.isSameDescriptor(descriptor, target, property)) {
        const previous = target[property];
        if (validate(target, property, descriptor.value, previous) && cache.defineProperty(target, property, descriptor, previous)) {
          handleChangeOnTarget(target, property, descriptor.value, previous);
        }
      }
      return true;
    },
    deleteProperty(target, property) {
      if (!Reflect.has(target, property)) {
        return true;
      }
      const previous = Reflect.get(target, property);
      const isValid = validate(target, property, void 0, previous);
      if (isValid && cache.deleteProperty(target, property, previous)) {
        handleChangeOnTarget(target, property, void 0, previous);
        return true;
      }
      return !isValid;
    },
    apply(target, thisArg, argumentsList) {
      const thisProxyTarget = thisArg[proxyTarget] || thisArg;
      if (cache.isUnsubscribed) {
        return Reflect.apply(target, thisProxyTarget, argumentsList);
      }
      if ((details === false || details !== true && !details.includes(target.name)) && SmartClone.isHandledType(thisProxyTarget)) {
        let applyPath = path_default.initial(cache.getPath(target));
        const isHandledMethod = SmartClone.isHandledMethod(thisProxyTarget, target.name);
        smartClone.start(thisProxyTarget, applyPath, argumentsList);
        let result = Reflect.apply(
          target,
          smartClone.preferredThisArg(target, thisArg, thisProxyTarget),
          isHandledMethod ? argumentsList.map((argument) => getProxyTarget(argument)) : argumentsList
        );
        const isChanged = smartClone.isChanged(thisProxyTarget, equals);
        const previous = smartClone.stop();
        if (SmartClone.isHandledType(result) && isHandledMethod) {
          if (thisArg instanceof Map && target.name === "get") {
            applyPath = path_default.concat(applyPath, argumentsList[0]);
          }
          result = cache.getProxy(result, applyPath, handler);
        }
        if (isChanged) {
          const applyData = {
            name: target.name,
            args: argumentsList,
            result
          };
          const changePath = smartClone.isCloning ? path_default.initial(applyPath) : applyPath;
          const property = smartClone.isCloning ? path_default.last(applyPath) : "";
          if (validate(path_default.get(object, changePath), property, thisProxyTarget, previous, applyData)) {
            handleChange(changePath, property, thisProxyTarget, previous, applyData);
          } else {
            smartClone.undo(thisProxyTarget);
          }
        }
        if ((thisArg instanceof Map || thisArg instanceof Set) && isIterator(result)) {
          return wrapIterator(result, target, thisArg, applyPath, prepareValue);
        }
        return result;
      }
      return Reflect.apply(target, thisArg, argumentsList);
    }
  };
  const proxy = cache.getProxy(object, options.pathAsArray ? [] : "", handler);
  onChange2 = onChange2.bind(proxy);
  if (hasOnValidate) {
    options.onValidate = options.onValidate.bind(proxy);
  }
  return proxy;
};
onChange.target = (proxy) => proxy && proxy[TARGET] || proxy;
onChange.unsubscribe = (proxy) => proxy[UNSUBSCRIBE] || proxy;
var on_change_default = onChange;

// dep:on-change
var on_change_default2 = on_change_default;
export {
  on_change_default2 as default
};
//# sourceMappingURL=on-change.js.map