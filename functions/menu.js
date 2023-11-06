myList = new Array();

function addCost(id) {

    let newCostName = prompt("Nombre del costo : ")

    const addLabel = document.createElement("label");
    addLabel.innerText = newCostName;

    const container = document.getElementById(id);
    let inputClass = container.className;
    console.log(inputClass)

    const addInput = document.createElement("input");
    addInput.setAttribute("type", "number");
   
    addInput.setAttribute("name", newCostName);
    addInput.setAttribute("required", true);

    addLabel.appendChild(addInput);

   
    container.insertAdjacentElement("afterbegin", addInput);

    

}

function submitFormCosts() {

    let form = new FormData(form_costs)

    const jsonData = {}; 

    form.forEach((value, key) => { 
        jsonData[key] = value;
        myList.push({"name":key,"value":value})
    });

    calculate_costs();
    
    return jsonData;
}


function calculate_costs() {
    
    let SUM_COSTS = 0;

    for (var i = 0; i < myList.length; i++) {
        SUM_COSTS = SUM_COSTS + parseInt(myList[i].value) ;
    }

    alert(SUM_COSTS)
    return SUM_COSTS;
}

function menubar() {

    var opt = document.getElementById("opt_select").value;

    switch (opt) {
        case "1":

            break;

        case "2":

            break;

        default:
            break;
    };
}

