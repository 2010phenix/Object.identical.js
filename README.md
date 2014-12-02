Object.identical()
==================

`Object.identical()` determines whether two given arguments are "identical," meaning the arguments are:

* Both objects having all the same properties with property values that are "identical", *or*
* Both arrays having all "identical" elements, *or*
* Primitives that are `===` to one another

**Notes**

* MIT-licensed. Take, improve, redistribute, repeat.
* `JSON.stringify()` is required to be defined.

**Objects**

Objects must have all the same properties with "identical" values:

    Object.identical({ x: 19, y: 83 }, { x: 19, y: 83 }); // true
    Object.identical({ x: 19, y: 83 }, { x: 19, y: 33 }); // false
    
In JavaScript, object members are not ordered:

    var oldClient = { id: 0, name: "Farah" }
        newClient = { name: "Farah", id: 0 };

    Object.identical(oldClient, newClient); // true    
        
**Arrays**

Arrays, as a data structure, are by definition ordered. Therefore, with arrays, element order matters by default:

    Object.identical([1, 2], [1, 2])); // true
    Object.identical([1, 2], [2, 1])); // false
    
To compare arrays irrespective of element order, set the third argument to `true`:
    
    var desc = [2, 1],
        asc  = [1, 2];
    
    Object.identical(desc, asc);       // false
    Object.identical(desc, asc, true); // true
 
This also applies to arrays in objects:
 
    desc = { foo: { bar: [3, 2, 1] }, key: "Chris" };
    asc  = { foo: { bar: [1, 2, 3] }, key: "Chris" };

    Object.identical(desc, asc);       // false
    Object.identical(desc, asc, true); // true
    
**Primitives**

When comparing `string`, `number`, `boolean`, `null`, and `undefined` values, the result is the same
as using the strict equals (`===`) operator:
        
    Object.identical(1, "1"));           // false (no truthy for numbers <-> strings)
    Object.identical(0.25, 1/4));        // true (numbers are numbers, however they're written)
    Object.identical(false, undefined);  // false (no truthy for booleans <-> undefined)
    Object.identical(null, null);        // true (null === null)
