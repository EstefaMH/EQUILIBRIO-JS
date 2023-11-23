myList = new Array();

function addCost(id) {

    let newCostName;
    do {
        newCostName = prompt("Nombre del costo : ")

        console.log(newCostName);

        if (newCostName == "") {
            alert("Completa la información");
        }

    } while (newCostName == "");

    if (newCostName != null) {
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

}

function submitFormCosts() {

    let cost = new Costs();

    let form = new FormData(form_costs)

    const jsonData = {};

    form.forEach((value, key) => {
        jsonData[key] = value;

        myList.push({ "type": cost.name = "tipo", "name": cost.name = key, "value": cost.value = value })
        console.log(myList);
    });

    let totalCosts = calculateCosts();
    let getUnitaryCostPrice = unitaryCostPrice(totalCosts, 10);
    let getUnitarySalesPrice = unitarySalesPrice(totalCosts, 10, 100);

    alert("\nsus costos totales son : " + totalCosts + "\nel costo unitario es : " + getUnitaryCostPrice + "\nel precio de venta es : " + getUnitarySalesPrice);
    return jsonData;
}


function calculateCosts() {

    let SUM_COSTS = 0;

    for (var i = 0; i < myList.length; i++) {
        console.log(myList[i]);
        SUM_COSTS = SUM_COSTS + parseInt(myList[i].value);
    }
    return SUM_COSTS;
}

function unitaryCostPrice(totalCosts, units = 10) {
    return totalCosts / units;
}


function unitarySalesPrice(totalCosts, units, profitMargin) {
    return ((totalCosts * (profitMargin / 100)) + totalCosts) / units;
}

/**
 * 
 * @param {*} fixedCosts 
 * @param {*} variableCosts 
 * @param {*} units 
 * @returns 
 */

function calculate_balance_money(fixedCosts, variableCosts, units) {

    let balance = fixedCosts / (variableCosts / units) - 1;

    return balance;
}