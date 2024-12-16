import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML =  await FoodTruck()
}

document.addEventListener("newPurchase", customEvent => {
    console.log("Data has changed. Regenerating HTML...")
    renderAllHTML()
})


renderAllHTML()

