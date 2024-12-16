const transientState = {
    "id": 0,
    "entreeId": 0,
    "vegetableId": 0,
    "sideId": 0
}

export const setEntreeChoice = (chosenEntree) => {
    transientState.entreeId = chosenEntree
    console.log(transientState)
}

export const setVegetableChoice = (chosenVegetable) => {
    transientState.vegetableId = chosenVegetable
    console.log(transientState)
}

export const setSideChoice = (chosenSide) => {
    transientState.sideId = chosenSide
    console.log(transientState)
}

export const purchaseOrder = async () => {

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/purchases", postOptions)

    const customEvent = new CustomEvent("newPurchase")
    document.dispatchEvent(customEvent)
}