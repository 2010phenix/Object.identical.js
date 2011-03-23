/*
    Original script title: Object.identical.js, v1.1
    Copyright (c) 2011, Chris O'Brien, prettycode.org
    http://github.com/prettycode/Object.identical.js

    LICENSE: Permission is hereby granted for unrestricted use,
    modification, and redistribution of this script, ONLY under
    the condition that this code comment is kept wholly complete,
    appearing above the script's code body--in all original or
    modified implementations of this script, except those that
    are minified.
*/

Object.$identical = function (a, b, sortArrays) {
  
    // requires ECMAScript5 Array.isArray(), Object.keys(), and Array.prototype.forEach()
  
    function sort(o) {
        
        if (sortArrays === true && Array.isArray(o)) {
            return o.sort();
        }
        else if (typeof o !== "object") {
            return o;
        }
        
        var result = {};
        
        Object.keys(o).sort().forEach(function(key) {
            result[key] = sort(o[key]);
        });
        
        return result;
    }
    
    return JSON.stringify(sort(a)) === JSON.stringify(sort(b));
}