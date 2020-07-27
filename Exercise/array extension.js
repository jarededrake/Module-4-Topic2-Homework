function main() {
    Array.prototype.last = function() {
        const index = this.length - 1;
        return this[index]; //this line pulls out the last element of the array
    }
    Array.prototype.skip = function(n) {
        return this.slice(n)
    }
    Array.prototype.take = function(n) {
        return this.slice(0,n);
    }
    Array.prototype.sum = function() {
        let reduced = this.reduce((a,b) => {
            return a + b;
        }, 0)
        return reduced;
    }
    Array.prototype.average = function() {
        return this.sum() / this.length;
    }
    // let myArray = [1,2,3,4,5];
    // console.log(myArray.average());
}
main()