Object.identical()
===================

Preface
-------

Note that this script requires ECMAScript 5 functions:

* Array.isArray()
* Object.keys()
* Array.prototype.forEach()
* JSON.stringify()
    
The script does not create these functions if they do not exist. It simply fails. You should be using a script that
creates them when they are not defined.

If you do not know whether your browser supports these ECMAScript5 functions above, please see
http://kangax.github.com/es5-compat-table/.

Overview
--------

`Object.identical()` determines whether two objects are "identical" or not, meaning they have the same (`===`) values
and/or property values:

    Object.identical(a, b, sortArrays); // sortArrays is falsey-false by default.

In order for `identical()` to return `true` with no `sortArrays` set to `true`, `a` and `b`
arguments must both be one of three three following:

    a) a `string`, `boolean`, or 'number` type, and `a === b`
    b) an `array` object, and have the same element values in the same order
    c) an `object` type, and a), b), and./or c) are true for all its properties values, irrespective
       of property name order
       
When `sortArrays` set to `true`, all the rules above apply, but rule b) is irrespective of element
order, while by default, elements must be in the same order.

Examples
--------

For example, with objects:

    var a = { x: "a", y: "b" },
        b = { x: "a", y: "b" },
        c = { y: "b", x: "a" },
        d = { x: "Chris", y: "Prettycode.org", developerYears: [1994, 2011] },
        e = { y: "Prettycode.org", developerYears: [1994, 2011], x: "Chris" };
        f = { y: "Prettycode.org", developerYears: [2011, 1994], x: "Chris" };
         
    console.log(Object.identical(a, b)); // true (same properties and same property values)
    console.log(Object.identical(a, c)); // true (object property order does not matter, simple)
    console.log(Object.identical(d, e)); // true (object property order does not matter, complex)
    console.log(Object.identical(d, f)); // false (arrays are, by definition, ordered)
    
When `a` and `b` are `string`, `number`, or `boolean` types, `identical()` will return the same
result as using the `===` operator:

    var a = "1",
        b = 1;
        c = 1.0;
        
    console.log(Object.identical(a, b)); // false (no truthy for numbers <-> strings
    console.log(Object.identical(b, c)); // true (truthy for int <-> float)
    
When using `identical()` with arrays, element order matters:

    var a = [1, 2],
        b = [1, 2],
        c = [2, 1];
        
    console.log(Object.identical(a, b)); // true
    console.log(Object.identical(a, c)); // false
    
To compare arrays or objects with array members irrespective of element order, set the `sortArrays`
argument to `true`:

    var a = [1, 2],
        b = [2, 1];
    
    console.log(Object.identical(a, b, true)); // true
    console.log(Object.identical(a, b, true)); // true
    
    var x = { list: [3, 2, 1], key: "Chris" },
        y = { key: "Chris", list: [1, 2, 3] };

    console.log(Object.identical(x, y));       // false
    console.log(Object.identical(x, y, true)); // true