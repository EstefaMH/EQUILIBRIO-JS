class Costs {
    

    myList = new Array();
    
    constructor(type, name, value) {
        this.type = type;
        this.name = name;
        this.value = value;
        
    }


    add(id) {
        console.log("dddd");

        let newCostName = prompt("Nombre del costo : ")
    
        const addLabel = document.createElement("label");
        addLabel.innerText = newCostName;
    
        const addInput = document.createElement("input");
        addInput.setAttribute("type", "number");
        addInput.setAttribute("class", "costs");
    
        addLabel.appendChild(addInput);
    
        const container = document.getElementById(id);
        container.insertAdjacentElement("afterbegin", addLabel);
    
        newCost = new Costs(id,newCostName,1000);
        myList.push(Costs);
    }
}