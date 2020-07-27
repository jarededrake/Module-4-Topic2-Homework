function main(rectanglesArray) {
let rectObjectArray = rectanglesArray.map((rectDem) => {
    let calcArea = (state) => ({
        area:function() {
            return state.width * state.height;
        },
        compareTo:(other) => {
            if(other.area() > state.area()) {
                return -1;
            }
            else if(state.area() > other.area()) {
                return 1;
            }
            return 0;
        }
    });
    let rectObj = {
        width:rectDem[0],
        height:rectDem[1],
    };
    let resultObj = Object.assign(rectObj, calcArea(rectObj));
    return resultObj;
});
let sorted = rectObjectArray.sort((a, b) => {
    let result = b.compareTo(a);
    if(result == 0) {
        return b.width - a.width;
    }
    return result;
});
console.log(sorted);
}
main([[10, 5], [5, 12]]);