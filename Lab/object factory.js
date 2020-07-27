function main(inputString) {
    let objectArry = JSON.parse(inputString);

    const concatenate = (a, o) => ({...a, ...o});
    const c = objectArry.reduce(concatenate, {});

    console.log(c)
}



main(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`)
