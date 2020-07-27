function main(car) {
    let newCarObject = {model: car.model}

    if(car.power <= 90) {
        newCarObject.engine = {
            power: 90,
            volume: 1800
        }
    } else if(car.power > 90 && car.power <= 120) {
        newCarObject.engine = {
            power: 120,
            volume: 2400,
        }
    } else {
        newCarObject.engine = {
            power: 200,
            volume: 3500,
        }
    }
    newCarObject.carriage = {
        type: car.carriage,
        color: car.color,
    }
    let wheelSize = car.wheelsize;
    if(car.wheelsize % 2 == 0) {
        wheelSize -= 1;
    }
    newCarObject.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];
    
    return newCarObject;
}




let car = { model: 'VW Golf II', 
power: 90,
color: 'blue', 
carriage: 'hatchback', 
wheelsize: 14 }