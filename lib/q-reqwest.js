/*! q-reqwest.js 0.1.3 Original author Alan Plum <me@pluma.io>. Released into the Public Domain under the UNLICENSE. @preserve */
(function(root, factory) {
    if (typeof exports === 'object') {
        factory(exports, require('q'), require('reqwest'));
    } else if (typeof define === 'function' && define.amd) {
        define(['exports', 'q', 'reqwest'], factory);
    } else {
        factory((root.Q.reqwest = {}), root.Q, root.reqwest);
    }
}(this, function(exports, Q, reqwest) {
    "use strict";
    var defaults = {};
    function extend(obj) {
        var args = Array.prototype.slice.call(arguments, 1);
        args.forEach(function(src) {
            Object.keys(src).forEach(function(key) {
                obj[key] = src[key];
            });
        });
        return obj;
    }

    function ajax(config) {
        var d = Q.defer();
        if (typeof config === 'string') {
            config = {url: config};
        }
        config.success = function() {
            d.resolve.apply(d, arguments);
        };
        config.error = function() {
            d.reject.apply(d, arguments);
        };
        reqwest(extend({}, defaults, config));
        return d.promise;
    }

    function _ajax(method) {
        return function(config) {
            if (typeof config === 'string') {
                config = {url: config};
            }
            config.method = method;
            return ajax(config);
        };
    }

    exports.ajax = ajax;
    exports.get = _ajax('get');
    exports.post = _ajax('post');
    exports.put = _ajax('put');
    exports.del = _ajax('delete');
    exports.patch = _ajax('patch');
    exports.defaults = defaults;
}));
