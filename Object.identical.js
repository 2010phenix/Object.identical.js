/*
    Original script title: Object.identical.js, v1.0
    Copyright (c) 2011, Chris O'Brien, prettycode.org
    http://github.com/prettycode/Object.identical.js

    LICENSE: Permission is hereby granted for unrestricted use,
    modification, and redistribution of this script, ONLY under
    the condition that this code comment is kept wholly complete,
    appearing above the script's code body--in all original or
    modified implementations of this script, except those that
    are minified.
*/

Object.identical = function (a, b, ignoreOrder) {
    
    function sort(o) {
        
        if (Array.isArray(o)) {
            return o.sort();
        }
        else if (typeof o === "object") {
            return Object.keys(o).sort().map(function(key) {
                return sort(o[key]);
            });
        }
        
        return o;
    }
    
    if (ignoreOrder === true) {
        a = sort(a);
        b = sort(b);
    }
    
    return JSON.stringify(a) === JSON.stringify(b);
}