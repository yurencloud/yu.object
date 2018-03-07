'use strict';
/**
 * object
 * @description 封装object对象
 * @author mack wang
 * @website yurencloud.com
 */

var object = {};

/*
* 合并对象属性
* @param ...Object 一个或多个对象
* */
object.assign = function (target) {
    'use strict';
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source != null) {
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
    }
    return target;
};

object.isEmpty = function (obj) {
    return JSON.stringify(obj) === '{}';
};

module.exports = object;
