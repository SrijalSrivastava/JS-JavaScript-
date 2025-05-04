// Curring :
// It is a Special type of method that breaks into a simple and form a chain and it takes a one value.
function app(a){
    return function cpp(b){
        return function kpp(c){
            return a+b+c;
        }
    }
}

const d = app(2)(3)(4);
console.log(d);