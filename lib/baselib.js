var ՐՏ_1, ՐՏ_2, ՐՏ_3, ՐՏ_4, ՐՏ_5;
function ՐՏ_Iterable(iterable) {
    var tmp;
    if (iterable.constructor === [].constructor || iterable.constructor === "".constructor || (tmp = Array.prototype.slice.call(iterable)).length) {
        return tmp || iterable;
    }
    return Object.keys(iterable);
}
function ՐՏ_bind(fn, thisArg) {
    var fn, ret;
    if (fn.orig) {
        fn = fn.orig;
    }
    if (thisArg === false) {
        return fn;
    }
    ret = function() {
        return fn.apply(thisArg, arguments);
    };
    ret.orig = fn;
    return ret;
}
function range(start, stop, step) {
    var stop, start, step, length, idx, range;
    if (arguments.length <= 1) {
        stop = start || 0;
        start = 0;
    }
    step = arguments[2] || 1;
    length = Math.max(Math.ceil((stop - start) / step), 0);
    idx = 0;
    range = new Array(length);
    while (idx < length) {
        range[idx++] = start;
        start += step;
    }
    return range;
}
function ՐՏ_in(val, arr) {
    if (typeof arr.indexOf === "function") {
        return arr.indexOf(val) !== -1;
    }
    return arr.hasOwnProperty(val);
}
function len(obj) {
    var tmp;
    if (obj.constructor === [].constructor || obj.constructor === "".constructor || (tmp = Array.prototype.slice.call(obj)).length) {
        return (tmp || obj).length;
    }
    return Object.keys(obj).length;
}
function dir(item) {
    var arr;
    arr = [];
    for (var i in item) {
        arr.push(i);
    }
    return arr;
}
function ՐՏ_extends(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.__base__ = parent;
    child.prototype.constructor = child;
}
function abs(n) {
    return Math.abs(n);
}
function all(a) {
    var ՐՏitr1, ՐՏidx1;
    var e;
    ՐՏitr1 = ՐՏ_Iterable(a);
    for (ՐՏidx1 = 0; ՐՏidx1 < ՐՏitr1.length; ՐՏidx1++) {
        e = ՐՏitr1[ՐՏidx1];
        if (!e) {
            return false;
        }
    }
    return true;
}
function any(a) {
    var ՐՏitr2, ՐՏidx2;
    var e;
    ՐՏitr2 = ՐՏ_Iterable(a);
    for (ՐՏidx2 = 0; ՐՏidx2 < ՐՏitr2.length; ՐՏidx2++) {
        e = ՐՏitr2[ՐՏidx2];
        if (e) {
            return true;
        }
    }
    return false;
}
function bin(a) {
    return "0b" + (a >>> 0).toString(2);
}
function ՐՏ_rebindAll(thisArg, rebind) {
    var rebind;
    if (rebind === void 0) {
        rebind = true;
    }
    for (var p in thisArg) {
        if (thisArg[p] && thisArg[p].orig) {
            if (rebind) {
                thisArg[p] = ՐՏ_bind(thisArg[p], thisArg);
            } else {
                thisArg[p] = thisArg[p].orig;
            }
        }
    }
}
function cmp(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}
chr = String.fromCharCode;
function enumerate(item) {
    var arr, iter, i;
    arr = [];
    iter = ՐՏ_Iterable(item);
    for (i = 0; i < iter.length; i++) {
        arr[arr.length] = [ i, item[i] ];
    }
    return arr;
}
function ՐՏ_eslice(arr, step, start, end) {
    var arr, isString, step, start, end;
    arr = arr.slice(0);
    if (typeof arr === "string" || arr instanceof String) {
        isString = true;
        arr = arr.split("");
    }
    if (step < 0) {
        step = -step;
        arr.reverse();
        if (typeof start !== "undefined") {
            start = arr.length - start - 1;
        }
        if (typeof end !== "undefined") {
            end = arr.length - end - 1;
        }
    }
    if (typeof start === "undefined") {
        start = 0;
    }
    if (typeof end === "undefined") {
        end = arr.length;
    }
    arr = arr.slice(start, end).filter(function(e, i) {
        return i % step === 0;
    });
    return isString ? arr.join("") : arr;
}
function filter(oper, arr) {
    return arr.filter(oper);
}
function hex(a) {
    return "0x" + (a >>> 0).toString(16);
}
function map(oper, arr) {
    return arr.map(oper);
}
function max(a) {
    if (Array.isArray(a)) {
        return Math.max.apply(null, a);
    } else {
        return Math.max.apply(null, arguments);
    }
}
function min(a) {
    if (Array.isArray(a)) {
        return Math.min.apply(null, a);
    } else {
        return Math.min.apply(null, arguments);
    }
}
function ՐՏ_merge(target, source, overwrite) {
    for (var i in source) {
        if (source.hasOwnProperty(i) && (overwrite || typeof target[i] === "undefined")) {
            target[i] = source[i];
        }
    }
    for (var i in source.prototype) {
        if (source.prototype.hasOwnProperty(i) && (overwrite || typeof target.prototype[i] === "undefined")) {
            target.prototype[i] = source.prototype[i];
        }
    }
}
function ՐՏ_mixin() {
    var classes = [].slice.call(arguments, 0);
    return function(baseClass) {
        var ՐՏitr3, ՐՏidx3, ՐՏitr4, ՐՏidx4;
        var cls, key;
        ՐՏitr3 = ՐՏ_Iterable(classes);
        for (ՐՏidx3 = 0; ՐՏidx3 < ՐՏitr3.length; ՐՏidx3++) {
            cls = ՐՏitr3[ՐՏidx3];
            ՐՏitr4 = ՐՏ_Iterable(Object.keys(cls.prototype));
            for (ՐՏidx4 = 0; ՐՏidx4 < ՐՏitr4.length; ՐՏidx4++) {
                key = ՐՏitr4[ՐՏidx4];
                if (!(ՐՏ_in(key, baseClass.prototype))) {
                    baseClass.prototype[key] = cls.prototype[key];
                }
            }
        }
        return baseClass;
    };
}
function ՐՏ_print() {
    if (typeof console === "object") {
        console.log.apply(console, arguments);
    }
}
function reduce(f, a) {
    return Array.prototype.reduce.call(a, f);
}
function reversed(arr) {
    var tmp;
    tmp = arr.slice(0);
    return tmp.reverse();
}
function sorted(arr) {
    var tmp;
    tmp = arr.slice(0);
    return tmp.sort();
}
function sum(arr, start) {
    start = start === void 0 ? 0 : start;
    return arr.reduce(function(prev, cur) {
        return prev + cur;
    }, start);
}
function ՐՏ_type(obj) {
    return obj.constructor && obj.constructor.name ? obj.constructor.name : Object.prototype.toString.call(obj).slice(8, -1);
}
function zip(a, b) {
    var i;
    return (function() {
        var ՐՏidx5, ՐՏitr5 = ՐՏ_Iterable(range(Math.min(a.length, b.length))), ՐՏres = [], i;
        for (ՐՏidx5 = 0; ՐՏidx5 < ՐՏitr5.length; ՐՏidx5++) {
            i = ՐՏitr5[ՐՏidx5];
            ՐՏres.push([ a[i], b[i] ]);
        }
        return ՐՏres;
    })();
}
function getattr(obj, name) {
    return obj[name];
}
function setattr(obj, name, value) {
    obj[name] = value;
}
function hasattr(obj, name) {
    return name in obj;
}
function ՐՏ_eq(a, b) {
    var ՐՏitr6, ՐՏidx6;
    var i;
    if (a === b) {
        return true;
    }
    if (Array.isArray(a) && Array.isArray(b) || a instanceof Object && b instanceof Object) {
        if (a.constructor !== b.constructor || a.length !== b.length) {
            return false;
        }
        if (Array.isArray(a)) {
            for (i = 0; i < len(a); i++) {
                if (!ՐՏ_eq(a[i], b[i])) {
                    return false;
                }
            }
        } else {
            if (Object.keys(a).length !== Object.keys(b).length) {
                return false;
            }
            ՐՏitr6 = ՐՏ_Iterable(a);
            for (ՐՏidx6 = 0; ՐՏidx6 < ՐՏitr6.length; ՐՏidx6++) {
                i = ՐՏitr6[ՐՏidx6];
                if (!ՐՏ_eq(a[i], b[i])) {
                    return false;
                }
            }
        }
        return true;
    }
    return false;
}
function kwargs(f) {
    var argNames;
    argNames = f.toString().match(/\(([^\)]+)/)[1];
    if (!kwargs.memo[argNames]) {
        kwargs.memo[argNames] = argNames ? argNames.split(",").map(function(s) {
            return s.trim();
        }) : [];
    }
    argNames = kwargs.memo[argNames];
    return function() {
        var args, kw, i;
        args = [].slice.call(arguments);
        if (args.length) {
            kw = args[args.length-1];
            if (typeof kw === "object") {
                for (i = 0; i < argNames.length; i++) {
                    if (ՐՏ_in(argNames[i], dir(kw))) {
                        args[i] = kw[argNames[i]];
                    }
                }
            } else {
                args.push(kw);
            }
        }
        return f.apply(this, args);
    };
}
kwargs.memo = {};
var AssertionError = (ՐՏ_1 = function AssertionError() {
    AssertionError.prototype.__init__.apply(this, arguments);
}, ՐՏ_extends(ՐՏ_1, Error), Object.defineProperties(ՐՏ_1.prototype, {
    __init__: {
        enumerable: true, 
        writable: true, 
        value: function __init__(message){
            var self = this;
            self.name = "AssertionError";
            self.message = message;
        }
    }
}), ՐՏ_1);
var IndexError = (ՐՏ_2 = function IndexError() {
    IndexError.prototype.__init__.apply(this, arguments);
}, ՐՏ_extends(ՐՏ_2, Error), Object.defineProperties(ՐՏ_2.prototype, {
    __init__: {
        enumerable: true, 
        writable: true, 
        value: function __init__(message){
            var self = this;
            self.name = "IndexError";
            self.message = message;
        }
    }
}), ՐՏ_2);
var KeyError = (ՐՏ_3 = function KeyError() {
    KeyError.prototype.__init__.apply(this, arguments);
}, ՐՏ_extends(ՐՏ_3, Error), Object.defineProperties(ՐՏ_3.prototype, {
    __init__: {
        enumerable: true, 
        writable: true, 
        value: function __init__(message){
            var self = this;
            self.name = "KeyError";
            self.message = message;
        }
    }
}), ՐՏ_3);
var TypeError = (ՐՏ_4 = function TypeError() {
    TypeError.prototype.__init__.apply(this, arguments);
}, ՐՏ_extends(ՐՏ_4, Error), Object.defineProperties(ՐՏ_4.prototype, {
    __init__: {
        enumerable: true, 
        writable: true, 
        value: function __init__(message){
            var self = this;
            self.name = "TypeError";
            self.message = message;
        }
    }
}), ՐՏ_4);
var ValueError = (ՐՏ_5 = function ValueError() {
    ValueError.prototype.__init__.apply(this, arguments);
}, ՐՏ_extends(ՐՏ_5, Error), Object.defineProperties(ՐՏ_5.prototype, {
    __init__: {
        enumerable: true, 
        writable: true, 
        value: function __init__(message){
            var self = this;
            self.name = "ValueError";
            self.message = message;
        }
    }
}), ՐՏ_5);
({
    "abs": function abs(n) {
        return Math.abs(n);
    },
    "all": function all(a) {
        var ՐՏitr7, ՐՏidx7;
        var e;
        ՐՏitr7 = ՐՏ_Iterable(a);
        for (ՐՏidx7 = 0; ՐՏidx7 < ՐՏitr7.length; ՐՏidx7++) {
            e = ՐՏitr7[ՐՏidx7];
            if (!e) {
                return false;
            }
        }
        return true;
    },
    "any": function any(a) {
        var ՐՏitr8, ՐՏidx8;
        var e;
        ՐՏitr8 = ՐՏ_Iterable(a);
        for (ՐՏidx8 = 0; ՐՏidx8 < ՐՏitr8.length; ՐՏidx8++) {
            e = ՐՏitr8[ՐՏidx8];
            if (e) {
                return true;
            }
        }
        return false;
    },
    "bin": function bin(a) {
        return "0b" + (a >>> 0).toString(2);
    },
    "bind": function ՐՏ_bind(fn, thisArg) {
        var fn, ret;
        if (fn.orig) {
            fn = fn.orig;
        }
        if (thisArg === false) {
            return fn;
        }
        ret = function() {
            return fn.apply(thisArg, arguments);
        };
        ret.orig = fn;
        return ret;
    },
    "rebind_all": function ՐՏ_rebindAll(thisArg, rebind) {
        var rebind;
        if (rebind === void 0) {
            rebind = true;
        }
        for (var p in thisArg) {
            if (thisArg[p] && thisArg[p].orig) {
                if (rebind) {
                    thisArg[p] = ՐՏ_bind(thisArg[p], thisArg);
                } else {
                    thisArg[p] = thisArg[p].orig;
                }
            }
        }
    },
    "cmp": function cmp(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    },
    "chr": function() {
        var chr;
        chr = String.fromCharCode;
    },
    "dir": function dir(item) {
        var arr;
        arr = [];
        for (var i in item) {
            arr.push(i);
        }
        return arr;
    },
    "enumerate": function enumerate(item) {
        var arr, iter, i;
        arr = [];
        iter = ՐՏ_Iterable(item);
        for (i = 0; i < iter.length; i++) {
            arr[arr.length] = [ i, item[i] ];
        }
        return arr;
    },
    "eslice": function ՐՏ_eslice(arr, step, start, end) {
        var arr, isString, step, start, end;
        arr = arr.slice(0);
        if (typeof arr === "string" || arr instanceof String) {
            isString = true;
            arr = arr.split("");
        }
        if (step < 0) {
            step = -step;
            arr.reverse();
            if (typeof start !== "undefined") {
                start = arr.length - start - 1;
            }
            if (typeof end !== "undefined") {
                end = arr.length - end - 1;
            }
        }
        if (typeof start === "undefined") {
            start = 0;
        }
        if (typeof end === "undefined") {
            end = arr.length;
        }
        arr = arr.slice(start, end).filter(function(e, i) {
            return i % step === 0;
        });
        return isString ? arr.join("") : arr;
    },
    "extends": function ՐՏ_extends(child, parent) {
        child.prototype = Object.create(parent.prototype);
        child.prototype.__base__ = parent;
        child.prototype.constructor = child;
    },
    "filter": function filter(oper, arr) {
        return arr.filter(oper);
    },
    "hex": function hex(a) {
        return "0x" + (a >>> 0).toString(16);
    },
    "in": function ՐՏ_in(val, arr) {
        if (typeof arr.indexOf === "function") {
            return arr.indexOf(val) !== -1;
        }
        return arr.hasOwnProperty(val);
    },
    "iterable": function ՐՏ_Iterable(iterable) {
        var tmp;
        if (iterable.constructor === [].constructor || iterable.constructor === "".constructor || (tmp = Array.prototype.slice.call(iterable)).length) {
            return tmp || iterable;
        }
        return Object.keys(iterable);
    },
    "len": function len(obj) {
        var tmp;
        if (obj.constructor === [].constructor || obj.constructor === "".constructor || (tmp = Array.prototype.slice.call(obj)).length) {
            return (tmp || obj).length;
        }
        return Object.keys(obj).length;
    },
    "map": function map(oper, arr) {
        return arr.map(oper);
    },
    "max": function max(a) {
        if (Array.isArray(a)) {
            return Math.max.apply(null, a);
        } else {
            return Math.max.apply(null, arguments);
        }
    },
    "min": function min(a) {
        if (Array.isArray(a)) {
            return Math.min.apply(null, a);
        } else {
            return Math.min.apply(null, arguments);
        }
    },
    "merge": function ՐՏ_merge(target, source, overwrite) {
        for (var i in source) {
            if (source.hasOwnProperty(i) && (overwrite || typeof target[i] === "undefined")) {
                target[i] = source[i];
            }
        }
        for (var i in source.prototype) {
            if (source.prototype.hasOwnProperty(i) && (overwrite || typeof target.prototype[i] === "undefined")) {
                target.prototype[i] = source.prototype[i];
            }
        }
    },
    "mixin": function ՐՏ_mixin() {
        var classes = [].slice.call(arguments, 0);
        return function(baseClass) {
            var ՐՏitr9, ՐՏidx9, ՐՏitr10, ՐՏidx10;
            var cls, key;
            ՐՏitr9 = ՐՏ_Iterable(classes);
            for (ՐՏidx9 = 0; ՐՏidx9 < ՐՏitr9.length; ՐՏidx9++) {
                cls = ՐՏitr9[ՐՏidx9];
                ՐՏitr10 = ՐՏ_Iterable(Object.keys(cls.prototype));
                for (ՐՏidx10 = 0; ՐՏidx10 < ՐՏitr10.length; ՐՏidx10++) {
                    key = ՐՏitr10[ՐՏidx10];
                    if (!(ՐՏ_in(key, baseClass.prototype))) {
                        baseClass.prototype[key] = cls.prototype[key];
                    }
                }
            }
            return baseClass;
        };
    },
    "print": function ՐՏ_print() {
        if (typeof console === "object") {
            console.log.apply(console, arguments);
        }
    },
    "range": function range(start, stop, step) {
        var stop, start, step, length, idx, range;
        if (arguments.length <= 1) {
            stop = start || 0;
            start = 0;
        }
        step = arguments[2] || 1;
        length = Math.max(Math.ceil((stop - start) / step), 0);
        idx = 0;
        range = new Array(length);
        while (idx < length) {
            range[idx++] = start;
            start += step;
        }
        return range;
    },
    "reduce": function reduce(f, a) {
        return Array.prototype.reduce.call(a, f);
    },
    "reversed": function reversed(arr) {
        var tmp;
        tmp = arr.slice(0);
        return tmp.reverse();
    },
    "sorted": function sorted(arr) {
        var tmp;
        tmp = arr.slice(0);
        return tmp.sort();
    },
    "sum": function sum(arr, start) {
        start = start === void 0 ? 0 : start;
        return arr.reduce(function(prev, cur) {
            return prev + cur;
        }, start);
    },
    "type": function ՐՏ_type(obj) {
        return obj.constructor && obj.constructor.name ? obj.constructor.name : Object.prototype.toString.call(obj).slice(8, -1);
    },
    "zip": function zip(a, b) {
        var i;
        return (function() {
            var ՐՏidx11, ՐՏitr11 = ՐՏ_Iterable(range(Math.min(a.length, b.length))), ՐՏres = [], i;
            for (ՐՏidx11 = 0; ՐՏidx11 < ՐՏitr11.length; ՐՏidx11++) {
                i = ՐՏitr11[ՐՏidx11];
                ՐՏres.push([ a[i], b[i] ]);
            }
            return ՐՏres;
        })();
    },
    "getattr": function getattr(obj, name) {
        return obj[name];
    },
    "setattr": function setattr(obj, name, value) {
        obj[name] = value;
    },
    "hasattr": function hasattr(obj, name) {
        return name in obj;
    },
    "eq": function ՐՏ_eq(a, b) {
        var ՐՏitr12, ՐՏidx12;
        var i;
        if (a === b) {
            return true;
        }
        if (Array.isArray(a) && Array.isArray(b) || a instanceof Object && b instanceof Object) {
            if (a.constructor !== b.constructor || a.length !== b.length) {
                return false;
            }
            if (Array.isArray(a)) {
                for (i = 0; i < len(a); i++) {
                    if (!ՐՏ_eq(a[i], b[i])) {
                        return false;
                    }
                }
            } else {
                if (Object.keys(a).length !== Object.keys(b).length) {
                    return false;
                }
                ՐՏitr12 = ՐՏ_Iterable(a);
                for (ՐՏidx12 = 0; ՐՏidx12 < ՐՏitr12.length; ՐՏidx12++) {
                    i = ՐՏitr12[ՐՏidx12];
                    if (!ՐՏ_eq(a[i], b[i])) {
                        return false;
                    }
                }
            }
            return true;
        }
        return false;
    },
    "kwargs": function() {
        function kwargs(f) {
            var argNames;
            argNames = f.toString().match(/\(([^\)]+)/)[1];
            if (!kwargs.memo[argNames]) {
                kwargs.memo[argNames] = argNames ? argNames.split(",").map(function(s) {
                    return s.trim();
                }) : [];
            }
            argNames = kwargs.memo[argNames];
            return function() {
                var args, kw, i;
                args = [].slice.call(arguments);
                if (args.length) {
                    kw = args[args.length-1];
                    if (typeof kw === "object") {
                        for (i = 0; i < argNames.length; i++) {
                            if (ՐՏ_in(argNames[i], dir(kw))) {
                                args[i] = kw[argNames[i]];
                            }
                        }
                    } else {
                        args.push(kw);
                    }
                }
                return f.apply(this, args);
            };
        }
        kwargs.memo = {};
    },
    "AssertionError": function() {
        var ՐՏ_6;
        var AssertionError = (ՐՏ_6 = function AssertionError() {
            AssertionError.prototype.__init__.apply(this, arguments);
        }, ՐՏ_extends(ՐՏ_6, Error), Object.defineProperties(ՐՏ_6.prototype, {
            __init__: {
                enumerable: true, 
                writable: true, 
                value: function __init__(message){
                    var self = this;
                    self.name = "AssertionError";
                    self.message = message;
                }
            }
        }), ՐՏ_6);
    },
    "IndexError": function() {
        var ՐՏ_7;
        var IndexError = (ՐՏ_7 = function IndexError() {
            IndexError.prototype.__init__.apply(this, arguments);
        }, ՐՏ_extends(ՐՏ_7, Error), Object.defineProperties(ՐՏ_7.prototype, {
            __init__: {
                enumerable: true, 
                writable: true, 
                value: function __init__(message){
                    var self = this;
                    self.name = "IndexError";
                    self.message = message;
                }
            }
        }), ՐՏ_7);
    },
    "KeyError": function() {
        var ՐՏ_8;
        var KeyError = (ՐՏ_8 = function KeyError() {
            KeyError.prototype.__init__.apply(this, arguments);
        }, ՐՏ_extends(ՐՏ_8, Error), Object.defineProperties(ՐՏ_8.prototype, {
            __init__: {
                enumerable: true, 
                writable: true, 
                value: function __init__(message){
                    var self = this;
                    self.name = "KeyError";
                    self.message = message;
                }
            }
        }), ՐՏ_8);
    },
    "TypeError": function() {
        var ՐՏ_9;
        var TypeError = (ՐՏ_9 = function TypeError() {
            TypeError.prototype.__init__.apply(this, arguments);
        }, ՐՏ_extends(ՐՏ_9, Error), Object.defineProperties(ՐՏ_9.prototype, {
            __init__: {
                enumerable: true, 
                writable: true, 
                value: function __init__(message){
                    var self = this;
                    self.name = "TypeError";
                    self.message = message;
                }
            }
        }), ՐՏ_9);
    },
    "ValueError": function() {
        var ՐՏ_10;
        var ValueError = (ՐՏ_10 = function ValueError() {
            ValueError.prototype.__init__.apply(this, arguments);
        }, ՐՏ_extends(ՐՏ_10, Error), Object.defineProperties(ՐՏ_10.prototype, {
            __init__: {
                enumerable: true, 
                writable: true, 
                value: function __init__(message){
                    var self = this;
                    self.name = "ValueError";
                    self.message = message;
                }
            }
        }), ՐՏ_10);
    }
});