function main(commands) {
    let carMaintainer = (() => {
        let constructor = {
            objectsList: {}
        }
        let modifierBuilder = (state) => ({
            create: function(name) {
                state.objectsList[name] = {}
            },
            createInherit: function(name, parentName) {
                state.objectsList[name] = Object.create(state.objectsList(parentName));
            },
            set: function(name, key, value) {
                let currObject = state.objectsList[name];
                currObject[key] = value; 
            },
            print: function(name) {
                let objectToPrint = state.objectsList[name];
                let propsList = Object.entries(objectToPrint);
                let output = [];
                for(const [key,value] of propsList) {
                    output.push(`${key}:${value}`);
                } 
                console.log(output.join(","));
            } 
        });
        return Object.assign(constructor, modifierBuilder(constructor));
    })();
    for(let i = 0; i < commands.length; i++) {
        let command = commands[i].split(" ");

        if(command[0] == "create") {
            if(command.length == 4) {
                carMaintainer.createInherit(command[1], command[3]);
            } else {
                carMaintainer.create(command[1]);
            }
        }
        else if(command[0] == "set") {
            carMaintainer.set(command[1], command[2], command[3]);
        }
        else {
            carMaintainer.print(command[1]);
        }
    }

}



main(['create c1', 
'create c2 inherit c1', 
'set c1 color red', 
'set c2 model new', 
'print c1', 
'print c2'])
