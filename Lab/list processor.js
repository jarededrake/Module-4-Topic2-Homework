function main(commandsArray) {
    let commandObject = (function() {
        let parts = {
            collection:[]
        }
        let addCommands = (state) => ({
            add: function(string) {
                state.collection.push(string);
            },
            remove:function(string) {
                while(state.collection.indexOf(string) != -1) {
                state.collection.splice(state.collection.indexOf(string), 1);
                }
            },
            print:function() {
                console.log(state.collection.join(","))
            }
        });
        return Object.assign(parts, addCommands(parts));
    })();
    for(let i = 0; i < commandsArray.length; i++) {
        let command = commandsArray[i].split(" ");

        switch(command[0]) {
            case "add":
                commandObject.add(command[1]);
                break;
            case "remove":
                commandObject.remove(command[1]);
                break;
            case "print":
                commandObject.print();
                break;
        }
    }
}





main(['add hello', 'add again', 'remove hello', 'add again', 'print']); 