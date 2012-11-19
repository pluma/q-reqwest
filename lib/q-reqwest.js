/*! q-reqwest.js 0.1.1 Copyright (c) 2012 Alan Plum. MIT licensed. */
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

    function _merge() {
        var result = {},
            i, arg, key;
        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            for (key in arg) {
                if (!arg.hasOwnProperty(key)) {
                    continue;
                }
                result[key] = arg[key];
            }
        }
        return result;
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
        reqwest(_merge(defaults, config));
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
