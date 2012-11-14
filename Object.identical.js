/*
    Original script title: "Object.identical.js"; version 1.12
    Copyright (c) 2011, Chris O'Brien, prettycode.org
    http://github.com/prettycode/Object.identical.js
*/

Object.identical = function (a, b, sortArrays) {
  
    /* Requires ECMAScript 5 functions:
           - Array.isArray()
           - Object.keys()
           - Array.prototype.forEach()
           - JSON.stringify()
    */
  
    function sort(object) {
        
        if (sortArrays === true && Array.isArray(object)) {
            return object.sort();
        }
        else if (typeof object !== "object" || object === null) {
            return object;
        }
        
        var result = [];
        
        Object.keys(object).sort().forEach(function(key) {
            result.push({
                key: key,
                value: sort(object[key])
            });
        });
        
        return result; 
    }
    
    return JSON.stringify(sort(a)) === JSON.stringify(sort(b));
};