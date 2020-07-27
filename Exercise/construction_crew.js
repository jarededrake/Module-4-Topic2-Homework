function main(workerObject) {
    if(workerObject.dizziness) { 
    workerObject.levelOfHydrated += (.1 * workerObject.weight * workerObject.experience);
    workerObject.dizziness = false;
    }
    return workerObject;
}

let workerObject = {
    weight: 80,
    experience: 1, 
    levelOfHydrated: 0,
    dizziness: true
}