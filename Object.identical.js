/*
    Original script title/version: Object.identical.js/1.11
    Copyright (c) 2011, Chris O'Brien, prettycode.org
    http://github.com/prettycode/Object.identical.js

    LICENSE: Permission is hereby granted for unrestricted use, modification, and redistribution of this script, ONLY
    under the condition that this code comment is kept wholly complete, appearing above the script's code body--in all
    original or modified implementations of this script, except those that are minified.
*/

Object.identical = function (a, b, sortArrays) {
  
    /* Requires ECMAScript 5 functions:
           - Array.isArray()
           - Object.keys()
           - Array.prototype.forEach()
           - JSON.stringify()
    */
  
    function sort(o) {
        
        if (sortArrays === true && Array.isArray(o)) {
            return o.sort();
        }
        else if (typeof o !== "object" || o === null) {
            return o;
        }
        
        var result = {};
        
        Object.keys(o).sort().forEach(function(key) {
            result[key] = sort(o[key]);
        });
        
        return result;
    }
    
    return JSON.stringify(sort(a)) === JSON.stringify(sort(b));
};