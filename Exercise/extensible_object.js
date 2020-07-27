function main() {

    
return myObj = {
    __proto__: {},
    extend: function(object) {
        for(const [key, value] of Object.entries(object)) {
            (this)[key] = value;
            }
        }
    }
}

object = {
    __proto__: {},
    extend: function(object) {
        for(const [key, value] of Object.entries(object)) {
            (this)[key] = value;
            }
        }
    }

let anyObject = {
    color: "blue",
    genger: "male",
    function: function() {return 1}
}
let extensible = main()
console.log(extensible);
extensible.extend(anyObject);
console.log(extensible);
console.log(extensible.function());

object.extend(anyObject); 
console.log(object);
